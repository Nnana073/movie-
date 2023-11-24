import React from 'react'

const Movi = ({name, year, warmovie, date, image}) => {
  return (
      <article className='cocktail'>
          <div className="image-conatainer">
              <img src={image} alt={name} />
          </div>

          <div className="cocktail-footer">
              <h3>{name}</h3>
              <h4>{warmovie}</h4>
              <h4>{year}</h4>
              <h4>{date}</h4>
          </div>
      </article>
  )
}

export default Movi