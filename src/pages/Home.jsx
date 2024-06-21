import data from '../../articles.json'

function Home() {
    return ( 
        <>
            <input className='ml-4 mb-4 w-3/12 rounded-md border-2 border-black' type="text" id="buscar" placeholder='Buscar uma notícia' />
            <div className='grid grid-cols-3 gap-4'>
            {   
                data.map( (artigo, index) => (
                    <div className='card ml-4 mr-4' key={index}>
                        <h2>{artigo.title}</h2>
                        <img className="mb-2 w-96" src={artigo.image} alt={artigo.title} />
                        <div className='tags'>
                            {artigo.tags.map( (tag, index) => (
                                <span className="bg-red-700 p-1 m-1 text-white" key={index}>{tag}</span>
                            ))}
                        </div>
                        <div className='texto'>
                        {artigo.text.map( (paragrafo,index) => (
                            <p key={index}>{paragrafo}</p>
                        ))}
                        </div>

                    </div>
                ))
            }
            </div>
        </>
    );
}

export default Home ;