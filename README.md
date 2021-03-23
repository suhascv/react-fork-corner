# react-fork-corner

> fork corner for react.js/next.js apps

[![NPM](https://img.shields.io/npm/v/react-fork-corner.svg)](https://www.npmjs.com/package/react-fork-corner) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Install

```bash
npm install --save react-fork-corner
```

## Usage

```jsx
import React, { Component } from 'react'

import ReactForkCorner from 'react-fork-corner'
import 'react-fork-corner/dist/index.css'


class Example extends Component {
  render() {
    return (<ReactForkCorner
          link={"https://github.com/suhascv/react-fork-corner"}
          cornerPosition={"tl"}
          size={"small"}
        />
        <ReactForkCorner link={"https://github.com/suhascv/react-fork-corner"} />
        <ReactForkCorner
          link={"https://github.com/suhascv/react-fork-corner"}
          cornerPosition={"bl"}
          size={"medium"}
          theme={"gitlab"}
        />
        <ReactForkCorner
          link={"https://github.com/suhascv/react-fork-corner"}
          cornerPosition={"br"}
          size={"large"}
        />)
  }
}
```
## Result
![Screenshot from 2021-03-22 19-41-44](https://user-images.githubusercontent.com/43292181/112072764-ea50c480-8b48-11eb-814c-85e79dceb923.png)
## License

MIT © [suhascv](https://github.com/suhascv)
