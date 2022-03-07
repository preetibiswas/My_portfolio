import React from 'react'
import './portfolio.css'
import IMG1 from '../../Assets/portfolio1.jpg'
import IMG2 from '../../Assets/portfolio2.jpg'
import IMG3 from '../../Assets/portfolio3.jpg'
import IMG4 from '../../Assets/portfolio4.jpg'
import IMG5 from '../../Assets/portfolio5.png'
import IMG6 from '../../Assets/portfolio6.jpg'

const Portfolio = () => {

  const data=[
    {
      id:1,
      image:IMG1,
      github:'https://github.com',
      title:'Crypto Currency dashboard and financial visualisation',
      demo:'https://dribbble.com/shots/19695957-Audio-equalizer-dashboard-concept'

    },
    {
      id:2,
      image:IMG2,
      github:'https://github.com',
      title:'Crypto Currency dashboard and financial visualisation',
      demo:'https://dribbble.com/shots/19848942-Sphynx-Cat-Logo'
    },
    {
      id:3,
      image:IMG3,
      github:'https://github.com',
      title:'Crypto Currency dashboard and financial visualisation',
      demo:'https://dribbble.com/shots/19848942-Sphynx-Cat-Logo'
    },
    {
      id:4,
      image:IMG4,
      github:'https://github.com',
      title:'Crypto Currency dashboard and financial visualisation',
      demo:'https://dribbble.com/shots/19848942-Sphynx-Cat-Logo'
    },
    {
      id:5,
      image:IMG5,
      github:'https://github.com',
      title:'Crypto Currency dashboard and financial visualisation',
      demo:'https://dribbble.com/shots/19848942-Sphynx-Cat-Logo'
    },
    {
      id:6,
      image:IMG6,
      github:'https://github.com',
      title:'Crypto Currency dashboard and financial visualisation',
      demo:'https://dribbble.com/shots/19848942-Sphynx-Cat-Logo'
    },

  ]

  return (
    <section id='portfolio'>
      <h5>MY RecentWork</h5>
      <h2>Portfolio</h2>
      <div className='container portfolio__container'>
       {data.map(({id,image,github,title,demo})=>{
        return(
         
          <article className='portfolio__item' key={id}>
          <div className="portfolio__item-image">
            <img src={image} alt={title} />
          </div>
          <h3>This is a portfolio item title</h3>
          <div className="portfolio__item-cta">
          <a href={github} className='btn'>github</a>
          <a href={demo}className='btn btn-primary' target='_blank'>LiveDemo</a>
          </div>
        </article>

        )

       })}
        
        
      </div>
    </section>
  )
}

export default Portfolio