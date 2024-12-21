import { NextRequest } from 'next/server';

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
  { id: '1', genre: 'Battle Royale', image: '/assets/elden.png', name: 'Apex', description: 'Description 1', price: 10, isNew: true },
  { id: '2', genre: 'Battle Royale', image: '/assets/hollow.png', name: 'Hallow Knight', description: 'Description 1', price: 10, isNew: true },
  { id: '3', genre: 'RPG', image: '/assets/fornite.png', name: 'Fortnite', description: 'Description 2', price: 20, isNew: false },
  { id: '4', genre: 'Action', image: '/assets/destiny.jpeg', name: 'Destiny 2', description: 'Description 3', price: 30, isNew: true },
  { id: '5', genre: 'Battle Royal', image: '/assets/counter-strike.jpeg', name: 'Counter Strike 2', description: 'Description 3', price: 30, isNew: true },
  { id: '6', genre: 'Action', image: '/assets/apex.jpeg', name: 'Apex', description: 'Description 3', price: 30, isNew: true },
  { id: '7', genre: 'RPG', image: '/assets/ln.png', name: 'Little Nightmares', description: 'Description 3', price: 30, isNew: true },
  { id: '8', genre: 'Action', image: '/assets/dead.jpeg', name: 'Dead by Daylight 3', description: 'Description 3', price: 30, isNew: true },
  { id: '9', genre: 'Action', image: '/assets/gta.jpeg', name: 'Grand Theft Auto 5', description: 'Description 3', price: 30, isNew: true },
  { id: '10', genre: 'Action', image: '/assets/helldivers.png', name: 'Hell Divers', description: 'Description 3', price: 30, isNew: true },
  { id: '11', genre: 'Battle Royal', image: '/assets/fallout.jpeg', name: 'Fallout 4', description: 'Description 3', price: 30, isNew: true },
  { id: '12', genre: 'Battle Royal', image: '/assets/codwz.jpeg', name: 'Call of Duty Warzone', description: 'Description 3', price: 30, isNew: true },
];

export async function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url);
  const genre = searchParams.get('genre') || 'All';
  const page = parseInt(searchParams.get('page') || '1', games.length);

  // Filtrar juegos por género
  const filteredGames = genre === 'All' ? games : games.filter(game => game.genre === genre);

  return new Response(JSON.stringify(filteredGames.slice((page - 1))), {
    headers: { 'Content-Type': 'application/json' },
  });
}