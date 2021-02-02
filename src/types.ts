export interface INodeRendererProps {
  effects: any
  isSearchMatch: boolean
  isSearchFocus: boolean
  canDrag: boolean
  toggleChildrenVisibility: any
  buttons: any[]
  className: string
  style: {}
  parentNode: any
  draggedNode: any
  canDrop: boolean
  title: any
  subtitle: any
  rowDirection: string
  scaffoldBlockPxWidth: any
  connectDragPreview: any
  connectDragSource: any
  isDragging: any
  node: any
  path: any
  treeIndex: any
  didDrop: any
  treeId: any
  isOver: any
  nodeActived: any
  onCancel: any
  onUpdate: any
  handleClick: any
  selectPath: any
  types: any
  nodeAtom: any
  showLeaf: boolean
  showSibling: boolean
  schemaInsert: any
  onInsert: (e: any, params: any) => void
}

export interface ITreeNodeProps {
  swapFrom: any
  swapDepth: any
  swapLength: any
  canDrop: boolean
  draggedNode: any
  listIndex: any
  scaffoldBlockPxWidth: any
  lowerSiblingCounts: any
  connectDropTarget: any
  isOver: any
  treeIndex: any
  node: any
  path: any
  rowDirection: any
  selectPath: string
}