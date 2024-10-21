var reverseWords = function(s) {
        console.log(s);
        const l = s.length;
        let word = '';
        let newS = ''
        let prev = l;
        for(let i =l-1; i>=0; i--){
         // console.log(`i = ${i} [i] = ${s[i]} shouldAppend = ${shouldappend}`);
            if((s[i]===' ' && s[i+1] !== ' ')|| (i===0 && s[i] !== ' ')){
              for(j=i;j<prev;j++){
                s[j] !== ' ' && ( word = word+s[j]);
              }
              //console.log(word)
              newS === '' ? newS += word : newS += ' '+ word;
              prev = i;
              word = ''
              }
              
        }
        newS = newS.trim()
        console.log(newS)
        return newS
      };
      //reverseWords('the sky is blue');
      reverseWords("  hello world  ");
      //reverseWords("a good   example")