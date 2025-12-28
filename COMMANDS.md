## Install Dependencies

```bash
npm install
```

* Uses **NPM only**
* Do **not** use yarn or pnpm

---

## Development Server

```bash
npm run dev
```

* Starts Next.js in development mode
* Hot reload enabled
* Default: [http://localhost:3000](http://localhost:3000)

---

## Production Build

```bash
npm run build
```

* Creates an optimized production build
* Must pass with **zero errors** before merging

---

## Start Production Server

```bash
npm run start
```

* Runs the production build
* Use only after `npm run build`

---

## Format Code (Prettier)

```bash
npm run format
```

*or*

```bash
npx prettier --write .
```

Rules enforced:

* 2 spaces
* No semicolons
* Single quotes
* Trailing commas

If formatting changes your code, **commit the changes**.

---

## Check Formatting (CI-safe)

```bash
npx prettier --check .
```

* Used in CI
* Fails if formatting rules are violated

---

## Lint

```bash
npm run lint
```

* Must pass before PRs are accepted
* No warnings ignored