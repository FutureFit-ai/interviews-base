import { beforeEach, describe, expect, it, vi } from "vitest";
import { render, screen } from "@testing-library/react";
import App from "./App";

beforeEach(() => {
  vi.stubGlobal(
    "fetch",
    vi.fn(async () => ({ json: async () => ({ api: "ok", db: "ok" }) }))
  );
});

describe("App", () => {
  it("renders the starter page", async () => {
    render(<App />);
    expect(await screen.findByText(/Interview Starter/)).toBeTruthy();
  });
});
