import React, {useEffect, useState} from 'react'
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { Button } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { addUser, getSingleUser, updateUser } from '../redux/actions';
import { Link , useParams} from 'react-router-dom'

export const Edit = () => {
  const [state, setState] = useState({
    customerName: "",
    customerPhone: "",
    customerEmail: "",
    requestStatus: "",
    requestDetails: "",
  })

  const [error, setError] = useState("");
  let {id} = useParams()
  const {user} = useSelector(state => state.data)

  

  const handleInputChange = (e) =>{
    let {name, value} = e.target
    setState({...state, [name]: value});
  }

  let dispatch = useDispatch()
  //let history = useHistory()


  const handleSubmit = (e)=>{
    e.preventDefault();
    if(!customerName || !customerPhone || !customerEmail || !requestStatus || !requestDetails)
    {
      setError("Please fill all the input fields")
    }
    else{
      console.log({state});
      dispatch(updateUser(state, id))
      
    }

  }


  const {customerName, customerPhone, 
    customerEmail, requestStatus, requestDetails} = state

    useEffect(() => {
      dispatch(getSingleUser(id))
    }, [])

    useEffect(() => {
      if(user)
      {
        setState({...user})
      }
    }, [user])

  return (
    <div>
      {error}
      <div className='requestIntroText'>Edit a service request<br/></div>

    
  
    <form
      onSubmit={handleSubmit}
    >
      <TextField onChange={handleInputChange} id="outlined-basic" label="Customer Name" name='customerName' value = {customerName || ""} type ="text"/>
      <TextField onChange={handleInputChange} id="outlined-basic" label="Phone" name='customerPhone' value={customerPhone || ""} type ="text" />
      <TextField onChange={handleInputChange} id="outlined-basic" label="Email" name='customerEmail' value={customerEmail || ""} type ="text"/>
      <TextField onChange={handleInputChange} id="outlined-basic" label="Status" name='requestStatus' value={requestStatus || ""} type ="text"/>
      <TextField onChange={handleInputChange} id="outlined-basic" label="Details" name='requestDetails' value={requestDetails || ""} type ="text"/>
      <br/>

      {/* <Link className='link' to='/'> */}
      <button 
      type='submit'
      className='createButton'>
        Create
      </button>
      {/* </Link> */}
    </form>

    <div className='reqbutton'> 
      

    </div>
    </div>
  )
}
