# Cobo-UI-Toolkit

Cobo-UI-Toolkit is a set of UI components for Cobo products. It is built on top of [React](https://reactjs.org/) and [Ant Design](https://ant.design/). All components are based on Ant Design, but with some customizations, most APIs are the same as Ant Design (https://ant.design/components/overview-cn).

## Installation

```bash
npm install @cobo/cobo-ui-toolkit
npm install antd
```

## Usage

1. use `ConfigProvider` to wrap your app. for example:
    ```tsx
    import { ConfigProvider } from '@cobo/cobo-ui-toolkit';
    import { App } from './App';

    function App() {
        return (
            <ConfigProvider>
                <App />
            </ConfigProvider>
        );
    }
    ```
2. use components from `@cobo/cobo-ui-toolkit`. eg:
    ```tsx
    import { Button } from '@cobo/cobo-ui-toolkit';

    function App() {
        return (
            <Button>Click me</Button>
        );
    }
    ```

## Components

- [Button](./cs/button.md)
- [Input](./cs/input.md)
- [Select](./cs/select.md)

# TailwindCSS config

use TailwindCss V3.

use custom tailwindcss config file `tailwind.config.js` in your project.

```js
/**
 * @type {import('tailwindcss').Config}
 */
const config = {
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      colors: {
        info: '#1F32D6',
        success: '#11C45A',
        warning: '#FA8C16',
        error: '#E74E5A',

        // 旧色值
        black: '#1c1c1c',
        black_1: '#414552',
        dark: '#222222',
        primary: '#1F32D6',
        gray_1: '#73798B',
        gray_2: '#B9BCC5',
        gray_3: '#EDEEF3',
        gray_4: '#F8F9FC',
        gray_5: '#BCBBC1',
        gray_6: '#797783',
        gray_7: '#F1F1F5',
        gray_tips_1: '#8590A6',
        gray_menu: '#F3F4F6',
        gray_border: '#EDEEF3',
        pass: '#26C165',
        // Tags 固定色彩搭配
        tagOrange: '#B54708',
        tagOrangeBg: '#F9F1DD',
        tagDeepBlue: '#026AA2',
        tagDeepBlueBg: '#EDF4F8',
        tagDarkBlue: '#3571B8',
        tagDarkBlueBg: '#3571B80D',
        tagDeepTeal: '#1C6D73',
        tagDeepTealBg: '#1C6D730D',
        tagGreen: '#067647',
        tagGreenBg: '#E4F5EB',
        tagRed: '#C11574',
        tagRedBg: '#C115740D',
        tagPurple: '#6F44AC',
        tagPurpleBg: '#6F44AC0D',
        tagBlue: '#175CD3',
        tagBlueBg: '#EFF8FF',
        tagBlueDeepBg: '#E7F0FF',
        tagBlack: '#363F72',
        tagBlackBg: '#363F720D',
        tagBrown: '#734835',
        tagBrownBg: '#7348350D',
        primaryBg: '#E8EAFA',
      },
      fontSize: {
        xxs: ['10px', '12px'],
        xs: ['12px', '16px'],
        sm: ['14px', '20px'],
        base: ['16px', '24px'],
        lg: ['18px', '28px'],
        xl: ['20px', '28px'],
        '2xl': ['24px', '32px'],
        '3xl': ['28px', '36px'],
        '4xl': ['32px', '40px'],
      },
      fontFamily: {
        poppins: ['Poppins'],
        pp: ['Poppins'],
        poppinsMd: ['Poppins-Medium', 'Poppins'],
        ppM: ['Poppins-Medium', 'Poppins'],
        poppinsSemiBold: ['Poppins-SemiBold', 'Poppins'],
        ppB: ['Poppins-SemiBold', 'Poppins'],
        oxanium: ['Oxanium'],
        oxaniumMd: ['Oxanium-Medium', 'Oxanium'],
        oxaniumSemiBold: ['Oxanium-SemiBold', 'Oxanium'],
        ox: ['Oxanium'],
        oxM: ['Oxanium-Medium', 'Oxanium'],
        oxB: ['Oxanium-SemiBold', 'Oxanium'],
        ubuntu: ['Ubuntu'],
        ub: ['Ubuntu'],
      },
      boxShadow: {
        menuLineB: '0 -1px 0 0 #EDEEF3 inset;',
        menuLineT: '0 1px 0 0 #EDEEF3 inset;',
        lineB: '0 -1px 0 0 #e5e6eb inset;',
        workflowBox: '0px 6px 18px 0px rgba(24, 28, 39, 0.04);',
      },
    },
  },
  plugins: [],
};
export default config;
```
