import './App.css'
import SimpleForm from './components/SimpleForm/SimpleForm'
import StateFulForm from './components/StateFulForm/StateFulForm'
import UseRefForm from './components/UseRefForm/UseRefForm'

function App() {

  return (
    <>
        <h1>Simple Form</h1>
        <SimpleForm></SimpleForm>
        <h1>State Ful Form</h1>
        <StateFulForm></StateFulForm>
        <h1>Use Ref Form</h1>
        <UseRefForm></UseRefForm>
    </>
  )
}

export default App
