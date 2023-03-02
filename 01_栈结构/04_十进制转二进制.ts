//todo 十进制转为二进制和(字节)
// Math.floor() 函数总是返回小于等于一个给定数字的最大整数。

import ArrayStack from "./01_实现栈结构"
function decimalToBinary(decimal:number):string{
  const stack = new ArrayStack<number>()
  while(decimal>0){
    const result  = decimal %  2
    stack.push(result)
    decimal  =  Math.floor(decimal / 2)
  }
  let str = ""
  while(!stack.isEmpty()){
    str+=stack.pop()
  }
  return str;
}
decimalToBinary(100)