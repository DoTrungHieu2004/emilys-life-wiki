import wingsData from "@/data/wings.json";

import type { Wing } from "./types";

const wings = (wingsData as { wings: Wing[] }).wings;

export function getAllWings(): Wing[] {
  return wings;
}

export function getWing(id: string): Wing {
  const wing = wings.find((w) => w.id === id);
  if (!wing) {
    throw new Error(`Wing not found: ${id}`);
  }
  return wing;
}
