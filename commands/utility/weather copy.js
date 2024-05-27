const { SlashCommandBuilder } = require("discord.js");

module.exports = {
  data: new SlashCommandBuilder()
    .setName("daily")
    .setDescription("Sends an updated copy of the daily greeting"),
  async execute(interaction) {
    const response = await fetch(
      "https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/nagano%20city?unitGroup=metric&key=65RFGH2XZNTJ66GAHZQQFXEC8&contentType=json"
    );
    const nagano = await response.json();
    await interaction.reply({
      content: `*Nagano City Weather*
		Sky condition: ${nagano?.description}
		Current temp: ${nagano?.currentConditions?.temp}C
		Feels like: ${nagano?.currentConditions?.feelslike}C
		Humidity: ${nagano?.currentConditions?.humidity}%
		Wind speed: ${nagano?.currentConditions?.windspeed}Km/H
		Wind gust: ${nagano?.currentConditions?.windgust}Km/H
		Pressure: ${nagano?.currentConditions?.pressure}mb
		Sunrise: ${nagano?.currentConditions?.sunrise}
		Sunset: ${nagano?.currentConditions?.sunset}`,
      ephemeral: true,
    });
  },
};
