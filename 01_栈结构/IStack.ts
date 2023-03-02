interface IStack<T>{
  push(element:T):void;
  pop():T | undefined;
  peek():T | undefined;
  isEmyty():boolean;
  size():number;
}
export default IStack