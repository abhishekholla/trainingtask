/* FUNCTION : ARRAY FIND
   DATE : AUG 8 2018
   DESCRIPTION : EVALUTE ARRAY  --Find the elelment that satisfies the condition first in array
   OUTPUT EXPECTED : 7
   AUTHOR : ANUSH G */
function arrfind1() {
    var found = arr3.find(function (element) {
        return element < 10;
    });
    document.getElementById('arrfind').innerHTML = found;
}