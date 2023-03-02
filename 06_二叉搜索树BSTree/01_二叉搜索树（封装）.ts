import Node from '../types/Node'
//单一树节点  节点可能为空
class TreeNode <T> extends Node<T>{
  left:TreeNode <T> | null = null;
  right:TreeNode <T> | null = null;
}
//二叉搜素树封装
class BSTree<T>{
  private root:TreeNode<T> | null = null
}
export {TreeNode,BSTree}