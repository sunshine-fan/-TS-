class stack<T>{
  private arr:T[] = [] 
  //压入栈
  push(ele:T){
    this.arr.push(ele) 
  }
  //栈顶元素弹出栈
  pop():T|undefined{
    return this.arr.pop()
  }
  //查看栈顶元素
  peek():T{
    return this.arr[this.arr.length-1]
  }
  isEmpty():boolean{
    return this.arr.length === 0
  }
  size():number{
    return this.arr.length
  }
}
export default stack; 
// let stack1 = new stack<string>()
// stack1.push("aaa")
// stack1.push("bbb")
// stack1.push("ccc")
// stack1.push("ddd")
// console.log(stack1);
// console.log(stack1.peek());
// console.log(stack1.pop());
// console.log(stack1.pop());
// console.log(stack1.isEmpty());
// console.log(stack1.size());

