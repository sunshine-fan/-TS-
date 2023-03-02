import ArrayQueue from "./01_实现队列结构Queue";

function func(n:number,m:number){
  let queue = new ArrayQueue<number>()
  for(let i=1;i<n+1;i++){
    queue.enqueue(i)
  }
  while(queue.size()>1){
    for(let i = 1; i < m; i++){
      let tag = queue.dequeue()
      if(tag) queue.enqueue(tag)
    }
    queue.dequeue()
  }
  return queue.dequeue()
}
console.log(func(5,3));

