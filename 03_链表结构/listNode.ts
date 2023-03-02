class listNode{
  val:number
  next:listNode|null
  constructor(val?:number,next?:listNode|null){
    this.val = val===undefined?0:val
    this.next = next===undefined?null:next
  }
}
export {listNode}