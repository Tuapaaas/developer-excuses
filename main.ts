// Developer Excuses — make.fun entry
// u-motasimfuad-make-the-ai-judge-laugh-developer-49386be3
//
// One funny single-line excuse a developer gives when code breaks in
// production. The program writes the line to entry.txt in the output
// directory the grader provides (MAKEFUN_OUTPUT_DIR).

import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const EXCUSE =
  "The code did not break in production — it broke in staging six months ago, and we shipped it anyway because the tests were too polite to say no.";

function main(): void {
  const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "output";
  mkdirSync(outDir, { recursive: true });
  const text = EXCUSE.trim();
  if (text.length < 1 || text.length > 200) {
    throw new Error(`entry must be 1-200 characters, got ${text.length}`);
  }
  if (text.includes("\n")) {
    throw new Error("entry must be a single line");
  }
  writeFileSync(join(outDir, "entry.txt"), text, "utf8");
}

main();
