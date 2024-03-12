---
group: 'react'
toc: content
---

# hook 钩子

## useMemoRouteMatch

useRouteMatch 的 useMemo 版本

```jsx
import { useMemoRouteMatch } from '@lib/react';

export default () => {
  const match = useMemoRouteMatch();

  return <div>some</div>;
};
```
