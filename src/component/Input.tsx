import { InputProps } from "../types/Input.types"

function Input(props: InputProps) {
  return (
    <input
        value={props.value}
        onChange={(e)=>props.handleChange(e)}
    />
  )
}

export default Input