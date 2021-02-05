import React, { useState } from 'react';
import SchemaEditor from '../components/SchemaEditor';
import ComponentEditor from '../components/ComponentEditor';
import PropsEditor from '../components/PropsEditor';
import EditorContext from '../store/context';
import { Row, Col } from 'antd';
import styles from './index.less';

export default () => {
  const [schema, setSchema] = useState({
    type: 'object', 
    properties: {}
  });
  const [selectedComponent, setSelectedComponent] = useState();
  const onSelect = (component: any) => {
    console.log('component: ', component)
    setSelectedComponent(component)
  }
  const onUpdateSchema = (newSchema: any) => {
    setSchema(newSchema)
  }

  const onPropsUpdate = (newProps: any) => {
    console.log('newProps: ', newProps)
  }

  return (
    <EditorContext.Provider value={{
      schema,
      selectedComponent,
      onSelect,
      onUpdateSchema,
      onPropsUpdate
    }}>
      <div className={styles.mainWrapper}>
        <Row gutter={4} className={styles.wrapper}>
          <Col span={6} className={styles.componentEditorWrapper}>
            <ComponentEditor />
          </Col>
          <Col span={12} className={styles.schemaEditorWrapper}>
            <SchemaEditor />
          </Col>
          <Col span={6} className={styles.propsEditorWrapper}>
            <PropsEditor selectedComponent={selectedComponent}/>
          </Col>
        </Row>
      </div>
    </EditorContext.Provider>
  );
}
