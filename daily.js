const { tokenWolf, tokenExchange } = require("./config.json");

async function daily() {
  const wolfTime1 = await fetch(
    `http://api.wolframalpha.com/v2/query?appid=${tokenWolf}&input=october+21+2025&output=json`
  );
  const gBannerTime = await wolfTime1.json();
  const wolfTime2 = await fetch(
    `http://api.wolframalpha.com/v2/query?appid=${tokenWolf}&input=october+14+2025&output=json`
  );
  const hBannerTime = await wolfTime2.json();
  const wolfTime3 = await fetch(
    `http://api.wolframalpha.com/v2/query?appid=${tokenWolf}&input=october+14+2025&output=json`
  );
  const zBannerTime = await wolfTime3.json();
  const exchange = await fetch(
    `https://v6.exchangerate-api.com/v6/${tokenExchange}/latest/usd`
  );
  const usd = await exchange.json();
  const exchange2 = await fetch(
    `https://v6.exchangerate-api.com/v6/${tokenExchange}/latest/cad`
  );
  const cad = await exchange2.json();
  const exchange3 = await fetch(
    `https://v6.exchangerate-api.com/v6/${tokenExchange}/latest/gbp`
  );
  const gbp = await exchange3.json();
  const exchange4 = await fetch(
    `https://v6.exchangerate-api.com/v6/${tokenExchange}/latest/eur`
  );
  const eur = await exchange4.json();
  const quote = await fetch("https://zenquotes.io/api/random");
  const motivation = await quote.json();
  const word = await fetch("https://random-word.ryanrk.com/api/jp/word/random");
  const jpword = await word.json();
  return `
  ***Good Day Everyone! Here is Your Daily Hoyo Banner Update:***
    
    :salt: **Banners**
    ***Genshin Banner | 6.0 Luna 1 Phase 2: Flins DEBUT, Yelan, Sucrose, Dori, Aino DEBUT***
    Ends on ${gBannerTime?.queryresult?.pods?.[0]?.subpods?.[0]?.plaintext}
    Time left: ${gBannerTime?.queryresult?.pods?.[2]?.subpods?.[0]?.plaintext}
    
    ***HSR Banner | 3.6 Phase 1: Evernight DEBUT, The Herta, Archer & Saber (COLLAB), Misha, Guinaifen, Xueyi***
    Ends on ${hBannerTime?.queryresult?.pods?.[0]?.subpods?.[0]?.plaintext}
    Time left: ${hBannerTime?.queryresult?.pods?.[2]?.subpods?.[0]?.plaintext}
    
    ***ZZZ Banner | 2.2 Phase 2: Orphie and Magus DEBUT, Evelyn, Anton, Lucy***
    Ends on ${zBannerTime?.queryresult?.pods?.[0]?.subpods?.[0]?.plaintext}
    Time left: ${zBannerTime?.queryresult?.pods?.[2]?.subpods?.[0]?.plaintext}
    
    :money_with_wings: **Exchange Rates**
    USD/JPY: ${usd.conversion_rates.JPY}
    CAD/JPY: ${cad.conversion_rates.JPY}
    GBP/JPY: ${gbp.conversion_rates.JPY}
    EUR/JPY: ${eur.conversion_rates.JPY}
    
    **Quote of the Day:**
    *${motivation?.[0]?.q} 
    -${motivation?.[0]?.a}*
    
    **Japanese Word of the Day:**
    ${jpword?.[0]}
    
    * If you have subscribed to this post, you have been pinged: <@&1369210429859041392>. If you would like to subscribe to this post in order to get a convenient push notification each day, please visit <#1012719178614046760>*
    `;
}
module.exports.daily = daily;


