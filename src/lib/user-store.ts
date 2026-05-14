import { mkdir, readFile, writeFile } from "node:fs/promises";
import path from "node:path";
import { randomUUID } from "node:crypto";

export type StoredUser = {
  id: string;
  email: string;
  passwordHash: string;
  createdAt: string;
};

type UsersDb = {
  users: StoredUser[];
};

const DATA_FILE = path.join(process.cwd(), ".data", "users.json");

async function ensureDataFile() {
  const dir = path.dirname(DATA_FILE);
  await mkdir(dir, { recursive: true });
  try {
    await readFile(DATA_FILE, "utf8");
  } catch {
    await writeFile(DATA_FILE, JSON.stringify({ users: [] }, null, 2), "utf8");
  }
}

async function readDb(): Promise<UsersDb> {
  await ensureDataFile();
  const raw = await readFile(DATA_FILE, "utf8");
  const parsed = JSON.parse(raw) as UsersDb;
  return { users: parsed.users ?? [] };
}

async function writeDb(db: UsersDb) {
  await writeFile(DATA_FILE, JSON.stringify(db, null, 2), "utf8");
}

export async function findUserByEmail(email: string) {
  const db = await readDb();
  return db.users.find((u) => u.email === email.toLowerCase()) ?? null;
}

export async function findUserById(id: string) {
  const db = await readDb();
  return db.users.find((u) => u.id === id) ?? null;
}

export async function createUser(input: { email: string; passwordHash: string }) {
  const db = await readDb();
  const normalizedEmail = input.email.toLowerCase();
  if (db.users.some((u) => u.email === normalizedEmail)) return null;

  const user: StoredUser = {
    id: randomUUID(),
    email: normalizedEmail,
    passwordHash: input.passwordHash,
    createdAt: new Date().toISOString(),
  };

  db.users.push(user);
  await writeDb(db);
  return user;
}
