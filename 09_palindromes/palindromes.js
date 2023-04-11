const palindromes = function (str) {
      str = str.toLowerCase().replace(/[\W_]/g, ''); //the regex represents any none alphanumeric

      for (let strForward = 0, strBackward = str.length -1 ; strForward < strBackward; strForward++, strBackward--){
            if (str[strForward] !== str[strBackward]) {

                return false;
                
            }
      }
      return true;
};

// Do not edit below this line
module.exports = palindromes;
