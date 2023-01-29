async function fetchNews(){
    try{
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': '6534a84eb0mshbf1da5b08fa08ecp112a04jsna6c53aeaae7f',
            'X-RapidAPI-Host': 'crypto-news16.p.rapidapi.com'
        }
    };
    const response= await fetch('https://crypto-news16.p.rapidapi.com/news/top/5', options)
    if(!response.ok){
        throw new Error(`Failed to fetch the data: ${response.status}`)
    }

    return response.json();
    }catch(e){
        console.log("Error e=",e)
    }
}
function listNews(news1){
    const news2 = document.getElementById(news1);
    if(!news1){
        return;
    }
    fetchNews().then(news=>{
        if(!news){
            news2.innerHTML = 'no news fetched';
            return;
        }
        var cryptoNews = document.getElementById('crypto1');
        
        news.map(item=>{
            var flipBox = document.createElement('div');
            flipBox.setAttribute('id','flip-box');
            flipBox.setAttribute('class','flip-box');

            var flipBoxInner = document.createElement('div');
            flipBoxInner.setAttribute('id','flip-box-inner');
            flipBoxInner.setAttribute('class','flip-box-inner');

            var flipBoxFront = document.createElement('div');
            flipBoxFront.setAttribute('id','flip-box-front');
            flipBoxFront.setAttribute('class','flip-box-front');
            
            var header1 = document.createElement('h5');
            header1.appendChild(document.createTextNode(item.title));

            flipBoxFront.appendChild(header1);

            var flipBoxBack = document.createElement('div');
            flipBoxBack.setAttribute('id','flip-box-back');
            flipBoxBack.setAttribute('class','flip-box-back');

            var header2 = document.createElement('h2');
            header2.appendChild(document.createTextNode(item.description));

            flipBoxBack.appendChild(header2);

            flipBoxInner.append(flipBoxBack);
            flipBoxInner.appendChild(flipBoxFront);
            flipBox.appendChild(flipBoxInner);
            cryptoNews.appendChild(flipBox);
        });
    }).catch(e=>{
        console.log("e=",e);
    })
}

listNews(news1);


async function fetchPrices(){
    try{
        const options = {
            method: 'GET',
            headers: {
                'X-RapidAPI-Key': '6534a84eb0mshbf1da5b08fa08ecp112a04jsna6c53aeaae7f',
                'X-RapidAPI-Host': 'crypto-update-live.p.rapidapi.com'
            }
        };
        
        const response = await fetch('https://crypto-update-live.p.rapidapi.com/top-currency/top_50_details', options)
            if(!response.ok){
                throw new Error(`failed to fetch the data for the crypto prices: ${response.status}`);
            }
            return response.json();
    }
    catch(e){
        console.log("error e=",e);
    }
}

const pricesh6 = document.getElementById('pricesh5');
var BtcPrice = 0;
let EthPrice = 0;
let TethPrice = 0;
let UsdPrice = 0;
let BnbPrice = 0;
let BinPrice = 0;

