const axios= require('axios');
/**const data = axios.get("https://cat-fact.herokuapp.com/facts");

data.then( ( res)=>{
  console.log(res)
})
.catch( (err )=>{
  console.log(err)
})
.finally( ( )=>{
  console.log( "promise was successful")
})**/

// another alternative using async in promises to avoid .then and catch methods
const fetchData= async( )=>{
  try{
    const data= await axios.get("https://cat-fact.herokuapp.com/facts")
    console.log(data)
  }
  catch (err) {
    console.log(err)
  }
}
fetchData( );


//array and map method to manipulate it
let names = ["John", "Jane", "Jim", "Joan"];

let updatedNames = names.map((name)=> {
  return name.toUpperCase( );
});

function displayNames( ) {
  let element = document.getElementById("myElement");
  element.innerHTML = updatedNames.join(", ");
}

//asnyc study
const event=new Promise((resolve,reject)=>{
  var name= "john";
  if (name=="pedro"){
    resolve( name)
  }else
  {
    reject("Name is not pedro the Name is " + name )
  }
});
event.
then( 
  ( name)=>{ console.log(name)
  }
)
.catch( 
  (err )=>{
    console.log( err)
  }
)
.finally( ( )=>{
  console.log( "promise is finished")
})