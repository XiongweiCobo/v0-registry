## API

### Input

#### Cobo 属性

| 参数           | 说明                         | 类型           | 默认值    |
| -------------- | ---------------------------- | -------------- | --------- |
| wrapperClassName | 最外层元素的样式                               | string                       | '' |
| ref            | input ref                                      | `React.RefObject<InputRef>`  | - |
| allowClear     | 是否允许清空                                     | boolean                      | true |
| errorMessage   | 错误信息，当 `status` 为 `error` 的时候展示在下方   | string                       | '' |
| isNumber   | 字体展示为 `Oxanium`                                | boolean                       | '' |


#### Antd 属性

| 参数           | 说明                         | 类型           | 默认值    |
| -------------- | ---------------------------- | -------------- | --------- |
| 其余参数       | [同 Input 组件的参数](https://ant.design/components/input-cn#api)     | -         | - |


## Demo

### 基本使用

最简单的用法。cobo 默认开启 `allowClear` (点击图标删除所有内容)

```tsx
import { Input } from '@cobo/cobo-ui-toolkit';

function App() {
  return (
    <div className="flex flex-col gap-2">
      <Input placeholder="Basic usage" />

      <Input size="large" placeholder="large size" />
    </div>
  );
}
```
