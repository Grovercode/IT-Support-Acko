import React, {useState} from 'react'
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { Button } from '@mui/material';
import { useDispatch } from 'react-redux';
import { addUser } from '../redux/actions';
import { Link } from 'react-router-dom'

export const Request = () => {
  const [state, setState] = useState({
    customerName: "",
    customerPhone: "",
    customerEmail: "",
    requestStatus: "",
    requestDetails: "",
  })

  const [error, setError] = useState("");

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
      dispatch(addUser(state))
      
    }

  }


  const {customerName, customerPhone, 
    customerEmail, requestStatus, requestDetails} = state

  return (
    <div>
      {error}
      <div className='requestIntroText'>Create a service request<br/></div>

    
  
    <form
      onSubmit={handleSubmit}
    >
      <TextField 
      onChange={handleInputChange} 
      id="outlined-basic" 
      label="Customer Name" 
      name='customerName'
       value = {customerName} 
       type ="text"/>

      <TextField onChange={handleInputChange} id="outlined-basic" label="Phone" name='customerPhone' value={customerPhone} type ="tel" />
      <TextField onChange={handleInputChange} id="outlined-basic" label="Email" name='customerEmail' value={customerEmail} type ="email"/>
      <TextField onChange={handleInputChange} id="outlined-basic" label="Status" name='requestStatus' value={requestStatus} type ="text"/>
      <TextField onChange={handleInputChange} id="outlined-basic" label="Details" name='requestDetails' value={requestDetails} type ="text"/>
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
