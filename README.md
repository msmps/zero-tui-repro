# Hello Zero

> [!WARNING]  
> This requires React v19 + the Bun runtime! `bun install`, `bun run`, etc

## Option 1: Run this repo

First, install dependencies:

```sh
bun install
```

Next, run docker:

```sh
bun run dev:db-up
```

**In a second terminal**, run the zero cache server:

```sh
bun run dev:zero-cache
```

**In a third terminal**, run the Vite dev server:

```sh
bun run dev:ui
```

**In a fourth terminal**, run the OpenTUI client:

```sh
bun run dev:tui
```
