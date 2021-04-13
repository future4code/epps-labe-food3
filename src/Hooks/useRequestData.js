// import {useEffect, useState} from 'react';
// import axios from 'axios';

// const useRequestData = (initialData, url) =>{
//     const [data, setData] = useState(initialData)
    
//     useEffect(()=>{
//         axios.get(url, {
//             headers: {
//                 Authorization: localStorage.getItem('token')
//             }
//         }).then((res)=>{
//             setData(res.data)
//         }).catch((error)=>{
//             alert('ocorreu um erro, tente novamente')
//         })
//     }, [url])
//     return (data)
// }

// export default useRequestData

import { useEffect, useState } from 'react'
import getData from '../requests/getData';

const useRequestData = (initialState, endpoint) => {
  const [data, setData] = useState(initialState)

  useEffect(() => getData(endpoint, setData), [endpoint])

  const updateData = () => getData(endpoint, setData)

  return [data, updateData]
}
  
export default useRequestData;