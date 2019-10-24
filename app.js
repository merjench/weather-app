const request = require('request')

// used darksky.net/dev
const url = 'https://api.darksky.net/forecast/ab1ac9d64866c213407b85793d328ee2/37.8267,-122.4233'
// can change info with ?key=value@otherkey=othervalue
//https://api.darksky.net/forecast/ab1ac9d64866c213407b85793d328ee2/37.8267,-122.4233?unit=si
request({ url: url, json: true }, (error, response) => {
    // console.log(response)
    // const data = JSON.parse(response.body)
    //console.log(response.body.currently)
    if (error) {
       console.log("Unable to connect to weather server")
    } else {
      console.log(response.body.daily.data[0].summary + 'It is Currently ' + response.body.currently.temperature + ' degrees out. There is a ' + response.body.currently.precipProbability + '% of rain')
    }

})

const geocodeUrl = 'https://api.mapbox.com/geocoding/v5/mapbox.places/Los%20Angeles.json?access_token=pk.eyJ1IjoibWVyamVuY2giLCJhIjoiY2syNHV1NzJjMGNnYzNucW1sbTExdHFzOSJ9.M9OrpCkpGzbhl9X2vmZzag&limit=1'

request({ url: geocodeUrl, json: true}, (error, response) => {
      // console.log(response)
    //
    const latitude = response.body.features[0].center[1]
    const longitude = response.body.features[0].center[1]
    console.log(latitude, longitude)

})
