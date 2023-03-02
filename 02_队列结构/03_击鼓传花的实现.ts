import ArrayQueue from './01_实现队列结构Queue'

function hotPotato(arr:string[],num:number){
  //创建队列结构
  const queue = new  ArrayQueue<string>();
  //入队
  for (const ele of arr) {
    queue.enqueue(ele)
  }
  while(queue.size()>1){
    for(let i =1;i<num;i++){
      const name =queue.dequeue()
      if(name)queue.enqueue(name)
    }
    queue.dequeue()
  }
  return queue.dequeue()
}
const leftName = hotPotato(["why","james","kobe","curry","abc","cba","nba"],4) 
console.log(leftName);
