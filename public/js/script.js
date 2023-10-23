//TMDB

const API_KEY = 'api_key=1cf50e6248dc270629e802686245c2c8';
const BASE_URL = 'https://api.themoviedb.org/3';
const API_URL = BASE_URL + '/discover/movie?sort_by=popularity.desc&'+API_KEY;
const IMG_URL = 'https://image.tmdb.org/t/p/w500';



getMovies(API_URL);

// function getMovies(url) {
//   lastUrl = url;
//     fetch(url).then(res => res.json()).then(data => {
//         console.log(data.results)
//           showMovies(data.results);

//         }
//     )
// }

function getMovies(url) {
    lastUrl = url;
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        const top3Movies = data.results.slice(3, 11);
        console.log(top3Movies);
        showMovies(top3Movies);
      });
  }



function showMovies(data) {
    main.innerHTML = '';

    data.forEach(movie => {
        const {title, poster_path, vote_average, overview, id} = movie;
        const movieEl = document.createElement('div');
        movieEl.classList.add('movie');
        movieEl.innerHTML = `
             <img src="${poster_path? IMG_URL+poster_path: "http://via.placeholder.com/1080x1580" }" alt="${title}">

            <div class="movie-info">
                <h3>${title}</h3>
                <span class="${getColor(vote_average)}">${vote_average}</span>
            </div>

            <div class="overview">

                <h3>Overview</h3>
                ${overview}
                <br/>

            </div> `

        main.appendChild(movieEl);

    })
}


function getColor(vote) {
    if(vote>= 8){
        return 'green'
    }else if(vote >= 5){
        return "orange"
    }else{
        return 'red'
    }
}

const main = document.getElementById('main');
