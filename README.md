# react-native-lyric

lyric,lrc,karaoke

Demo app

<p align="center">
<img src="/introl.gif" height="500" />
</p>

## Installation

```sh
npm install react-native-lyric
```

## Usage

```js
import React, { useCallback } from 'react';
import { Text } from 'react-native';
import { Lyric } from 'react-native-lyric';

const Lyric = ({ lrc, currentTime }) => {
  const lineRenderer = useCallback(
    ({ lrcLine: { millisecond, content }, index, active }) => (
      <Text
        style={{ textAlign: 'center', color: active ? 'white' : 'gray' }}>
        {content}
      </Text>
    ),
    [],
  );

  return (
    <Lyric
      style={{ height: 500 }}
      lrc={lrc}
      currentTime={currentTime}
      lineHeight={16}
      lineRenderer={lineRenderer}
    />
  );
};

export default Lyric;
// ...

```
### `lyric` Props

| prop                      | description                                                                          | type                                                                                                             | default                                                                                                                          |
| ------------------------- | ------------------------------------------------------------------------------------ | ---------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------- |
| lrc                       | lrc string                                                                           | string                                                                                                           | required                                                                                                                         |
| lineRenderer              | lrc line render method                                                               | ({ lrcLine: { id: string, millisecond: number, content: string }, index: number, active: boolean }) => ReactNode | ({ lrcLine: { content }, active }) => (<Text style={{ textAlign: 'center', color: active ? 'green' : '#666' }}>{content}</Text>) |
| currentTime               | current time                                                                         | number, **millisecond**                                                                                          | 0                                                                                                                                |
| autoScroll                | whether auto scroll                                                                  | boolean                                                                                                          | true                                                                                                                             |
| autoScrollAfterUserScroll | auto scroll after user scroll                                                        | number, **millisecond**                                                                                          | 6000                                                                                                                             |
| onCurrentLineChange       | when current line change                                                             | ({ index: number, lrcLine: { id: string, millisecond: number, content: string } \| null }) => void               | null                                                                                                                             |
| lineHeight                | lrc line height                                                                      | number                                                                                                           | 16                                                                                                                               |
| activeLineHeight          | active lrc line height                                                               | number                                                                                                           | `lineHeight`                                                                                                                     |
| height                    | lrc container height                                                                 | number                                                                                                           | 500                                                                                                                              |
| `other props`             | other react-native [ScrollView](https://reactnative.dev/docs/scrollview#props) Props | -                                                                                                                | -                                                                                                                                |

### `lyric` Methods

| method              | description                                | type                                                                                           |
| ------------------- | ------------------------------------------ | ---------------------------------------------------------------------------------------------- |
| scrollToCurrentLine | scroll to current line and set auto scroll | () => void                                                                                     |
| getCurrentLine      | get the current lrc line                   | () => { lrcLine: { id: string, millisecond: number, content: string } \| null, index: number } |

