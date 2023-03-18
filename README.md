# Fun with table 🏓

## Flexible & responsive table for React

### 🖥️ On desktop as a classic table 📱 On mobile as collapsable rows

### A super user-friendly experience, start to use your table also on mobile!

#### Discover:

- [🔧 Installation](#-installation)
- [🔬 Instruction](#-instruction)
- [😊 Collaborators](#-collaborators)
- [🍕 Pizza time](#-give-me-a-pizza)

---

### Links:

- 👉 [**Prototype demo**](https://codepen.io/marcogargano/full/vYzmPGG)

- 👉 [**NPM Package**](https://www.npmjs.com/package/responsive-table-react) <br>
  ![npm](https://badgen.net/npm/v/responsive-table-react)
  ![npm](https://badgen.net/npm/dw/responsive-table-react)
  ![npm](https://badgen.net/npm/dt/responsive-table-react)

- 👉 [**GitHub Repository**](https://github.com/MarcoGargano/responsive-table-react) <br>
  ![npm](https://badgen.net/github/stars/MarcoGargano/responsive-table-react)
  ![npm](https://badgen.net/github/forks/MarcoGargano/responsive-table-react)
  ![github](https://badgen.net/github/tags/marcogargano/responsive-table-react)
  ![github](https://badgen.net/github/last-commit/marcogargano/responsive-table-react)

---

<img src="https://iili.io/HWLD8Je.gif" width="100%">

---

## 🔧 Installation

**Install by NPM**:

```
npm i responsive-table-react
```

Here you can find the package on NPM: [responsive-table-react](https://www.npmjs.com/package/responsive-table-react).

---

## 🔬 Instruction

Simple and high settable table for all devices, CSS only; create your component with a super tiny code

Import with

```js
import { ResponsiveTable } from "responsive-table-react";
```

### Example

```ts
const columns = [
    {
      "id": "name",
      "text": "Name"
    },
    {
      "id": "surname",
      "text": "Surname"
    }
  ]

  const data = [
    {
      "name": "Mark",
      "surname": "Garsin"
    },
    {
      "name": "Gabriel",
      "surname": "Betappi"
    },
    {
      "name": "Gustav",
      "surname": "Mahler",
    }
  ]

  return (
    <ResponsiveTable columns={columns} data={data} />
  )
```

---

## 😊 Collaborators

- 🦁 [Gabriele](https://github.com/GabAlpha)
- 🐷 [Marco](https://github.com/MarcoGargano)
- 🐻‍❄️ [Gustavo](https://github.com/gustavodipietrogva)

---

## 🍕 Give me a pizza

If you like this component and you want to support us... [**PIZZAAA😋😋😋**](https://www.paypal.com/paypalme/MarcoGargano/10)
