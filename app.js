const express = require('express');
const morgan = require('morgan');

const app = express();
app.use(morgan('dev'));

app.get('/', (req, res) => {
  res.send('Hello Express!');
});

app.get('/burgers', (req, res) => {
  res.send('We have juicy cheese burgers!');
});

app.get('/pizza/pepperoni', (req, res) => {
  res.send('Your pizza is on the way!');
});

app.get('/pizza/pineapple', (req, res) => {
  res.send(`We don't serve that here. Never call again!`);
});

app.get('/echo', (req, res) => {
  const responseText = `Here are some details of your request:
    Base URL: ${req.baseUrl}
    Host: ${req.hostname}
    Path: ${req.path}
  `;
  res.send(responseText);
});

app.get('/queryViewer', (req, res) => {
  console.log(req.query);
  res.end();
})

app.get('/greetings', (req, res) => {
  const name = req.query.name;
  const race = req.query.race;

  if (!name) {
    return res.status(400).send('Please provide a name');
  }
  if (!race) {
    return res.status(400).send('Please provide a race');
  }

  const greeting = `Greetings ${name} the ${race}, welcome to our kingdom.`;

  res.send(greeting);
});



app.get('/sum', (req, res) => {
  const a = Number(req.query.a);
  const b = Number(req.query.b);

  if (!a || !b) {
    return res.status(400).send('Please provide two numbers as parameters');
  }

  const result = a + b;

  res.send(`${a} + ${b} = ${result}`);
});



app.get('/cipher', (req, res) => {
  const text = req.query.text.toLowerCase().split('');
  const shift = Math.ceil(Number(req.query.shift));

  if (!text) {
    return res.status(400).send(`Please provide a string 'text' to encrypt`);
  }
  if (!shift) {
    return res.status(400).send(`Please provide a 'shift' number`);
  }

  const resultArray = text.map(char => {
    let code = char.charCodeAt();

    if (code < 97 || code > 122 ) {
      return String.fromCharCode(code);
    } 
    else {
      let newCode = code + shift;
      if (newCode > 122) {
        return String.fromCharCode(newCode - 26);
      } 
      else {
        return String.fromCharCode(newCode)
      }
    }
  });
  res.send(`${resultArray.join('')}`);
});


function duplicateCheck(arr) {
  duplicates = false;
  for (i=0; i<arr.length; i++) {
    for (j=i+1; j<arr.length; j++) {
      if (j != i && arr[j] === arr[i]) {
        duplicates = true;
      }
    }  
  } 
  return duplicates; 
}

function valueCheck(arr) {
  value = true;
  for (i=0; i<arr.length; i++) {
    if (arr[i] < 1 || arr[i] > 20) {
      value = false;
    }
  }
  return value;
}


app.get('/lotto', (req, res) => {
  const numbers = req.query.num.map(n => Number(n));


  if (!Array.isArray(numbers)) {
    return res.status(400).send('Please provide an array');
  }

  if (numbers.length !== 6) {
    return res.status(400).send('Please provide six numbers');
  }

  if (duplicateCheck(numbers)) {
    return res.status(400).send('Please provide six unique numbers');
  }

  if (valueCheck(numbers)) {
    return res.status(400).send('Please provide six unique numbers between 1 and 20');
  }

  





  

  const repeats = 
})

app.listen(8000, () => {
  console.log('Express server is listening on port 8000!');
});