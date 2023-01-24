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
import { loadUsers } from '../redux/actions';

import ButtonGroup from '@mui/material/ButtonGroup';
import Button from '@mui/material/Button';


const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
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

function createData(
  name: string,
  calories: number,
  fat: number,
  carbs: number,
  protein: number,
) {
  return { name, calories, fat, carbs, protein };
}



export const Home = () => {

  //const classes = useStyles();
  let dispatch = useDispatch()

  useEffect(()=> {
    dispatch(loadUsers());
  }, []);

  const{users} = useSelector(state=> state.data)
  
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
              <StyledTableCell align="center">{user.customer_name}</StyledTableCell>
              <StyledTableCell align="center">{user.Status}</StyledTableCell>
              <StyledTableCell align="center">{user.Email}</StyledTableCell>
              <StyledTableCell align="center">
                <ButtonGroup
                    disableElevation
                    variant="contained"
                    aria-label="Disabled elevation buttons">
                    <Button>Edit</Button>
                    <Button>Delete</Button>
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
