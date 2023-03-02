import ArrayQueue from "./01_实现队列结构Queue";

function lastRemaining(n:number,m:number){
  let queue = new ArrayQueue<number>()
  for(let i=1;i<n+1;i++){
    queue.enqueue(i)
  }
  while(queue.size()>1){
    for(let i = 1; i < m; i++){
      queue.enqueue(queue.dequeue()!)
    }
    queue.dequeue()
  }
  return queue.dequeue()
}
console.log(lastRemaining(5,3));
console.log(lastRemaining(10,17));
//非空断言，当你明确知道某个值不可能为 undefined 和 null 时，
//你可以用 在变量后面加上一个 !（非空断言符号）来告诉编译器："嘿！相信我，我确信这个值不为空！"

