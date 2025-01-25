import {useContext} from 'react'
import FormContext from '../contexts/FormContext';

const PlanContent = () => {
    const inputDesign='border h-12 rounded-md  focus:border-blue-400 outline-none placeholder:italic bg-gray-100';
const paradesign='mt-3 mb-3 font-semibold'
const{formData,updateFormData}=useContext(FormContext);
const handleChange=(e)=>{
 
  updateFormData({    
    [e.target.name]:e.target.value,  
  });
}
  return (
    <div>
        <p className={paradesign}><label htmlFor="ExpectedTerm">Expected College Term</label></p>
        <div className='w-full'>
          <input type="month" name='expectedSchoolTerm' value={formData.expectedSchoolTerm} onChange={handleChange} className={inputDesign} required/>
          {/* <input type="text" className={inputDesign}/> */}
        </div>
       <p className={paradesign}><label htmlFor="nextClass">Next Class Of Enrollment</label></p>
       <div>
        <input type="text" id='nextClass' className={`${inputDesign} w-full`} name='nextClassOfEnrollment' value={formData.nextClassOfEnrollment} onChange={handleChange} required/>
       </div>

       <p className={paradesign}><label htmlFor="fieldOfStudy">Field of Study</label></p>
       <div>
        <input type="text" id='fieldOfStudy'  name='fieldOfStudy'  value={formData.fieldOfStudy} onChange={handleChange} className={`${inputDesign} w-1/2`} required/>
       </div>

       <p className={paradesign}><label htmlFor="combination">Desired Combination</label></p>
       <div>
        <input type="text" id='combination' name='desiredCombination' className={`${inputDesign} w-full`} value={formData.desiredCombination} onChange={handleChange} required/>
       </div>
    </div>
  )
}

export default PlanContent