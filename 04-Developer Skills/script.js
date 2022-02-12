'use strict';

// =========== LEARNING HOW TO CODE ===========
/*
DON'T
  🙅🏾‍♂️ didn't have a clear goal.
  🙅🏾‍♂️ didn't care how code works and just Copy & paste. 
  🙅🏾‍♂️ didn't reinforce
  🙅🏾‍♂️ didn't practice coding
  🙅🏾‍♂️ quicly became frustrated when code is not perfectly clean & efficient.
  🙅🏾‍♂️ lost motivation as he thought he could never know everything.
  🙅🏾‍♂️ Learning in isolation.
  🙅🏾‍♂️ didn't even know how to build an app and start applying for jobs.

DO'S
  ✅ Set a specific, measurable, realistic & time-based goal. Imagine a big project to be able to build.
  ✅ It's hard, but you can do it.
  ✅ Study Courses: Understand code, take challenges & notes.
  ✅ Stay motivated! Keep writing lots of code on your own, no matter how bad.
  ✅ Learn with other people, devs & beginners & share progress.
  👉🏾 Keep challenging yourself, run into lots of problems, & fix them.
  ✅ Round up your skillset, & best practices & tools (git, testing...)
  ✅ Job Ready (but the learning never stops 😅)
*/

// =========== HOW TO THINK LIKE A DEVELOPER ===========
/*
DON'T
  🙅🏾‍♂️ don't jump on a problem without thinking.
  🙅🏾‍♂️ don't implement solution in an unstructured way.
  🙅🏾‍♂️ don't get stressed out when things don't work.
  🙅🏾‍♂️ don't be proud to research solutions

DO'S
  ✅ stay calm & slow down, don't jump without a plan
  ✅ take a very logical & rational approach (programming is just logic, in the end...)

======= 4 steps to solve any Problem:- =======
  ⭐ Ask the right questions to get a clear picture of the problem.
  ⭐ Divide & conquer: break a big problem into smaller sub-problems.
  ⭐ Don't be afraid to do as much "Research" as you have to.
  ⭐ For bigger problems, write pseudo-code before writing the actual code.
  ⭐ Develop a genuine curiosity & passion for understanding how things actually work, not only in programming but in real world.
*/

// We need a function that reverses whatever we pass into it.

/* ======= #1 ASKING RIGHT QUESTIONS =======
 👉🏾 What does 'whatever' mean?
 👉🏾 what to do if something else is passed in?
 👉🏾 what should be returned?
 👉🏾 How to recognize whether the argument is a number, a string, or an array?
 👉🏾 How to reverse a number, a string & an array?

  ======= #2 BREAKING INTO SUB PROBLEMS =======
  👉🏾 Cheking if argument is a number, a string, or an array.
  👉🏾 Implement reversing a number.
  👉🏾 Implement reversing a string.
  👉🏾 Implement reversing an array.
  👉🏾 Return reversed value.

  ======= #3 RESEARCH AS YOU HAVE TO =======
  👉🏾 How to check if a value is a number in JavaScript?
  👉🏾 How to check if a value is a string in JavaScript?
  👉🏾 How to check if a value is an array in JavaScript?
  👉🏾 How to reverse a number in JavaScript?
  👉🏾 How to reverse a string in JavaScript?
  👉🏾 How to reverse a array in JavaScript?

   ======= #4 WRITE PSEUDO CODE BEFORE WRITING ACTUAL CODE =======
 */

