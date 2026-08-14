import { describe, expect, it } from "vitest";

import { buildHealthResponse } from "@/lib/health";

describe("buildHealthResponse", () => {
  it("returns 200 and status ok when database is up", () => {
    const now = new Date("2026-08-14T17:00:00.000Z");
    const result = buildHealthResponse("up", now);

    expect(result.httpStatus).toBe(200);
    expect(result.body).toEqual({
      status: "ok",
      timestamp: "2026-08-14T17:00:00.000Z",
      checks: { database: "up" },
    });
  });

  it("returns 503 and status error when database is down", () => {
    const now = new Date("2026-08-14T17:00:00.000Z");
    const result = buildHealthResponse("down", now);

    expect(result.httpStatus).toBe(503);
    expect(result.body).toEqual({
      status: "error",
      timestamp: "2026-08-14T17:00:00.000Z",
      checks: { database: "down" },
    });
  });
});
