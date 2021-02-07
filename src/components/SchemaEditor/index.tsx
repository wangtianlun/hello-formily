import React, { useContext } from 'react';
import { SchemaForm, LifeCycleTypes, createFormActions } from '@formily/antd';
import EditorContext from '../../store/context';
import { 
  Input, 
  Select, 
  DatePicker,
  Radio,
  Checkbox,
  NumberPicker,
  TimePicker,
  Upload,
  Switch,
  Range,
  Transfer,
  Rating
} from '@formily/antd-components';

import 'antd/dist/antd.css';

const components = {
  Input,
  Radio: Radio.Group,
  Checkbox: Checkbox.Group,
  TextArea: Input.TextArea,
  NumberPicker,
  Select,
  Switch,
  DatePicker,
  DateRangePicker: DatePicker.RangePicker,
  YearPicker: DatePicker.YearPicker,
  MonthPicker: DatePicker.MonthPicker,
  WeekPicker: DatePicker.WeekPicker,
  TimePicker,
  TimeRangePicker: TimePicker.RangePicker,
  Upload,
  Range,
  Rating,
  Transfer
}

interface IComponentProps {
}

export const actions = createFormActions()

const SchemaEditor: React.FC<IComponentProps> = () => {
  const context = useContext<any>(EditorContext);
  return (
    <SchemaForm
      labelCol={5}
      wrapperCol={14}
      actions={actions}
      components={components}
      schema={context.schema}
      effects={($) => {
        $(LifeCycleTypes.ON_FORM_INIT).subscribe(() => {
          console.log('form init')
        })
      }}
    />
  )
}

export default SchemaEditor;