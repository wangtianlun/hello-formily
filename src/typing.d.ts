declare module 'react-eva';
interface EditorStore {
  schema: any;
  selectedComponent: any;
  onSelect: (component: any) => void;
  onUpdateSchema: (schema: any) => void;
  onPropsUpdate: (props: any) => void;
}
