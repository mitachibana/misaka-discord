async function daily() {
  const wolfdata = await fetch(
    "http://api.wolframalpha.com/v2/query?appid=VYG3PE-6XWXW8E7AK&input=today%20nagano&output=json&ip=138.199.21.39"
  );
  const astronomy = await wolfdata.json();
  const response = await fetch(
    "https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/nagano%20city?unitGroup=metric&key=65RFGH2XZNTJ66GAHZQQFXEC8&contentType=json"
  );
  const nagano = await response.json();
  const exchange = await fetch(
    "https://v6.exchangerate-api.com/v6/6edfe27e296a34c3ec9282f9/latest/usd"
  );
  const usd = await exchange.json();
  const exchange2 = await fetch(
    "https://v6.exchangerate-api.com/v6/6edfe27e296a34c3ec9282f9/latest/cad"
  );
  const cad = await exchange2.json();
  const exchange3 = await fetch(
    "https://v6.exchangerate-api.com/v6/6edfe27e296a34c3ec9282f9/latest/gbp"
  );
  const gbp = await exchange3.json();
  const exchange4 = await fetch(
    "https://v6.exchangerate-api.com/v6/6edfe27e296a34c3ec9282f9/latest/eur"
  );
  const eur = await exchange4.json();
  const quote = await fetch("https://zenquotes.io/api/random");
  const motivation = await quote.json();
  const word = await fetch("https://random-word.ryanrk.com/api/jp/word/random");
  const jpword = await word.json();
  return `
    ***GOOD MORNING NAGANO***  <:arukumawink:981358951830552606>
    ${astronomy?.queryresult?.pods?.[1]?.subpods?.[0]?.plaintext}
    ${astronomy?.queryresult?.pods?.[3]?.subpods?.[1]?.plaintext} | ${astronomy?.queryresult?.pods?.[3]?.subpods?.[0]?.plaintext}
    ${astronomy?.queryresult?.pods?.[7]?.subpods?.[0]?.plaintext}

    <:mora:991587094512283708> **Exchange Rates**
    USD/JPY: ${usd.conversion_rates.JPY}
    CAD/JPY: ${cad.conversion_rates.JPY}
    GBP/JPY: ${gbp.conversion_rates.JPY}
    EUR/JPY: ${eur.conversion_rates.JPY}

    <:primogem:981354535522009161> **Today's Weather:**
    Sky condition: ${nagano?.description}
    Current temp: ${nagano?.currentConditions?.temp}C
    Feels like: ${nagano?.currentConditions?.feelslike}C
    Humidity: ${nagano?.currentConditions?.humidity}%
    Wind speed: ${nagano?.currentConditions?.windspeed}Km/H
    Wind gust: ${nagano?.currentConditions?.windgust}Km/H
    Pressure: ${nagano?.currentConditions?.pressure}mb

    <:primogem:981354535522009161> **Daylight Info:**
    Sunrise: ${nagano?.currentConditions?.sunrise}
    Sunset: ${nagano?.currentConditions?.sunset}

    <:primogem:981354535522009161> **Moon Phase:**
    ${astronomy?.queryresult?.pods?.[6]?.subpods?.[0]?.plaintext}

    <:primogem:981354535522009161> ***Quote of the Day:***
    *${motivation?.[0]?.q}*
    *-${motivation?.[0]?.a}*

    <:primogem:981354535522009161> ***Japanese Word of the Day:***
    ${jpword?.[0]}
    `;
}
module.exports.daily = daily;
