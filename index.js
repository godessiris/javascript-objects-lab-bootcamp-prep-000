var recipes = {};

function updateObjectWithKeyAndValue(object, key, value){
  var obj = {
    prop: 1,
    prop2: 2
  }
  object[key] = value;
  return object;
}

function destructivelyUpdateObjectWithKeyAndValue(object, key, value){
  object[key] = value;
  return object;
}

 function deleteFromObjectByKey(object, key){
   delete object.assign[key];
   return object.assign;
 }
 
 function destructivelyDeleteFromObjectByKey(object, key){
   delete object[key];
   return object;
 }

/*  
*/