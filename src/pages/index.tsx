import React from 'react';
import SchemaEditor from '../components/SchemaEditor';
import ComponentEditor from '../components/ComponentEditor';
import { Row, Col } from 'antd';
import styles from './index.less';

export default () => {
  return (
    <div className={styles.mainWrapper}>
      <Row gutter={4} className={styles.wrapper}>
        <Col span={6} className={styles.componentEditorWrapper}>
          <ComponentEditor />
        </Col>
        <Col span={12} className={styles.schemaEditorWrapper}>
          <SchemaEditor />
        </Col>
        <Col span={6}></Col>
      </Row>
    </div>
  );
}
