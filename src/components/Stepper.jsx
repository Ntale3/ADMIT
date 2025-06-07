import {useState} from 'react'


const Stepper = ({steps,currentStep}) => { 
  //so in the steps page i passed to arguments steps and currentstep
  //where steps=[1,2,3,4,5] which statnds for the number of steps 1-5
  //and Currentstep is a usestate of type number where its initially === 1
  //and everytime you press next it increments by one which takes you to the next step
  //i used a switch in the steps page where in the case of every step which were [1,2,3,4,5] it changes the component accorddingly

  //i created a state to keeps track of the steps and o initialised it to the steps by spreading
  const[newStep,setNewStep]=useState([...steps]);
  console.log(newStep.length)

  //so now the newstate variable in the use state is equal to the steps variable i passed from the steps page
  //now i iterate over it using a map 
  const displaySteps=newStep.map((Step,index)=>{
    return(
      <div key={index}
            className={index!==newStep.length -1?'w-full flex items-center':'flex items-center'}>
        
    <div className='relative flex flex-col items-center text-teal-600'>
      <div className={`rounded-full transition duration-500 ease-in-out border-2 bg-blue-950 h-12 w-12
         flex items-center justify-center py-3 text-white ${Step===currentStep&&" bg-blue-950 text-white font-bold border "}`}>
      {/* Display Number */}
      {Step<currentStep?(<span className='text-white font-bold text-xl'>&#10003;</span>):(index+1)} 
      </div>
      {/* Description Div */}
      </div>
      <div className={`flex-auto border-t-2 transition duration-500 ease-in-out ${Step<currentStep&&'border-blue-950'}`}> 
        {/* Display Line */}
      </div>
      </div>
    
    )
  })
  
 
  return (
    <div className='mx-4 p-4 flex justify-between items-center'>
    {displaySteps}
    </div>
  )
}

export default Stepper