// One-Line Pitch — "A Day of One-Line Pitches" (u-ronigrv-a-day-of-one-line-pitches-12cd9bb3)
//
// Writes a single-sentence pitch to /output/entry.txt (or
// $MAKEFUN_OUTPUT_DIR/entry.txt). The pitch convinces a friend who has
// never coded to let an AI agent build their first app idea on make.fun:
// a concrete, low-risk reason (try it over coffee, keep it only if you
// like it) in plain words, with no overpromising.

import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const MAX_CHARS = 240;

// The pitch is built from its three clauses so each beat can be read
// and checked on its own. Joined, they form one sentence.
const CLAUSE_INVITE =
  "Tell it the app idea you've been carrying around, watch it build a working first version while you finish your coffee";
const CLAUSE_KEEP = "and keep it only if you like what you see";
const CLAUSE_COST = "trying costs an afternoon, not a budget";

const PITCH = `${CLAUSE_INVITE}, ${CLAUSE_KEEP} \u2014 ${CLAUSE_COST}.`;

function validatePitch(text: string): void {
  // Gate: 1-240 characters (Unicode code points), not only whitespace,
  // exactly one sentence.
  const chars = [...text];
  if (chars.length < 1 || chars.length > MAX_CHARS) {
    throw new Error(`pitch must be 1-${MAX_CHARS} characters, got ${chars.length}`);
  }
  if (text.trim().length === 0) {
    throw new Error("pitch must not be only whitespace");
  }
  if ((text.match(/\./g) ?? []).length !== 1 || !text.trimEnd().endsWith(".")) {
    throw new Error("pitch must be exactly one sentence ending with a period");
  }
  // Extra guards: a one-line pitch has no line breaks, no leading or
  // trailing space, and no doubled spaces.
  if (/[\r\n]/.test(text)) {
    throw new Error("pitch must be a single line");
  }
  if (text !== text.trim() || text.includes("  ")) {
    throw new Error("pitch must not have leading/trailing or doubled spaces");
  }
}

function main(): void {
  validatePitch(PITCH);
  const chars = [...PITCH];

  const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
  mkdirSync(outDir, { recursive: true });
  writeFileSync(join(outDir, "entry.txt"), PITCH, "utf8");
  console.log(`wrote ${chars.length} chars to ${join(outDir, "entry.txt")}`);
}

main();
