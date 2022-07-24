import Button from './component/Button'
import Greet from './component/Greet'
import Oscar from './component/Oscar'

function App() {
  return (
    <div>
      <Oscar>
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
    </div>
  )
}

export default App