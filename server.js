const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = process.env.PORT || 5000;


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended : true }));

app.get('/api/hello', (req, res) =>{
    res.send({message: 'Hello Express'});
});

app.get('/api/customers', (req, res)=>{
    res.send([
        {
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
              },
            {
                'id' : 4,
                'image' : 'https://placeimg.com/64/64/4',
                'name' : '사슴',
                'number' : '20134337',
                'sex' : 'Female',
                'job' : 'student'
            }

    ]);
});

app.listen(port, ()=> console.log(`Listening on port ${port}`));