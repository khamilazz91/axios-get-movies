const getMovies = async() => {
    try {
        const response = await axios.get('https://api.themoviedb.org/3/movie/popular',{
			//params:{
			//	api_key: '876a1700efbf6b7eef1d09e86ce7a8b9',			
			//},
			headers:{
				'Authorization': 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI4NzZhMTcwMGVmYmY2YjdlZWYxZDA5ZTg2Y2U3YThiOSIsInN1YiI6IjYyZWM0MzFmYjNlNjI3MDA2MTYzZTEzNyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.VJf1VCDAeYTTusAAh0BD6xOFC8lDJ2jK11ioRDTaaNc'
			}

		})
        console.log(response)

        if(response.status === 200){
			const datos = await response.data;
			
			let movies = '';
			datos.results.forEach(movie => {
				movies += `
					<div class="movie">
						<img class="poster" src="https://image.tmdb.org/t/p/w500/${movie.poster_path}">
						<h3 class="title">${movie.title}</h3>
					</div>
				`;
			});

			document.getElementById('container-movies').innerHTML = movies;

		} else if(response.status === 401){
			console.log('Wrong key.');
		} else if(response.status === 404){
			console.log('The movie doesnt exist.');
		} else {
			console.log('There was an error and we dont know what happened, but we will fix it soon.');
		}
    } catch (error) {
        console.log(error)
    }

}


getMovies();

