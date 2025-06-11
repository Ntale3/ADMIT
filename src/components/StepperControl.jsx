import React from 'react'

const StepperControl = ({handleClick,currentStep,steps}) => {
  return (
    <div className='container flex justify-around mt-4 mb-8'>
      {/* Back Button */}
      <button
      //this is the back button
      //in the on click event handler if you dont pass any thing the button decrements the steps and we go back to the previous one
      onClick={()=>{handleClick()}}
      className={`bg-white text-slate-400 uppercase 
      py-2 px-4 rounded-xl font-semibold cursor-pointer border-2 border-slate-700 hover:bg-slate-700 hover:text-white transition duration-200 ease-in-out ${currentStep===1&&'opacity-50 cursor-not-allowed'}`}>
         back
      </button>
      {/* Next button */}
      <button 
      //this is the next button
      // in the handle click function in the stepper page when we pass next as an argument in increases the steps by one
      onClick={()=>{handleClick("next")}}
      className={`bg-blue-950 text-yellow-400 uppercase 
      py-2 px-4 rounded-xl font-semibold cursor-pointer border-2   hover:text-yellow-500 transition duration-200 ease-in-out hover:bg-blue-800
      }`}>
        {/* if the current step is not equal to 5 the button displays next but if we are the last step the button displays confirm */}
         {currentStep===steps.length-1?'confirm':'next'}
      </button>
      </div>
  )
}

export default StepperControl