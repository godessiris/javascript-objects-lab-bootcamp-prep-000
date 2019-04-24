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
   delete object[key];
   return object;
 }
 
 function destructivelyDeleteFromObjectByKey(object, key){
   
   
 }

/*  

  describe('destructivelyDeleteFromObjectByKey(object, key)', function() {
    it('returns object without the delete key/value pair', function() {
      var obj = { prop: 1 }
      var newObj = destructivelyDeleteFromObjectByKey(obj, 'prop');

      expect(newObj['prop']).toBe(undefined)
    })

    it('modifies the original object', function() {
      var obj = { prop: 1 }
      var newObj = destructivelyDeleteFromObjectByKey(obj, 'prop');

      expect(obj['prop']).toBe(undefined)
    })
  })

})*/