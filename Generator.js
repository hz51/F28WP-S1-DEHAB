var isEmpty = true; //placeholder variable received when calling from the grid block

//checks if the block is empty before doing anything
function checkIsEmpty (){
  if (isEmpty==true){
    console.log(generator);
  } 
}

//rolls a random number generator to determine what the object created is
function generator(){
  var RNG = Math.floor(Math.random() * Math.floor(3));
  if (RNG==1){
    console.log(placeObject1);
  } else if (RNG==2){
    console.log(placeObject2);
  } else (RNG==3)
  console.log(placeObject3);
}

//placeholder functions that place an object
function placeObject1 (){
  console.log(1);
}
function placeObject2 (){
  console.log(2);
}
function placeObject3 (){
  console.log(3);
}

console.log(checkIsEmpty);
