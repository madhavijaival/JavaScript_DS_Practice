//=================1.**387. First Unique Character in a String**================================//
//TIME COMPLEXITY = O(n) || SPACE COMPLEXITY = O(1)
/* ALGO:
- FIRST TAKE MAP OBJECT TO CHECK THE VALUE STORED WITH THE OCCURENCE.
 - IF MAP CHARACTER VALUE IS GREATER THAN OR === 1
    - THEN  MAP[S[CHAR]]++;
 -ELSE SET THE KEY = 1
- FOR LOOP TO CHECK OBJECT VALUE HAS === 1
  -IF TRUE THEN RETURN INDEX OF THAT VALUE FROM S
-IN LAST RETURN -1;
 */


/* var firstUniqChar = function(s) {
    let map ={};
        
        for(let char in s){
            if(map[s[char]]>=1){
                map[s[char]]++;
                
            }else{
                 map[s[char]] = 1;
                }
        }
        
        for(let i =0; i<s.length; i++){
                if(map[s[i]] === 1) return i;
            }
       
        
        return -1;
        
    }; */

//**************************************************************************** */
//=================2.****================================//
//TIME COMPLEXITY = O(n) || SPACE COMPLEXITY = O(1)