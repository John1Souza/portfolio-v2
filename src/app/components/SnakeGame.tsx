'use client';

import { useEffect, useRef, useState } from 'react';

export default function SnakeGame() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [isPaused, setIsPaused] = useState(false);
  const [snake, setSnake] = useState([{ x: 10, y: 10 }]); // Estado da cobra
  const [food, setFood] = useState({
    x: Math.floor(Math.random() * 20),
    y: Math.floor(Math.random() * 20),
  });
  const [gameOver, setGameOver] = useState(false);
  const [dx, setDx] = useState(0); // Direção horizontal (temporária para cada movimento)
  const [dy, setDy] = useState(0); // Direção vertical (temporária para cada movimento)
  const [score, setScore] = useState(0); // Contador de pontos
  const lastDirection = useRef({ dx: 0, dy: 0 }); // Para rastrear a última direção válida

  const gridSize = 20;
  const tileCount = 20; // Canvas de 400x400 dividido em 20x20 células

  // Função para mover a cobra uma célula por vez
  const moveSnake = (newDx: number, newDy: number) => {
    if (gameOver || isPaused) return;

    // Verifica se o movimento é na direção oposta imediata (previne movimento inválido)
    if ((lastDirection.current.dx === 1 && newDx === -1) || // Direita para esquerda
        (lastDirection.current.dx === -1 && newDx === 1) || // Esquerda para direita
        (lastDirection.current.dy === 1 && newDy === -1) || // Baixo para cima
        (lastDirection.current.dy === -1 && newDy === 1)) { // Cima para baixo
      return; // Ignora o movimento oposto imediato
    }

    const head = { x: snake[0].x + newDx, y: snake[0].y + newDy };
    
    // Verifica colisão com bordas
    if (head.x < 0 || head.x >= tileCount || head.y < 0 || head.y >= tileCount) {
      setGameOver(true);
      return; // Não alertamos imediatamente para manter a animação
    }

    // Verifica colisão com o corpo, ignorando o segmento imediatamente atrás da cabeça
    for (let i = 2; i < snake.length; i++) { // Começa do terceiro segmento (índice 2)
      if (head.x === snake[i].x && head.y === snake[i].y) {
        setGameOver(true);
        return; // Não alertamos imediatamente para manter a animação
      }
    }

    // Verifica colisão com comida
    if (head.x === food.x && head.y === food.y) {
      setFood({
        x: Math.floor(Math.random() * tileCount),
        y: Math.floor(Math.random() * tileCount),
      });
      setScore(score + 1); // Incrementa o contador de pontos
      // A cobra cresce, mas não remove o último segmento
      setSnake([head, ...snake]);
    } else {
      // Move a cobra, removendo o último segmento
      setSnake([head, ...snake.slice(0, -1)]);
    }

    // Atualiza a última direção válida
    lastDirection.current = { dx: newDx, dy: newDy };
    // Resetar direção atual após o movimento
    setDx(0);
    setDy(0);
  };

  // Capturar comandos do teclado para mover a cobra diretamente
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (gameOver || isPaused) return;

      const key = event.key.toLowerCase();
      let newDx = dx;
      let newDy = dy;

      switch (key) {
        case 'w': // Cima
          if (dy === 0) { newDx = 0; newDy = -1; }
          break;
        case 's': // Baixo
          if (dy === 0) { newDx = 0; newDy = 1; }
          break;
        case 'a': // Esquerda
          if (dx === 0) { newDx = -1; newDy = 0; }
          break;
        case 'd': // Direita
          if (dx === 0) { newDx = 1; newDy = 0; }
          break;
        case 'p': // Pausar
          setIsPaused(true);
          break;
        case 'r': // Retomar
          setIsPaused(false);
          break;
      }

      if (newDx !== dx || newDy !== dy) {
        setDx(newDx);
        setDy(newDy);
        moveSnake(newDx, newDy); // Move a cobra imediatamente uma célula
      }
    };

    document.addEventListener('keydown', handleKeyDown);

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [dx, dy, isPaused, gameOver, snake]);

  // Desenhar o jogo com melhorias visuais
  useEffect(() => {
    const canvas = canvasRef.current!;
    const ctx = canvas.getContext('2d')!;

    // Fundo gradiente para o canvas
    const gradient = ctx.createLinearGradient(0, 0, 0, canvas.height);
    gradient.addColorStop(0, '#1a1a1a');
    gradient.addColorStop(1, '#2d2d2d');
    ctx.fillStyle = '#90A1B9';
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    // Desenhar a comida com animação (piscar)
    ctx.fillStyle = 'rgba(255, 0, 0, 0.8)';
    ctx.beginPath();
    ctx.arc(food.x * gridSize + gridSize / 2, food.y * gridSize + gridSize / 2, gridSize / 2 - 2, 0, Math.PI * 2);
    ctx.fill();

    // Desenhar a cobra com gradiente
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

    // Animação de Game Over (se aplicável)
    if (gameOver) {
      ctx.fillStyle = 'rgba(255, 0, 0, 0.7)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      ctx.fillStyle = 'white';
      ctx.font = '30px Arial';
      ctx.textAlign = 'center';
      ctx.fillText('Game Over!', canvas.width / 2, canvas.height / 2);
    }
  }, [snake, food, gameOver]);

  // Efeito para piscar a comida (opcional, animação simples)
  useEffect(() => {
    let animationFrameId: number;
    let opacity = 0.8;

    const animateFood = () => {
      if (!gameOver && !isPaused) {
        opacity = opacity === 0.8 ? 0.5 : 0.8;
        setFood(prev => ({ ...prev })); // Força re-render para atualizar a opacidade
      }
      animationFrameId = requestAnimationFrame(animateFood);
    };

    animationFrameId = requestAnimationFrame(animateFood);

    return () => cancelAnimationFrame(animationFrameId);
  }, [gameOver, isPaused]);

  return (
    <div className="flex flex-col items-center justify-center bg-slate-800">
      <div className="py-4 px-2 rounded-lg shadow-lg">
        <p className="text-indigo-200 text-xl mb-2">Score: {score}</p>
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
          {isPaused ? 'Retomar' : 'Pausar'}
        </button>
        {gameOver && (
          <button
            onClick={() => {
              setSnake([{ x: 10, y: 10 }]);
              setFood({ x: Math.floor(Math.random() * tileCount), y: Math.floor(Math.random() * tileCount) });
              setDx(0);
              setDy(0);
              setGameOver(false);
              setIsPaused(false);
              setScore(0);
            }}
            className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600 transition"
          >
            Reiniciar
          </button>
        )}
      </div>
    </div>
  );
}