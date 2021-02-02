import React, { Children, cloneElement, ReactElement } from 'react';
import { ITreeNodeProps } from '../../types';

const TreeNode: React.FC<ITreeNodeProps> = (props) => {
  const {
    children
  } = props;

  return (
    <div>
      {
        Children.map(children, child => {
          return cloneElement(child as ReactElement, {
            
          })
        })
      }
    </div>
  )
}

export default TreeNode;