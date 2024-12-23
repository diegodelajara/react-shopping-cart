import Header from "../components/Header";
import Catalog from "../components/Catalog";
import Back from "../components/Back";
import { Game } from "./api/games/route";

const wait3Seconds = () => new Promise((resolve) => setTimeout(resolve, 3000));

export default async function Home() {
  await wait3Seconds();
  const response = await fetch("http://localhost:3000/api/games");
  const data = (await response.json()) as Game[];

  return (
    <div className="grid grid-rows-[1fr] ">
      <Header title={"GamerShop"} url={"/"} />
      <Back />
      <Catalog title={"TOP SELLERS"} filteredGames={data} />
    </div>
  );
}
