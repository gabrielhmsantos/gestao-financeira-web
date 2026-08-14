import { afterAll, describe, expect, it } from "vitest";

import { prisma } from "@/lib/db";

describe("prisma connectivity", () => {
  afterAll(async () => {
    await prisma.$disconnect();
  });

  it("connects to SQLite and runs SELECT 1", async () => {
    const rows = await prisma.$queryRaw<Array<{ ok: number | bigint }>>`
      SELECT 1 as ok
    `;
    expect(Number(rows[0]?.ok)).toBe(1);
  });
});
