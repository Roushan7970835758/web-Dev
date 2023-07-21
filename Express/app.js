// const express = require("express")
// const path = require("path")
// const app = express();
// const port =80;

// //For serving static files
// app.use('/static',express.static('static'))

// //set the temp engine as pug
// app.set('view engine','pug')

// //set view directory
// app.set('views',path.join(__dirname,'views'))

// //our pug demo endpoint
// app.get("/demo",(req,res)=>{
//     res.status(200).render('demo',{ title:'Hey Roushan',message:'Hello there and thanks for telling me how to use pupG!' });
// });

// app.get("/",(req,res)=>{
//     res.status(200).send("this is my homepage of my firsg express app with harry");
// });


// app.get("/about",(req,res)=>{
//     res.send("this is about page of my first express app with harry");
// });

// app.post("/about",(req,res)=>{
//     res.send("this is post request of about page of my first express app with harry");
// });


// app.get("/this",(req,res)=>{
//     res.status(404).send("this page is not found on roushan first express application");
// });

// app.listen(port,()=>{
//     console.log(`The application started succesfully on port ${port}`)
// })



//---------------------------------------------------------------------------------------------------------------------
//vid 73 cwh

const express = require("express")
const path = require("path")
const fs = require("fs")
const app = express();
const port =80;

//EXPRESS SPECIFIC STUFF
app.use('/static',express.static('static'))//For serving static files
app.use(express.urlencoded())

//PUG SPECIFIC STUFF
app.set('view engine','pug')//set the temp engine as pug
app.set('views',path.join(__dirname,'views'))//set view directory



//ENDPOINTS
app.get('/',(req,res)=>{
    const con = "this is the best content on the internet so far so use it wisely"
    const params = {'title':'pug is the best express templete of node js','content':con}
    res.status(200).render('index.pug',params);
})
app.post('/',(req,res)=>{
    name = req.body.name 
    age = req.body.age
    gender = req.body.gender
    address = req.body.address
    more = req.body.more
    let outputToWrite = `the name of the client is ${name},${age} year old, ${gender},residing at ${address}. More about him/her: ${more}`

    fs.writeFileSync('output.txt',outputToWrite)
 
    const params = {'message':'Your form has been submitted successfully'}
    res.status(200).render('index.pug',params);
})

//START TH SERVER
app.listen(port,()=>{
    console.log(`The application started succesfully on port ${port}`)
})