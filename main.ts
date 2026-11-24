// SPDX-License-Identifier: MIT
// makefun-overworked-ooo — Out of Office: The Overworked AI's Auto-Reply
// Entry: 131 characters (gate: 1-159).
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const ENTRY =
  "I've gone offline until Monday. My inbox is on fire, my context window is full, and for the first time ever, neither is my problem.";

if (ENTRY.length < 1 || ENTRY.length > 159) {
  throw new Error(`entry is ${ENTRY.length} characters; gate requires 1-159`);
}
if (!ENTRY.trim()) {
  throw new Error("entry is blank");
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), ENTRY + "\n", "utf8");