function listPrices(prices1){

    if(!prices1){
        return;
    }
    fetchPrices().then(priceTags=>{
        if(!prices1){
            prices1.innerHTML='no prices fetched';
            return;
        }
       var data = Object.entries(priceTags);
       data.map(item=>{
            var x = 0;
            item[1].map((it,index)=>{
                
                if(x<=5){

                
                var cryptoPrices = document.getElementById('cryptoNew');
                var example = document.createElement('div');
                example.setAttribute('class','example');
                example.setAttribute('data-aos','flip-up')
                
                const exampleImg = document.createElement('div');
                exampleImg.setAttribute('id','exampleImg');
                exampleImg.setAttribute('class','exampleImg');
                var thisIMG = document.createElement('IMG');
                thisIMG.setAttribute('id','coinIMG');
                thisIMG.src=it.Image;
                exampleImg.appendChild(thisIMG);

                var exampleName = document.createElement('div');
                exampleName.setAttribute('id','exampleName');
                exampleName.setAttribute('class','exampleName');
                var header1 = document.createElement('h5');
                header1.appendChild(document.createTextNode(it.Coin));
                exampleName.appendChild(header1);


                var examplePrice = document.createElement('div');
                examplePrice.setAttribute('id','examplePrice');
                examplePrice.setAttribute('class','examplePrice');
                var coinPrice = document.createElement('h5');
                coinPrice.id="coinPrice_"+x;
                coinPrice.appendChild(document.createTextNode(it.Price));
                examplePrice.appendChild(coinPrice);
                
        

                example.appendChild(exampleImg);
                example.appendChild(exampleName);
                example.appendChild(examplePrice);
                var buyBTN = document.createElement('button');

                buyBTN.id = "button_" +x;
                example.appendChild(buyBTN);
                buyBTN.innerText="Buy coin";

                

                cryptoPrices.appendChild(example);


                

                
                if(x==0){
                let profileDiv = document.getElementById('profileDiv');
                let profilePic = document.getElementById('profilePic');
                let CloseBtn = document.getElementById("CloseBtn");

                
                let infoSection = document.getElementById("infoSection");
                    infoSection.style.display="none";
                    infoSection.style.marginTop="15px";
                    infoSection.style.justifyContent="space-evenly";
                    infoSection.style.alignItems="center";

                let myMoneySection = document.createElement("div");
                    myMoneySection.id = "myMoneySection";
                    myMoneySection.style.width="40%";
                    myMoneySection.style.height="80%";
                    myMoneySection.style.border="2px solid pink";
                    myMoneySection.style.display="none";
                    myMoneySection.style.justifyContent="space-evenly";
                    myMoneySection.style.alignItems="center";
                    myMoneySection.style.flexDirection="column";
                
                let myMoneyTitle = document.createElement("h5");
                    myMoneyTitle.appendChild(document.createTextNode("My wallet"));
                    myMoneyTitle.style.color="white";
                    myMoneyTitle.style.textShadow="2px 2px black";
                    myMoneyTitle.style.fontSize="22px";
                    myMoneyTitle.style.textAlign="center";
                    myMoneyTitle.style.display="none";

                let myMoney = document.createElement("h5");
                    myMoney.appendChild(document.createTextNode("$"));
                    myMoney.style.color="green";
                    myMoney.style.fontSize="18px";
                    myMoney.style.display="none";

                let myMoneySpent = document.createElement("div");
                    myMoneySpent.id = "myMoneySpent";
                    myMoneySpent.style.width="40%";
                    myMoneySpent.style.height="80%";
                    myMoneySpent.style.border="2px solid crimson";
                    myMoneySpent.style.display="none";

                let moneySpentTitle = document.createElement("h5");
                    moneySpentTitle.appendChild(document.createTextNode("Money spent"));
                    moneySpentTitle.style.color="white";
                    moneySpentTitle.style.textShadow="2px 2px black";
                    moneySpentTitle.style.fontSize="22px";
                    moneySpentTitle.style.textAlign="center";
                    moneySpentTitle.style.display="none";

                let moneyGone = document.createElement("h5");
                    moneyGone.id="moneyGone";
                    moneyGone.style.background="black";
                    moneyGone.style.padding="2px";
                    moneyGone.style.color="green";
                    moneyGone.style.fontSize="18px";

                    
                    myMoneySpent.appendChild(moneySpentTitle);
                    myMoneySpent.appendChild(moneyGone);
                    myMoneySection.appendChild(myMoneyTitle);
                    myMoneySection.appendChild(myMoney)



                let y = 0;
                if(y<1 ){

                    // infoSection.appendChild(myMoneySection)
                    infoSection.appendChild(myMoneySpent);
                }
                y++;
                profilePic.addEventListener("click",function(){
                    
                    profileDiv.style.paddingBottom="20px";
                    profileDiv.style.width="88vw";
                    profileDiv.style.height="auto";
                    profileDiv.style.borderRadius="35px"
                    profileDiv.style.cursor = "default";

                    profilePic.style.marginTop="25px";
                    profilePic.style.width="200px";
                    profilePic.style.height="200px";


                    infoSection.style.justifyContent="space-evenly";
                    infoSection.style.alignItems="center";
                    infoSection.style.display="flex "

                    myMoneySection.style.display="flex";
                    myMoneySection.style.justifyContent="space-evenly";
                    myMoneySection.style.alignItems="center";
                    myMoneySection.style.flexDirection="column";

                    CloseBtn.style.display="block";

                    myMoney.style.display="block";
                    myMoney.style.display="block";
                    myMoneyTitle.style.display="block";
                    moneySpentTitle.style.display="block";
                   

                    myMoneySpent.style.display="flex";
                    myMoneySpent.style.justifyContent="space-evenly";
                    myMoneySpent.style.alignItems="center";
                    myMoneySpent.style.flexDirection="column";

                    


                    moneyGone.innerText=BtcPrice+EthPrice+TethPrice+UsdPrice+BnbPrice+BinPrice;
                   

                    
              
                })

                CloseBtn.addEventListener("click",function(){
                    
                    
                    profileDiv.style.cursor = "pointer";
                    profileDiv.style.width="70px";
                    profileDiv.style.height="70px";
                    // profileDiv.style.borderRadius="50%";

                    profilePic.style.marginTop="0px";
                    profileDiv.style.paddingBottom="0px";
                    profilePic.style.width="70px";
                    profilePic.style.height="70px";
                    CloseBtn.style.display="none";
                    
                    infoSection.style.display="none";

                })


                document.onclick = function (e) {
                    if (e.target.id !== 'profileDiv' && e.target.id !== 'profilePic') {
                        profileDiv.style.cursor = "pointer";
                        profileDiv.style.width="70px";
                        profileDiv.style.height="70px";
                        // profileDiv.style.borderRadius="50%";
                    
                        profilePic.style.marginTop="0px";
                        profileDiv.style.paddingBottom="0px";
                        profilePic.style.width="70px";
                        profilePic.style.height="70px";
                        CloseBtn.style.display="none";
                        
                        infoSection.style.display="none";
                    }
                }
                }

                var button_0 = document.getElementById('button_0');
                var button_1 = document.getElementById('button_1');
                var button_2 = document.getElementById('button_2');
                var button_3 = document.getElementById('button_3');
                var button_4 = document.getElementById('button_4');
                var button_5 = document.getElementById('button_5');
            
            
                var coinPrice_0 = document.getElementById('coinPrice_0');
                var coinPrice_1 = document.getElementById('coinPrice_1');
                var coinPrice_2 = document.getElementById('coinPrice_2');
                var coinPrice_3 = document.getElementById('coinPrice_3');
                var coinPrice_4 = document.getElementById('coinPrice_4');
                var coinPrice_5 = document.getElementById('coinPrice_5');
                var alertDiv = document.getElementById('alertClass');
                
                button_0.addEventListener("click",function(){
                    var btcString = coinPrice_0.innerText.substring(1,coinPrice_0.innerText.length-3)
                    btcString =btcString.replace(/[,]/g, '');
                    BtcPrice = BtcPrice+Number(btcString)/6;
                    const DelayBtc = setTimeout(setBtc(BtcPrice),1000);
                    alertDiv.style.display="flex";
                    
                })
                function setBtc(BtcPrice){
                    let moneyGone = document.getElementById('moneyGone');
                    moneyGone.innerText=moneyGone.innerText+BtcPrice;
                }


                const delayEth = setTimeout(EthFunc,2000);
                function EthFunc(){
                    document.getElementById('button_1').addEventListener("click",function(){
                        var ethString = coinPrice_1.innerText.substring(1,coinPrice_1.innerText.length-3)
                        ethString = ethString.replace(/[,]/g,'');
                        EthPrice =EthPrice +Number(ethString)/5;
                        const DelayEth = setTimeout(setEth(EthPrice),1000);
                        alertDiv.style.display="flex";
                        console.clear();
                    })
                    function setEth(EthPrice){
                        let moneyGone = document.getElementById('moneyGone');
                        moneyGone.innerText=moneyGone.innerText+EthPrice;
                    }
                }

                const delayTeth = setTimeout(TethFunc,2000);
                function TethFunc(){
                    document.getElementById('button_2').addEventListener("click",function(){
                    var tethString = coinPrice_2.innerText.substring(1,coinPrice_2.innerText.length-3);
                    tethString = tethString.replace(/[.]/g,'');
                    TethPrice =TethPrice+Number(tethString)/4;
                    const DelayTeth = setTimeout(setTeth(TethPrice),1000);
                    alertDiv.style.display="flex";
                    console.clear();
                    })
                    function setTeth(TethPrice){
                        let moneyGone = document.getElementById('moneyGone');
                        moneyGone.innerText=moneyGone.innerText+TethPrice;
                    }
                }

                const delayUSD = setTimeout(UsdFunc,2000);
                function UsdFunc(){
                    document.getElementById('button_3').addEventListener("click",function(){
                        var usdString = coinPrice_3.innerText.substring(1,coinPrice_3.innerText.length-3);
                        usdString = usdString.replace(/[.]/g,'');
                        UsdPrice = UsdPrice+Number(usdString)/3;
                        const DelayUsd = setTimeout(setUsd(UsdPrice),1000);
                        alertDiv.style.display="flex";
                        console.clear();
                    })
                    function setUsd(UsdPrice){
                        let moneyGone = document.getElementById('moneyGone');
                        moneyGone.innerText=moneyGone.innerText+UsdPrice;
                    }
                }

                const delayBnb = setTimeout(BnbFunc,2000);
                function BnbFunc(){
                    document.getElementById('button_4').addEventListener("click",function(){
                        var bnbString = coinPrice_4.innerText.substring(1,coinPrice_4.innerText.length-3);
                        bnbString = bnbString.replace(/[.]/g,'');
                        BnbPrice = BnbPrice+Number(bnbString)/2;
                        const DelayBnb = setTimeout(setBnb(BnbPrice),1000);
                        alertDiv.style.display="flex";
                        console.clear();
                    })
                    function setBnb(BnbPrice){
                        let moneyGone = document.getElementById('moneyGone');
                        moneyGone.innerText=moneyGone.innerText+BnbPrice;
                    }
                }

                const delayBin = setTimeout(BinFunc,2000);
                function BinFunc(){
                    document.getElementById('button_5').addEventListener("click",function(){
                        var binString = coinPrice_5.innerText.substring(1,coinPrice_5.innerText.length-3);
                        binString = binString.replace(/[.]/g,'');
                        BinPrice = BinPrice+Number(binString);
                        const DelayBin = setTimeout(setBin(BinPrice),1000);
                        alertDiv.style.display="flex";
                        console.clear();
                    })
                    function setBin(BinPrice){
                        let moneyGone = document.getElementById('moneyGone');
                        moneyGone.innerText=moneyGone.innerText+BinPrice;
                    }
                }

                document.getElementById('closeAlert').addEventListener("click",function(){
                    alertDiv.style.display='none';
                })
                
            }
                x++;
            })
       })
        
    

    })

}

listPrices(pricesh6);

AOS.init({
    duration:1800,
});
