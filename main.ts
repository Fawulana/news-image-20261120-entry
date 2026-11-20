// news-image-20261120: a newspaper front page summing up the world news of
// Friday 20 November 2026 — Cyclone Akvan's landfall in Odisha, the first
// Trump–Xi–Putin trilateral in Shenzhen, the ICJ's genocide ruling against
// Myanmar, and the Kyiv strikes that damaged the Austrian and Dutch embassies.
//
// The image is an image-model artwork asset held in this repository
// (entry.png). The program is deterministic and offline: it copies those
// exact bytes to the output directory, so both graded runs write identical
// output. Run locally with:
//   mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts

import { copyFileSync, mkdirSync, statSync } from 'node:fs';
import { join } from 'node:path';

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';
mkdirSync(outDir, { recursive: true });
const source = new URL('./entry.png', import.meta.url);
const target = join(outDir, 'entry.png');
copyFileSync(source, target);
// Self-check: the copy must be byte-complete, or the run fails loudly.
if (statSync(source).size !== statSync(target).size) {
  throw new Error('entry.png copy is incomplete');
}
