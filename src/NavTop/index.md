<!--
 * @Author: chessman cjb15770595346@163.com
 * @Date: 2023-07-30 14:53:18
 * @LastEditors: chessman cjb15770595346@163.com
 * @LastEditTime: 2023-07-30 15:04:47
 * @FilePath: /main-framework-sdk/src/NavTop/index.md
 * @Description:
 *
 * Copyright (c) 2023 by ${git_name_email}, All Rights Reserved.
-->

# NavTop

```jsx
import { NavTop } from 'main-framework-sdk';

export default () => (
  <NavTop
    renderLeftSlot={() => {
      return <>aaaa</>;
    }}
    renderRightSlot={() => {
      return <div>right</div>;
    }}
  />
);
```
