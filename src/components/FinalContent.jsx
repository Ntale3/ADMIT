import React,{useContext,useState} from 'react'
import DataContext from '../contexts/DataContext';
const FinalContent = ({...props}) => {
  const [isChecked,setIsChecked]=useState(false);
  const handleChecked=()=>{
      setIsChecked(!isChecked);
      
  }

  return (
    <div>
        <div className=''>
          <input type="checkbox"
          checked={isChecked}
          className='absolute mt-2 cursor-pointer' />
          <div className='flex justify-between   relative bg-gray-100 rounded-md hover:translate-x-7 duration-700 h-10 items-center' onClick={handleChecked}>
            <p>{props.schoolName}</p>
        
            <button className={`flex items-center  text-[8px] border rounded-2xl 
                 w-20 mr-2 justify-between ${props.bg} `}>{props.icon} <span className={`${props.paraColor}`}>{props.para}</span></button>  
              </div>
              {/* //<MdOutlineCancel size={20} className='text-red-500'/> */}
        
        </div>
    </div>
  )
}

export default FinalContent