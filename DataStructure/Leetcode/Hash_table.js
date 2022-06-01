//=====================DATE 05/27/2022==============================================
//**********HASH TABLE CREATION****************** */
/*
class HashTable {
    constructor(size) {
        this.data = new Array(size);
    }
    //create a hash key
    _hash(key) {
        let hash = 0;
        for (let i = 0; i < key.length; i++) {
            hash = (hash + key.charCodeAt(i) * i) %
                this.data.length
        }
        return hash;
    }
    //This set the key and values to the hash table
    set(key, value) {
        let address = this._hash(key);
        if (!this.data[address]) {
            this.data[address] = [];
        }
        this.data[address].push([key, value]);
        return this.data;


    } //O(1)

    //This returns perticular key values
    get(key) {
        let address = this._hash(key);
        const currentBucket = this.data[address];
        if (currentBucket) {
            for (let i = 0; i < currentBucket.length; i++) {
                if (currentBucket[i][0] === key) {
                    return currentBucket[i][1];
                }
            }
        }
        return undefined;
    }//O(1)

    //This returns keys
    keys() {
        let keysArray = [];
        for (let i = 0; i < this.data.length; i++) {
            if (this.data[i]) {
                keysArray.push(this.data[i][0][0]);

            }
        }
        return keysArray;
    }

    //Returns values
    values() {
        let valuesArray = [];
        for (let i = 0; i < this.data.length; i++) {
            if (this.data[i]) {
                valuesArray.push(this.data[i][0][1]);
            }
        }
        return valuesArray;
    }

}

const myHashTable = new HashTable(50);
console.log(myHashTable.set('grapes', 54));
console.log(myHashTable.set('apple', 100));
console.log(myHashTable.keys());
console.log(myHashTable.get('grapes'));
console.log(myHashTable.values());
 */
//==============================================================================================

//Google interview question
//get the first recurring number
//array =[2, 3, 4, 5, 2, 1, 3, 4,6, 7, 5];
//ans = 2
//array = [1, 2, 3, 1, 2];
//array =[1, 2, 3, 4];
//Using bruteForse method
/*
function findFirstCommon(arr) {
    for (let i =1 ; i<arr.length-1 ; i++){
      for (let j= 0; j<arr.length; j++){
      if((arr[j] === arr[j+i]) && ((j+i)<=arr.length)){
        return arr[j];
      }    
     }
    }
    return undefined;
  }
//Time complexity O(n^2) 
*/

/* function findFirstCommon(arr){
  let map={};
  for(let i =0; i<arr.length ; i++){
    if(map[arr[i]] !==undefined){ 
      return arr[i];
    }else{
      map[arr[i]] =1;
    }
  }
  return undefined;
}
 // Time complexity is O(n) of this function using map (HashTable)
//Below Using hash method to siplifies this
console.log(findFirstCommon(array));
*/


