
function stringCount(yourname) {
  const myArray = yourname.split("");
  const count = myArray.length;
   if (count <= 10 && count >= 1){
    return count;
   }
   else {
     return "not good"
   }
}

module.exports = stringCount;



