import { OscarProps } from "../types/Oscar.types"

function Oscar(props:OscarProps) {
  return (
    <div style={props.styles}>{props.children}</div>
  )
}

export default Oscar