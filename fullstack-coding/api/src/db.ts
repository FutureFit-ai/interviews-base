import pg from "pg";

// Works out of the box against the docker-compose database.
// Override with DATABASE_URL if you run Postgres differently.
const connectionString =
  process.env.DATABASE_URL ?? "postgres://interview:interview@localhost:5433/interview";

export const pool = new pg.Pool({ connectionString });

export async function query<T = unknown>(text: string, params?: unknown[]): Promise<T[]> {
  const result = await pool.query(text, params as unknown[] as never[]);
  return result.rows as T[];
}
