export class TreeNode {
  constructor(
    public key: number,
    public left?: TreeNode,
    public right?: TreeNode
  ) {}
}

export default class BinaryTree {
  constructor(public root: TreeNode) {}

  /*
   * DFS Inorder traversal
   * @link https://www.geeksforgeeks.org/inorder-traversal-of-binary-tree
   * */
  dfsInorder(): number[] {
    return this.inorder(this.root)
  }

  private inorder(node?: TreeNode): number[] {
    if (!node) return []

    return [...this.inorder(node.left), node.key, ...this.inorder(node.right)]
  }

  /*
   * DFS Preorder Traversal
   * @link https://www.geeksforgeeks.org/preorder-traversal-of-binary-tree
   * */
  dfsPreorder(): number[] {
    return this.preorder(this.root)
  }

  private preorder(node?: TreeNode): number[] {
    if (!node) return []
    return [node.key, ...this.preorder(node.left), ...this.preorder(node.right)]
  }

  /*
   * DFS Postorder Traversal
   * @link https://www.geeksforgeeks.org/postorder-traversal-of-binary-tree
   * */
  dfsPostorder(): number[] {
    return this.postorder(this.root)
  }

  private postorder(node?: TreeNode): number[] {
    if (!node) return []
    return [
      ...this.postorder(node.left),
      ...this.postorder(node.right),
      node.key,
    ]
  }

  /*
   * Find the height of the tree
   * */
  depth(): number {
    return this.maxDepth(this.root)
  }

  private maxDepth(node?: TreeNode): number {
    if (!node) return 0

    return Math.max(this.maxDepth(node.left), this.maxDepth(node.right)) + 1
  }

  /*
   * BFS Level Order Traversal
   * @link https://www.geeksforgeeks.org/level-order-tree-traversal
   * */
  bfsLevelOrder(): number[] {
    const d = this.depth()
    let arr: number[] = []
    for (let i = 1; i <= d; ++i) {
      arr.push(...this.levelOrder(this.root, i))
    }

    return arr
  }

  private levelOrder(node?: TreeNode, level: number = 1): number[] {
    if (!node) return []

    if (level === 1) {
      return [node.key]
    }

    return [
      ...this.levelOrder(node.left, level - 1),
      ...this.levelOrder(node.right, level - 1),
    ]
  }
}
