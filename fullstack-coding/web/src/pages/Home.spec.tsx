import { beforeEach, describe, expect, it, vi } from "vitest";
import { render, screen } from "@testing-library/react";
import { Home } from "./Home";

beforeEach(() => {
  vi.stubGlobal(
    "fetch",
    vi.fn(async () => ({ json: async () => ({ api: "ok", db: "ok" }) }))
  );
});

describe("Home", () => {
  it("renders the starter page", async () => {
    render(<Home />);
    expect(await screen.findByText(/Interview Starter/)).toBeTruthy();
  });
});
