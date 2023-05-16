
import './App.css'
import BillingBtns from './components/Billing Buttons/BillingBtns'
import Header from './components/Header/Header'
import OptionsList from './components/OptionsList/OptionsList'

function App() {
 

  return (
    <div className='App bg-[#F2F6F8] w-screen overflow-x-hidden min-h-screen'>
      <Header /> 
      <BillingBtns />
      <OptionsList />
    </div>
  )
}

export default App
