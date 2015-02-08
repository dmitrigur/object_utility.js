# object_utility.js
Small library for multi-level autoarray and associative array operations.

This library makes more easier an operating of multi-level arrays in cases when existence of certain clone of an array is unknown or none.
For example, you need to assign a value for leaf of some multi-level associative array as follows: 

food[foodtype]['apple'].price=50;

but you haven’t yet created food[foodtype] or food[foodtype]['apple'], or you are just uncertain of its existence.
So, instead of writing:

if (food==null) food={};

if (food[foodtype]==null) food[foodtype]={};

if (food[foodtype]['apple']==null) food[foodtype]['apple']={};

food[foodtype]['apple'].price=50;

you can run the library function 'PutObjectValue' as follows: 

PutObjectValue(['food',foodtype,'apple','price'],50);

Documentation:

PutObjectValue (address array, value any type,[ruler array, [flag boolean]]) returns null. 

address -array of clone nodes keys.

value - value to be assigned to the leaf of the clone.

ruler - array of key, which assign types of array to created in every node array clone, where 0 - autoarray, 1- associated array, by default is associative array.

flag - is needed when the last node of clone is autoarray, it determines, either value is to be pushed to array (true) or is to be unshifted (false).

CheckObject (root object, address array,[value any value]) returns boolean.

  root - fragment of array clone, in existence of what a coder is certain.
  
  address  - array of fragment of array clone nodes keys in existence of what a coder is uncertain.
  
  Returns  true if object exists, false if object does not exist.
   
  
  value - value to be compared with leaf of array clone.
  
  returns false is not equal, true if equal (use JSON.stringify function for compared values).

ReturnObjectValue (root object, address array) return any type. It works as previous function, but returns leaf value of array clone, and returns undefined if object does not exists.
 
isEmptyObject (object object) checks if associative array is empty, returns true if empty, false if not empty. undefined if object does not exists.
