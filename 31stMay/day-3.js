const data=[
    {
        image:"https://m.media-amazon.com/images/M/MV5BZWYzOGEwNTgtNWU3NS00ZTQ0LWJkODUtMmVhMjIwMjA1ZmQwXkEyXkFqcGdeQXVyMjkwOTAyMDU@._V1_.jpg",
        title:"Top Gun Maverick",
        rating:9
    },{
        image:"https://www.appocalypse.co/wp-content/uploads/2019/07/War-Teaser-Poster.jpg",
        title:"War",
        rating:8
    },{
        image:"https://m.media-amazon.com/images/M/MV5BMTU2NjA1ODgzMF5BMl5BanBnXkFtZTgwMTM2MTI4MjE@._V1_.jpg",
        title:"John Wick",
        rating:9.8
    },{
        image:"https://images-na.ssl-images-amazon.com/images/S/pv-target-images/bf51d3fafef07d2bf556b68b16e68cc9581ace36ace24866d1f8b55e84374520._RI_TTW_.jpg",
        title:"Jason Bourne",
        rating:9.5
    },{
        image:"https://m.media-amazon.com/images/M/MV5BNjJhZDZhNWYtMjdhYS00NjkyLWE5NzItMzljNmQ3NGE4MGZjXkEyXkFqcGdeQXVyMjkwOTAyMDU@._V1_FMjpg_UX1000_.jpg",
        title:"Punisher",
        rating:9.8
    },{
        image:"https://m.media-amazon.com/images/M/MV5BNzQ4MGYzYzAtNjJlOC00NTdkLTlmNTAtMmZjMzZmZTg2YTEzXkEyXkFqcGdeQXVyMjkwOTAyMDU@._V1_.jpg",
        title:"Jack Reacher",
        rating:9.8
    }
];

const movieBox=document.getElementById("show_movies");

data.map((el)=>{
    const div=document.createElement("div");
    const image=document.createElement("img");
    image.src=el.image;
    const movieTitle=document.createElement("h3");
    movieTitle.innerText=el.title;
    const rating=document.createElement("p");
    rating.innerText="Rating : "+el.rating;
    const button=document.createElement("button");
    button.innerText="Click Movie";
    button.addEventListener("click",()=>{
    alert(`You clicked on ${el.title}`);
    });
    div.append(image,movieTitle,rating,button);
    movieBox.append(div);
});

// for(let i=0;i<data.length;i++){
// const div=document.createElement("div");
// const image=document.createElement("img");
// image.src=data[i].image;
// const movieTitle=document.createElement("h2");
// movieTitle.innerText=data[i].title;
// const rating=document.createElement("p");
// rating.innerText="Rating : "+data[i].rating;
// div.append(image,movieTitle,rating);
// movieBox.append(div);
// }
