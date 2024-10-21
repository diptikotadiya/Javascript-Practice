var isSubsequence = function(s, t) {

  let index = -1;
  
  for(i=0;i<s.length;i++){
    let matched = false;
    //console.log(index);
    for(j= index+1;j<t.length;j++){
        if(t[j] === s[i]){
          matched = true;
          index = j;
          break;
        }
      }
      matched = matched;
    if(!matched){
      return false
    }
  } 
  return true;
};

isSubsequence("axc","ahbgdc");
isSubsequence("abc","ahbgdc");