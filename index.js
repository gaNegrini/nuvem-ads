const express = require('express')
const app = express()
const port = 8080

app.use(express.json());

app.get('/soma', (req, res) => {
    const { numero1, numero2 } = req.query;
    const resultado = Number(numero1) + Number(numero2);
    res.json({ resultado });
    console.log(resultado);
  });
  
  app.get('/subtracao', (req, res) => {
    const { numero1, numero2 } = req.query;
    const resultado = Number(numero1) - Number(numero2);
    res.json({ resultado });
    console.log(resultado);
  });
  
  app.get('/multiplicacao', (req, res) => {
    const { numero1, numero2 } = req.query;
    const resultado = Number(numero1) * Number(numero2);
    res.json({ resultado });
    console.log(resultado);
  });
  
  app.get('/divisao', (req, res) => {
    const { numero1, numero2 } = req.query;
    const resultado = Number(numero1) / Number(numero2);
    res.json({ resultado });
    console.log(resultado);
  });

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})