import Steps from './Pages/Steps'
import Confirm from './Pages/Confirm'
import FormContextProvider from './contexts/FormContextProvider'
import DataContextProvider from './contexts/DataContextProvider'
import { BrowserRouter,HashRouter, Routes,Route} from "react-router-dom";
import Landing from "./Pages/Landing.jsx";
import School from './Pages/School.jsx';
import Payment from './Pages/Payment.jsx';
import Home from './Pages/Home.jsx';
import Log from './Pages/Login.jsx';
import Login from './Pages/Login.jsx';

function App() {

  return (
<FormContextProvider>
 <DataContextProvider>
{/* <BrowserRouter> */}
<HashRouter>
<Routes>
  <Route path='/home' element={<Home/>}/>
  <Route path='/confirm' element={<Confirm/>}/>
  <Route path='/steps' element={<Steps/>}/>
  <Route path='/schoolPage' element={<School/>}/>
  <Route path='/payment' element={<Payment/>}/>
  <Route path='/' element={<Landing/>}/>
  <Route path='/login' element={<Login/>}/>

</Routes>
</HashRouter>
{/* </BrowserRouter> */}
   
    
 </DataContextProvider>
</FormContextProvider>





  )
}

export default App

