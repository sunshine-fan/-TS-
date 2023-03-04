import { btPrint } from 'hy-algokit'
import Node from '../types/Node'
class TreeNode <T> extends Node<T>{
  left:TreeNode <T> | null = null;
  right:TreeNode <T> | null = null;
  //当前节点的父节点
  parent:TreeNode<T>|null =null;
  //判断当前节点是父节点的左右子节点
  get isLeft():boolean{
    return !!(this.parent && this.parent.left === this)
  }
  get isRight():boolean{
    return !!(this.parent && this.parent.right === this)
  }
}
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
  //设置单层查找 递归查找某个值是否存在
  private searchNode(value:T):TreeNode<T>|null{
    // 1.搜索：当前是否有这个value
    let current = this.root
    let parent:TreeNode<T>|null  = null 
    while(current){
      //1.如果找到我们的current,直接返回即可
      if(current.value === value){
        return current
      }
      // 2.继续向下寻找
      parent = current
      if(value>current.value){
        current = current.right
      }else{
        current = current.left
      }
      //如果current有值，那么current保存自己的父节点
      if(current!==null)current.parent = parent
    }   
    return null
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
  //获取最大值  获取最小值雷同
  getMaxValue(){
    if(!this.root) return null
    let current:TreeNode<T>|null = this.root 
    while(current){
      if(current.right===null) return current.value
      current = current.right  
    }
  }
  getMinValue(){
    let current:TreeNode<T>|null = this.root 
    while(current&&current.left!==null){
      current = current.left
    }
    //curent为null的时候返回null
    return current?.value??null
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
  search(val:T):boolean{
    return !!this.searchNode(val)
  }
  //实现删除操作
  remove(value:T):boolean{
    let current =  this.searchNode(value)
    //1.未搜索到
    if(!current) return false
    //获取到 1.当前节点 2.父节点  3.属于父节点的左右节点
    console.log("当前节点："+current.value+" 父节点："+current.parent?.value);
    //2.如果删除的叶子节点
    if(current.left===null&&current.right===null){
      if(current.parent===null)return false
      if(current.isLeft){
        current.parent.left = null
      }else{
        current.parent.right = null
      }
    }
    return true
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
bst.remove(3);
bst.remove(6);
bst.remove(8);
bst.print()

