import React, { useContext } from 'react';
import EditorContext from '../../store/context';
import { Button, Space } from 'antd';
interface IComponentProps {

}

enum ComponentNames {
  Input = 'input',
  Select = 'select',
  DatePicker = 'datepicker'
}

let fieldId = 0

const ComponentEditor: React.FC<IComponentProps> = () => {
  const context = useContext<any>(EditorContext);

  const onAddComponent = (componentName: ComponentNames) => {
    console.log('ComponentNames: ', ComponentNames)
    const componentId = fieldId++
    const newComponent = {
      [`NO_NAME_FIELD_${componentId}`]: {
        key: `NO_NAME_FIELD_${componentId}`,
        type: 'string',
        title: `NO_NAME_FIELD_${componentId}`,
        'x-component': componentName,
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
      <h4>操作栏</h4>
      <Space>
        <Button onClick={() => onAddComponent(ComponentNames.Input)}>文本框</Button>
        <Button onClick={() => onAddComponent(ComponentNames.Select)}>下拉框</Button>
        <Button onClick={() => onAddComponent(ComponentNames.DatePicker)}>日期</Button>
      </Space>
    </div>
  )
}

export default ComponentEditor;