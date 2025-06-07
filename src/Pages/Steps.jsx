import {  useState, } from 'react'
import Stepper from '../components/Stepper'
import StepperControl from '../components/StepperControl'
import Final from '../Steps/Final';
import About from '../Steps/About'
import Journey from '../Steps/Journey'
import StepThree from '../Steps/StepThree'
import Plans from '../Steps/Plans'
import Logo from '../components/Logo'

const Steps = () => {
    const[currentStep,setCurrentStep]=useState(1);
 
const steps=[
1,2,3,4,5
] 

//this is a swich statement that changes the form according to the step you are at
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

//this is the function that controls the movement to the next step
const handleClick=(direction)=>{
  let newStep=currentStep; 
  
  //we can go to the next step only if we passed 'next' as an agument in the stepper control component
  //but we stay go back to the previous page if we dont pass an agument 
  //check the stepper control component for more clalification
  if(direction==='next'){

    newStep++
  } else{
    newStep--
  }
  
  if(newStep>0&&newStep<=steps.length){
    setCurrentStep(newStep)
  }

  
}
  return (
    <div >
     
     <Logo/>
     
    <div className='md:w-1/2 mx-auto  rounded-xl pb-2 bg-white'>
  {/* Stepper */}
  <div className='container horizontal mt-4'>

    {/* this is where i render the stepper from [1-5] and i pass the steps and the currentstep
        which help to control the steps
     */}
    <Stepper
    steps={steps}
    currentStep={currentStep}
    />

    {/* Display Components */}
    <div className=' p-5 flex '>

      {displayStep(currentStep)}

</div>
  </div>

  {/* this is where i pass the functions to help control the stepper handle click increments the steps or decremets them */}
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