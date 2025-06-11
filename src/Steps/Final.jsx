import React from 'react'
import SteperTitle from '../components/SteperTitle'
import { MdOutlineCancel } from "react-icons/md"; 
import { VscPass } from "react-icons/vsc";//cancel
import FinalContent from '../components/FinalContent';
import Button from '../components/Button';
import { useContext,useState} from 'react';
import DataContext from '../contexts/DataContext';
import FormContext from '../contexts/FormContext';
import { stringify } from 'postcss';
import { Link } from 'react-router-dom';

const Final = () => {
const inputDesign='border w-full h-12 rounded-md  focus:border-blue-400 outline-none placeholder:italic bg-gray-100';
const paradesign='mt-3 mb-3 font-semibold'
const{data,searchQuery,setSearchQuery,isSelected,setIsSelected,deleteSchool}=useContext(DataContext);
const{updateFormData,errors}=useContext(FormContext)
const filteredData=data.filter(item=>item.name.toLowerCase().includes(searchQuery.toLowerCase()));


const updateCheck = (data) =>{
  if(!isSelected.includes(data)){ 
    //console.log('IsSelected:'+isSelected.length);
    console.log('Data:'+data.name)    
    setIsSelected([...isSelected,data]);
    console.log('IsSelected:'+isSelected.name);
    updateFormData({    
      selectedschool:[...isSelected,data],  
    });

  }
  else{
    deleteSchool(data)
    console.log('IsSelected:'+isSelected.length);
  }
 


}
  return (
   <div className='w-full'>
    <SteperTitle h2={'Search and apply to Schools'} p={'Please only select Schools  that you are seriously considering to apply to.'}/>


    <form className="max-w-md mx-auto">   
    <label htmlFor="default-search" className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">Search</label>
    <div className="relative">
        <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
            <svg className="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
            </svg>
        </div>
        <input type="search" id="default-search"
       value={searchQuery}
       onChange={(e)=>setSearchQuery(e.target.value)}
        className={`block w-full p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg  
          dark:placeholder-gray-400 outline-none  focus:border-blue-400 outline-none placeholder:italic bg-gray-100` }placeholder="Search for Schools across the website..." required />
    </div>
</form>
<p className={paradesign}><label htmlFor="filter">Filter By</label></p>
<div className='flex gap-4'>
  <input type="Text" placeholder='Gender' className={`${inputDesign} `} 
  
  />
  <input type="Text" placeholder='District' className={`${inputDesign}`} />
  <input type="Text"  placeholder='Location'className={`${inputDesign}`} />
</div>
<p className={` text-xl mt-4`}> <span className='text-blue-900'>Discover</span>/Search</p>
<p className={` text-xl mt-4 mb-5`}>5 Schools</p>

<div className='flex flex-col gap-2'>
  <ul className='flex flex-col gap-2'>
   {
    filteredData.map((data,index)=>{
      return <li key={index} onClick={()=>updateCheck(data)}>
        <FinalContent schoolName={data.name} bg={data.status?'border-green-500':'border-red-500'} icon={data.status?<VscPass size={20} className='text-green-500'/>:<MdOutlineCancel size={20} className='text-red-500'/>}  
        paraColor={data.status?'text-green-500':'text-red-500'} para={data.status?'Admissions Accepted':'Admissions ended'}/>
      </li>
    })
   }
    
  </ul>

</div>
<Link
to={'/schoolPage'}
><Button text={'Next'}/></Link>



   </div>
  )
}

export default Final