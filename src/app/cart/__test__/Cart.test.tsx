import React from "react";
import { render, screen } from "@testing-library/react";
import Cart from "../page";
import { Game } from "@/app/api/games/route";
import { CartContext } from "../../../Context.games";

const mockGames: Game[] = [
  { id: "1", image: "", title: "Game 1", genre: "Action", price: 10 },
  { id: "2", image: "", title: "Game 2", genre: "RPG", price: 10 },
];

// Mock Next.js navigation hooks
jest.mock("next/navigation", () => ({
  useSearchParams: jest.fn(() => ({
    get: jest.fn(() => "All"),
  })),
  useRouter: jest.fn(() => ({
    pathname: "/",
    push: jest.fn(),
    replace: jest.fn(),
  })),
}));

describe("Games cart", () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  afterEach(() => {
    jest.resetModules();
  });

  it("should display games in cart", () => {
    render(
      <CartContext.Provider
        value={{
          cart: mockGames,
          selectedFilter: "All",
          setSelectedFilter: jest.fn(),
          getCartItems: jest.fn(() => mockGames),
          addToCart: jest.fn(),
          getCartCount: jest.fn(() => mockGames.length),
          removeFromCart: jest.fn(),
          isGameInCart: jest.fn(() => true),
        }}
      >
        <Cart />
      </CartContext.Provider>
    );
    expect(screen.getAllByText("Game 1")).toBeDefined();
    expect(screen.getAllByText("Game 2")).toBeDefined();
  });
});
