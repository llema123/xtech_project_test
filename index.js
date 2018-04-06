// test 1

f1 = function (str1, str2) {
        var firstStringArray  = new Array(26).fill(0);
        var secondStringArray = new Array(26).fill(0);
        for (var i = 0; i < str1.length; i++)
        	{firstStringArray[(str1.charAt(i) == null ? str1.charAt(i) : str1.charAt(i).charCodeAt(0)) - 'a'.charCodeAt(0)]++;}


        for (var i = 0; i < str2.length; i++)
            secondStringArray[(str2.charAt(i) == null ? str2.charAt(i) : str2.charAt(i).charCodeAt(0)) - 'a'.charCodeAt(0)]++;
       

        var result = 0;
        for (var i = 0; i < 26; i++)
            result += Math.abs(firstStringArray[i] - secondStringArray[i]);
        console.log(result) ;
        document.getElementById("result-test-one").innerHTML = result;

    };

f1("amell" , "fezaii");

// test 2

f2 = function (Array_str1, Array_str2) {
        var firstStringArray  = new Array();
        Array_str2.forEach(function(entry_2) {
        	 var frequency= 0;
         Array_str1.forEach(function(entry_1) {
                
                if (entry_1 == entry_2) {
            frequency++;
        }

});
    firstStringArray.push(frequency);

     });
console.log(firstStringArray);
              document.getElementById("result-test-two").innerHTML = firstStringArray;
 
    };

f2(["aba", "baba", "aba", "xzxb"], ["aba", "xzxb", "ab"]);
// test 3

f3 = function (str3) {
       var partNumber = 0;
     var reg = /^([A-Za-z0-9_\-\.])+$/;
   if(reg.test(str3) !== false) {
       var partArray = str3.split(".");
       partNumber = partArray.length;
   }else{
   	partNumber = 0
   }
console.log(partNumber);
              document.getElementById("result-test-three").innerHTML = partNumber;

    };

f3("xtech.guru");

// test 4



function f4(func) {
 console.log("waiting 300 millisecond to call func..");
               document.getElementById("result-test-four").innerHTML = "waiting 300 millisecond to call func..";

  setTimeout(function(){
    func();
  },300);
}



f4(function(x){console.log(" cb is called"); document.getElementById("result-test-five").innerHTML = "cb is called"; })




