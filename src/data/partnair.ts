"use server";

import type { partnairProps } from "@/lib/definitions";
import postgres from "postgres";

const sql = postgres(process.env.POSTGRES_URL as string, { ssl: "require" });

export async function fetchPartnair() {
	const partnair = sql<partnairProps[]>`
    SELECT name, id
    FROM partnair
    `;
	return partnair;
}
