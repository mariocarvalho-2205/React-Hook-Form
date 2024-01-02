import Form from './components/Form'
import './App.css'
let count = 0

function App() {

  count++
  return (
    <>
     <h1>Default Values - 12 / {count / 2}</h1>
     <Form />
    </>
  )
}

export default App
