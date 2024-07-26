const express =require("express");
const app = express();

app.use(express.json());

app.get('/add', (req,res)=>{
  const num1 = req.query.num1;
  const num2 = req.query.num2
  
  if(isNaN(num1) || isNaN(num2))
  {
    res.status(400).json({error : "Parameter must be numbers"})
  }
  else{
  const sum = num1 + num2;
  res.json({result:sum});
  }
});

app.listen(3000,()=>{
  
})