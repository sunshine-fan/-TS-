import {listNode} from './listNode'


function reverseList(head:listNode | null): listNode|null {
  if(!head || head.next===null) return head
  let newHead = reverseList(head.next)
  head.next.next = head
  head.next = null
  return newHead
} 

//todo 创建链表结构
let node = new listNode(1)
let current = node
for(var i =3;i<5;i++){
  current.next = new listNode(i)
  current = current.next
}
console.log("反转前");
console.log(node);
console.log("反转后");
console.log(reverseList(node));
