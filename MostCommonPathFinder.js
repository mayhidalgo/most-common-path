"use strict";

/*
  Within this file, write your complete solution. As you can see, we read in the log file for you.
*/

const fsp = require('fs-promise');

/**
 * We have written the basics here for you.
 * This is a JS module called MostCommonPathFinder.
 * It contains a single method `findPath` which is
 * where most of your code will go.
 *
 */
const MostCommonPathFinder = (() => {
var i = 0; //declare and initialize variables
var j = 0;
var counts;
var maxCount;
var array = [];
var newArray = [];
var mostCommonPath = [];
  return {
    findPath: (logFilePath) => {
      return fsp.readFile(logFilePath, 'utf8').then((logfileString) => {
        var newString = logfileString.replace(/\s/g, ","); //remove breaks from string and replace with commas
        array = newString.split(" "); //string -> array

        function removeElements(array) { //function to remove certain items from array
          var what, a = arguments, b = a.length, c;
          while (b > 1 && array.length) {
              what = a[--b];
              while ((c= array.indexOf(what)) !== -1) {
                  array.splice(c, 1);
              }
          }
          return array;
      }
       for(i = 0; i < array.length; i++)
       {
         newArray = array[i].split(",");
         removeElements(newArray, '1', '2', '3', '4', '5', '6', '7');
       }
         
       newArray.shift(); //remove empty strings at the beginning and end of array
       newArray.pop();
       
       let counts = newArray.reduce((a, b) => //finds pattern with max count 
       {
         a[b] = (a[b] || 0) + 1;
         return a;
       }, {});
       let maxCount = Math.max(...Object.values(counts));
       let mostCommonPath = Object.keys(counts).filter(c => counts[c] === maxCount);
       
       return mostCommonPath;
      });
    }
    }
})();

module.exports = MostCommonPathFinder;
