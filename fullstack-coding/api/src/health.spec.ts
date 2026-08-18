import { describe, expect, it } from "vitest";
import type { AddressInfo } from "node:net";
import { createApp } from "./app.js";

describe("api", () => {
  it("serves /api/health", async () => {
    const server = createApp().listen(0);
    try {
      const { port } = server.address() as AddressInfo;
      const res = await fetch(`http://127.0.0.1:${port}/api/health`);
      const body = (await res.json()) as { api: string };
      expect(res.status).toBe(200);
      expect(body.api).toBe("ok");
    } finally {
      server.close();
    }
  });
});
