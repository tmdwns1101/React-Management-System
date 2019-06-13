import React from 'react';
import logo from './logo.svg';
import './App.css';
import Customer from './components/Customer';

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

function App(){
  return (
    <main>
    <div className="gray-background">
      <img src={logo} lat="logo" />
      <h2>Let's develop management system!</h2>
    </div>
    <div>
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
    </div>
    </main>
  );
}


export default App;
