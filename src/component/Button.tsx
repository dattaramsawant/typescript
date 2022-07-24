import React from 'react'
type ButtonProps={
    handleClick: (e:React.MouseEvent<HTMLButtonElement>,id:number)=>void
}

function Button(props: ButtonProps) {
  return (
    <button onClick={(event)=>props.handleClick(event,1)}>Button</button>
  )
}

export default Button