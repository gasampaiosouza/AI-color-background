const brain = require('brain.js');
const data = require('./data.json');

const network = new brain.recurrent.LSTM();

// increase: +precision && +time | decrease: -precision && -time;
const iterations = 750;

network.train(data, {
  iterations,
  // allow logs on console while running
  log: true,
});

const outputs = [
  { color: '342b38', expected: 'white' },
  { color: '530c0c', expected: 'white' },
  { color: '247291', expected: 'white' },
  { color: '2657c1', expected: 'white' },
  { color: 'fdffab', expected: 'black' },
  { color: 'fef9d9', expected: 'black' },
  { color: 'd3dbff', expected: 'black' },
];

outputs.forEach(({ color, expected }) => {
  const output = network.run(color);

  console.log(`output | expected`);
  console.log(`${output} | ${expected}`);
  console.log('   ---   ');
});

// examples - don't forget to comment the code above before running this one
// let color = '212121';
// let output = network.run(color);

// console.log(`darken color: ${output}`);

// color = 'eeeeee';
// output = network.run(color);

// console.log(`light color: ${output}`);
