// first try: without tip
function firstDuplicate(a) {
    var duplicates = 0;
    var retValue = -1;
    var index = a.length;
    
    var arraySize = a.length;
    
    for(var i = 0; i < arraySize; i++){
        for(var j = 0; j < arraySize; j++) {            
            if(i !== j && i < j && a[i] === a[j]) {
                duplicates++;                
                if(j < index) {index = j}                
            }            
        }
    }

    if(!duplicates) {
        return -1;
    }
    return a[index];
}

// after tip

function firstDuplicate(a) {
   const aSize = a.length;
   const array = new Array(aSize).fill(0);
   let index = -1;

   for(let i = 0; i < aSize; i++) {
       if(array[a[i]-1] === 0) {
           array[a[i]-1] = a[i]
       } else if(array[a[i]-1] > 0) {
           index = i;
           break;
       }
   }
   
   return a[index] || index;
}

