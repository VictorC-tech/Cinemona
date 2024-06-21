import { useState, useEffect } from "react";
import {Link} from 'react-router-dom';

function Filmes() {

    const [filmes, setFilmes] = useState([])

        useEffect( () =>{
            fetch('https://api.themoviedb.org/3/movie/popular?api_key=7c572a9f5b3ba776080330d23bb76e1e')
            .then(response => response.json())
            .then(response => setFilmes(response.results))
            .catch (error => console.log(error))
        },[])

    return ( 
        <>
        <h2 className="text-2xl ml-4">Filmes</h2>
        <img className="flex justify-aroundw-3/4 h-auto ml-28 mr-4" src="/oppenheimerBanner.jpg" alt="oppenheimer banner" />
        <div className="listaFilmes flex flex-row gap-3 flex-wrap">
            {
                filmes.map(
                    filme => (
                        <div className="ml-24 card-filme h-120 my-4 w-64 rounded-md bg-video bg-cover bg-center shadow-lg cursor-pointer" key={filme.id}>
                        <div className="flex bg-black bg-opacity-0 p-4 w-full h-full hover:bg-opacity-50 transition-all duration-1000">
                        <Link to={`${filme.id}`} className=""><img src={`https://image.tmdb.org/t/p/original/${filme.poster_path}`}/></Link>
                        </div>
                        </div>
            
                    )
                )
            }
           
        </div>
        </>

     );
}

export default Filmes ;