define(function() {
    'use strict';

    String.prototype.insertAt=function(index, string) {
        return this.substr(0, index) + string + this.substr(index);
    };

    return function solve(inputStr) {
       var sets = [];
       var length = inputStr.length;
       for(var i=0 ; i< length ; i++) {
           for(var j=0; j< sets.length; j++) {
               result[j] = permute(result[j], inputStr.charAt)
           }

           result.push(inputStr[i]);
       }
    }
});
