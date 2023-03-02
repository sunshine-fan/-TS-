import ArrayQueue from './01_实现队列结构Queue'

function foo(arr:string[],num:number):string|undefined{
  const queue = new  ArrayQueue<string>();
  for (let i = 0; i < arr.length; i++) {
    queue.enqueue(arr[i])
  }
  let tag = 0;
  while(queue.size()>1){
    if(++tag!==3){
      let str = queue.dequeue()
      if(str!==undefined){
        queue.enqueue(str)
      }
      tag++
    }else{
      queue.dequeue()
      tag=0
    }
  }
  return queue.peek()
}
const leftName = foo(["why","james","kobe","curry"],3) 
console.log(leftName);
