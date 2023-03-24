# Fun with table 🏓
## Flexible & responsive table for React
### A super user-friendly experience, start to use your table also on mobile!

![lan](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![lan](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white)
![lan](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)
![lan](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)

🖥️ On desktop as a classic table 
📱 On mobile as collapsable rows

---

# Links

- 👉 [**NPM Package**](https://www.npmjs.com/package/responsive-table-react) <br>
  ![npm](https://badgen.net/npm/v/responsive-table-react)
  ![npm](https://badgen.net/npm/dependents/responsive-table-react)
  ![npm](https://badgen.net/npm/license/responsive-table-react)
  ![npm](https://badgen.net/npm/dt/responsive-table-react)

- 👉 [**GitHub Repository**](https://github.com/MarcoGargano/responsive-table-react) <br>
  ![github](https://badgen.net/github/last-commit/marcogargano/responsive-table-react)
  ![npm](https://badgen.net/github/stars/MarcoGargano/responsive-table-react)
  ![github](https://badgen.net/github/contributors/marcogargano/responsive-table-react)
  ![npm](https://badgen.net/github/license/MarcoGargano/responsive-table-react)

- 👉 [**CodePen**](https://codepen.io/marcogargano/full/vYzmPGG)

- 👉 [**GitHub Page**](https://marcogargano.github.io/responsive-table-react/)

---

# 🕹️ Demo

<img src="https://iili.io/HWLD8Je.gif" width="100%">

---

# 🛠️ How to

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

### Const example

```ts
const columns = [
    {
      "field": "name",
      "label": "Name"
    },
    {
      "field": "surname",
      "label": "Surname"
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

## Props

Set the designOptions

- `bordered?: boolean` <br/>
Add the border

- `dark?: boolean` <br/>
Add the dark mode 

- `color?: string` <br/>
Set the master color 

---

# 😊 Collaborators

Funny time with:

- 🦁 [Gabriele](https://github.com/GabAlpha)
- 🦊 [Marco](https://github.com/MarcoGargano)
- 🐻‍❄️ [Gustavo](https://github.com/gustavodipietrogva)
- 🐰 [Stefano](https://github.com/dr-wahrheit)

---

# 🍕 Give us a pizza

If you like this component and you want to support us... [**PIZZAAA😋😋😋**](https://www.paypal.com/paypalme/MarcoGargano/10)
