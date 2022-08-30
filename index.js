const express=require('express');
const axios=require('axios');
const bodyParser=require('body-parser');
const app=express();
app.use(bodyParser.json());
const cors=require('cors');
app.use(cors());
app.get('/',(req,res)=>{
  res.send("Hi Sanjay ! Your app is running successfully");
})
app.post('/sendMessage',(req,res)=>{
    
  const {a,b,c,d,e,f,g,h}=req.body;
  const newmsg=`Incident No: ${a}
Severity: ${b}
Impacted OPCO: ${c}
Impacted Application/s: ${d}
Initial Issue Reported: ${e}
Start Time (OPCO Time): ${f}
Status: In Progress
Recovery Plan: ${h}`;
axios.get(`https://api.telegram.org/bot5744972442:AAFV223bOamMbyvAmrgp2-cHFK_h7k9VVkg/sendMessage?chat_id=-619631270&text=${newmsg}`
).then(
  (res)=>{
    //console.log(res)
    //res.send(res);
  }
).catch((err)=>{
  console.log(err);
  //res.send(err)
})
res.send("Hello Mr Sanjay");
})
app.listen(process.env.PORT||3001,()=>{
    console.log("App is listening on port 3001")
})