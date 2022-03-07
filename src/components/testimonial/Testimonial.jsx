import React from 'react'
import './testimonial.css'
import AVTR1 from '../../Assets/avatar1.jpg'
import AVTR2 from '../../Assets/avatar2.jpg'
import AVTR3 from '../../Assets/avatar3.jpg'
import AVTR4 from '../../Assets/avatar4.jpg'
// import Swiper core and required modules
import {  Pagination } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';


const data=[
  {
   avatar:AVTR1,
   name:'tina Snow',
   review: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis suscipit ad fugit ex? Incidunt repellat officia, voluptatum consequuntur dicta assumenda libero sequi odit vel animi nemo molestias id rem aut?'
  
  },
  {
    avatar:AVTR2,
    name:'Shatte wala',
    review: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Adipisci esse nulla voluptas reiciendis voluptatibus accusantium quos numquam, cupiditate, fugiat iusto incidunt! Fugit neque tempore quaerat incidunt expedita molestiae, assumenda minus!'
  },
  {
    avatar:AVTR3,
    name:'Kwame Despite',
    review: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi nulla perferendis cum illum, natus repellat est quod non impedit quam sed praesentium. Consectetur necessitatibus hic ut nihil, blanditiis distinctio! Veritatis?'
  },
  {
    avatar:AVTR4,
    name: 'Rita kami',
    review: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. In fugit quidem laudantium sapiente. Perferendis quasi saepe, reiciendis nobis id natus earum. Asperiores rerum quam tempora cupiditate voluptatem, eligendi excepturi reprehenderit.'
  }
]



const Testimonial = () => {
  return (
    <section id='testimonials'>
      <h5>Review from client</h5>
      <h2>Testimonials</h2>
      <Swiper className='container testimonials__container'
      // install Swiper modules
      modules={[ Pagination]}
      spaceBetween={40}
      slidesPerView={1}
     
      pagination={{ clickable: true }}
      scrollbar={{ draggable: true }}
      onSwiper={(swiper) => console.log(swiper)}
      onSlideChange={() => console.log('slide change')}>
        {data.map(({avatar,name,review},index)=>{
          return(
            <SwiperSlide className='testimonial' key={index}>
          <div className='client__avatar'>
            <img src={avatar} alt="avatarOne" />
            </div>
            <h5 className='client_name'>{name}</h5>
            <small className='client__review'>
             {review}
            </small>
          
        </SwiperSlide>

          )
        })

        }
        
        
      </Swiper>
    </section>
  )
}

export default Testimonial