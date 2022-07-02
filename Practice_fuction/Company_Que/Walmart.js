//================================================================================//
//************* 1. Two Sum *************************/
/*
var twoSum = function (nums, target) {
    // created the Hash map
    let obj = new Map();

    for (let i = 0; i < nums.length; i++) {
        let comp = target - nums[i];
        if (obj.has(comp)) {
            return [obj.get(comp), i];
        }
        obj.set(nums[i], i);
    }
    return null;

};  */

//=============================================================
//**********2038. Remove Colored Pieces if Both Neighbors are the Same Color**************/

/* var winnerOfGame = function(colors) {

    // if the Alice count AAAA then the moves will be 4-2 = 2

        let Alice=0;  //asssign Alice's count
        let Bob =0;    //assign Bob's count
        let count=0;     //count of consecutive
        //count A consecutive and Alice's moves
        for(let i=0; i<colors.length ; ++i){
            if(colors[i] === "A")
                count++;
             else{
                if(count >=3)
                    Alice += count-2;
                    count=0;
            }
        }

        if(count>=3){
            Alice += count-2;
            count =0;
        }
        //count B consecutive and Bob's moves
         for(let i=0; i<colors.length ; ++i){
              if(colors[i] === "B")
                count++;
            else{
                if(count >=3)
                    Bob+= count-2;
                    count=0;
            }
         }

         if(count >=3)
                    Bob += count-2;
             console.log(Alice, Bob);
        return Alice > Bob;


    };
    */
    //===============================================================================
    //*****************24. Swap Nodes in Pairs***************************** */
/*     var swapPairs = function(head) {
        if(head === null || head.next=== null){
            return head;
        }
        let p1 = head;
        let p2=head.next;
        let p3= p2.next;
        p1.next =p3;
        p2.next=p1;
        if(p3 !==null){
            p1.next =swapPairs(p3)
        }
        return p2;
    }; */
    //============================================================================
    //**********************1507. Reformat Date**************************** */
/*
 var reformatDate = function(date) {
     let map={
         Jan:"01",
         Feb: "02" ,
         Mar: "03",
         Apr:"04",
         May:"05" ,
         Jun:"06" ,
         Jul: "07",
         Aug:"08",
         Sep:"09" ,
         Oct:"10" ,
         Nov:"11" ,
         Dec:"12"
     }
     const [day, month, year] = date.split(" ")

     return year + "-" + map[month] +"-" + (parseInt(day) <10 ? "0" + parseInt(day) : parseInt(day) );
  };
  */
 //================================================================================
