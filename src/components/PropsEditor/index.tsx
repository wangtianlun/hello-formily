import React, { useContext, useEffect } from 'react';
import { Form, Checkbox, Input, Button } from 'antd';
import EditorContext from '../../store/context';
import { actions } from '../SchemaEditor';

interface IComponentProps {
  selectedComponent: any
}

const PropsEditor: React.FC<IComponentProps> = ({
  selectedComponent
}) => {
  const [form] = Form.useForm();
  const context = useContext<any>(EditorContext);
  const fieldKeys = selectedComponent ? Object.keys(selectedComponent) : [];
  const props = fieldKeys.length ? selectedComponent[fieldKeys[0]] : {}
  const componentProps = props['x-component-props']

  const onFinish = (values: any) => {
    context.onPropsUpdate(values)
    actions.setFieldState(fieldKeys[0], state => {
      state.value = '123'
    })
  }

  useEffect(() => {
    form.setFieldsValue({
      ...props,
      ...componentProps,
    })
  }, [selectedComponent]);

  return (<>
    <h4>属性编辑</h4>
    <Form 
      form={form} 
      onFinish={onFinish}
    >
      {
        selectedComponent && (
          <Form.Item label="字段label" key="title" name="title">
            <Input />
          </Form.Item>
        )
      }
      {
        componentProps && Object.keys(componentProps).map(key => {
          switch (key) {
            case 'disabled':
              return <Form.Item label="禁用状态" valuePropName="checked" key={key} name={key}>
                <Checkbox>是否禁用</Checkbox>
              </Form.Item>
            case 'placeholder':
              return <Form.Item label="placeholder" key={key} name={key}>
                <Input />
              </Form.Item>
            default: return null
          }
        })
      }
      {
        componentProps && (
          <Form.Item>
            <Button type="primary" htmlType="submit">
              保存
            </Button>
          </Form.Item>
        )
      }
    </Form>
  </>)
}

export default PropsEditor;