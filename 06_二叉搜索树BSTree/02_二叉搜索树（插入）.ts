import { TreeNode } from "./01_二叉搜索树（封装）";
import { btPrint } from 'hy-algokit'
//二叉搜素树封装
class BSTree<T>{
  private root:TreeNode<T> | null = null;
  print(){
    btPrint(this.root)
  }
  insertNode(value:T){
    let newNode = new TreeNode<T>(value)
    if(this.root!==null){
      this.insert(newNode,this.root)
    }else{
      this.root = newNode
    }
  }
  //设置单层递归逻辑
  private insert(newNode:TreeNode<T>,oldNode:TreeNode<T>){
    // if(newNode.value=oldNode.value) return "不符合二叉搜索树条件";
    if(newNode.value<oldNode.value){
      if(oldNode.left!==null){
        this.insert(newNode,oldNode.left);
      }else{
        oldNode.left = newNode;
      }
    }else{
        if(oldNode.right!==null){
          this.insert(newNode,oldNode.right)
        }else{
          oldNode.right = newNode
        }
    }
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