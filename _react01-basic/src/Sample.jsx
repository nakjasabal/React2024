import './App.css'

function MyComponent(props) {
  return (<>
    <div>
      {props.myData}
    </div>
  </>)
} 
function App() {
  return (<>
    <div>
      <MyComponent myData={"프롭스데이터"}/>
    </div>
  </>)
}

export default App


