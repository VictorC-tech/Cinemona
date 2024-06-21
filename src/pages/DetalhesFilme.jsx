import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";

function DetalhesFilme() {
  console.log(useParams());
  const { id } = useParams();

  const [filme, setFilme] = useState({});

  useEffect(() => {
    fetch(
      `https://api.themoviedb.org/3/movie/${id}?api_key=7c572a9f5b3ba776080330d23bb76e1e&language=pt-BR`
    )
      .then((response) => response.json())
      .then((response) => setFilme(response))
      .catch((error) => console.log(error));
  }, []);

  return (
    <>
      <div className="flex flex-row bg-red-700">
        <img className="m-4 h-auto w-2/4" src={`https://image.tmdb.org/t/p/w1280/${filme.backdrop_path}`}/>
        <div className=" text-white">
          <h1 className="text-2xl m-4">{filme.title}</h1>
          <p className="m-4 text-2xl">Rating: {filme.vote_average}</p>
            <p className="ml-4 text-base font-medium">Sinopse: </p>
            <p className="ml-4">{filme.overview}</p>
        </div>
      </div>
    </>
  );
}

export default DetalhesFilme;
