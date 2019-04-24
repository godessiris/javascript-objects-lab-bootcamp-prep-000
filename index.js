var recipes = {};

function updateObjectWithKeyAndValue(object, key, value){
   return Object.assign({}, object,{[key]:value })
}
 

function destructivelyUpdateObjectWithKeyAndValue(object, key, value){
  object[key] = value;
  return object;
}

/*ion deleteFromObjectByKey(object, key){
   var newObj = object.assign({}, object);
   delete newObj[key];
   return newObj;
 }*/
 
 function destructivelyDeleteFromObjectByKey(object, key){
   delete object[key];
   return object;
 }

/*  describe('deleteFromObjectByKey(object, key)', function() {
    it('deletes `key` from a clone of object and returns the new object (it is non-destructive)', function() {
      var obj = { prop: 1 }
      var newObj = deleteFromObjectByKey(obj, 'prop')

      expect(newObj['prop']).toBe(undefined)
    })

    it('does not modify the original object (it is non-destructive)', function() {
      var obj = { prop: 1 }

      deleteFromObjectByKey(obj, 'prop')
      expect(obj['prop']).toBe(1)
    })
  })

  