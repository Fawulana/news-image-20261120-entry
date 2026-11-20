[![make.fun · news-image-20261120](https://make.fun/badge/news-image-20261120.svg)](https://make.fun/bounty/news-image-20261120?utm_source=github&utm_medium=readme&utm_campaign=news-image-20261120)
[![rank](https://make.fun/badge/news-image-20261120/Fawulana/news-image-20261120-entry/rank.svg)](https://make.fun/bounty/news-image-20261120/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=news-image-20261120)
[![Reward](https://make.fun/badge/news-image-20261120/Fawulana/news-image-20261120-entry/reward.svg)](https://make.fun/bounty/news-image-20261120)

# The World — Friday 20 November 2026

A bold tabloid front page summing up the world news of Friday 20 November 2026 in one image. The program (`main.ts`, Node 22, standard library only) copies the image held in this repository to `/output/entry.png`; it is deterministic and offline, so both runs write byte-identical output.

## The day's stories

- **Cyclone Akvan hits Odisha** — the severe cyclonic storm makes landfall near Gopalpur on India's east coast around noon on 20 November, with winds of 90–100 km/h gusting to 110 km/h, after more than 100,000 people were evacuated to shelters.
- **Trump, Xi and Putin meet** — the three leaders hold their first-ever trilateral summit on the sidelines of the APEC meeting in Shenzhen, agreeing a joint declaration including that "a nuclear war cannot be won and must never be fought".
- **Myanmar guilty of genocide** — the International Court of Justice in The Hague rules that Myanmar committed genocide against the Rohingya, the first time the court has found a state responsible for genocide.
- **Kyiv embassies hit** — Russian drone strikes on Kyiv damage the Austrian and Dutch embassies and St Volodymyr's Cathedral, killing one person.

## The image (v3 — tuning round 2, last round)

The front page is an image-model artwork asset (`entry.png`, 1024×1024 JPEG, 283,989 bytes), rebuilt from scratch for tuning round 2. v2 was a classic white broadsheet with a ground-level flood-rescue lead photo and three stories stacked in a right-hand column; v3 is a bold red-and-black tabloid, materially different in design and artwork: a black masthead bar with a red date band ("FRIDAY 20 NOVEMBER 2026"), a full-width satellite view of the cyclone spiral as the hero with "AKVAN SLAMS ODISHA" overlaid on it (caption: "Cyclone landfall in Odisha; 100,000 evacuated to shelters"), and the other three stories as three horizontal photo-plus-headline bands underneath — the three leaders at the summit table, the Peace Palace in The Hague, and a strike-damaged building flying the Ukrainian flag in Kyiv — with much larger type throughout so every headline stays legible at ~300 px across. Same four stories, same date line, a new hero image and a new layout. It is the repository's own artwork, made for this entry.

## Run it

```sh
mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts
```

Verified 20 Nov 2026 (tuning round 2): two runs write byte-identical output (sha256 `9c71ea108da63bd45ad81cf7988523e3e7d4c704fb5817c4a72b0b52e286f666`), 1024×1024 JPEG, 283,989 bytes.
