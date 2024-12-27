import React, { act } from "react";
import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import Catalog from "./index";
import { Game } from "@/app/api/games/route";

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

jest.mock("@/Context.games", () => ({
  useCart: jest.fn(() => ({
    games: [],
    cart: mockGames,
    setGames: jest.fn(),
    addToCart: jest.fn(),
    selectedFilter: "All",
    isGameInCart: jest.fn(),
    setSelectedFilter: jest.fn(),
  })),
}));

describe("Games catalog", () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  afterEach(() => {
    jest.resetModules();
  });

  it("should handle empty games list", () => {
    render(<Catalog title="Empty Catalog" filteredGames={[]} />);
    expect(screen.getByText("Empty Catalog")).toBeInTheDocument();
  });

  it("should render catalog with filtered games", () => {
    render(<Catalog title="Games" filteredGames={mockGames} />);
    expect(screen.getByText("Games")).toBeInTheDocument();
  });

  it("should add one game to shopping cart", async () => {
    const { getAllByText } = render(
      <Catalog title="Games" filteredGames={mockGames} />
    );

    act(() => {
      const buttons = getAllByText("add to cart");
      buttons.forEach((button) => fireEvent.click(button));
    });

    await waitFor(() => {
      mockGames.forEach(async () => {
        expect(await screen.findByText("remove")).toBeInTheDocument();
      });
    });
  });

  it("should click on see more button", async () => {
    render(<Catalog title="Games" filteredGames={mockGames} />);

    act(() => {
      const buttons = screen.getAllByText("see more");
      fireEvent.click(buttons[0]);
    });

    await waitFor(async () => {
      expect(await screen.findByText("see less")).toBeInTheDocument();
    });
  });
});
