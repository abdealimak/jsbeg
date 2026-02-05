// METHOD 1: fetch() with .then()

fetch("api url")
      .then(response => response.json())
      .then(data => console.log(data));

// METHOD 2: async / await

async function getData(){
    const response = await fetch("https://catfact.ninja/fact");
    const data = await response.json();
    console.log(data);
}
