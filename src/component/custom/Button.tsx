import React from "react"

type ButtonProps={
    variant:'primary' | 'secondary'
    children: string
} & Omit<React.ComponentProps<'button'>,'children'>

const CustomButton = (props:ButtonProps) => {
  return (
    <button className={`${props.variant}-button`} {...props}>{props?.children}</button>
  )
}

export default CustomButton