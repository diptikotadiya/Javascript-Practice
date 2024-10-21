var convert = function(s, numRows) {
  let newS =''
    for(i=0;i<numRows;i++){
      newS+=s[i];
      let j = i+numRows+(numRows-2);
      while(j<s.length){
        newS += s[j];
        j= j+(numRows+(numRows-2));
        if(j+(numRows+(numRows-2))>s.length){
          break;
        }
      }
    }
    console.log(newS)
    return newS;
};
convert("PAYPALISHIRING",3);