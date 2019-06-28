import React from "react"

export default props => (
  <div
    className="video-responsive"
    style={{
      overflow: `hidden`,
      padding: `0 0 56.25% 0`,
      position: `relative`,
      height: 0,
    }}
  >
    <iframe
      style={{
        left: 0,
        top: 0,
        height: `100%`,
        width: `100%`,
        position: `absolute`
      }}
      src={props.video}
      frameBorder="0"
      allowFullScreen
    />
  </div>
);
