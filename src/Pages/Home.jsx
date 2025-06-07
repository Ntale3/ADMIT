import { useState } from 'react'
import SideBar from '../components/SideBar'
import NavBar from '../components/NavBar'
import Heading from '../components/Heading'
import Widget from '../components/Widget'
import Buttons from '../components/Buttons'
import Applications from '../components/Applications'
import Admissions from '../components/Admissions'
import Heading2 from '../components/Heading2'
import { TbFileXFilled } from "react-icons/tb";
import { FaFileCircleCheck } from "react-icons/fa6";
const Home = () => {
  const[activeItem,setActiveItem]=useState(<Admissions/>);

  const HandleClick=(index)=>{
   switch (index) {
    case 0:
      setActiveItem(<Admissions/> ) ;     
      break;
      case 1:
      setActiveItem(<Applications/> ) ;     
      break;
      case 2:        
    default:
      break;
   }
  }


  return (
    
    <div className='flex'>
      <div>
      <SideBar HandleClick={HandleClick}/>
      </div>
       <div  className='flex  h-20 w-full flex-col'>
        <NavBar/>  
        <Heading/>
        <div className='md:flex md:gap-28 grid gap-4 ml-10'>
          <Widget icon={<TbFileXFilled size={80}className='text-blue-950'/>} number={1} description={'UnderReview'} />
          <Widget icon={<FaFileCircleCheck size={80}className='text-blue-950 ml-4'/> } number={2} description={'Accepted'}/>
        </div>  
 <div  className='mt-8'>
 {activeItem.type===Admissions?<Heading2/>:<Buttons />}  
<div className='ml-10 h-lvh border border-gray-300 max-h-64 rounded-xl overflow-y-auto mt-4 ml-4'>
  <div className='md:ml-20 md:mr-20  md:mb-4 '>
  {activeItem}
  
  
  </div>

 </div>  

</div>
           
       </div>
       
       </div>
       
   
    
   
    
    
    
  )
}

export default Home