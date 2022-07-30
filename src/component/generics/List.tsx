import React from 'react'

type ListProps<T>={
    items:T[]
}

const List = <T extends {id: number}>(props:ListProps<T>) => {
  return (
    <div>
        <h1>List of Items</h1>
        {props?.items.map((item,i)=>{
            return(
                <div key={item.id}>
                    {item.id}
                </div>
            )
        })}
    </div>
  )
}

export default List