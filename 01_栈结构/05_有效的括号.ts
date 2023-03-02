
import ArrayStack from './01_实现栈结构'

function isValid(s:string):boolean{
  const Stack  = new ArrayStack<string>()
  for(let i =0; i<s.length; i++){
    let tag  = s[i]
    switch(tag){
      case "(":
        Stack.push(")")
      break;
      case "{":
        Stack.push("}")
      break;
      case "[":
        Stack.push("]")
      break;
      default:
        if(tag!==Stack.pop()){
          return false;
        }
        break;
    }
  }
  return Stack.isEmpty();
}
console.log(isValid("()"));
console.log(isValid("{}()["));
console.log(isValid("{)"));