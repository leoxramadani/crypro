async function fetchNews(){
    try{
    const options = {
        method: 'GET',
        headers: {
        'X-RapidAPI-Key': 'eeff4aece3msh75c7f7fd13ba1dep14ff7cjsn8e4e794f3e0f',
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
                'X-RapidAPI-Key': 'eeff4aece3msh75c7f7fd13ba1dep14ff7cjsn8e4e794f3e0f',
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

function listPrices(prices1){

    if(!prices1){
        return;
    }
    fetchPrices().then(priceTags=>{
        if(!prices1){
            prices1.innerHTML='no prices fetched';
            return;
        }
    console.log("it=")

       var data = Object.entries(priceTags);
        
       data.map(item=>{

            item[1].map(it=>{
                var cryptoPrices = document.getElementById('cryptoNew');
                    console.log('it=',it)
                var example = document.createElement('div');
                example.setAttribute('id','example');
                example.setAttribute('class','example');

                var exampleImg = document.createElement('div');
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
                coinPrice.setAttribute('id','coinPrice');
                coinPrice.appendChild(document.createTextNode(it.Price));
                examplePrice.appendChild(coinPrice)

                example.appendChild(exampleImg);
                example.appendChild(exampleName);
                example.appendChild(examplePrice);
                cryptoPrices.appendChild(example);

            })
       })
        
    

    })

}

listPrices(pricesh6);