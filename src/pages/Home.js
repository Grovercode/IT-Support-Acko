import React, {useEffect} from 'react'
import { Link } from 'react-router-dom'

import { makeStyles, styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { useDispatch, useSelector} from 'react-redux'; 
import { deleteUser, loadUsers } from '../redux/actions';

import ButtonGroup from '@mui/material/ButtonGroup';
import Button from '@mui/material/Button';
import { Edit } from './Edit';


const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: '#7C47E1',
    color: theme.palette.common.white,
    fontSize: '16px',
    fontWeight: '600',
    padding: 12,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  '&:nth-of-type(odd)': {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  '&:last-child td, &:last-child th': {
    border: 0,
  },
}));





export const Home = () => {

  //const classes = useStyles();
  let dispatch = useDispatch()

  useEffect(()=> {
    dispatch(loadUsers());
  }, []);

  const{users} = useSelector(state=> state.data)

  const handleDelete = (id) =>{
    if(window.confirm("Are you sure you want to delete?"))
    {
      console.log(`Delete initiated for for ${id}` )
      dispatch(deleteUser(id))
    }
  }
  
  return (
    <div className='content'>


      <div className='head'>
      
      <div className='introText'> 
      Hello Ackers,<br/> Welcome to Acko IT Support Portal!
      </div>
      <div className='reqbutton'>
      <Link className='link' to='request'> + New Request</Link>
      </div>
      </div>

      
      <TableContainer component={Paper}>
      <Table sx={{ minWidth: 700 }} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell align="center">Id</StyledTableCell>
            <StyledTableCell align="center">Customer Name</StyledTableCell>
            <StyledTableCell align="center">Status</StyledTableCell>
            <StyledTableCell align="center">Email</StyledTableCell>
            <StyledTableCell align="center">Actions</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {users && users.map((user) => (
            <StyledTableRow key={user.id}>
              <StyledTableCell align="center" component="th" scope="row">
                {user.id}
              </StyledTableCell>
              <StyledTableCell align="center">{user.customerName}</StyledTableCell>
              <StyledTableCell align="center">{user.requestStatus}</StyledTableCell>
              <StyledTableCell align="center">{user.customerEmail}</StyledTableCell>
              <StyledTableCell align="center">
                <ButtonGroup
                    disableElevation
                    variant="contained"
                    aria-label="Disabled elevation buttons">
                    <Link style={{ fontSize:'12px',  color: '#7C47E1'}} className='link' to={`request/${user.id}`}>Edit</Link>
                    <p style={{color: 'red'}} color='secondary'
                    onClick={()=> handleDelete(user.id)}
                    >Delete</p>
                </ButtonGroup>
              </StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
    
     </Table>
     </TableContainer>
      
      
  </div>
  )
}
