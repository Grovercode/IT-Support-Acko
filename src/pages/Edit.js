import React, {useEffect, useState} from 'react'
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { Button } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { addUser, getSingleUser, updateUser } from '../redux/actions';
import { Link , useParams, useNavigate} from 'react-router-dom'

export const Edit = () => {
  const [state, setState] = useState({
    customerName: "",
    customerPhone: "",
    customerEmail: "",
    requestStatus: "",
    requestDetails: "",
  })

  const [helpers, setHelpers] = useState({
    nameHelp: "",
    phoneHelp: "",
    emailHelp: "",
    statusHelp: "",
    detailsHelp: "",
  })

  const [error, setError] = useState("");
  let {id} = useParams()
  const {user} = useSelector(state => state.data)

  

  const handleInputChange = (e) =>{
    let {name, value} = e.target
    setState({...state, [name]: value});
  }


  const checkPhone = (e) => {
    if(isNaN(e) || e== "")
    {
      return true
    }
    

    return false;
  }

  const checkEmpty = (e) =>{
    if(e=="")
    return true;

    return false
  }

  const checkEmail = (e) =>{
    //let mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    let re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if(re.test(e))
    return false;
    
    return true;
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

    /*const {nameHelp, phoneHelp, emailHelp , statusHelp,
    detailsHelp} = helpers
    */

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
    <div className='content'>
      {error}
      <div className='requestIntroText'>Edit a service request<br/></div>

    
      <form className='reqForm'
      onSubmit={handleSubmit}
    >
      <Box 
      component="form"
      sx={{
        '& .MuiTextField-root': { m: 2, width: '25ch', marginLeft: '35px'},
      }}
      noValidate
      autoComplete="off"
      className = 'box'>

      
      <TextField 
      error={checkEmpty(state.customerName)}
      className='leftInput'
      onChange={handleInputChange} 
      id="outlined-basic" 
      label="Customer Name" 
      name='customerName'
       value = {customerName} 
       type ="text"/>
       
      <TextField
      error = {checkPhone(state.customerPhone)}
      helperText = {helpers.phoneHelp}
       onChange={handleInputChange} id="outlined-basic" label="Phone" name='customerPhone' value={customerPhone} type ="tel"
        />
      <br/>
      
      <TextField 
      error = {checkEmail(state.customerEmail)}
      className='leftInput' onChange={handleInputChange} id="outlined-basic" label="Email" name='customerEmail' value={customerEmail} type ="email"/>
      

      <TextField 
      error = {checkEmpty(state.requestStatus)}
      style={{padddingLeft : '30px'}} onChange={handleInputChange} id="outlined-basic" label="Status" name='requestStatus' value={requestStatus} type ="text"/>

      <br/>

      <Box 
      sx={{
        '& .MuiTextField-root': { width: '63ch', height: '149px', marginLeft:'35px' },
      }}
      >

      <TextField 
      error= {checkEmpty(state.requestDetails)}
      className='detailsInput' 
      onChange={handleInputChange} 
      id="outlined-basic" 
      
      // label="Details"
       name='requestDetails'
        value={requestDetails} 
        label="Details"
          multiline
          rows={5}
        type ="text"/>

      </Box>
      
      </Box>

     
    {/* <Link className='link' to='/'> */}
    <div>
    <button  className='createButton' type='submit'>
        Create
      </button>
      </div>
      {/* </Link> */}

    </form>
    
    <br/>

    </div>
  )
}
