import React from 'react';
import { SchemaForm, SchemaMarkupField as Field, FormButtonGroup, Submit, Reset } from '@formily/antd';
import { Input } from '@formily/antd-components';
import 'antd/dist/antd.css';

interface IComponentProps {
  schema: any
}

const SchemaEditor: React.FC<IComponentProps> = ({
  schema
}) => {
  return (
    <SchemaForm
      components={{ Input }}
      schema={schema}
    />
  )
}

export default SchemaEditor;