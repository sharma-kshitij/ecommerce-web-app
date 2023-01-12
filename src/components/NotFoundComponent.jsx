import React from 'react'

const divStyle = {
  display : "flex",
  flexDirection : "column",
  alignItems : "center",
  width: "98%"
}

const padding = {
  padding: "10 10"
}

const emojiStyle = {
  fontSize : "7rem"
}

export default function NotFoundComponent() {
  return (
    <div style={divStyle}>
      <h1 style={emojiStyle}>🤷‍♂️</h1>
      <h3 style={padding}>Sorry no content found :(</h3>
    </div>
  )
}
