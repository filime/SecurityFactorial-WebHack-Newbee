const puppeteer = require('puppeteer');

function delay(time) {
    return new Promise(function(resolve) { 
        setTimeout(resolve, time)
    });
 }

const xss_filter = (str, lv) => {
    if(!lv || !str)
        return "404 Not FOUND";
    lv = parseInt(lv);
    var reg = "";
    var reg_s = "";

    if(lv === 1){ // Level1
        reg = /\t|eval|`|\(|!|\$/ig;
        reg_s = `/\\t|eval|\`|!|\$/ig`;

    }else if(lv === 2){ // Level2
        return 0;

    }else if(lv === 3){ // Level3
        reg = /\t|eval|`|\(|!|\$|frame|img|onerror|alert|onload|onclick|\\u|\/u/ig;
        reg_s = `/\\t|eval|\`|\(|!|\$|frame|img|onerror|alert|onload|onclick|\\u|\/u/ig`;

    }else if(lv === 4){ // Level4
        reg = /\t|eval|`|\(|!|\$|img|onerror|alert|onload|onclick|onfocus|autofocus|script|\\u|\/u/ig;
        reg_s = `/\\t|eval|\`|\(|!|\$|img|onerror|alert|onload|onclick|onfocus|autofocus|script|\\u|\/u/ig`;

    }else if(lv === 5){ // Level5 / Todo: add Hidden Tag
        reg = /\t|eval|`|\(|!|\$|\n|>|script/ig;
        reg_s = `/\\t|eval|\`|\(|!|\$|\\n|>|script/ig`;
    }else if(lv === 6 || lv === 7){
        return 0;
    }

    if(str.match(reg)){
        return reg_s;
    }else{
        return 0;
    }

}

const bot = async (report, flag,port) => {
    try{
    const bot_URL = 'http://127.0.0.1:'+port;

    const cookies=[
        {name: "flag", value: flag, domain: "127.0.0.1:"+port}
    ]

    const browser = await puppeteer.launch({
        headless: false,
        //executablePath: "/usr/bin/google-chrome-stable",
        args: ["--no-sandbox"],
      });
    
    const page = await browser.newPage();
    await page.setCookie(...cookies);
    
    console.log(report)
    await page.goto(bot_URL+'/echo'+report);
    
    await delay(1000)

    await page.close();
    await browser.close();
    return 1;
    }catch(e){
        console.log("BOT ERORR");
        throw "error";
    } finally {
    await page.close();
    await browser.close();
    }
}

const echo_r = (req,res,str_e)=>{
    return res.send(200, str_e);
}

module.exports={
    bot,
    echo_r,
    xss_filter
}