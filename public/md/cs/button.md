## API

### Cobo 属性

| 参数           | 说明                           | 类型           | 默认值    |
| -------------- | ---------------------------- | -------------- | -------- |
| autoLoading | 点击按钮后会显示 loading，等待 `onClick` 执行完毕后，loading 消失。如果设置了 `loading` 属性，则 `autoLoading` 无效。 | boolean | false |

### Antd 属性

| 参数           | 说明                           | 类型           | 默认值    |
| -------------- | ---------------------------- | -------------- | -------- |
| type | 按钮类型，当设置 `variant` 与 `color` 时以后者为准 | `primary` \| `secondary` \| `dashed` \| `text` \| `link` | `primary` |
| 其余参数       | [同 Button 组件的参数](https://ant.design/components/button-cn#api)   | - | - |

## Demo

### 基本使用

通过 `type` 语法糖，使用预设的按钮样式：主按钮、次按钮、虚线按钮、文本按钮和链接按钮。推荐主按钮在同一个操作区域最多出现一次。**Cobo 默认的按钮是 `primary`**

```tsx
import { Button } from '@cobo/cobo-ui-toolkit';

function App() {
  return (
    <div className="flex gap-2">
      <Button>Primary Button</Button>
      <Button type="secondary">Secondary Button</Button>
      <Button type="dashed">Dashed Button</Button>
      <Button type="text">Text Button</Button>
      <Button type="link">Link Button</Button>
    </div>
  );
}
```
