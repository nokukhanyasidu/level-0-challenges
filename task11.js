function common(s1,s2){
    let output = [];
    for (let i of s2){
         for( let j of s1){
             if (i === j){
                 output.push(j)
             }
         }  
           
    }
   console.log (output.toString())
}
 