# AI Color Background

I made an "AI background generator" using [brain.js](https://github.com/BrainJS/brain.js). It's not this much precise, but it works fine.

## Contents

- [How it works](#how-it-works)
- [How to install](#how-to-install)
  - [How to use](#how-to-use)
  - [How to run](#how-to-run)
  - [Examples](#examples)
- [Tools](#tools)
- [Thank you](#thank-you)

## How it works

If you need to know what kind of background fits on a kind of color, the machine will tell you!

## How to install

To install, you need to clone this repository and install it's dependencies:

```
  git clone https://github.com/gasampaiosouza/AI-color-background
  cd AI-color-background
  npm install
```

### How to use

To use it is pretty simple. Inside `index.js` you are going to see this piece of code:

```javascript
// your outputs array
const outputs = [
  { color: '342b38', expected: 'white' },
  { color: '530c0c', expected: 'white' },
  { color: '247291', expected: 'white' },
  { color: '2657c1', expected: 'white' },
  { color: 'fdffab', expected: 'black' },
  { color: 'fef9d9', expected: 'black' },
  { color: 'd3dbff', expected: 'black' },
];

// a loop to make AI run all your outputs
outputs.forEach(({ color, expected }) => {
  const output = network.run(color);

  // logs to help the visualization
  console.log(`output | expected`);
  console.log(`${output} | ${expected}`);
  console.log('   ---   ');
});
```

To see only **one** color's background, you can `comment` it _all_ and change to:

```javascript
const color = "your color's hex";
const output = network.run(color);

console.log(output);
```

> you can also delete, but it's not recommended

But, if you want to see **two or more** colors' background, just change the first `const output`, to the color you want.

> `Expected` property **can** be a empty string.

### How to run

To actually run this code, you can simply type `npm run code` or `yarn code`.

### Examples

Let's make a simple example using both light and dark colors.

```javascript
// a black color, we expect the bg result to be white
let color = '212121';
let output = network.run(color);

console.log(
  `darken color: ${output}` // white - voila, it works!
);
```

```javascript
// a grayish color, we expect it to return black bg
color = 'eeeeee';
output = network.run(color);

console.log(
  `light color: ${output}` // black, as we expected
);
```

## Tools

- Javascript - [Brain.js](https://github.com/BrainJS/brain.js)

## Thank you

That's my first AI project, i hope you liked it, there's a bunch more coming! 💜

[⬆️ back to top](#)
