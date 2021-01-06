function findVowels(string){
    var vowels = 'aeiou';
    var str = string.toLowerCase();
    for(var i = 0; i < str.length; i++){
      if( vowels.includes(str[i])){
        console.log(str[i]);
      }
           
        
    } 
}
findVowels('brokEn')