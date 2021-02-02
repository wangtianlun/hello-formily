import React, { useRef, useEffect } from 'react';
import cls from 'classnames';
import { INodeRendererProps } from '../../types';
import { nodeRendererActions } from './context';

function isDescendant(older, younger) {
  return (
    !!older.children &&
    typeof older.children !== 'function' &&
    older.children.some(
      child => child === younger || isDescendant(child, younger)
    )
  )
}

const NodeRenderer: React.FC<INodeRendererProps> = (props) => {
  const {
    // scaffoldBlockPxWidth,
    toggleChildrenVisibility,
    connectDragPreview,
    connectDragSource,
    isDragging,
    canDrop,
    canDrag,
    node,
    title,
    subtitle,
    draggedNode,
    path,
    treeIndex,
    isSearchMatch,
    isSearchFocus,
    buttons,
    className,
    style,
    didDrop,
    onCancel,
    onUpdate,
    handleClick,
    selectPath,
    nodeAtom,
    showLeaf,
    showSibling,
    schemaInsert
  } = props;


  console.log('props: ', props);

  const contentRef = useRef(null);
  const getPathName = (path: any) => {
    if (!path) {
      return '';
    }
    return path.join('.') || '';
  }

  // useEffect(() => {
  //   const { data: { path = [] } } = node;
  //   if (getPathName(path) === selectPath) {
  //     nodeRendererActions.getSelectRow(
  //       document.querySelector(`[data-path='${props.selectPath}']`),
  //       node.data.path,
  //       nodeAtom,
  //     )
  //   }
  // }, [props.selectPath]);

  const saveContentRef = (refs: HTMLElement) => {
    contentRef.current = refs;
  }

  const nodeTitle = title || node.title;
  const nodeSubtitle = subtitle || node.subtitle;

  let drag
  if (canDrag) {
    drag = connectDragSource
  } else {
    drag = e => e;
  }

  const isDraggedDescendant = draggedNode && isDescendant(draggedNode, node);
  const isLandingPadActive = !didDrop && isDragging;
  const { data = {} } = node;
  const { status, nodeType, path: nodePath } = data;
  const isRoot = node.key === '@@root';
  const pathName = getPathName(nodePath);
  const actived = pathName === selectPath;
  const handleSelectRow = () => {
    nodeRendererActions.setActiveNode({ activeNodePath: pathName, nodeType });
    handleClick(contentRef.current, node.data.path, nodeAtom);
  }

  const renderNormal = () => {
    return (
      <div
        className={cls('rst__contentWrapper')}
        data-path={pathName}
        onClick={handleSelectRow}
      >
        <div className={cls('rst__rowLabel')}>
          {
            toggleChildrenVisibility && !isRoot && node.children && (node.children.length > 0 || typeof node.children === 'function') && (
              <div
                className={cls(node.expanded ? 'rst__collapse' : 'rst__expand')}
                onClick={(e) => {
                  toggleChildrenVisibility({ node, path, treeIndex })
                  nodeRendererActions.setChildrenVisible({
                    pathName,
                    visible: !node.expanded
                  })
                  handleSelectRow();
                  e.stopPropagation();
                }}
              ></div>
            )
          }
          <span className={cls('rst__rowTitle', {
            leaf: !node.children || (Array.isArray(node.children) && node.children.length === 0)
          })}>
            {
              typeof nodeTitle === 'function' ? nodeTitle({ node, path, treeIndex }) : nodeTitle
            }
          </span>
          {
            nodeSubtitle && (
              <span className="rst__rowSubtitle">
                {
                  typeof nodeSubtitle === 'function'
                    ? nodeSubtitle({
                      node,
                      path,
                      treeIndex,
                    })
                    : nodeSubtitle
                }
              </span>
            )
          }
        </div>
        {
          !isRoot && (
            <div className="rst__rowName">{ node.data.title }</div>
          )
        }
        {
          !isRoot && (
            <div className="rst__rowToolbar">
              {
                buttons && buttons.map((btn, index) => (
                  <div
                    key={index}
                    className="rst__toolbarButton"
                  >
                    { btn }
                  </div>
                ))
              }
            </div>
          )
        }
      </div>
    )
  }

  return (
    <>{ drag(
      <div style={{ height: '100%' }}>
        <div className={cls('rst__rowWrapper')}>
          {
            connectDragPreview(
              <div
                className={cls(
                  'rst__row',
                  isLandingPadActive && 'rst__rowLandingPad',
                  isLandingPadActive && !canDrop && 'rst__rowCancelPad',
                  isSearchMatch && 'rst__rowSearchMatch',
                  isSearchFocus && 'rst__rowSearchFocus',
                  className
                )}
                style={{ opacity: isDraggedDescendant ? 0.5 : 1, ...style, }}
              >
                <div 
                  ref={saveContentRef}
                  className={cls('rst__rowContents', {
                    'rst__rowContentsDragDisabled': !canDrag,
                    actived
                  })}
                >
                  { renderNormal() }
                </div>
              </div>
            )
          }
        </div>
        { node.title }
      </div>
    )}
    </>
  )
}

export default NodeRenderer;