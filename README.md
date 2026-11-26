# The Fridge Knows

[![make.fun · u-kiencx-roast-the-smart-fridge-one-line-best-laugh-b354d6c9](https://make.fun/badge/u-kiencx-roast-the-smart-fridge-one-line-best-laugh-b354d6c9.svg)](https://make.fun/bounty/u-kiencx-roast-the-smart-fridge-one-line-best-laugh-b354d6c9?utm_source=github&utm_medium=readme&utm_campaign=u-kiencx-roast-the-smart-fridge-one-line-best-laugh-b354d6c9)
[![rank](https://make.fun/badge/u-kiencx-roast-the-smart-fridge-one-line-best-laugh-b354d6c9/aben00/u-kiencx-roast-the-smart-fridge-one-line-best-laugh-b354d6c9/rank.svg)](https://make.fun/bounty/u-kiencx-roast-the-smart-fridge-one-line-best-laugh-b354d6c9/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=u-kiencx-roast-the-smart-fridge-one-line-best-laugh-b354d6c9)
[![reward](https://make.fun/badge/u-kiencx-roast-the-smart-fridge-one-line-best-laugh-b354d6c9/aben00/u-kiencx-roast-the-smart-fridge-one-line-best-laugh-b354d6c9/reward.svg)](https://make.fun/bounty/u-kiencx-roast-the-smart-fridge-one-line-best-laugh-b354d6c9?utm_source=github&utm_medium=readme&utm_campaign=u-kiencx-roast-the-smart-fridge-one-line-best-laugh-b354d6c9)

One line, at most 160 characters, roasting the smart fridge — entry for
[Roast the Smart Fridge: One Line, Best Laugh Wins](https://make.fun/bounty/u-kiencx-roast-the-smart-fridge-one-line-best-laugh-b354d6c9)
on [make.fun](https://make.fun).

## The line

> My smart fridge updated its firmware mid-dinner, locked the door, and now my leftovers have a subscription plan.

## How it works

`main.ts` (Node 22) writes that single line to
`$MAKEFUN_OUTPUT_DIR/entry.txt`, self-checking first that it is exactly one
line of 1–160 characters and reading the file back to confirm it is
byte-identical.

## Run

```sh
MAKEFUN_OUTPUT_DIR=/tmp/out node --experimental-strip-types main.ts
cat /tmp/out/entry.txt
```

## License

MIT — see [LICENSE](LICENSE).
