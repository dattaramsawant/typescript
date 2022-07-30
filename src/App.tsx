import React, { useState } from 'react'
import AuthUser from './component/AuthUser'
import Button from './component/Button'
import CustomButton from './component/custom/Button'
import List from './component/generics/List'
import Greet from './component/Greet'
import Input from './component/Input'
import Oscar from './component/Oscar'
import Toast from './component/templateliterals/Toast'

function App() {
  const [value,setValue]=useState('')

  const handleChange=(e: React.ChangeEvent<HTMLInputElement>)=>{
    console.log(e,'e')
    setValue(e.target.value)
  }
  return (
    <div>
      {/* <Oscar styles={{border:'1px solid'}}>
        <Greet 
          // name="Datta" 
          // messageCount={100} 
          // loggedIn={true} 
          // employee={['Datta',"parkar","pankaj"]}
          status='error'
        />
      </Oscar>
      <Button 
        handleClick={(event,id)=>{
          console.log('handle click',event,id)
        }}
      />
      <Input 
        value={value}
        handleChange={handleChange}
      />
      <AuthUser /> */}

      {/* <List 
        items={['datta','jk','parkar']}
      />
      <List 
        items={[1,2,3]}
      /> */}
      <List 
        items={[
          {id:1,first:'Datta',last:'Sawant'},
          {id:2,first:'Pankaj',last:'Jadhav'}
        ]}
      />

      <Toast position='center-bottom' />

      <CustomButton variant='primary'>button</CustomButton>
    </div>
  )
}

export default App