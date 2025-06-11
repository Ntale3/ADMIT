import {useState,useEffect,useContext} from 'react'
import DataContext from './DataContext'
const DataContextProvider = ({children}) => {
  //const{setSelectedSchool}=useContext(FormContext)
  
  const [isSelected,setIsSelected]=useState([]);
  //setSelectedSchool([isSelected])
    const[data,setData]=useState([
      {name:'Mengo ss',status:true, sex:'mixed',checked:false},
      {name:'St Marys Kisubi',status:false, sex:'male',checked:false },
      {name:'Trinity COllege Nabingo ',status:true, sex:'female',checked:false},
      {name:'St Henrys Kitovu',status:false, sex:'Male',checked:false},
      {name:'Old Kampala Secondary School',status:true, sex:'mixed',checked:false},
      {name:'Nabisunsa Girls',status:false, sex:'female',checked:false}
    ]);
    //Searching state
    const[searchQuery,setSearchQuery]=useState('');

    
    //Deleting school from Ui 
    const deleteSchool=(data)=>{
      const updateTasks=isSelected.filter((item)=>item!==data)
      // console.log(updateTasks)
      setIsSelected([...updateTasks])
      
    }

    useEffect(()=>{
        const fetchData=async()=>{
            const response=await fetch('api/data')
            const result=await response.json();
            setData(result);
        }
        fetchData();
    },[])

  return (
    <DataContext.Provider value={{data,searchQuery,setSearchQuery,setData,isSelected,setIsSelected,deleteSchool}}>
          {children}
    </DataContext.Provider>
  )
}

export default DataContextProvider