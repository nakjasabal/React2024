import { useState } from "react"

function MyComponent(props) {
  return (<>
    <a href="/" onClick={()=>{
      props.onMyEvent1('데이터')
    }}></a>
  </>)
}


function App() {

  const [myState, setMyState] = useState(0)

  return (<>
    <MyComponent onMyEvent1={
      (msg)=>{
        console.log("자식에서전달", msg)
      }
    }/>
  </>)
}



export default App
