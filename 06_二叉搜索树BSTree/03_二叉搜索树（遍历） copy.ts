import { TreeNode } from "./01_二叉搜索树（封装）";
import { btPrint } from 'hy-algokit'
//二叉搜素树封装
class BSTree<T>{
  private root:TreeNode<T> | null = null;
  //设置单层递归逻辑
  private insert(newNode:TreeNode<T>,oldNode:TreeNode<T>){
    //二叉搜素树中插入的节点值大于或者小于当前节点时
    if(newNode.value>oldNode.value){
      if(oldNode.right!==null){
        this.insert(newNode,oldNode.right)
      }else{
        oldNode.right = newNode
      }
    }else{
      if(oldNode.left!==null){
        this.insert(newNode,oldNode.left)
      }else{
        oldNode.left = newNode
      }
    }
  }
  //设置单层查找
  private searchNode(node:TreeNode<T>|null,val:T):boolean{
    if(node===null) return false
    if(val>node.value){
      this.searchNode(node.right,val)
    }else if(val<node.value){
      this.searchNode(node.left,val)
    }else{
      return true
    }
    return false
  }
  //先序遍历
  preOrderTraverse(){
    this.preOrderTraverseNode(this.root)
  }
  //中序遍历
  inOrderTraverse(){
    this.inOrderTraverseNode(this.root)
  }
  //后序遍历
  NextOrderTraverse(){
    this.NextOrderTraverseNode(this.root)
  }
  //todo 单层遍历逻辑{前 中 后 层序}
  //先序遍历
  private preOrderTraverseNode(node:TreeNode<T>|null){
    if(node===null) return
    console.log(node.value);
    this.preOrderTraverseNode(node.left)
    this.preOrderTraverseNode(node.right)
  }
  //中序遍历
  private inOrderTraverseNode(node:TreeNode<T>|null){
    if(node===null) return
    this.inOrderTraverseNode(node.left)
    console.log(node.value);
    this.inOrderTraverseNode(node.right)
  }
  //后序遍历
  private NextOrderTraverseNode(node:TreeNode<T>|null){
    if(node===null) return
    this.NextOrderTraverseNode(node.left)
    this.NextOrderTraverseNode(node.right)
    console.log(node.value);
  }
  //todo非递归{前 中 后 遍历}
  //先序遍历  
  //思路：将左节点先放入栈中 然后从栈中取出并将其右节点放入栈中 
  //判断其是否具有右节点
  preOrderTraversalNoRecursion(){
    let stack:TreeNode<T>[] = []
    let current = this.root
    while(current!==null||stack.length!==0){
      while(current!==null){
        console.log(current.value);
        stack.push(current)
        current = current.left
      }
      current = stack.pop()!
      current = current.right
    }
  }
  //中序遍历
  inOrderTraversalNoRecursion(){
    let stack:TreeNode<T>[] = []
    let current = this.root
    while(current!==null||stack.length!==0){
      while(current!==null){
        stack.push(current)
        current = current.left
      }
      current = stack.pop()!
      console.log(current.value);
      current = current.right
    }
  }
  //后续遍历 : 后续遍历的非递归比较麻烦一些
  NextOrderOrderTraversalNoRecursion(){
    let stack:TreeNode<T>[] = []
    let current:TreeNode<T>|null = this.root
    let lastVisitedNode:TreeNode<T>|null = null
    while(current!==null || stack.length!==0){
      while(current !== null){
        stack.push(current)
        current = current.left
      }
      current  = stack[stack.length-1]
      if(current.right === null && current.right === lastVisitedNode){
        console.log(current.value);
        lastVisitedNode = current
        stack.pop()
        current = null
      }else{
        current = current.right
      }
    }
  }
  //层序遍历  队列结构时间
  levelOederTraverse(){
    //如果没有根节点，那么不需要遍历
    if(!this.root) return
    //创建队列结构
    const queue:TreeNode<T>[] = []
    queue.push(this.root)
    while(queue.length>0){
      const current = queue.shift()!
      console.log(current.value);
      if(current.left!==null)queue.push(current.left)
      if(current.right!==null)queue.push(current.right)
    }
  }
  print(){
    btPrint(this.root)
  }
  //插入节点
  insertNode(value:T){
   let newNode = new TreeNode(value)
   if(this.root!== null){
      this.insert(newNode,this.root)
   }else{
      this.root = newNode
   }
  }
  //循环的方式查找某个节点是否存在
  search(node:TreeNode<T>|null,val:string):boolean{
    if(this.root===null) return false
    let current:TreeNode<T>|null = this.root
    while(current){
      if(val>current.value){
        current = current.right
      }else if(val<current.value){
        current = current.left
      }else{
        return true
      }
    }
    return false
  }
}
let bst = new BSTree<number>()
bst.insertNode(11)
bst.insertNode(7)
bst.insertNode(15)
bst.insertNode(5)
bst.insertNode(3)
bst.insertNode(9) 
bst.insertNode(8)
bst.insertNode(10)
bst.insertNode(13)
bst.insertNode(12)
bst.insertNode(14)
bst.insertNode(20)
bst.insertNode(18)
bst.insertNode(25)
bst.insertNode(6)
// bst.insertNode(11) // 相同的节点根据个人去处理？
bst.print()
//前序遍历
console.log("/////////");
// bst.preOrderTraversalNoRecursion()
console.log("/////////");
//中序遍历
// bst.inOrderTraversalNoRecursion()
console.log("/////////");
//后续遍历
// bst.NextOrderTraverse()
//层序遍历
bst.levelOederTraverse()