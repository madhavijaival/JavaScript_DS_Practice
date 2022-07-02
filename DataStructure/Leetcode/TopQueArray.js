//1.===============122. Best Time to Buy and Sell Stock II -MEDIUM=====================================
/* const prices = [7,1,5,3,6,4]
var maxProfit = function(prices) {
    let maxprofit=0;

    for(let i=1; i<prices.length; i++){
        if(prices[i] > prices[i-1]){
            maxprofit +=prices[i] - prices[i-1];
        }
    }
        return maxprofit;
};

console.log(maxProfit(prices));
 */
//===============================================================================//
//2.**************121. Best Time to Buy and Sell Stock - EASY***************************//
//YOUTUBE: https://www.youtube.com/watch?v=FMa1t8NYDbQ
/*
var maxProfit = function(prices) {
    //define the buyPrice
  let buyPrice=prices[0];
    let profit =0;
    //loop trhought the array
    for(let i=0; i<prices.length-1; i++){
         let tempPr =prices[i+1] - prices[i];
        //add condition to check it is positive diference.
        if(tempPr > 0){
            //check if the buy Price is less than current or not.
            if(prices[i] < buyPrice){
                buyPrice =prices[i];  
                //if the buyprice greater than current assign current as a buy price.
            }
            //checking for the profit 
            if(prices[i+1] - buyPrice > profit){
                profit =prices[i+1] -buyPrice;
            }
        }
    }
    return profit;
};
console.log(maxProfit(prices)); */
//=========================================================================
//3. *************** 66. Plus One *******************/
//[1, 2, 3] = 123 + 1 =1234 [1,2, 3, 4]
//[9] =9+1 =10 [1, 0]

/* var plusOne = function(digits) {
    // move along the input array starting from the end
    for(let i=digits.length -1; i>=0; i--){
        // set all the nines at the end of array to zeros
        if(digits[i] === 9){
            digits[i] = 0;
        }// here we have the rightmost not-nine
        else{
            // increase this rightmost not-nine by 1
            digits[i] = digits[i]+1;
            // and the job is done
            return digits
        }
    }
        // we're here because all the digits are nines
    digits.unshift(1);
    return digits;
      
}; */
 // time complexity: O(N)
  // space complexity: O(1)
  
//================================================================================
//4.********************  283. Move Zeroes  **********************/
/* 
var moveZeroes = function(nums) {
    let left = 0;
     for(let i=0; i<nums.length; i++){
         if(nums[i] !== 0){
             [nums[i], nums[left]] =[nums[left], nums[i]];
             left++
         }
     }
     return nums;
     
 }; 
 */
//===============================================================================
//5. ********************** 1. Two Sum ****************************** */
// https://646634.medium.com/explaining-leetcodes-two-sum-problem-javascript-ed2718024ccd 
/* 
var twoSum = function(nums, target) {

    let obj = {};
     for(let i=0; i<nums.length; i++){
         let comp = target - nums[i];
         if(obj[comp]!== undefined ){
             return [obj[comp], i];
         }
         obj[nums[i]] =i;
     }
     
}; 

*/
//==============================================================================
//6. ************MATRIX- 2133. Check if Every Row and Column Contains All Numbers : EASY************/
//https://youtu.be/6uJU9rnsSFU
/* 
var checkValid = function(matrix) {
    let n =matrix.length; //length of the matrix
    for(let r=0; r < n ; r++){
        let rVis=[], cVis=[];    //new var for the visit check
        for(let c=0; c<n; c++){
            let rVal= matrix[r][c];    // row wise checking
            let cVal=matrix[c][r];      // colunm wise checking
            
            if(rVis[rVal] === true || cVis[cVal] === true){ 
//checking whether value is already in the matrix or not if its true the  return false.
                return false;
            }
            rVis[rVal] = true;
            cVis[cVal] = true;
        }
    }
    return true;   //matrix valid
    
}; 
*/
//=====================================================================================
//========================DATE : 06/16/2022============================================
//7.*************************36. Valid Sudoku- MEDIUM************************* */
//https://youtu.be/TjFXEUCMqI8
/* 
var isValidSudoku = function(board) {
    let Val = new Set();
   for(let r=0; r <9; r++){
        for(let c=0; c<9; c++){
            let cell =board[r][c];
            if(cell != "."){
                let rcell = `row: ${r} ${cell}`;
                let ccell = `col: ${c} ${cell}`;
                let bcell = `subBox: ${parseInt(r/3)} ${parseInt(c/3)} ${cell}`;
                if(!Val.has(rcell) && !Val.has(ccell)&&!Val.has(bcell)){
                    Val.add(rcell);
                    Val.add(ccell);
                    Val.add(bcell);
                }else{
                    return false;
                }
            }
        }
            
   }
    return true;
}; 
*/
//==============================================================================
//8. ************************48. Rotate Image************************** */
//https://medium.com/@silasburger/problem-link-https-leetcode-com-problems-rotate-image-d967fdcbec71
/* 
var rotate = function(matrix) {
    for(let row=0; row<matrix.length; row++){
        for(let col=row; col<matrix.length; col++){
            let temp =matrix[row][col];
            matrix[row][col] =matrix[col][row];
            matrix[col][row] =temp;
        }
    }
        return matrix.map(row=>{
           return reverse(row); 
        })
        
    };
    
    function reverse(row){
        let pointer1 =0;
        let pointer2 = row.length-1;
        while(pointer1<pointer2){
        let temp =row[pointer1];
        row[pointer1] = row[pointer2];
        row[pointer2] =temp;
        pointer1++;
        pointer2--;
            
        }
        
    }
     */
    //===========================================================================
 
    