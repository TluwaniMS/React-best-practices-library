# React Lazy Component Loading

`Lazy` allows you to delay the loading of a component's code until it's displayed for the initial time.

`lazy` provides a React component that can be included in your tree. When the code for this lazy component is in the process of loading, an attempt to render it will pause. 

e.g

Static Import Declaration:

```import MarkdownPreview from './MarkdownPreview.js';```

Dynamic Importing (Lazy-loading):

```
import { lazy } from 'react';

const MarkdownPreview = lazy(() => import('./MarkdownPreview.js'));
```

### For a more detailed lazy-loading explaination and usage click [!here](https://react.dev/reference/react/lazy#usage)