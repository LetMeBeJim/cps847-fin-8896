<template>
    <p>Next hour</p>
    <div id="w-header">Prediction's timestamp: {{ myTS[0] }}</div>
    <div id="w-condition">Condition: {{ condition[0] }}</div>
    <div id="w-temperature">Temperature: {{ temperature[0] }}</div>
    <br/>
    <p>One hour later</p>
    <div id="w-header">Prediction's timestamp: {{ myTS[1] }}</div>
    <div id="w-condition">Condition: {{ condition[1] }}</div>
    <div id="w-temperature">Temperature: {{ temperature[1] }}</div>
    <br/>
    <p>Two hours later</p>
    <div id="w-header">Prediction's timestamp: {{ myTS[2] }}</div>
    <div id="w-condition">Condition: {{ condition[2] }}</div>
    <div id="w-temperature">Temperature: {{ temperature[2] }}</div>


  </template>
  
  <script>
  export default {
    name: 'weather-element',
    props: {
      msg: String
    },
    data() {
        return {
            temperature: [],
            myTS: [],
            condition: [],
        }
    },
    async created() {
        const response = await fetch("https://api.openweathermap.org/data/2.5/forecast?units=metric&lat=42.9849&lon=-81.2453&appid=21432fd13a6de98d502de1f58eff1ea0");
        const data = await response.json();
        console.log(data.list[0].dt)
        console.log(data.list[1].weather[0].description)
        console.log(data.list[2].main.temp)
        this.temperature = [data.list[0].main.temp, data.list[1].main.temp, data.list[2].main.temp ];
        this.myTS = [data.list[0].dt, data.list[1].dt, data.list[2].dt];
        this.condition = [data.list[0].weather[0].description, data.list[1].weather[0].description, data.list[3].weather[0].description]


    }
  }
  </script>
  
  <!-- Add "scoped" attribute to limit CSS to this component only -->
  <style scoped>
  </style>