console.log("Hello, world!");
import * as tf from "@tensorflow/tfjs";

console.log("ssss", tf.version);

// const t0  = tf.tensor(1)
// t0.print()
// const t2 = tf.tensor([[1,2],[3,4,5]])
// t2.print()
// console.log('t2',t2);
// const t3 = tf.tensor([[[1],[2,3]]])
// t3.print()
// console.log('t3',t3);

const input = [1, 2, 3, 4];
const w = [
  [1, 2, 3, 4],
  [2, 3, 4, 5],
  [3, 4, 5, 6],
  [5, 6, 7, 8],
];
const output = [0, 0, 0, 0];
for (let i = 0; i < w.length; i++) {
  for (let j = 0; j < input.length; j++) {
    output[i] += input[j] * w[i][j];
  }
}
console.log("output", output);

tf.tensor(w).dot(tf.tensor(input)).print();