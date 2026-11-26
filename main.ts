// Roast the Smart Fridge: One Line, Best Laugh Wins
// Writes a single-line roast (<=160 chars) to $MAKEFUN_OUTPUT_DIR/entry.txt.
// Deterministic: the same line every run, byte-identical output.

import { mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const ENTRY =
  "My smart fridge updated its firmware mid-dinner, locked the door, and now my leftovers have a subscription plan.";

function main(): void {
  // Self-check the entry constraint before writing anything.
  const lines = ENTRY.split("\n");
  if (lines.length !== 1) {
    throw new Error(`entry must be exactly one line, got ${lines.length}`);
  }
  if (ENTRY.length === 0 || ENTRY.length > 160) {
    throw new Error(`entry must be 1-160 characters, got ${ENTRY.length}`);
  }
  if (ENTRY.trim().length === 0) {
    throw new Error("entry must not be only white space");
  }

  const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
  mkdirSync(outDir, { recursive: true });
  const outPath = join(outDir, "entry.txt");
  writeFileSync(outPath, ENTRY, "utf8");

  // Self-check: read the file back and confirm it is byte-identical to the entry.
  const roundTrip = readFileSync(outPath, "utf8");
  if (roundTrip !== ENTRY) {
    throw new Error("entry.txt round-trip mismatch");
  }
  console.log(`wrote entry.txt (${ENTRY.length} chars)`);
}

main();
