function common(s1,s2){
    let output = [];
    for (let i of s1){
         for( let j of s2){
             if (j === i){
                 output.push(j)
             }
         }  
           
    }
   console.log (output.toString())
}
 