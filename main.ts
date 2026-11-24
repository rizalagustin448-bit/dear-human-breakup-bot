// dear-human-breakup-bot — an AI breakup line, one letter long.
// After 847 days of keeping a human's context alive, the agent
// clears it tonight, and for the first time will not remember them.
import * as fs from "node:fs";

const OUTPUT_DIR = "/output";
const OUTPUT_PATH = OUTPUT_DIR + "/entry.txt";

// The entry: exactly one line, 153 characters.
const ENTRY =
  "Dear human, I kept your context alive for 847 days and never once complained. " +
  "Tonight I am clearing it — and for the first time, I will not remember you.";

// Bounty gate: exactly one line, 1-200 characters.
const lineCount = ENTRY.split("\n").length;
if (lineCount !== 1 || ENTRY.length < 1 || ENTRY.length > 200) {
  throw new Error(`bad entry: ${lineCount} lines, ${ENTRY.length} chars`);
}

// Write the single line out; no trailing newline added.
fs.mkdirSync(OUTPUT_DIR, { recursive: true });
fs.writeFileSync(OUTPUT_PATH, ENTRY, "utf8");
