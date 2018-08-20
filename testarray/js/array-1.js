
arr=["first","second","third","fourth"]
arr1=["first1","second1","third1"]
arr2=["first","first","first","first"]
arr3=[10,7,130,40,5,7]
  
/* FUNCTION : ARRAY LENGTH
   DATE : AUG 8 2018
   DESCRIPTION : CALCULATE ARRAY LENGTH
   OUTPUT EXPECTED : ARRAY LENGTH:2
   AUTHOR : ANUSH G */
function len1(){
    var x = arr.length;
    document.getElementById('len').innerHTML= "ARRAY LENGTH :" + x;
}

/* FUNCTION : ARRAY PROTOTYPE
   DATE : AUG 8 2018
   DESCRIPTION : CREATE PROTOTYPE FOR ARRAY
   OUTPUT EXPECTED : hello
   AUTHOR : ANUSH G */
   Array.prototype.fullarray = function(){
    return this;
  }

function pro1(){
    document.getElementById('pro').innerHTML= arr.fullarray();
}

/* FUNCTION : ARRAY FROM
   DATE : AUG 8 2018
   DESCRIPTION : EVALUTE ARRAY FROM converts string into array
   OUTPUT EXPECTED : a,n,u,s,h
   AUTHOR : ANUSH G */
   function frm1(){
    var x = Array.from('anush');
    document.getElementById('frm').innerHTML= x;
}

/* FUNCTION : isARRAY
   DATE : AUG 8 2018
   DESCRIPTION : EVALUTE isARRAY condition i.e true / false
   OUTPUT EXPECTED : true
   AUTHOR : ANUSH G */
   function isarr1(){
    var x = Array.isArray(arr);
    document.getElementById('isarr').innerHTML= x;
}

/* FUNCTION : ARRAY OF
   DATE : AUG 8 2018
   DESCRIPTION : EVALUTE ARRAY OF creates an array
   OUTPUT EXPECTED : hello,hai,where,wishes
   AUTHOR : ANUSH G */
   function arrof1(){
    var x = Array.of(arr);
    document.getElementById('arrof').innerHTML= x;
}

/* FUNCTION : ARRAY concat
   DATE : AUG 8 2018
   DESCRIPTION : EVALUTE ARRAY concatination of 2 or more arrays
   OUTPUT EXPECTED : hello,hai,where,wishes,are,you
   AUTHOR : ANUSH G */
   function concat1(){
    document.getElementById('concat').innerHTML= arr.concat(arr1);
}

/* FUNCTION : ARRAY Copywithin
   DATE : AUG 8 2018
   DESCRIPTION : EVALUTE ARRAY Copywithin --ignores the last value;
   OUTPUT EXPECTED : hai,where,where,wishes
   AUTHOR : ANUSH G */
   function copywithin1(){
    document.getElementById('copywithin').innerHTML= arr.copyWithin(0,1,3);
}

/* FUNCTION : ARRAY Entries
   DATE : AUG 8 2018
   DESCRIPTION : EVALUTE ARRAY Entries --checks the one after another value in array;
   OUTPUT EXPECTED : 0,first
   AUTHOR : ANUSH G */
   function entry1(){
    var x = arr.entries();
    document.getElementById('entry').innerHTML= (x.next().value);
}




/* FUNCTION : ARRAY every
   DATE : AUG 8 2018
   DESCRIPTION : EVALUTE ARRAY  --checks the condition if evry elements satisfies condition.
   OUTPUT EXPECTED : true
   AUTHOR : ANUSH G */
function evry1(){
  document.getElementById('evry').innerHTML=arr2.every(x=> x==="first");
// FALSE :  document.getElementById('evry').innerHTML=arr.every(x=> x==="first");
}

/* FUNCTION : ARRAY FILL
   DATE : AUG 8 2018
   DESCRIPTION : EVALUTE ARRAY  --replace the second to last parameter by first value. 
   OUTPUT EXPECTED :[1, 2, 0, 0] o value is replaced from index 2 to 4
   AUTHOR : ANUSH G */
function arrfill1(){
document.getElementById('arrfill').innerHTML= arr.fill(0, 2, 4);
}




/* FUNCTION : ARRAY FILTER
   DATE : AUG 8 2018
   DESCRIPTION : EVALUTE ARRAY  --filter the elements which do not satisfies the condition 
   OUTPUT EXPECTED : second,fourth
   AUTHOR : ANUSH G */
function arrfilter1(){
var result = arr.filter(word => word.length  > 5);
document.getElementById('arrfilter').innerHTML=result;
}

/* FUNCTION : ARRAY FIND
   DATE : AUG 8 2018
   DESCRIPTION : EVALUTE ARRAY  --Find the elelment that satisfies the condition first in array
   OUTPUT EXPECTED : 7
   AUTHOR : ANUSH G */
function arrfind1(){
var found = arr3.find(function(element) {
  return element < 10;
});
document.getElementById('arrfind').innerHTML=found;
}

/* FUNCTION : ARRAY FIND INDEX
   DATE : AUG 8 2018
   DESCRIPTION : EVALUTE ARRAY  -- HERE IT FINDS THE INDEX OF LARGEST ELEMENT
   OUTPUT EXPECTED : 2
   AUTHOR : ANUSH G */
   function fndindex1(){
    function findFirstLargeNumber(element) {
      return element > 13;
    }
    document.getElementById('fndindex').innerHTML=(arr3.findIndex(findFirstLargeNumber));

    }

/* FUNCTION : ARRAY FOR-EACH
   DATE : AUG 8 2018
   DESCRIPTION : EVALUTE ARRAY  -- traverse over all elements of array
   OUTPUT EXPECTED : 10,7,130,40,5,2,
   AUTHOR : ANUSH G */
    function arrforeach1(){
        arr3.forEach(function(element) {
            document.getElementById('arrforeach').innerHTML+=element+",";
          });
    }




   /* FUNCTION : ARRAY INCLUDES
   DATE : AUG 8 2018
   DESCRIPTION : EVALUTE ARRAY  -- finds if the particular element in the array is included
   OUTPUT EXPECTED : true
   AUTHOR : ANUSH G */

function arrinclude1(){
    document.getElementById('arrinclude').innerHTML=arr1.includes("third1");
    }



   /* FUNCTION : ARRAY INDEX OF
   DATE : AUG 8 2018
   DESCRIPTION : EVALUTE ARRAY  -- finds if the particular element in the array from start or from at specified position
   OUTPUT EXPECTED : 
   AUTHOR : ANUSH G */

   function arrindexof1(){
// start from index 1
document.getElementById('arrindexof').innerHTML=arr3.indexOf(7, 1);
   }

































/* FUNCTION : string concat
   DATE : AUG 8 2018
   DESCRIPTION : EVALUTE string concatination
   AUTHOR : ANUSH G */
   function strconcat1(){
    var num1 = document.getElementById('input1').value;
    var num2 = document.getElementById('input2').value;
    Array.from(num1);
    Array.from(num2);
    document.getElementById('strconcat').innerHTML= num1.concat(num2);
}
