import {React,useState,useEffect} from 'react'

import FormContext from './FormContext'
const FormContextProvider = ({children}) => {
  const [schools,setSchools]=useState([])
  const[errors,setErrors]=useState({})
  const[files,setFiles]=useState([])
  
const[formData,setFormData]=useState({
  firstName:'',
  lastName:'',
  gender:'',
  day:'',
  date:'',
  Address:'',
  phoneNumber:'',
  previousSchool:'',
  month:'',
  year:'',
  previousClass:'',
  grade:'',
  expectedSchoolTerm:'',
  nextClassOfEnrollment:'',
  fieldOfStudy:'',
  desiredCombination:'',
  file:files,
  selectedschool:[],
});

// useEffect(()=>{
//   const handleSubmit=async()=>{
//     const res=await fetch('api/submit',{
//       method:POST,
//       headers:{
//         'content-Type':'application/json'
//       },
//       body:JSON.stringify(formData)
//     })
//     const result=await res.json();
//   }
// },[])




const updateFormData = (data) => {
  //setFormData((prevFormData) => ({ ...prevFormData, ...data }));
  setFormData({...formData,...data});
  
};


// const validate = () => { 
//   const errors = {}; 
  // if (!formData.firstName) errors.firstName = "first Name is required"; 
  // if (!formData.lastName) errors.lastName = "last Name is required"; 
  // if(!formData.gender) errors.gender='gender is required';
  // if(!formData.day) errors.day='Day is required';
  // if(!formData.date) errors.date='Date is required';
  // if(!formData.Address) errors.Address='Address is required';
  // if(!formData.phoneNumber) errors.phoneNumber='Phone Number is required';
  // if(!formData.previousClass) errors.previousClass='previous class is required';
  // if(!formData.month) errors.month='month is required'
  // if(!formData.year) errors.year='year is required'
  // if(!formData.previousSchool) errors.previousSchool='Previous School is required';
  // if(!formData.expectedSchoolTerm) errors.expectedSchoolTerm='Expected School term is required';
  // if(!formData.fieldOfStudy)errors.fieldOfStudy='Field of Study is required'
  // if(!formData.grade) errors.grade='Grade is required';
  // if(!formData.nextClassOfEnrollment) errors.nextClassOfEnrollment='Next class of enrollment is required'
  // if(!formData.Address.desiredCombination) errors.desiredCombination='This field should not be null'
  // if(formData.file.length<=0) errors.file='File is required';
  // else if(formData.selectedschool.length>5) errors.selectedschool="Schools selected shouldnot exceed five(5)"
//   if(formData.selectedschool.length>5) errors.selectedschool='Selected schools should not exceed five(5)'
//   return errors; 
// };

// const handleSubmit2 = (e) => {
//     e.preventDefault(); 
    
//    const errors = validate(); 
//    if (Object.keys(errors).length === 0) 
//     { 
//       console.log(formData);
       
//     }else{
//       setErrors(errors)
//     }
//   console.log(formData)
//   } 


  return (
    <FormContext.Provider value={{formData,updateFormData,setSchools,setFiles,errors,setErrors}}>
        {children}
    </FormContext.Provider>
  )
}

export default FormContextProvider;