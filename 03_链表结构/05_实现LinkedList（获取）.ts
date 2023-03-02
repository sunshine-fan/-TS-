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
    const head = this.head
    if(!head){
      this.head = node
      this.size++
      return this.head
    }else{
      let current:Node<T> | null = head
      while(current.next){
        current = current!.next
      }
      current.next = node
      this.size++
      return current
    }
  }
  //插入操作 引出了Node节点的位置属性
  insert(value:T,position:number):boolean{
    //判断越界问题
    if(position<0 || position>this.size) return false;
    const newNode = new Node(value)
    //判断当前插入是否是第一个节点
    let current = this.head
    if(position===0){
      newNode.next = current
      //head也是一个节点
      this.head = newNode
    }else{
      let index = 0
      //记录前一个节点
      let previous:Node<T> | null = null
      while(index<position&&current){
        previous = current
        current = current?.next!
        index++
      }
      newNode.next = current
      previous!.next = newNode
    }
    this.size++
    //默认返回
    return true;
  }
  //删除链表中指定位置元素
  removeAt(position:number):T|null{
    if(position<0||position>this.size) return null
    let current = this.head;
    if(position===0){
      current = null
    }else{
      let index = 0
      let previous:Node<T> | null = null
      while(index++<position){
        previous = current
        current = current!.next
      }
      // 当current?.next为空或者是underfined时，将其设置为null
      previous!.next = current?.next??null
    }
    this.size--;
    return current!.value;
  }
  //过去对应位置的元素
  get(position:number):T|null{
    if(position<0||position>this.size) return null
    let current = this.head
    let index = 0
    while(index++<position&&current){
      current= current.next
    }
    return current?.value??null
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
list.append(2)
list.append(3)
list.insert(9,2)
list.insert(8,4)
console.log(list.traverse());
// list.removeAt(2)
console.log(list.removeAt(2)); //删除操作
console.log(list.traverse());
console.log(list.get(3)); //8 
export {Node,LinkedList}