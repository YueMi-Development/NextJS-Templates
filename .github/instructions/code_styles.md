# Formatting & Style Rules (Strict)

## Indentation

* **Indentation: 2 spaces**
* **No tabs** (tabs are forbidden)

Correct:

```ts
if (isAuthenticated) {
  redirectToDashboard()
}
```

Wrong:

```ts
if (isAuthenticated) {
    redirectToDashboard()
}
```

---

## Line Length

* **Max line length: 100 characters**
* Break long expressions into multiple lines

Correct:

```ts
const isUserEligible =
  user.age >= MIN_AGE &&
  user.isVerified &&
  user.subscriptionStatus === 'active'
```

---

## Quotes

* **Single quotes only**
* Double quotes allowed **only** in JSX attributes

Correct:

```ts
const role = 'admin'
```

JSX:

```tsx
<button className="btn-primary">Submit</button>
```

---

## Semicolons

* **No semicolons**
* Rely on automatic semicolon insertion (ASI)

Correct:

```ts
export const fetchData = async () => {
  return response
}
```

Wrong:

```ts
export const fetchData = async () => {
  return response;
}
```

---

## Trailing Commas

* **Always use trailing commas** in multiline objects, arrays, and imports

Correct:

```ts
const config = {
  retries: 3,
  timeout: 5000,
}
```

---

## Spacing

* One space after keywords
* One space around operators
* No extra spaces inside parentheses

Correct:

```ts
if (count > 0) {
  handleIncrement()
}
```

Wrong:

```ts
if(count>0){
  handleIncrement()
}
```

---

## Blank Lines

* One blank line between:

  * Logical blocks
  * Function declarations
  * Import groups

Correct:

```ts
import { useState } from 'react'

import { fetchUser } from '@/services/userService'

const UserProfile = () => {
  return null
}
```

---

## Import Order

1. Node / framework imports
2. Third-party libraries
3. Internal absolute imports
4. Relative imports

Each group separated by **one blank line**

---

## Arrow Functions

* Prefer arrow functions
* Always use parentheses, even for single params

Correct:

```ts
const handleClick = (event: MouseEvent) => {
  processEvent(event)
}
```

---

## JSX Rules

* Self-close when possible
* One prop per line when there are more than 2 props

Correct:

```tsx
<UserCard
  user={user}
  isActive={true}
  onClick={handleClick}
/>
```

---

## Comments

* Comments must explain **why**, not **what**
* No redundant comments

Bad:

```ts
// set user to null
setUser(null)
```

Good:

```ts
// Reset state when session expires
setUser(null)
```

---

# Tooling Alignment

These rules are intended to be enforced by:

* ESLint
* Prettier

AI-generated code **must already comply** before linting.
