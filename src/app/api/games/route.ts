import { NextRequest, NextResponse } from 'next/server';

type Game = {
    id: string;
    genre: string;
    image: string;
    name: string;
    description: string;
    price: number;
    isNew: boolean;
  };

const games: Game[] = [
  { id: '1', genre: 'Battle Royale', image: '/assets/apex.jpeg', name: 'Apex', description: 'Description 1', price: 10, isNew: true },
  { id: '2', genre: 'RPG', image: '/assets/codwz.jpeg', name: 'Game 2', description: 'Description 2', price: 20, isNew: false },
  { id: '3', genre: 'Action', image: '/assets/counter-strike.jpg', name: 'Game 3', description: 'Description 3', price: 30, isNew: true },
];

export async function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url);
  const genre = searchParams.get('genre') || 'All';
  const page = parseInt(searchParams.get('page') || '1', 10);
  const pageSize = 10; // Número de juegos por página

  // Filtrar juegos por género
  const filteredGames = genre === 'All' ? games : games.filter(game => game.genre === genre);

  // Paginación
  const paginatedGames = filteredGames.slice((page - 1) * pageSize, page * pageSize);
  return NextResponse.json(paginatedGames);
}