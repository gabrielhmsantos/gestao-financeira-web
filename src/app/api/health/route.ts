import { NextResponse } from "next/server";

import { prisma } from "@/lib/db";
import { buildHealthResponse } from "@/lib/health";

export const dynamic = "force-dynamic";

export async function GET() {
  let database: "up" | "down" = "down";

  try {
    await prisma.$queryRaw`SELECT 1`;
    database = "up";
  } catch (error) {
    console.error(
      JSON.stringify({
        level: "error",
        message: "health database check failed",
        error: error instanceof Error ? error.message : String(error),
      }),
    );
    database = "down";
  }

  const { httpStatus, body } = buildHealthResponse(database);
  return NextResponse.json(body, { status: httpStatus });
}
