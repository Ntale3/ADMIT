import React from 'react'
import {Link} from 'react-router-dom'

const ConfirmDescr = ({...props}) => {
  return (
    <div className='flex justify-between items-center my-3'>
    <p className='font-semibold text-blue-900 text-xl'>{props.info}</p>
   <Link to={props.link}> <span className='font-semibold text-blue-900 text-xs'>{props.edit}</span></Link>
    </div>
  )
}

export default ConfirmDescr