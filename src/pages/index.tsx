import React, { useState } from 'react';
import SchemaEditor from '../components/SchemaEditor';
import ComponentEditor from '../components/ComponentEditor';
import { Row, Col } from 'antd';
import styles from './index.less';

export default () => {
  const [schema, setSchema] = useState({});
  const onAddComponentDone = (newSchema: any) => {
    setSchema(newSchema)
  }

  return (
    <div className={styles.mainWrapper}>
      <Row gutter={4} className={styles.wrapper}>
        <Col span={6} className={styles.componentEditorWrapper}>
          <ComponentEditor onAddDone={onAddComponentDone}/>
        </Col>
        <Col span={12} className={styles.schemaEditorWrapper}>
          <SchemaEditor schema={schema}/>
        </Col>
        <Col span={6}></Col>
      </Row>
    </div>
  );
}
