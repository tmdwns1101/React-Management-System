import React from 'react';
import logo from './logo.svg';
import './App.css';
import Customer from './components/Customer';
import Table from '@material-ui/core/Table';
import TableHead from '@material-ui/core/TableHead';
import TableBody from '@material-ui/core/TableBody';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';
import { withStyles } from '@material-ui/core/styles'
import Paper from '@material-ui/core/Paper';

const styles = theme => ({
  root:{
    width:'100%',
    marginTop: theme.spacing.unit * 3,
    overflowX : "auto"
  },
  table: {
    minWidth: 1080
  }
})


const customers = [{
  'id' : 1,
  'image' : 'https://placeimg.com/64/64/1',
  'name' : '거북잉',
  'number' : '20142187',
  'sex' : 'Male',
  'job' : 'student'
  },
  {
    'id' : 2,
    'image' : 'https://placeimg.com/64/64/2',
    'name' : '토깽이',
    'number' : '20142117',
    'sex' : 'Male',
    'job' : 'student'
    },
  {
    'id' : 3,
    'image' : 'https://placeimg.com/64/64/3',
    'name' : '여우',
    'number' : '20134187',
    'sex' : 'Female',
    'job' : 'student'
    }

]

class App extends React.Component{
  
  render(){
    const { classes } = this.props;
    return (
      <Paper className={classes.root}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>번호</TableCell>
              <TableCell>이미지</TableCell>
              <TableCell>이름</TableCell>
              <TableCell>학번</TableCell>
              <TableCell>성별</TableCell>
              <TableCell>직업</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
          {
            customers.map(customer =>{
              return(
                <Customer
                  key={customer.id}
                  id={customer.id}
                  image={customer.image}
                  name={customer.name}
                  number={customer.number}
                  sex={customer.sex}
                  job={customer.job}
                />
              );
            })
          }
          </TableBody>
        </Table>
      </Paper>
    
    );
  }
}


export default withStyles(styles)(App);
