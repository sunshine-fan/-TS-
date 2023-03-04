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
    this.preOrderTravseNode(this.root)
  }
  //单层遍历逻辑
  private preOrderTravseNode(node:TreeNode<T>|null){
    if(node===null) return
    console.log(node.value);
    this.preOrderTravseNode(node.left)
    this.preOrderTravseNode(node.right)
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
bst.preOrderTraverse()