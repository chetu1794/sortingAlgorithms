let arr=[-Infinity,Infinity,0,0,64,25.8,12,22,-11];
let len =arr.length;

for(let j=0; j<len; j++) {        // counter increase
  let temp,
  selectionIndex = j,
  selection=arr[j];
  for(let i=j; i<len; i++) {
    if(arr[i] < selection) {        // if operator is reversed, sorting reverses
      selection = arr[i];						// selection
      selectionIndex = i;
    } 
  }
    temp = arr[j];									// swapping
    arr[j] = selection;
    arr[selectionIndex] = temp;
  }

console.log(arr);
