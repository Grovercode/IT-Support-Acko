// import React, {useState} from 'react'
// import Box from '@mui/material/Box';
// import TextField from '@mui/material/TextField';
// import { Button } from '@mui/material';
// import { useDispatch } from 'react-redux';
// import { addUser } from '../redux/actions';
// import { useNavigate } from 'react-router-dom';
// import { margin } from '@mui/system';



// function EntryForm() {

//     const [state, setState] = useState({
//         customerName: "",
//         customerPhone: "",
//         customerEmail: "",
//         requestStatus: "",
//         requestDetails: "",
//       })
    
//       const [helpers, setHelpers] = useState({
//         nameHelp: "",
//         phoneHelp: "wrong",
//         emailHelp: "",
//         statusHelp: "",
//         detailsHelp: "",
//       })
    
//       const [error, setError] = useState("");

//     const checkPhone = (e) => {
//         if(isNaN(e) || e== "" || e.length<10)
//         {
//           return true
//         }
        
    
//         return false;
//       }
    
//       const checkEmpty = (e) =>{
//         if(e=="")
//         return true;
    
//         return false
//       }
    
//       const checkEmail = (e) =>{
//         //let mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
//         let re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
//         if(re.test(e))
//         return false;
        
//         return true;
//       }
//       const handleInputChange = (e) =>{
//         let {name, value} = e.target
//         setState({...state, [name]: value});
//       }

//       const handleSubmit = (e)=>{
//         e.preventDefault();
    
//         //let re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
//         if(!customerName || !customerPhone || !customerEmail || !requestStatus || !requestDetails)
//         {
//           setError("Please fill all the input fields")
//         }
    
//         if(!customerName)
//         {
//           setHelpers({...helpers, nameHelp: "Fix"})
//         }
    
//         else if(!customerPhone)
//         {
//           setHelpers({...helpers, phoneHelp : "Fix"})
//         }
    
//         else if(!customerEmail)
//         {
//           setHelpers({...helpers, emailHelp : "Fix"})
//         }
    
        
    
//         else{
//           console.log({state});
//           dispatch(addUser(state))
//           navigate('/')
//         }
    
//       }


//   let dispatch = useDispatch()

//   const navigate = useNavigate();

//   return (
//     <form className='reqForm'
//       onSubmit={handleSubmit}
//     >
//       <div 
//       component="form"
//       // sx={{
//       //   '& .MuiTextField-root': { m: 2, width: '25ch', marginLeft: '35px'},
//       // }}
//       noValidate
//       autoComplete="off"
//       className = 'box'>

//       <div className='inputContainer'>
//       <TextField 
//       fullWidth
//       error={checkEmpty(state.customerName)}
//       helperText = {helpers.nameHelp}
//       onChange={handleInputChange} 
//       id="outlined-basic" 
//       label="Customer Name" 
//       name='customerName'
//        value = {customerName} 
//        type ="text"/>
       
//       <TextField
//       fullWidth
//       error = {checkPhone(state.customerPhone)}
//       helperText = {helpers.phoneHelp}
//        onChange={handleInputChange} id="outlined-basic" label="Phone" name='customerPhone' value={customerPhone} type ="tel"
//         />
//       </div>
//       <br/>
      
//       <div className='inputContainer' >
//       <TextField 
//       fullWidth
//       helperText = {helpers.emailHelp}
//       error = {checkEmail(state.customerEmail)}
//       className='leftInput' onChange={handleInputChange} id="outlined-basic" label="Email" name='customerEmail' value={customerEmail} type ="email"/>
      

//       <TextField 
//       fullWidth
//       error = {checkEmpty(state.requestStatus)}
//       style={{padddingLeft : '30px'}} onChange={handleInputChange} id="outlined-basic" label="Status" name='requestStatus' value={requestStatus} type ="text"/>

//       </div>
//       <br/>

//       <div 
//       // sx={{
//       //   '& .MuiTextField-root': { width: '63ch', height: '149px', marginLeft:'35px' },
//       // }}
//       >

//       <TextField 
//       error= {checkEmpty(state.requestDetails)}
//       className='detailsInput' 
//       onChange={handleInputChange} 
//       id="outlined-basic" 
      
//       // label="Details"
//        name='requestDetails'
//         value={requestDetails} 
//         label="Details"
//           multiline
//           rows={5}
//         type ="text"/>

//       </div>
      
//       </div>

     
//     {/* <Link className='link' to='/'> */}
//     <div>
//     <button  className='createButton' type='submit'>
//         Create
//       </button>
//       </div>
//       {/* </Link> */}

//     </form>
//   )
// }

// export default EntryForm;