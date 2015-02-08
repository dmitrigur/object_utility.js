# object_utility.js
Small libriry for multilevel autoarray and accosiative array operations.

This library makes more easier operating with multilevelarrays in cases when existence of certain clone of array is unknown or none.
For exapmle you need to to assing value for leaf of some multilevel associative array as follows: 
food[foodtype]['apple'].price=50;
but you havent yet created food[foodtype] or food[foodtype]['apple'], or you are simple uncertatin of existence.
so instead of writing:
if (food==null) food={};
if (food[foodtype]==null) food[foodtype]={};
if (food[foodtype]['apple']==null) food[foodtype]['apple']={};
food[foodtype]['apple'].price=50;
you can run the library function 'PutObjectValue' as follows: PutObjectValue(['food',foodtype,'apple','price'],50);

PutObjectValue(address autoarray, value any type,[ruler autoarray, [flag boolean]]) returns null 
address - autoarray of array clone nodes keys
value - value to be assigned to the leaf of clone
ruler - autoarray of key, which assign types of array to created in every node array clone, where 0 - means autoarray, 1- associated array, by default associative array
flag - is needed when last node is autoarray, it determine value is to be pushed to array (true) or to be unshifted (false)

CheckObject(root object,address autoarray,[value any value]) return boolean
  root - fragment of array clone, in existence of what a coder is certain.
  address autoarray of fragment of array clone nodes keys in existence of what a coder is uncertain.
  return true if object exists, false if object does not exist
   
  value - value to be compared with lwaf of array clone
  return false is not equal, true if equal (use JSON.stringify function for compared values)
ReturnObjectValue (root object,address autoarray) return any type
 works as previous function, but returnes leaf value of array clone.
 
isEmptyObject(object object) 
checks if associative array is empty, returns true if empty, false if not? undefined if object does not exists.
