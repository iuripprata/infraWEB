const API_KEY = 'api_key=83b15094cfe66c75e6f88eca7fc67724';
const BASE_URL = 'https://api.themoviedb.org/3/';
const API_URL = BASE_URL + '/trending/all/week?' + API_KEY;
const IMG_URL = 'https://image.tmdb.org/t/p';

const main = document.getElementById('main');

getTrending(API_URL);

function getTrending(url) {
    fetch(url).then(Response => Response.json()).then(data => {
        console.log(data.results)
        showTrending(data.results);
    })
}

function showTrending(data){
    main.innerHTML = '';

    data.forEach(all => {
        const {title, poster_path, vote_average, overview} = trending;
        const allEl = document.createElement('div');
        allEl.classList.add('trending');
        allEl.innerHTML = `
            <div class="card mb-3" style="max-width: 540px;" id="trending">
            <div class="row g-0">
                <div class="col-md-4">
                <img src="${IMG_URL+poster_path}" class="img-fluid rounded-start" alt="${title}">
                </div>
                <div class="col-md-8">
                <div class="card-body">
                    <h5 class="card-title">${title}</h5>
                    <p class="card-text">${overview}</p>
                    <p class="card-text"><small class="text-muted"><span class="${getColor(vote_average)}">${vote_average}</span></small></p>
                </div>
                </div>
            </div>
            </div>

        `

        main.appendChild(allEl);

    })
}

function getColor(vote){
    if(vote >= 8){
        return 'green'
    }else if(vote >= 5){
        return 'orange'
    }else{
        return 'red'
    }
}