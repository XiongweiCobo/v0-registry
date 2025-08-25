
## API

| 参数           | 说明                           | 类型           | 默认值    |
| -------------- | ---------------------------- | -------------- | -------- |
| allowClear     | 是否允许清空                   | boolean        | true     |
| menuItemSelectedIcon | 自定义多选时当前选中的条目图标，如果你通过 `optionRender` 自定义渲染了「选中图标」，需要把这个置为 `false`，否则有两个图标 | ReactNode | `<CheckOutlined />` |
| 其余参数       | [同 Select 组件的参数](https://ant.design/components/select-cn#api)   | - | - |


## Demo

### 基本用法

```tsx
import { Select } from '@cobo/cobo-ui-toolkit';
import { Space } from 'antd';

const handleChange = (value: string) => {
  console.log(`selected ${value}`);
};

const App: React.FC = () => (
  <Space wrap>
    <Select
      defaultValue="lucy"
      style={{ width: 120 }}
      onChange={handleChange}
      options={[
        { value: 'jack', label: 'Jack' },
        { value: 'lucy', label: 'Lucy' },
        { value: 'Yiminghe', label: 'yiminghe' },
        { value: 'disabled', label: 'Disabled', disabled: true },
      ]}
    />
    <Select
      defaultValue="lucy"
      style={{ width: 120 }}
      disabled
      options={[{ value: 'lucy', label: 'Lucy' }]}
    />
    <Select
      defaultValue="lucy"
      style={{ width: 120 }}
      loading
      options={[{ value: 'lucy', label: 'Lucy' }]}
    />
    <Select
      defaultValue="lucy"
      style={{ width: 120 }}
      allowClear
      options={[{ value: 'lucy', label: 'Lucy' }]}
      placeholder="select it"
    />
  </Space>
);
```