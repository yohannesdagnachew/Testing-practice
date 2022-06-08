const capital = (stringname)=>{
   const nameArray = stringname.split('');
   nameArray[0]=nameArray[0].toUpperCase()
   const joinName = nameArray.join('');

      return joinName
}

module.exports=capital;