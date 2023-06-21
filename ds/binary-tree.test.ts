import BinaryTree, { TreeNode } from "./binary-tree"

test("binary tree", () => {
  const root = new TreeNode(1)
  root.left = new TreeNode(2)
  root.right = new TreeNode(3)
  root.left.left = new TreeNode(4)
  root.left.right = new TreeNode(5)
  root.right.left = new TreeNode(6)
  root.right.right = new TreeNode(7)
  const tree = new BinaryTree(root)
  expect(tree.dfsInorder()).toStrictEqual([4, 2, 5, 1, 6, 3, 7])
  expect(tree.dfsPreorder()).toStrictEqual([1, 2, 4, 5, 3, 6, 7])
  expect(tree.dfsPostorder()).toStrictEqual([4, 5, 2, 6, 7, 3, 1])
  expect(tree.depth()).toBe(3)
  expect(tree.bfsLevelOrder()).toStrictEqual([1, 2, 3, 4, 5, 6, 7])
})
