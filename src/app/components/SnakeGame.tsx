'use client';

import { useCallback, useEffect, useRef, useState } from 'react';
import { useTranslation } from "react-i18next";

export default function SnakeGame() {
  const { t } = useTranslation();
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [isPaused, setIsPaused] = useState(false);
  const [snake, setSnake] = useState([{ x: 10, y: 10 }]); // Estado inicial da cobra (centro da grade)
  const [food, setFood] = useState({
    x: Math.floor(Math.random() * 20),
    y: Math.floor(Math.random() * 20),
  });
  const [gameOver, setGameOver] = useState(false);
  const [score, setScore] = useState(0); // Contador de pontos
  const lastDirection = useRef({ dx: 0, dy: 0 }); // Última direção válida
  const [speed, setSpeed] = useState(200); // Velocidade inicial da cobra (em ms)

  const gridSize = 20;
  const tileCount = 20; // Canvas de 400x400 dividido em 20x20 células

  // Função para reiniciar o jogo
  const resetGame = () => {
    setSnake([{ x: 10, y: 10 }]); // Cobra no centro
    setFood({
      x: Math.floor(Math.random() * tileCount),
      y: Math.floor(Math.random() * tileCount),
    });
    setGameOver(false);
    setIsPaused(false);
    setScore(0);
    setSpeed(200); // Reinicia a velocidade
  };

  // Capturar comandos do teclado para mudar a direção da cobra
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (gameOver) return;

      const key = event.key.toLowerCase();
      let newDx = lastDirection.current.dx;
      let newDy = lastDirection.current.dy;

      switch (key) {
        case 'w':
          if (lastDirection.current.dy === 0) {
            newDx = 0;
            newDy = -1;
          }
          break;
        case 's':
          if (lastDirection.current.dy === 0) {
            newDx = 0;
            newDy = 1;
          }
          break;
        case 'a':
          if (lastDirection.current.dx === 0) {
            newDx = -1;
            newDy = 0;
          }
          break;
        case 'd':
          if (lastDirection.current.dx === 0) {
            newDx = 1;
            newDy = 0;
          }
          break;
        case 'p':
          setIsPaused(true);
          return;
        case 'r':
          setIsPaused(false);
          return;
      }

      // Atualiza a direção da cobra
      if (newDx !== lastDirection.current.dx || newDy !== lastDirection.current.dy) {
        lastDirection.current = { dx: newDx, dy: newDy };
      }
    };

    document.addEventListener('keydown', handleKeyDown);

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [isPaused, gameOver]);

  // Efeito para mover a cobra automaticamente em intervalos regulares
  const moveSnake = useCallback(() => {
    if (gameOver || isPaused) return;
    const newDx = lastDirection.current.dx;
    const newDy = lastDirection.current.dy;
    const head = {
      x: snake[0].x + newDx,
      y: snake[0].y + newDy
    };
  
    // Colisão com as bordas
    if (head.x < 0 || head.x >= tileCount || head.y < 0 || head.y >= tileCount) {
      setGameOver(true);
      return;
    }
  
    // Colisão com o corpo
    for (let i = 1; i < snake.length; i++) {
      if (head.x === snake[i].x && head.y === snake[i].y) {
        setGameOver(true);
        return;
      }
    }
  
    // Comeu a comida
    if (head.x === food.x && head.y === food.y) {
      setFood({
        x: Math.floor(Math.random() * tileCount),
        y: Math.floor(Math.random() * tileCount)
      });
      setScore(prev => prev + 1);
  
      if ((score + 1) % 5 === 0) {
        setSpeed(prev => Math.max(50, prev - 20));
      }
  
      setSnake([head, ...snake]);
    } else {
      setSnake([head, ...snake.slice(0, -1)]);
    }
  }, [snake, food, score, gameOver, isPaused, tileCount]);
  
  useEffect(() => {
    if (gameOver) return; 
    const intervalId = setInterval(moveSnake, speed);
    return () => clearInterval(intervalId);
  }, [moveSnake, speed, gameOver]);
  

  // Desenhar o jogo
  useEffect(() => {
    const canvas = canvasRef.current!;
    const ctx = canvas.getContext('2d')!;

    // Fundo do canvas
    ctx.fillStyle = '#90A1B9';
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    // Desenhar a comida
    ctx.fillStyle = 'rgba(255, 0, 0, 0.8)';
    ctx.beginPath();
    ctx.arc(food.x * gridSize + gridSize / 2, food.y * gridSize + gridSize / 2, gridSize / 2 - 2, 0, Math.PI * 2);
    ctx.fill();

    // Desenhar a cobra
    const snakeGradient = ctx.createLinearGradient(0, 0, 0, gridSize);
    snakeGradient.addColorStop(0, '#00ff00');
    snakeGradient.addColorStop(1, '#00cc00');
    ctx.fillStyle = snakeGradient;
    snake.forEach((segment, index) => {
      ctx.fillRect(segment.x * gridSize, segment.y * gridSize, gridSize - 2, gridSize - 2);
      if (index === 0) { // Desenhar olhos na cabeça
        ctx.fillStyle = 'white';
        ctx.beginPath();
        ctx.arc(segment.x * gridSize + gridSize / 4, segment.y * gridSize + gridSize / 4, 2, 0, Math.PI * 2);
        ctx.arc(segment.x * gridSize + 3 * gridSize / 4, segment.y * gridSize + gridSize / 4, 2, 0, Math.PI * 2);
        ctx.fill();
      }
    });

    // Animação de Game Over
    if (gameOver) {
      ctx.fillStyle = 'rgba(255, 0, 0, 0.7)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      ctx.fillStyle = 'white';
      ctx.font = '30px Arial';
      ctx.textAlign = 'center';
      ctx.fillText('Game Over!', canvas.width / 2, canvas.height / 2);
    }
  }, [snake, food, gameOver]);

  return (
    <div className="flex flex-col items-center md:justify-center bg-slate-800">
      <div className="py-4 px-2 rounded-lg shadow-lg">
        <p className="text-indigo-200 text-xl mb-2">{t('score')} {score}</p>
        <canvas
          ref={canvasRef}
          width={400}
          height={400}
          className="border-2 border-slate-500 rounded bg-slate-400"
        />
      </div>
      <div className="mt-4 flex space-x-4">
        <button
          onClick={() => setIsPaused(!isPaused)}
          className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition"
        >
          {isPaused ? t('resume') : t('pause')}
        </button>
        {gameOver && (
          <button
            onClick={resetGame}
            className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600 transition"
          >
            {t('restart')}
          </button>
        )}
      </div>
    </div>
  );
}
