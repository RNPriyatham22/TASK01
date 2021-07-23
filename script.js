//XML -> are used to interact  with servers via API
//1. creating an XHR object
//new keyword we can create an object
var request=new XMLHttpRequest();
//2. opening a connection(specify the URL)
request.open('GET','https://restcountries.eu/rest/v2/all',true);
//3. sending a connection
request.send();
//4. once the server responded succesully then we have to process the data
request.onload=function(){
    var data=JSON.parse(this.response);
    console.log(data);
    for(var i=0;i<250;i++){
        //console.log(data[i].name.toUpperCase());
        console.log(data[i].name+" "+data[i].capital+" "+data[i].flag);
    }
}
//print the capitals of these 10 countries
//todays TASK2(class 3): Load the rest countries data using your html and script.js file and run a for loop on the data and print all(250) i.e. the country name and capital and Flag in the console

