# Automation Test Scripts

This repository has two set of scripts for -
* Trip Planner - Test the result between 2 stations("North Sydney Station" to "Town Hall Station")  -  tripplanner.js
* Stop Finder  - Find stops for "Wynyard Station" and test if it provides more than one mode of transport - stopFinder.js

## How to run the script
To run test scripts -
* Install Cypress in your local computer - and set in the PATH  
    ```
        $ npm install cypress --save-dev
    ```
* Checkout scripts -
    ```
        $ git clone https://github.com/Garry2012/TripPlannerAutomation.git
    ```
* Run Cypress - go to location where script is checked out as below
    ```
        .\TripPlannerAutomation>START /B cypress open  (if windows)
        .\tTripPlannerAutomation>cypress open & (if Linux or mac)
    ```
Click on the scripts and it will run the tests
