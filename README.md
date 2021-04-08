# ISS Spotter

## A Work in progress....

- A small app for space enthusiasts who are interested in spotting the International Space Station (ISS). The ISS completes multiple revolutions around Earth per day. In fact, it passes overhead every ~90 minutes, and in some cases can even be spotted with the naked eye, though not every time.

## How often can I expect to see the space station?

- "The space station is visible because it reflects the light of the Sun – the same reason we can see the Moon. However, unlike the Moon, the space station isn't bright enough to see during the day. It can only be seen when it is dawn or dusk at your location. As such, it can range from one sighting opportunity a month to several a week, since it has to be both dark where you are, and the space station has to happen to be going overhead." - spotthestation.nasa.gov

## The Approach

- We'll be making API requests to three different services to solve this problem.

  - Fetch our IP Address
  - Fetch the geo coordinates (Latitude & Longitude) for our IP
  - Fetch the next ISS flyovers for our geo coordinates

## Inspiration

- This was a small project during my time at Lighthouse Labs Web Development Boot Camp.

- The entire app was used from the command prompt during bootcmap, whereas this app will have be created using REACT and will be experienced in the browser.

- repository of original project for reference - https://github.com/davemgj84/iss_spotter

## Example data from original app's command prompt useage:

`Next pass at Fri Jun 01 2021 13:01:35 GMT-0700 (Pacific Daylight Time) for 465 seconds!`
