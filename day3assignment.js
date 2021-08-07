



function add()
{
    let name= document.querySelector("#name").value;
    let city = document.querySelector("#city").value;
    document.querySelector("#data").innerHTML= `<h1>${name} , ${city}</h1>`;
     console.log(name, city);

}