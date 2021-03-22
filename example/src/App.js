import React from 'react'
import './index.css';
import ReactForkCorner  from 'react-fork-corner';
import 'react-fork-corner/dist/index.css'

const App = () => {
  return <div className="App1">
  <ReactForkCorner
          link={"https://github.com/suhascv/calculator-js"}
          cornerPosition={"tl"}
          size={"small"}
        />
        <ReactForkCorner link={"https://github.com/suhascv/calculator-js"} />
        <ReactForkCorner
          link={"https://github.com/suhascv/calculator-js"}
          cornerPosition={"bl"}
          size={"medium"}
          theme={"gitlab"}
        />
        <ReactForkCorner
          link={"https://github.com/suhascv/calculator-js"}
          cornerPosition={"br"}
          size={"large"}
        />
  </div>
}

export default App;
