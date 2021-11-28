import React from 'react'

function DesTrailer({movies,match,history}){
    const movie=movies.find(movie=>movie.id==match.params.movieId)
console.log(movie)

    return (
        <div className="des">
       
       <iframe width="600" height="400" src={movie.trailer} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        <p>{movie.description}</p>
    <img className="imgTrailer" src="https://spng.pngfind.com/pngs/s/11-114360_up-arrow-png-free-download-red-arrow-png.png" alt="arrow"  width="70px" heigth="70px" onClick={()=>history.goBack()} />
        </div>
    )
}

export default DesTrailer;
