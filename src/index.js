import React from "react";
import "./ReactForkCorner.scss";

import { GitHub, Gitlab } from "react-feather";

function ReactForkCorner(props) {
  let forkCornerStyle = props.cornerPosition
    ? getCornerPosition(props.cornerPosition)
    : getCornerPosition("tr");
  let size = props.size ? props.size : "regular";
  let genericStyle = getGenericStyle(size);
  let allStyles = { ...forkCornerStyle, ...genericStyle };

  let theme = props.theme ? props.theme : "github";
  const icon = getIcon(size, theme);
  return (
    <div className="react-fork-corner" style={allStyles}>
      <a href={props.link} target="__blank">
        {icon}
      </a>
    </div>
  );
}

const getCornerPosition = (pos) => {
  if (pos === "tl") {
    return {
      position:"fixed",
      display:"inline-flex",
      top: 0,
      left: 0,
      backgroundImage:
        "linear-gradient(-45deg,transparent 0%,transparent 50%,#f34f29 51%,#f34f29 100%)",
      justifyContent: "flex-start",
      alignItems: "flex-start",
      paddingLeft: "1rem",
      paddingTop: "0.5rem"
    };
  } else if (pos === "bl") {
    return {
      position:"fixed",
      display:"inline-flex",
      bottom: 0,
      left: 0,
      backgroundImage:
        "linear-gradient(-135deg,transparent 0%,transparent 50%,#f34f29 51%,#f34f29 100%)",
      justifyContent: "flex-start",
      alignItems: "flex-end",
      paddingLeft: "1rem",
      paddingBottom: "0.5rem"
    };
  }
  if (pos === "br") {
    return {
      position:"fixed",
      display:"inline-flex",
      bottom: 0,
      right: 0,
      backgroundImage:
        "linear-gradient(135deg,transparent 0%,transparent 50%,#f34f29 51%,#f34f29 100%)",
      justifyContent: "flex-end",
      alignItems: "flex-end",
      paddingRight: "1rem",
      paddingBottom: "0.5rem"
    };
  } else {
    return {
      position:"fixed",
      display:"inline-flex",
      top: 0,
      right: 0,
      backgroundImage:
        "linear-gradient(45deg,transparent 0%,transparent 50%,#f34f29 51%,#f34f29 100%)",
      justifyContent: "flex-end",
      alignItems: "flex-start",
      paddingRight: "1rem",
      paddingTop: "0.5rem"
    };
  }
};

const getIcon = (iconSize, iconTheme) => {
  var realSize;
  if (iconSize === "small") {
    realSize = 36;
  } else if (iconSize === "medium") {
    realSize = 48;
  } else if (iconSize === "large") {
    realSize = 60;
  } else {
    realSize = 40;
  }
  if (iconTheme === "gitlab") {
    return <Gitlab size={realSize} />;
  } else {
    return <GitHub size={realSize} />;
  }
};

const getGenericStyle = (size) => {
 
  if (size === "small") {
    return {
      width: "5.5rem",
      height: "5.5rem"
    };
  } else if (size === "medium") {
    return {
      width: "7rem",
      height: "7rem"
    };
  } else if (size === "large") {
    return {
      width: "10rem",
      height: "10rem"
    };
  } else {
    return {
      width: "6.5rem",
      height: "6.5rem"
    };
  }
};

export default ReactForkCorner;
