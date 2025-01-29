import React from 'react'
import SteperTitle from '../components/SteperTitle'
import PlanContent from '../components/PlanContent';

const Plans = () => {
  
  
  return (
    <div className='w-full'>
      <SteperTitle h2={'What are your plans for the next step?'}
       p={'Please make sure that your application results are accurate and up-to-date.'}/>
        <PlanContent/>

    </div>
  )
}

export default Plans