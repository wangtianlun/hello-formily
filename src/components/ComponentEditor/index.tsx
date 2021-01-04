import React, { useState } from 'react';
import SortableTree from 'react-sortable-tree';
import 'react-sortable-tree/style.css';

interface IComponentProps {

}

const defaultTreeData = [
  { title: 'Chicken', children: [{ title: 'Egg' }] },
  { title: 'Fish', children: [{ title: 'fingerline' }] },
];

const ComponentEditor: React.FC<IComponentProps> = () => {
  const [treeData, setTreeData] = useState<any>(defaultTreeData);

  return (
    <div style={{ height: 400 }}>
      <SortableTree
        treeData={treeData}
        onChange={(treeDatas: any) => setTreeData(treeDatas)}
      />
    </div>
  )
}

export default ComponentEditor;