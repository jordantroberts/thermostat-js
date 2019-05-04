# Thermostat

A Makers Academy Week 5 weekly challenge, to help us to learn a new language (Javascript). The task was to test drive a simple front-end web app using Javascript, with the specification below.

## Specification
Specification:

* Thermostat starts at 20 degrees
* You can increase the temperature with an up function
* You can decrease the temperature with a down function
* The minimum temperature is 10 degrees
* If power saving mode is on, the maximum temperature is 25 degrees
* If power saving mode is off, the maximum temperature is 32 degrees
* Power saving mode is on by default
* You can reset the temperature to 20 with a reset function
* You can ask about the thermostat's current energy usage: < 18 is `low-usage`, < 25 is `medium-usage`, anything else is `high-usage`.

## Using this program

* Clone this repo
* From the command line, type 'open index.html'
* You can select your city from the drop-down menu, to check the current weather and adjust your thermostat accordingly
* If power-saving mode is on, you won't be able to increase the temperature higher than 25 degrees. If you turn it off, you can increase up to 32. Turning power save mode off, increasing the temperature and then turning power save mode back on will change the maximum back to 25 again.

![Thermostat screenshot](https://user-images.githubusercontent.com/46907218/57176622-eaab1e00-6e51-11e9-838f-15fdfeeb9439.png)

## What I learned from this project

1. How to test drive a simple front-end web app with Javascript
2. How to follow an effective process for learning a new language
3. Reading and writing Javascript syntax
4. Introduced to Ajax and Jquery
5. How to encapsulate behaviour in Javascript
6. How to test and debug in multiple languages
7. Following the flow of control over the whole web app cycle. 

## Testing this program

### Feature Test
* Copy the code in the 'thermostat.js' file and paste this into your console on Chrome Dev Tools.
* Create a new thermostat object by typing `thermostat = new Thermostat();`
* You can increase the temperature by typing `thermostat.up();` and decrease it by typing `thermostat.down();`
* To toggle the power saving mode on or off, type `thermostat.switchPSM();`
* To check your energy usage, type `thermostat.energyUsage();`
* To check the current temperature, type `thermostat.temp();`
* To reset the temperature, type `thermostat.reset();`

### Unit Test
* Clone this repo
* From the command line, type 'open SpecRunner.html'
* The unit tests all pass:

![Thermostat Business Logic Passed](https://user-images.githubusercontent.com/46907218/57176648-44abe380-6e52-11e9-83ce-f776f470ba3a.png)

### Acknowledgements
Jordan Roberts - a Makers Academy Challenge
Over the course of this challenge, I paired with:
1. Xain Storey
2. Sarpong Abisimi
3. Jake Napper
