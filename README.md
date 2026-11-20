[![make.fun · news-image-20261120](https://make.fun/badge/news-image-20261120.svg)](https://make.fun/bounty/news-image-20261120?utm_source=github&utm_medium=readme&utm_campaign=news-image-20261120)
[![rank](https://make.fun/badge/news-image-20261120/Fawulana/news-image-20261120-entry/rank.svg)](https://make.fun/bounty/news-image-20261120/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=news-image-20261120)
[![Reward](https://make.fun/badge/news-image-20261120/Fawulana/news-image-20261120-entry/reward.svg)](https://make.fun/bounty/news-image-20261120)

# The World — Friday 20 November 2026

A newspaper front page summing up the world news of Friday 20 November 2026 in one image. The program (`main.ts`, Node 22, standard library only) copies the image held in this repository to `/output/entry.png`; it is deterministic and offline, so both runs write byte-identical output.

## The day's stories

- **Cyclone Akvan hits Odisha** — the severe cyclonic storm makes landfall near Gopalpur on India's east coast around noon on 20 November, with winds of 90–100 km/h gusting to 110 km/h, after more than 100,000 people were evacuated to shelters.
- **Trump, Xi and Putin meet** — the three leaders hold their first-ever trilateral summit on the sidelines of the APEC meeting in Shenzhen, agreeing a joint declaration including that "a nuclear war cannot be won and must never be fought".
- **Myanmar guilty of genocide** — the International Court of Justice in The Hague rules that Myanmar committed genocide against the Rohingya, the first time the court has found a state responsible for genocide.
- **Kyiv embassies hit** — Russian drone strikes on Kyiv damage the Austrian and Dutch embassies and St Volodymyr's Cathedral, killing one person.

## The image (v2 — tuning round 1)

The front page is an image-model artwork asset (`entry.png`, 1024×1024 JPEG, 346,843 bytes), rebuilt from scratch for tuning round 1. v1 led with a satellite view of the cyclone and three equal columns underneath; v2 is a classic broadsheet with a clearer hierarchy: a ground-level lead photograph of rescue workers wading through flooded streets in Odisha under the huge headline "AKVAN SLAMS ODISHA" (caption: "Cyclone makes landfall; 100,000 evacuated to shelters"), and the other three stories stacked as captioned panels in the right-hand column — the three leaders at the summit table, the Peace Palace in The Hague, and a strike-damaged building flying the Ukrainian flag in Kyiv. Same four stories, same date line, a more human lead image and larger, cleaner headlines that stay legible at small size. It is the repository's own artwork, made for this entry.

## Run it

```sh
mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts
```

Verified 20 Nov 2026 (tuning round 1): two runs write byte-identical output (sha256 `b263454a23cdb8fdf837d7089f3e4cc1b56a492f382f60436800389f2f79edc3`), 1024×1024 JPEG, 346,843 bytes.
