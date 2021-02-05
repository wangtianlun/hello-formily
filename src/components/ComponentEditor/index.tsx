import React, { useContext } from 'react';
import EditorContext from '../../store/context';
import { Button } from 'antd';

interface IComponentProps {

}

let fieldId = 0

const ComponentEditor: React.FC<IComponentProps> = () => {
  const context = useContext<any>(EditorContext);

  const onAddInput = () => {
    const componentId = fieldId++
    const newComponent = {
      [`NO_NAME_FIELD_${componentId}`]: {
        key: `NO_NAME_FIELD_${componentId}`,
        type: 'string',
        'x-component': 'input',
        'x-component-props': {
          disabled: false,
          placeholder: '请输入',
          onClick: () => {
            context.onSelect(newComponent)
          }
        }
      }
    }
    const newSchema = {
      ...context.schema,
      properties: {
        ...context.schema.properties,
        ...newComponent,
      }
    }
    context.onUpdateSchema(newSchema);
  }

  return (
    <div style={{ height: 400 }}>
      <Button onClick={onAddInput}>文本框</Button>
    </div>
  )
}

export default ComponentEditor;