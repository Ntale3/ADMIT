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

formData.selectedschool.map((data,index)=>{console.log(data.length)})

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




  return (
    <FormContext.Provider value={{formData,updateFormData,setSchools,setFiles,errors,setErrors}}>
        {children}
    </FormContext.Provider>
  )
}

export default FormContextProvider;