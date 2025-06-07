
import Buttons from './Buttons'
import Heading from './Heading'
import NavBar from './NavBar'
import Widget from './Widget'

const DashBoard = () => {

  return (
 <div className=''> 
 <NavBar/>
   <div>
    <Heading/>
    <div className='grid grid-cols-2 ml-14 '>
    <Widget/>
    <Widget/>
    </div>
    <div>
    <Buttons/>
    </div>    
    </div> 
  
 </div>
  )
}

export default DashBoard