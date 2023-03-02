import {listNode} from './listNode'

function reverseList(head:listNode | null): listNode|null {
  if(!head || head.next===null) return head
  //栈结构 加大了空间复杂度
  let stack:listNode[] = []
  while(head){
    stack.push(head)
    head = head.next  
  }
  let newHead:listNode = stack.pop()!
  let newHeadCurrent= newHead
  while(stack.length>0){
    newHeadCurrent.next = stack.pop()!
    newHeadCurrent = newHeadCurrent.next
  }
  newHeadCurrent.next = null 
  return newHead;
}
 
//todo 创建链表结构
let node = new listNode(1)
let current = node
for(var i =3;i<5;i++){
  current.next = new listNode(i)
  current = current.next
}
console.log("反转前"+node);
console.log("反转后"+reverseList(node));