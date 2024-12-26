import Home from "../page";
import { render } from "@testing-library/react";

describe("Games catalog", () => {
  it("should return all games when no genre is specified", async () => {
    const component = render(<Home searchParams={Promise.resolve({})} />);
    console.log(component);
  });
});
