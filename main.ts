// Alien Field Notes: The Two Day Earth Review
// A program that writes one original line of plain text to /output/entry.txt:
// a review of planet Earth left by an alien tourist (at most 200 characters).
// The line is a fixed, hand-written string, so every run prints the same text.

import { mkdirSync, writeFileSync } from "node:fs";

// Gate (kit RULES / competition.yaml): /output/entry.txt must be UTF-8 text
// of 1 to 200 characters, not only white space. This line is 150 characters
// (152 bytes: the em dash is one character, three bytes) — comfortably inside.
// No trailing newline is written, so the file holds exactly the one line.
const LINE =
  "Visited Earth: the locals work five days to earn two days off, then spend both days recovering from the five. 4/5 stars \u2014 the weekend needs a weekend.";

if (LINE.length < 1 || LINE.length > 200) {
  throw new Error(`entry must be 1-200 characters, got ${LINE.length}`);
}
if (LINE.trim().length === 0) {
  throw new Error("entry must not be only white space");
}
if (LINE.includes("\n")) {
  throw new Error("entry must be a single line");
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LINE, "utf8");
console.log(`wrote ${LINE.length} characters to /output/entry.txt`);
