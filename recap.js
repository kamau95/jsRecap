let names = ["John", "Jane", "Jim", "Joan"];

let updatedNames = names.map((name)=> {
  return name.toUpperCase( );
});

function displayNames( ) {
  let element = document.getElementById("myElement");
  element.innerHTML = updatedNames.join(", ");
}
console.log("hey");