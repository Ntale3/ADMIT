import {useContext} from 'react'
import SteperTitle from '../components/SteperTitle';
import ConfirmDescr from '../components/ConfirmDescr';
import AbountContent from '../components/AbountContent';
import Logo from '../components/Logo';
import Journey from '../Steps/Journey';
import JourneyContent from '../components/JourneyContent';
import PlanContent from '../components/PlanContent';
import StepThreeContent from '../components/StepThreeContent';
import { MdOutlineCancel } from "react-icons/md"; 
import { VscPass } from "react-icons/vsc";
import FinalContent from '../components/FinalContent';
import Button from '../components/Button';
import {Link}from 'react-router-dom'
import DataContext from '../contexts/DataContext';
import FormContext from '../contexts/FormContext';
import {useNavigate} from 'react-router-dom'
const Confirm = () => {
const{isSelected,deleteSchool} =useContext(DataContext);
const {handleSubmit2,updateFormData,formData,errors,setErrors}=useContext(FormContext)

const deleteSch=(data)=>{
  if(isSelected.includes(data)){
deleteSchool(data)

//console.log(isSelected)
  }else{
    return;
  }
}
// const validate = () => { 
//   const errors = {};
//   if(formData.selectedschool.length>5) errors.selectedschool='Selected schools should not exceed five(5)'
//   return errors; 
// };

let navigate=useNavigate();
const handleSubmit3 = (e) => {
  e.preventDefault();
  console.log(formData) 
  navigate('/home')
  
 

} 




  return (
    <form onSubmit={handleSubmit3}>
  <Logo/>
  <div className='text-center my-5 '>    
    <h2 className='text-blue-900 text-xl'>Application Review</h2>
  </div>
 <SteperTitle h2={"Please review your application carefully for accuracy and completeness."} 
 p={'If you need to to make any changes, please click the "Edit" button next to the section you wish to revise.'}/>
  <div className=''>  
      <div className='md:w-1/2 mx-auto'>
      <ConfirmDescr info={'Personal Information'} edit={'Edit'}/>
      <AbountContent/>
      <ConfirmDescr info={'Previous School Information'} edit={'Edit'}/>
      <JourneyContent/>
      <PlanContent/>
      <div>
      <StepThreeContent/>
      </div>
      <ConfirmDescr info={'Choice of Schools'}
      
      edit={'Edit'} link={'/steps'}/>
      {/* <FinalContent schoolName={'Mengo Senior School'} bg={'border-red-500'} icon={<MdOutlineCancel size={20} className='text-red-500'/>}  paraColor={'text-red-500'}/> */}
      
      <div className=''>
       <ul className='flex flex-col gap-2 mb-2'>
         {
          isSelected.map((data,index)=>{
            return <li key={index} onClick={()=>deleteSch(data)}>
              <FinalContent schoolName={data.name} bg={data.status?'border-green-500':'border-red-500'} 
              icon={data.status?<VscPass size={20}  className='text-green-500'/>:<MdOutlineCancel size={20} className='text-red-500'/>}  
                      paraColor={data.status?'text-green-500':'text-red-500'} para={data.status?'Admissions Accepted':'Admissions ended'}/>
            </li>
          })
           

          }
            
        </ul>
        </div>
        <div>
          {/* <Link to={'/home'} > */}
          
        <Button text={'Submit Application'} type='submit'/>
        {/* </Link> */}
        </div>

    </div>
    
      </div>
  </form>
  )
}

export default Confirm