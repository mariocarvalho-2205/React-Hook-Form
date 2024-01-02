import Form from './components/Form'
import './App.css'
let count = 0
function App() {

  count++
  return (
    <>
      <h1>Form {count / 2}</h1> 
      <Form />
    </>
  )
}

export default App
