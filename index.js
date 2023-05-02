// require('dotenv').config();
const APIKY = "2BibzM3DLO1B8XezuR6A5rgHR4wz3gFE";
const endpoint = "https://api.giphy.com/v1/gifs/search?api_key=2BibzM3DLO1B8XezuR6A5rgHR4wz3gFE&q=dog&limit=25&offset=0&rating=g&lang=en";
const btn = document.querySelector("#searchBtn");
const input = document.querySelector("#searchBar");
const imageEl = document.querySelector("#imgEl");


btn.addEventListener("click", function(){
    if(input.value !== ""){
        getImages(input.value)
    } else{
        alert("input cant be empty")
    }
})




async function getImages(query){
    const endpoint2 = `https://api.giphy.com/v1/gifs/search?api_key=${APIKY}&q=${query}&limit=25&offset=0&rating=g&lang=en`;
    // // Print out value of API key stored in .env file
    // console.log(process.env.API_KEY)
      try {
        const response = await fetch(endpoint2);
        const data = await response.json();
        let url = randomPick(data.data);
        imageEl.src = url;
        console.log(data.data)
      } catch (error) {
        console.log(error);
        return Promise.reject(error);
      }
    }

    function randomPick(data){
        const randomIndex = Math.floor(Math.random() * data.length); 
        console.log(data[randomIndex].url)
        imageEl.src = data[randomIndex].url;
        return data[randomIndex].url;
    }
    // fetch(endpoint2)
// .then((res) => res.json())
// .then((data) => console.log(data));
// // Print out value of API key stored in .env file
// console.log(process.env.API_KEY)



