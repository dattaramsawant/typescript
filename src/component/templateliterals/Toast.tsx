import React from 'react'

type HorizontalPosition='left' | 'center' | 'right'
type VerticalPosition='top' | 'center' | 'bottom'
type ToastProps={
    position: Exclude<`${HorizontalPosition}-${VerticalPosition}`,'center-center'> | 'center'
}

const Toast = (props:ToastProps) => {
  return (
    <div>Toast position {props.position}</div>

  )
}

export default Toast