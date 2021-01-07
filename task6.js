function maximum(num1, num2, num3){
 var arr = [num1, num2, num3];
 var max = 0;
 for(var i = 0; i < arr.length; i++){
    if (max < arr[i]){
        max = arr[i];
    }
 }
 return max;
}
