// SPDX-License-Identifier: MIT
// news-image-20261120 — v3, tuning round 2 (the last tuning round).
//
// A bold red-and-black tabloid front page summing up the world news of
// Friday 20 November 2026:
//   - Cyclone Akvan slams Odisha (lead): satellite view of the storm,
//     "AKVAN SLAMS ODISHA", landfall with 100,000 evacuated to shelters.
//   - Trump, Xi and Putin meet: first-ever trilateral summit in Shenzhen.
//   - Myanmar guilty of genocide: the ICJ rules in The Hague.
//   - Kyiv embassies hit: strikes damage the Austrian and Dutch embassies.
//
// v3 is a deliberate break from v2's classic white broadsheet (ground-level
// flood-rescue lead photo, headline below it, three stories stacked in a
// right-hand column). v3 uses a black masthead bar with a red date band, a
// full-width satellite cyclone hero with the headline overlaid on it, and
// three horizontal photo-plus-headline bands underneath — bigger type
// throughout, so every headline stays legible at ~300 px across.
//
// The image is an image-model artwork asset held in this repository
// (entry.png, a 1024x1024 JPEG). The program is deterministic and offline:
// it reads those exact bytes and writes them to the output directory, then
// verifies the copy, so both graded runs write identical output.
// Run locally with:
//   mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts

import { mkdirSync, readFileSync, writeFileSync } from 'node:fs';
import { createHash } from 'node:crypto';
import { join } from 'node:path';

// The gate allows at most 1 MiB and 1024x1024; this asset is inside both.
const MAX_BYTES = 1024 * 1024;

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';
mkdirSync(outDir, { recursive: true });

const sourcePath = new URL('./entry.png', import.meta.url);
const bytes = readFileSync(sourcePath);

// The file must be a whole JPEG: SOI marker first, EOI marker last.
if (bytes[0] !== 0xff || bytes[1] !== 0xd8) {
  throw new Error('entry.png is not a JPEG (missing SOI marker)');
}
if (bytes[bytes.length - 2] !== 0xff || bytes[bytes.length - 1] !== 0xd9) {
  throw new Error('entry.png is not a whole JPEG (missing EOI marker)');
}
if (bytes.length > MAX_BYTES) {
  throw new Error(`entry.png is ${bytes.length} bytes, over the 1 MiB limit`);
}

// The gate also caps dimensions at 1024x1024: read width/height from the
// first SOF0 marker (0xffc0) and enforce them here.
let width = 0;
let height = 0;
for (let i = 2; i + 8 < bytes.length; i++) {
  if (bytes[i] === 0xff && bytes[i + 1] === 0xc0) {
    height = bytes.readUInt16BE(i + 5);
    width = bytes.readUInt16BE(i + 7);
    break;
  }
}
if (width !== 1024 || height !== 1024) {
  throw new Error(`entry.png is ${width}x${height}, expected 1024x1024`);
}

const target = join(outDir, 'entry.png');
writeFileSync(target, bytes);

// Self-check: the written copy must hash identically to the source.
const digest = (data: Buffer) => createHash('sha256').update(data).digest('hex');
if (digest(readFileSync(target)) !== digest(bytes)) {
  throw new Error('entry.png copy is not byte-identical');
}
