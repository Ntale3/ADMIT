import React from 'react'
import {  useState, } from 'react'
import { StepperContext } from '../contexts/StepperContext'
import Stepper from '../components/Stepper'
import StepperControl from '../components/StepperControl'
import { TbFileAnalytics } from 'react-icons/tb'
import Final from '../Steps/Final';
import About from '../Steps/About'
import Journey from '../Steps/Journey'
import StepThree from '../Steps/StepThree'
import Plans from '../Steps/Plans'
import SteperTitle from '../components/SteperTitle'
import Logo from '../components/Logo'

const Steps = () => {
    const[currentStep,setCurrentStep]=useState(1);
 
const steps=[
1,2,3,4,5
]
const displayStep=(step)=>{
switch(step){
  case 1:
    return <About/>
  case 2:
    return <Journey/>
  case 3:
        return <StepThree/>
  case 4:
        return <Plans/>   
  case 5:
    return <Final/>    
}
}
const handleClick=(direction)=>{
  let newStep=currentStep;  
  direction==='next'? newStep++:newStep--;
  newStep>0&&newStep<=steps.length&&setCurrentStep(newStep);

}
  return (
    <div >
     
     <Logo/>
     
    <div className='md:w-1/2 mx-auto  rounded-xl pb-2 bg-white'>
  {/* Stepper */}
  <div className='container horizontal mt-4'>
<Stepper
steps={steps}
currentStep={currentStep}
/>
{/* Display Components */}
<div className=' p-5 flex '>

  {displayStep(currentStep)}

</div>
  </div>
  {currentStep !==steps.length&&
  <StepperControl
  handleClick={handleClick}
  currentStep={currentStep}
  steps={steps}
  />}
  
</div>
</div>

)
}

export default Steps