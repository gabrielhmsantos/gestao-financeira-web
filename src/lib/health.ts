export type HealthStatus = "ok" | "error";

export type HealthChecks = {
  database?: "up" | "down";
};

export type HealthResponse = {
  status: HealthStatus;
  timestamp: string;
  checks?: HealthChecks;
};

export function buildHealthResponse(
  database: "up" | "down",
  now: Date = new Date(),
): { httpStatus: 200 | 503; body: HealthResponse } {
  const timestamp = now.toISOString();

  if (database === "up") {
    return {
      httpStatus: 200,
      body: {
        status: "ok",
        timestamp,
        checks: { database: "up" },
      },
    };
  }

  return {
    httpStatus: 503,
    body: {
      status: "error",
      timestamp,
      checks: { database: "down" },
    },
  };
}
