import { NextResponse } from 'next/server';

export async function GET() {
  const token = process.env.PRIVATE_GITHUB_ACCESS_TOKEN;

  try {
    const response = await fetch(`https://api.github.com/users/John1Souza/repos?page=1&per_page=100`, {
      headers: {
        'Authorization': `token ${token}`,
        'Accept': 'application/vnd.github.v3+json'
      }
    });

    const data = await response.json();
    return NextResponse.json(data);
  } catch {
    return NextResponse.json(
      { error: 'Failed to fetch GitHub repos' },
      { status: 500 }
    );
  }
}
