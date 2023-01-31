import {React,useState, useEffect} from 'react'
import TextField from '@mui/material/TextField';
import { useDispatch, useSelector } from 'react-redux';
import { addUser, updateUser } from '../redux/actions';
import { useNavigate , useParams} from 'react-router-dom';
import { getSingleUser } from '../redux/actions';
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';

export const Request = () => {
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

  let introMessage = "Create a service request"
  let buttonText = "Create"
  let {id} = useParams()
  const {user} = useSelector(state => state.data)

  if(id)
  {
    introMessage = "Edit a service request"
    buttonText = "Edit"
  }

  const handleInputChange = (e) =>{
    let {name, value} = e.target
    setState({...state, [name]: value});
  }

  const checkPhone = (e) => {
    if(isNaN(e) || e== "" || e.length!==10)
    {
      return true
    }
    return false;
  }

  const checkEmpty = (e) =>{
    if(!e)
    return true;

    return false
  }

  const checkEmail = (e) =>{
    let mailFormat = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if(mailFormat.test(e))
    return false;
    
    return true;
  }
  
  let dispatch = useDispatch()

  const navigate = useNavigate();

  const handleSubmit = (e)=>{

    let errors = {nameHelp: "",
    phoneHelp: "",
    emailHelp: "",
    statusHelp: "",
    detailsHelp: ""}

    e.preventDefault();
    

    if(checkEmpty(customerName))
    {
      errors = {...errors, nameHelp:"Please input field"}
    }
    

    if(checkPhone(customerPhone))
    {
      errors = {...errors, phoneHelp : "Please enter a valid phone number"}
    }
    

    if(checkEmail(customerEmail))
    {
      errors = {...errors, emailHelp : "Please enter a valid email address"}
    }
    

    if(checkEmpty(requestDetails))
    {
      errors = {...errors, detailsHelp : "Please input field"}
    }

    if(errors.nameHelp !="" || errors.emailHelp!="" || errors.phoneHelp!="" ||
    errors.detailsHelp!="" || errors.statusHelp!="")
    {
      console.log("There is an error")
      console.log(errors)
      return setHelpers(errors)
    }
    
    else{
      console.log("the state to add is " + {state});

      if(id)
       dispatch(updateUser(state, id))

       else 
      dispatch(addUser(state))

      navigate('/')
    }
  }

  const {customerName, customerPhone, 
    customerEmail, requestStatus, requestDetails} = state

    const {nameHelp, phoneHelp, emailHelp , statusHelp,
    detailsHelp} = helpers

    useEffect(() => {
      dispatch(getSingleUser(id))
    }, [])

    useEffect(() => {
      if(id && user)
      { 
        let statusConvertor
        if(user?.requestStatus?.toUpperCase() == "IN-PROGRESS")
        {
          statusConvertor = "IN_PROGRESS"
        }
        else{
          statusConvertor = user?.requestStatus?.toUpperCase()
        }

        setState({...user, requestStatus: statusConvertor})
        console.log(state.requestStatus)
      }
      else 
      {
        setState({
          customerName: "",
      customerPhone: "",
      customerEmail: "",
      requestStatus: "",
      requestDetails: "",
        })
      }
    }, [user])

    if(state.requestStatus == "")
    {
      setState({...state,requestStatus : "OPEN"})
    }

  return (
    <div className='content'>
      {error}
      <div className='requestIntroText'>{introMessage}<br/></div>

    
    
    
    <form className='reqForm'
      onSubmit={handleSubmit}
    >
      <div 
      component="form"
      
      noValidate
      autoComplete="off"
      className = 'box'>

      <div className='inputContainer'>
      <TextField 
      fullWidth
      error={Boolean(helpers.nameHelp)}
      helperText = {helpers.nameHelp}
      onChange={handleInputChange} 
      id="outlined-basic" 
      label="Customer Name" 
      name='customerName'
      disabled = {Boolean(id)}
      value = {customerName} 
      type ="text"/>
       
      <TextField
      fullWidth
      error = {Boolean(helpers.phoneHelp)}
      helperText = {helpers.phoneHelp}
      onChange={handleInputChange} 
      id="outlined-basic" 
      label="Phone" 
      name='customerPhone' value={customerPhone} type ="tel"
      disabled = {Boolean(id)}/>
      </div>
      <br/>
      
      <div className='inputContainer' >
      <TextField 
      fullWidth
      error = {Boolean(helpers.emailHelp)}
      helperText = {helpers.emailHelp}
      className='leftInput' 
      onChange={handleInputChange}
      id="outlined-basic" 
      label="Email"
      name='customerEmail' 
      value={customerEmail} 
      type ="text"
      disabled = {Boolean(id)}/>
      
      <FormControl fullWidth>
        <InputLabel>Status</InputLabel>
        <Select
          id="demo-simple-select"
          value={state.requestStatus}
          label="Status"
          name ='requestStatus'
          onChange={handleInputChange}
        >
          <MenuItem value={"OPEN"}>OPEN</MenuItem>
          <MenuItem value={"IN_PROGRESS"}>IN-PROGRESS</MenuItem>
          <MenuItem value={"CLOSED"}>CLOSED</MenuItem>
        </Select>
      </FormControl>

      </div>
      <br/>

      <div>
      <TextField 
      error= {Boolean(helpers.detailsHelp)}
      helperText= {helpers.detailsHelp}
      className='detailsInput' 
      onChange={handleInputChange} 
      id="outlined-basic" 
      name='requestDetails'
      value={requestDetails} 
      label="Details"
      multiline
      rows={5}
      type ="text"/>
      </div>
      </div>

    <div>
    <button  className='createButton' type='submit'>
        {buttonText}
      </button>
      </div>

    </form>
    
    <br/>

   

    </div>
  )
}
