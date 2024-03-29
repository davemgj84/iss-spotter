# I.S.S. - Spotter

## NOTE

- Unfortunately the open-notify API is no longer supported and no longer provides the ISS data required for this application.
- More details on the API Docs here: http://open-notify.org/Open-Notify-API/ISS-Pass-Times/
- I decided to leave the details for the application below for posterity reasons, but this application is no longer working.

## About

- This app is for space enthusiasts who are interested in spotting the International Space Station (ISS). The ISS completes multiple revolutions around the Earth per day. In fact, it passes overhead every ~ 90 minutes, and in some cases can even be spotted with the naked eye, though not every time.

- Using your IP and Geo-Location, this app will connect with the "Open Notify" API and provide you with the next possible times to observe the Space Station pass overheard! For this to work, you will have to allow the browser to access your current location. Also if you are using a VPN, remember to turn it off so you may get times relevant to your position!

## How often can I expect to see the space station?

- "The space station is visible because it reflects the light of the Sun, the same reason we can see the Moon. However, unlike the Moon, the space station isn't bright enough to see during the day. It can only be seen when it is dawn or dusk at your location. As such, it can range from one sighting opportunity a month to several a week, since it has to be both dark where you are, and the space station has to happen to be going overhead." - https://spotthestation.nasa.gov/

## The Approach

- When a user lands on the page, they will be prompted to share their location with the App.
- Using the user's geolocation data, latitude & longitude, we make an API request to the Open-Notify API. (http://open-notify.org/)
- The API request will be made via my own Node Express server, so we can handle CORS appropriately.
- The server can be found at the iss-api repository here - https://github.com/davemgj84/iss-api
- The data provided is a unix timestamp and the total duration for the next five passes that the ISS will make. The timestamp is processed into human readable time and provided back to the user :)

## Inspiration

- There was a small project during my time at Lighthouse Labs Web Development Boot Camp that used your ip address to find your location, and then used your location to make an API call to Open-Notify

- The original project was create for and used from the command prompt.

- Repository of original project for reference - https://github.com/davemgj84/iss_spotter - Please keep in mind I was only in week 2 of boot camp when this was created! 😂

## Location of deployed application

- The application is deployed via Netlify and can be visited here:

  - https://iss-spotter.netlify.app/

## Instructions to run locally

- Fork this repository. Cd into the project folder, and `run npm install`.

- Once dependencies have been installed, and you may simply run `npm start` to open the application locally on your browser, via `Port 3000`.

- This app is connected to a Heroku API

- My repository for the backend is located here: https://github.com/davemgj84/iss-api

## Frontend Dependencies Include:

- React - ^18.2.0
- Sass - ^1.69.7

## Backend Dependencies Include:

- Node - ^10.16.1
- Express - ^4.17.1
- Cors - ^2.8.5
- Axios - ^0.21.1

## Screenshots - (WIP)

![Iss Info](https://github.com/davemgj84/iss-spotter/blob/master/docs/iss-info.png?raw=true)
![Iss Predictions](https://github.com/davemgj84/iss-spotter/blob/master/docs/iss-predictions.png?raw=true)
