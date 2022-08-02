//====================1. Three SUM(3 SUM) ====================================
/* var threeSum = function(nums) {
    
    nums.sort((a,b) => a-b);
     
    const result =[];
     
    if(nums.length < 3) return result;
     
     for(let i =0; i<nums.length; i++){
         
     let left = i+1;
     let right =nums.length-1;
         
         if(i > 0 && nums[i] === nums[i-1]) continue;
         
           while(left < right){
             let sum = nums[i] +nums[left] +nums[right];
               
             if(sum === 0){
                 result.push([nums[i], nums[left], nums[right]]);
                 left++;
                 
                 while(nums[left] === nums[left-1] && left < right) left++;
                 
             }else if(sum > 0){
                 right--;
             }else
                 left++;
         }
         
     }
     return result;
     
     
 }; */
 //++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
 //===================2. Set Matrix Zeroes ================================//
 // https://www.youtube.com/watch?v=8-a6dNedR68
//TIME COMPLEXITY O(n) || SPACE COMPLEXITY O(M+N)

/*  function setZeros(r, c, matrix){
    for (let i =0; i<matrix.length; i++){
        matrix[i][c] =0;
    }
    for(let i =0; i<matrix[0].length; i++){
        matrix[r][i] =0;
    }
}
var setZeroes = function(matrix) {
    let zerosA=[];
    
    for (let r =0; r< matrix.length; r++){
        for(let c= 0; c< matrix[0].length; c++){
            if(matrix[r][c] === 0) zerosA.push([r, c]);
        }
    }
    for(let address of zerosA){
        let row = address[0];
        let col = address[1];
        setZeros(row, col, matrix);
    }
    
}; */

//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
//==============================================================