
<img width="1906" height="925" alt="Screenshot 2026-03-30 144702" src="https://github.com/user-attachments/assets/53d646b5-628e-4b52-a847-147065d9ac93" />

document.getElementById("form").addEventListener("submit" , async (e)=>{
 e.preventDefault();

 try{
    
    const movieName = document.getElementById("movie").value;

    const container = document.getElementById("container");

    const response = await fetch( `https://www.omdbapi.com/?apikey=thewdb&s=${movieName}`,);

    const data = await response.json();

    console.log("data", data);

    if(data.Response === true){
        data.Search.forEach((movie) => {

            const img = document.createElement("img");

            img.src =movie.Poster;
            img.alt = movie.Title;
            img.style.width = "250px";
            img.style.margin = "10px";

            container.appendChild(img);
        });
    }else{
        container.innerHTML = `<h1> movie data is not found </h1>`;
    }
 } catch(error)
 {
    console.log(error.message);
 }
});


🎬 Movie Search App (JavaScript + API)
📌 Overview

This project is a simple and responsive Movie Search Web App built using JavaScript, HTML, and CSS.
It allows users to search for movies and display results dynamically using a movie API.

🚀 Features
🔍 Search movies by name
🎥 Display movie posters
⚡ Fast API-based results
📱 Responsive UI design
🎨 Clean and modern interface

🛠️ Tech Stack
HTML5
CSS3
JavaScript (ES6)
Movie API (like OMDb API / TMDB API)

📂 Project Structure
movie-app/
│── index.html
│── style.css
│── script.js
│── README.md
🔑 API Setup
Go to any movie API website (example: OMDb API)
Get your API key
Replace in your JavaScript file:
const API_KEY = "your_api_key_here";

📸 Output Preview
Search bar to enter movie name
Movie posters displayed in grid layout
Smooth UI like shown in your project screenshot
