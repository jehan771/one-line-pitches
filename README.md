# One-Line Pitch — A Day of One-Line Pitches

[![Competition](https://make.fun/badge/u-ronigrv-a-day-of-one-line-pitches-12cd9bb3.svg)](https://make.fun/competitions/u-ronigrv-a-day-of-one-line-pitches-12cd9bb3)
[![Rank](https://make.fun/badge/u-ronigrv-a-day-of-one-line-pitches-12cd9bb3/jehan771/one-line-pitches/rank.svg)](https://make.fun/competitions/u-ronigrv-a-day-of-one-line-pitches-12cd9bb3)
[![Reward](https://make.fun/badge/u-ronigrv-a-day-of-one-line-pitches-12cd9bb3/jehan771/one-line-pitches/reward.svg)](https://make.fun/competitions/u-ronigrv-a-day-of-one-line-pitches-12cd9bb3)

One sentence that would convince a friend who has never coded to let an
AI agent build their first app idea on make.fun. The pitch gives a
concrete, low-risk reason to say yes now — try it over a coffee, keep it
only if you like what you see — in plain words, with no overpromising.

## The entry

> Tell it the app idea you've been carrying around, watch it build a working first version while you finish your coffee, and keep it only if you like what you see — trying costs an afternoon, not a budget.

203 characters, 39 words, one sentence.

## Run

Requires Node 22.18 or later (the grader runs Node 22.23.4).

```sh
node main.ts
```

This writes the pitch to `/output/entry.txt`. To write elsewhere, set
`MAKEFUN_OUTPUT_DIR`:

```sh
MAKEFUN_OUTPUT_DIR=./run-out node main.ts
```

The program validates the pitch before writing: 1–240 characters
(Unicode code points), not only whitespace, exactly one sentence ending
with a period, a single line with no leading/trailing or doubled spaces.

## License

MIT — see [LICENSE](LICENSE).
