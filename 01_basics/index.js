console.log('Hey World');
console.log(null == 0);
console.log(null > 0);
console.log(null >= 0);

console.log(undefined == 0);
console.log(undefined > 0);
console.log(undefined >= 0);


/*
  **There are 2 Types of DataType :- 1. premitive 2. Refrence (Non-premetive)
  **Premitive Data Type :- Number, Boolean, Null, Undefine, String
  **Non-Premitive :-  Arrays, Object and Function
*/

/* Memory Type:- There are 2 memory types:
   **Stack memory and Heap memory

   **Stack memory (In Stack memory you get always copy value) :- Premitive Data
   **Heap Memory (In heap Memory you get or you change in original value) :- Non-Premitive (Refrence)

*/

//Example of Memory

let stackValue="Hi I'm StackMemory";
let newstackValue = stackValue;
    newstackValue = "Hi I'm copy stack memory value";   
   console.log(stackValue);
   console.log(newstackValue);

 let heapMomry ="Hi I'm HeapMomry original value"  ;
   let  NewHeapMomryValue="Hi I'm NewHeapMomry original value";

     heapMomry = NewHeapMomryValue;
     console.log(heapMomry);
     console.log(NewHeapMomryValue);


     