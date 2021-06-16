/*  Thomas Bielawski
    Lambda School Cohort: WEB45
    index.js
    1.3.2 Array Methods and Callbacks
    06/15/2021 */

import { fifaData } from './fifa.js';

// ⚽️ M  V P ⚽️ //

/* 🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀 Task 1: 🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀
Practice accessing data by console.log-ing the following pieces of data note, you may want to filter the data first 😉*/

const finals2014 = fifaData.filter(function(item)
{ return item.Year === 2014 && item.Stage === "Final";});

console.log("Task 1", finals2014);

//(a) Home Team name for 2014 world cup final
console.log("task 1a", finals2014[0]["Home Team Name"]);
//(b) Away Team name for 2014 world cup final
console.log("task 1b", finals2014[0]["Away Team Name"]);
//(c) Home Team goals for 2014 world cup final
console.log("task 1c", finals2014[0]["Home Team Goals"]);
//(d) Away Team goals for 2014 world cup final
console.log("task 1d", finals2014[0]["Away Team Goals"]);
//(e) Winner of 2014 world cup final */
console.log("task 1e", finals2014[0]["Win conditions"]);


/* 🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀 Task 2: 🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀 
Use getFinals to do the following:
1. Receive data as a parameter
2. Return an array of objects with the data of the teams that made it to the final stage

hint - you should be looking at the stage key inside of the objects
*/

//Declare the function
function getFinals(data) 
{
    //Filter the array and assign results to the new array
    const task2FinalsArray = data.filter(function(game) 
    {
        //Return game when "Stage" equals "Final"
        return game["Stage"] === "Final";
  
    });

    //Return the array
    return task2FinalsArray;
}


/* 🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀 Task 3: 🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀
Use the higher-order function called getYears to do the following: 
1. Receive an array
2. Receive a callback function getFinals from task 2 
3. Return an array called years containing all of the years in the getFinals data set*/

//Declare empty array to hold the output
const task3YearsArray = [];
//Define the function, pass in finals and getFinalsCB as parameters
function getYears(finals, getFinalsCB) 
{
    //For each loop to search
    finals.forEach(function(item)
    { 
        //Push years to new array
        task3YearsArray.push(item["Year"]); 
    });

    //Return the years
    return task3YearsArray;
}
    
/* 🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀 Task 4: 🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀
Use the higher-order function getWinners to do the following:  
1. Receives an array
2. Receives the callback function getFinals from task 2 
3. Determines the winner (home or away) of each `finals` game. 
4. Returns the names of all winning countries in an array called `winners` */ 

//Declare empty array
const task4WinnersArray = [];
//Define the function, pass in getFinalsCB
function getWinners(getFinalsCB) 
{
    //For Each to search the array
    getFinalsCB.forEach(function(item)
    {
        //If home team is greater
        if (item["Home Team Goals"] > item["Away Team Goals"])
        {
            //Push home team name
            task4WinnersArray .push(item["Home Team Name"]);
        }

        //If away team is greater
        else if (item["Home Team Goals"] < item["Away Team Goals"])
        {
            //Push away team name
            task4WinnersArray .push(item["Away Team Name"]);
        }

        //Otherwise
        else 
        {
            //Push the win condition
            task4WinnersArray .push(item["Win conditions"]);
        }
    });

    //Return the task4WinnersArray
    return task4WinnersArray ; 
}


/* 🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀 Task 5: 🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀 
Use the higher-order function getWinnersByYear to do the following:
1. Receive an array
2. Receive a callback function getYears from task 3
3. Receive a callback function getWinners from task 4
4. Return an array of strings that say "In {year}, {country} won the world cup!" 

hint: the strings returned need to exactly match the string in step 4.
 */
//Define the function, pass in data (array), getYearsCB, getWinnersCB,
function getWinnersByYear(data,getYearsCB,getWinnersCB)
{
    //Declare theYears, assign getFinals to theYears
    const theYears = getYearsCB(data,getFinals);
    //Declare theWinners, assign getFinals to theWinners
    const theWinners = getWinnersCB(data,getFinals);
    //Declare empty array to hold the new data
    const task5ArrayWinnersByYear = [];
    //For loop to iterate the array
    for(let i = 0; i < theYears.length; i++)
    {
        //Assign the required string to task5WinnersString
        const task5WinnersString = `In ${theYears[i]}, ${theWinners[i]} won the world cup!`;
        //Push the string to the new array
        task5ArrayWinnersByYear.push(task5WinnersString);
    }
    //Return the new array
    return  task5ArrayWinnersByYear;
}
    


/* 🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀 Task 6: 🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀
Use the higher order function getAverageGoals to do the following: 
 1. Receive the callback function getFinals from task 2 ensure you pass in the data as an argument
 2. Return the the average number of the total home team goals and away team goals scored per match and round to the second decimal place. 
 
 (Hint: use .reduce and do this in 2 steps) 
 
 Example of invocation: getAverageGoals(getFinals(fifaData));
*/


//Define the function pass in data and 
function getAverageGoals(data, getFinalsCB)
{
    //reduce() method Home Team
    const avgHomeGoals = finals2014.reduce(function (accumulator, item)
    {
        //Return the value
        return accumulator + item["Home Team Goals"] / item;
    }, 0);

    //Reduce method Away Team
    const avgAwayGoals = finals2014.reduce(function (accumulator, item)
    {
        return accumulator + item["Away Team Goals"] / item;
    }, 0);

    return {avgAwayGoals, avgHomeGoals};
}




/// 🥅 STRETCH 🥅 ///

/* 💪💪💪💪💪 Stretch 1: 💪💪💪💪💪 
Create a function called `getCountryWins` that takes the parameters `data` and `team initials` and returns the number of world cup wins that country has had. 

Hint: Investigate your data to find "team initials"!
Hint: use `.reduce` */

function getCountryWins(/* code here */) {

    /* code here */

}



/* 💪💪💪💪💪 Stretch 2: 💪💪💪💪💪 
Write a function called getGoals() that accepts a parameter `data` and returns the team with the most goals score per appearance (average goals for) in the World Cup finals */

function getGoals(/* code here */) {

    /* code here */

}


/* 💪💪💪💪💪 Stretch 3: 💪💪💪💪💪
Write a function called badDefense() that accepts a parameter `data` and calculates the team with the most goals scored against them per appearance (average goals against) in the World Cup finals */

function badDefense(/* code here */) {

    /* code here */

}


/* If you still have time, use the space below to work on any stretch goals of your chosing as listed in the README file. */


/* 🛑🛑🛑🛑🛑 Please do not modify anything below this line 🛑🛑🛑🛑🛑 */
function foo(){
    console.log('its working');
    return 'bar';
}
export default{
    foo,
    getFinals,
    getYears,
    getWinners,
    getWinnersByYear,
    getAverageGoals
}
