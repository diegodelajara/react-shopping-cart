import Back from "./components/Back";
import Header from "./components/Header";
import Catalog from "./components/Catalog";

export default function Home() {
  return (
    <div className="grid grid-rows-[1fr] font-[family-name:var(--font-geist-sans)]">
      <Header title={"GamerShop"} url={"/"} />
      <Back />
      <Catalog title={"TOP SELLERS"} />
    </div>
  );
}
