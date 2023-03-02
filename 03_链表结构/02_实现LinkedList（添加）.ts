// import {Node,LinkedList} from './01_实现_LinkedList(封装)'
// 创建Node节点类
class Node<T>{
  value:T
  next:Node<T> | null = null
  constructor(value:T){
    this.value = value
  }
}

//创建LinkedList的类
class LinkedList<T>{
  private head:Node<T> | null = null
  private size:number = 0

  get length(){
    return this.size
  }
  //链表添加操作
  append(value:T){
    const node = new Node(value)
    if(!this.head){
      this.head = node
    }else{
      //current引用指向链表
      let current = this.head
      while(current.next){
        current = current.next
      }
      current.next = node
    }
    this.size++
  }
  //遍历链表
  traverse(){
    if(!this.head) return null
    let current:Node<T> | null = this.head
    let str =""
    while(current){
      str+=current.value+"-->"
      current = current.next
    }
    return str+"null"
  }
  
}
const list =new LinkedList()
list.append(1)
// console.log(list);
list.append(2)
// console.log(list);
list.append(3)
// console.log(list);
console.log(list.traverse());
export {Node,LinkedList}