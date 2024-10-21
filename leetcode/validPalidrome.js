var isPalindrome1 = function(s) {
  if(s.length ===1){
    return true;
  }
  else{
    s = s.match(/[a-zA-Z0-9]/g).join(' ').toLowerCase() ;
    let newS = s.split(' ').reverse().join(' ');
    //console.log(newS);
    if(newS === s){
      return true;
    }
    else {
      return false;
    }
      }
  
  };
  var isPalindrome = function(s) {
    i=0;
    j=s.length-1;
    while(i<j){
      let l1 = s[i].toLowerCase();
      let l2 = s[j].toLowerCase();
      if((l1>="a" && l1<="z") || (l1>='0' && l1<='9')) {
        if((l2>="a" && l2<="z") || (l2>='0' && l2<='9')) {
          if(l1===l2){
            i++;
            j--
          }
          else{
            return false;
          }
        }
        else{
          j--
        }
      }
      else{
        i++
      } 
    }
    return true;
  };
console.log(isPalindrome("A man, a plan, a canal: Panama"));
console.log(isPalindrome('dipti is : good'));
console.log(isPalindrome("race a car"));
console.log(isPalindrome(' '));