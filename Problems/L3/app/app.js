const express = require('express');
const cookieParser= require('cookie-parser');
const session = require('express-session');
const tools = require('./config');


const app = express();




app.set('view engine', 'ejs');
app.use(express.urlencoded({extended:true,}));
app.use(cookieParser());

app.use(session({
    secret: '##@#@#@#@##@#@#@##@',
    resave:false,
    saveUninitialized:true
}));

if(!process.argv[2]){
    console.log("ERROR");
    return -1;
}

const port = process.argv[2];
const bot_URL = 'http://127.0.0.1:'+port;




app.get('/', (req, res) =>{
    
    res.render('index')
})



app.get('/echo',(req,res)=>{

    if(!req.query.echo || !req.query.lv)
        return tools.echo_r(req,res,"?echo={input string}&lv=[1|2|3|4|5|6]");

    const {echo, lv} = req.query

   if (lv==1)
        return tools.echo_r(req,res,echo);

    if(lv == 5)
        return tools.echo_r(req,res,'<input type="hidden" value="'+echo+'">');

    return res.sendFile(__dirname+"/xss/lv".concat(lv).concat(".html"));


})




app.post('/bot', (req,res)=>{
    if(!req.body.report){
        res.render('bot');
        return 0;
    }

    let se = new URLSearchParams(req.body.report);
    let lv = se.get('lv');

    if(!lv){
        res.render('bot');
        return 0;
    }

    lv= parseInt(lv);

    let FLAG = "";

    switch(lv){

        case 1:
            FLAG = "WHD{Lv1_clear!_y0u_ge$_4xp}";
            break;

        case 2:
            FLAG = "WHD{Lv2_clear!_y0u_ge$_10xp}";
            break;
        case 3:
            FLAG = "WHD{Lv3_clear!_Congrats!_Leve1_up!}";
            break;
        case 4:
            FLAG = "WHD{Lv4_clear!_u_ge$_12xp}";
            break;
        case 5:
            FLAG = "WHD{Lv5_clear!_u_ge$_15xp}";
            break;
        case 6:
            FLAG = "WHD{Lv6_clear!_CSP_Bypassed!_u_ge$_30xp}";
            break;
        default:
            FLAG = "None";
            break;
    }

    tools.bot(req.body.report,FLAG,port).then(()=>{
        res.send("<script>alert('GOOD!');history.back();</script>");
    }).catch((e)=>{
        console.log(e)
        res.send("<script>alert('NOPE!');history.back();</script>");
    })
    
})

app.get('/bot',(req,res)=>{
    res.render('bot');
})


app.listen(port, ()=>{
    console.log("Server started:"+port)
})