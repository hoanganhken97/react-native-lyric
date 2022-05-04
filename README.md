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

## Contributing

See the [contributing guide](CONTRIBUTING.md) to learn how to contribute to the repository and the development workflow.

## License

MIT
