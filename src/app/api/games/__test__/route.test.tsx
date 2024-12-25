// filepath: /Users/diegodelajara/Documents/Mis proyectos/test/apply-digital/shop-cart/src/app/api/games/route.test.ts
import { Game, GET } from "../route";
import { NextRequest } from "next/server";
import { screen } from "@testing-library/react";

describe("GET /api/games", () => {
  it("should return all games when no genre is specified", async () => {
    const req = new NextRequest("http://localhost:3000/api/games");
    const res = await GET(req);
    const games = await res.json();

    expect(res.status).toBe(200);
    expect(games.length).toBe(12);
  });

  it("should return filtered games by genre", async () => {
    const req = new NextRequest("http://localhost:3000/api/games?genre=Action");
    const res = await GET(req);
    const games = await res.json();

    expect(res.status).toBe(200);
    expect(games.length).toBe(5);
    expect(games.every((game: Game) => game.genre === "Action")).toBe(true);
  });
});
