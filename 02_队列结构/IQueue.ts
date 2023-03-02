// 定义队列方法接口
interface IQueue<T>{
  //入队
  enqueue(ele:T):void;
  //出队
  dequeue():T  | undefined;
  // 查看队头元素
  peek():T|undefined;
  //队列是否为空
  isEmpty():boolean;
  //队列长度
  size():number;
}
export default IQueue