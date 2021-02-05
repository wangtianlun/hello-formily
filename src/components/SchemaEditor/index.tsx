import React, { useContext } from 'react';
import { SchemaForm } from '@formily/antd';
import EditorContext from '../../store/context';
import { Input } from '@formily/antd-components';

import 'antd/dist/antd.css';

interface IComponentProps {
}

const SchemaEditor: React.FC<IComponentProps> = () => {
  const context = useContext<any>(EditorContext);
  return (
    <SchemaForm
      components={{ Input }}
      schema={context.schema}
    />
  )
}

export default SchemaEditor;