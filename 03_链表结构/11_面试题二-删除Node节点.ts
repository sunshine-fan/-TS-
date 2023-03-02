class listNode{
  val:number
  next:listNode|null
  constructor(val?:number,next?:listNode|null){
    this.val = val===undefined?0:val
    this.next = next===undefined?null:next
  }
}
// 将后一个节点的值赋予，当前要删除的节点，并将当前删除的节点的指向后一个节点，
// 做到替换删除
function deleteNode(node:listNode|null):void{
  node!.val =  node!.next!.val
  node!.next = node!.next!.next
}
let node = new listNode(1)
let current = node
for(var i =3;i<5;i++){
  current.next = new listNode(i)
  current = current.next
}
console.log(node);
deleteNode(node.next)
console.log(node);

export {listNode}