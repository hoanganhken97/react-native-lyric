# react-native-lyric

lyric,lrc,karaoke

## Installation

```sh
npm install react-native-lyric
```

## Usage

```js
import React, { useCallback } from 'react';
import { Text } from 'react-native';
import { Lrc } from 'react-native-lrc';

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
  const onCurrentLineChange = useCallback(
    ({ lrcLine: { millisecond, content }, index }) =>
      console.log(index, millisecond, content),
    [],
  );

  return (
    <Lrc
      style={{ height: 500 }}
      lrc={lrc}
      currentTime={currentTime}
      lineHeight={16}
      lineRenderer={lineRenderer}
      onCurrentLineChange={onCurrentLineChange}
    />
  );
};

export default Lyric;
// ...

```

## Contributing

See the [contributing guide](CONTRIBUTING.md) to learn how to contribute to the repository and the development workflow.

## License

MIT
