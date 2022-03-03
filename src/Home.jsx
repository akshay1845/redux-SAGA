import React, { useState,useEffect } from 'react'
import {callApi} from './redux/actions/action1'
import { useDispatch, useSelector } from 'react-redux'

const Home = () => {

    const [data, setData] = useState([])
    console.log(data)

    const value = data.slice(0,100)
    console.log(value)

    const dispatch = useDispatch();
    const getData = () => {
        dispatch(callApi())
    }

    const Apidata = useSelector((state) => state.API_Data);
    console.log(Apidata)

    

    useEffect(()=>{
      setData(Apidata)
    },[Apidata])
       
  return (
    <>
      <button onClick={()=>getData()}>Get Data</button>
      <div>
        {
            value.map((e) => JSON.stringify(e))
        }
      </div>
    </>
  )
}

export default Home