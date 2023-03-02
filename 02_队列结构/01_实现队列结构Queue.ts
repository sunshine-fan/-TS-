import IQueue from "./IQueue";

// 定义队列方法接口
class ArrayQueue<T> implements IQueue<T>{
  private arr:T[]=[];
  enqueue(ele: T): void {
    this.arr.push(ele);
  }
  dequeue(): T | undefined {
    return this.arr.shift();
  }
  peek(): T | undefined {
     return this.arr[0];
  }
  isEmpty(): boolean {
    return this.arr.length===0;
  }
  size(): number {
     return this.arr.length;
  }

}
export default ArrayQueue