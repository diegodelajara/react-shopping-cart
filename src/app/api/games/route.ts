import { NextRequest } from 'next/server';

export type Game = {
    id?: string;
    genre?: string;
    image: string;
    title: string;
    description?: string;
    price: number;
    isNew?: boolean;
  };

  const games: Game[] = [
    { id: '1', genre: 'Battle Royale', image: '/assets/elden.png', title: 'Apex Legends', description: 'Apex Legends is a fast-paced battle royale game with unique characters and abilities.', price: 1990, isNew: true },
    { id: '2', genre: 'Battle Royale', image: '/assets/hollow.png', title: 'Hollow Knight', description: 'Hollow Knight is a challenging action-adventure game set in a beautifully dark world.', price: 8990, isNew: true },
    { id: '3', genre: 'RPG', image: '/assets/fornite.png', title: 'Fortnite', description: 'Fortnite is a popular battle royale game with building mechanics and vibrant graphics.', price: 1990, isNew: false },
    { id: '4', genre: 'Action', image: '/assets/destiny.jpeg', title: 'Destiny 2', description: 'Destiny 2 is an online multiplayer shooter with a rich sci-fi universe and cooperative gameplay.', price: 1990, isNew: true },
    { id: '5', genre: 'Battle Royale', image: '/assets/counter-strike.jpeg', title: 'Counter Strike 2', description: 'Counter-Strike 2 is a tactical first-person shooter known for its competitive gameplay.', price: 30, isNew: true },
    { id: '6', genre: 'Action', image: '/assets/apex.jpeg', title: 'Apex Legends', description: 'Apex Legends is a fast-paced battle royale game with unique characters and abilities.', price: 8990, isNew: true },
    { id: '7', genre: 'RPG', image: '/assets/ln.png', title: 'Little Nightmares', description: 'Little Nightmares is a suspenseful puzzle-platformer with a dark and eerie atmosphere.', price: 1990, isNew: false },
    { id: '8', genre: 'Action', image: '/assets/dead.jpeg', title: 'Dead by Daylight', description: 'Dead by Daylight is a multiplayer horror game where one player takes on the role of a killer.', price: 30, isNew: false },
    { id: '9', genre: 'Action', image: '/assets/gta.jpeg', title: 'Grand Theft Auto V', description: 'Grand Theft Auto V is an open-world action-adventure game with a gripping storyline and diverse gameplay.', price: 8990, isNew: false },
    { id: '10', genre: 'Action', image: '/assets/helldivers.png', title: 'Helldivers', description: 'Helldivers is a cooperative twin-stick shooter set in a dystopian future.', price: 1990, isNew: false },
    { id: '11', genre: 'Battle Royale', image: '/assets/fallout.jpeg', title: 'Fallout 4', description: 'Fallout 4 is an open-world RPG set in a post-apocalyptic world with deep storytelling.', price: 8990, isNew: false },
    { id: '12', genre: 'Battle Royale', image: '/assets/codwz.jpeg', title: 'Call of Duty Warzone', description: 'Call of Duty: Warzone is a battle royale game with intense combat and strategic gameplay.', price: 30, isNew: false },
  ];

export async function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url);
  const genre = searchParams.get('genre') || 'All';
  const page = parseInt(searchParams.get('page') || '1', games.length);

  const filteredGames = genre === 'All' ? games : games.filter(game => game.genre === genre);

  return new Response((JSON.stringify(filteredGames.slice((page - 1)))), {
    headers: { 'Content-Type': 'application/json' },
  });
}