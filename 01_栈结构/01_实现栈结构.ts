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


