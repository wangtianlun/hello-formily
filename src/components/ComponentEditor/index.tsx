import React, { useState } from 'react';
import { Button } from 'antd';

interface IComponentProps {
  onAddDone: (schema: any) => void;
}

let fieldId = 0

const ComponentEditor: React.FC<IComponentProps> = ({
  onAddDone
}) => {
  const [schema, setSchema] = useState({ type: 'object', properties: {} });

  const onAddInput = () => {
    const componentId = fieldId++
    const newSchema = {
      ...schema,
      properties: {
        ...schema.properties,
        [`NO_NAME_FIELD_${componentId}`]: {
          key: `NO_NAME_FIELD_${componentId}`,
          type: 'string',
          'x-component': 'input'
        }
      }
    }
    onAddDone(newSchema);
    setSchema(newSchema);
  }

  return (
    <div style={{ height: 400 }}>
      <Button onClick={onAddInput}>文本框</Button>
    </div>
  )
}

export default ComponentEditor;