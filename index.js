const brain = require('brain.js');
const data = require('./data.json');

const network = new brain.recurrent.LSTM();

const outputs = [
  { color: '342b38', expected: 'white' },
  { color: '530c0c', expected: 'white' },
  { color: '247291', expected: 'white' },
  { color: '2657c1', expected: 'white' },
  { color: 'fdffab', expected: 'black' },
  { color: 'fef9d9', expected: 'black' },
  { color: 'd3dbff', expected: 'black' },
];

network.train(data, {
  // increase to get a more precise result
  iterations: 1000,
  log: true,
});

outputs.forEach(({ color, expected }) => {
  const output = network.run(color);

  console.log(`output | expected`);
  console.log(`${output} | ${expected}`);
  console.log('   ---   ');
});
