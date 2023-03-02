import ArrayQueue from './01_实现队列结构Queue'

const queue = new ArrayQueue<String>
queue.enqueue("aaa")
queue.enqueue("cba")
queue.enqueue("nba")
console.log(queue.dequeue());
console.log("_____________");
console.log(queue.dequeue());
console.log("_____________");
console.log(queue.peek());
console.log("_____________");
console.log(queue.isEmpty());
console.log("_____________");
console.log(queue.size());