// =========== USING GOOGLE STACKOVERFLOW & MDN ===========
/*
PROBLEM-1
      We work for a company building a smart home thermometer. Our most recent task is this: "Given an array of temperatures of one day, calculate the temperature amplitude. Keep in mind that sometimes there might be a sensor error."


1) Understanding the Problem
  👉🏾 What is temperature altitude? => difference between highest & lowest temp
  👉🏾 How to compute the max & min temperatures? 
  👉🏾 What's a sensor error? And what to do?

  2) Breaking up into sub-problems
  👉🏾 How to ignore errors?
  👉🏾 Find max value in temp array
  👉🏾 Find min value in temp array
  👉🏾 Subtract min from max (amplitude) & return it.


const temperatures = [3, -2, -6, -1, 'error', 9, 13, 17, 15, 14, 9, 5];
const calcTempAmplitude = function (temps) {
  let max = temps[0];
  let min = temps[0];
  for (let i = 0; i < temps.length; i++) {
    const curtemp = temps[i];
    if (typeof curtemp !== 'number') continue; // rest of the iteration will not be executed. Kind of skips the current iteration.

    if (curtemp > max) max = curtemp;
    if (curtemp < min) min = curtemp;
  }
  console.log(max, min);
  return max - min;
};

const amplitude = calcTempAmplitude(temperatures);
console.log(amplitude);

PROBLEM-2
Function should now recive 2 arrays of temps


1) Understanding the Problem
  👉🏾 With two arrays, should we implement functionality twice? NO! Just merge two arrays.

  2) Breaking up into sub-problems
  👉🏾 Merge two arrays.


const calcTempAmplitudeNew = function (t1, t2) {
  const temps = t1.concat(t2);
  console.log(temps);

  let max = temps[0];
  let min = temps[0];
  for (let i = 0; i < temps.length; i++) {
    const curtemp = temps[i];
    if (typeof curtemp !== 'number') continue; // rest of the iteration will not be executed. Kind of skips the current iteration.

    if (curtemp > max) max = curtemp;
    if (curtemp < min) min = curtemp;
  }
  console.log(max, min);
  return max - min;
};

const amplitudeNew = calcTempAmplitudeNew([3, 5, 1], [9, 0, 5]);
console.log(amplitudeNew);
*/

// =========== DEBUGGING (FIXING ERRORS) ===========
/*
  ⭐ FINDING
  ⭐ FIXING
  ⭐ PREVENTING BUGS

  ============ ⭐⭐⭐ THE DEBUGGIN PROCESS ⭐⭐⭐ ============
  1️⃣ IDENTIFY:- Becoming aware that there is a bug.
  👉🏾 During development
  👉🏾 Testing software
  👉🏾 User reports during production
  👉🏾 Context: browsers, users, etc.

  2️⃣ FIND:- Isolating where exactly the bug is happening in code
  👉🏾 Developer Console (simple code).
  👉🏾 Debugger (complex code)
  
  3️⃣ FIX:- Correct the bug
  👉🏾 Replace wrong solution with new correct solution.

  4️⃣ PREVENT:- Preventing it from happening again.
  👉🏾 Searching for the same bug in similar code.
  👉🏾 Writing tests using testing software.
*/

// =========== DEBUGGING WITH CONSOLE & BREAKPOINTS:- ===========
/*
const measureKelvin = function () {
  const measurement = {
    type: 'temperature',
    unit: 'celsius',
    value: Number(prompt('Degree celsius:')),
  };

  const kelvin = measurement.value + 273;
  return kelvin;
};

// A) IDENTIFY
console.log(measureKelvin());
*/

// =========== CODING CHALLENGE #9:- ===========
/*
Given an array of forecasted maximum temperatures, the thermometer displays a string with the given temperatures. Example: [17, 21, 23] will print "... 17ºC in 1 days ... 21ºC in 2 days ... 23ºC in 3 days ..."

Your tasks:
1. Create a function 'printForecast' which takes in an array 'arr' and logs a string like the above to the console. Try it with both test datasets.
2. Use the problem-solving framework: Understand the problem and break it up into sub-problems!

Test data:
§ Data 1: [17, 21, 23]
§ Data 2: [12, 5, -5, 0, 4]
GOOD LUCK 😀

==========================================
=====================x====================
1) Understanding the Problem
  👉🏾 We are passing an array to the function. We need iterations to print every value on console.

  2) Breaking up into sub-problems
  👉🏾 Function with a for loop

  
  const printForecast = function (t1, t2) {
    const temps = t1.concat(t2);
    for (let i = 0; i < temps.length; i++) {
      console.log(`${temps[i]} in ${i + 1} days....`);
    }
  };

  printForecast([17, 21, 23], [12, 5, -5, 0, 4]);
  
*/
