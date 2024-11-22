import './App.css'
import Grandpa from './components/Grandpa/Grandpa'
import ResuableForm from './components/ReusableForm/ResuableForm'
import HookForm from './components/HookForm/HookForm'
import RefForm from './components/RefForm/RefForm'
import StateFullForm from './components/StateFullForm/StateFullForm'
import SimpleForm from './components/SimpleForm/SimpleForm'

function App() {

  const handleSignupSubmit = data=>{
    console.log('Sign up data', data)
}
  const handleUpdateSubmit = data=>{
    console.log('Update successfully',data)
  }
  return (
    <>
    <h2>Form</h2>
    <Grandpa></Grandpa>
    {/* <ResuableForm formTitle={'Sign up'} handleSubmit={handleSignupSubmit}>
    <div>
      <h2>Sign up</h2>
      <p>please sign up right now</p>
    </div>

    </ResuableForm> */}
    {/* <ResuableForm formTitle={'Profile Update'} handleSubmit={handleUpdateSubmit} submitBtnText='Update' >
    <div>
      <h2>Updatee Profile</h2>
      <p>Always keep profile update</p>
    </div>
    </ResuableForm> */}
      {/* <SimpleForm></SimpleForm> */}
      {/* <StateFullForm></StateFullForm> */}
     {/* <RefForm></RefForm> */}
     {/* <HookForm></HookForm> */}
    </>
  )
}

export default App
