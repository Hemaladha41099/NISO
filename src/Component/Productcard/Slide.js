import React from 'react'
import image2 from "./../Pages/Images/chan.webp"
import image from "./../Pages/Images/India-Hockey-Tw.jpg"
import image3 from "./../Pages/Images/login page bg.jpeg"
const Slide = () => {
  return (
    <div>
      <div className='background-image'>
        <div id="carouselExampleCaptions" class="carousel slide" data-bs-ride="carousel">
          <div class="carousel-indicators">
            <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" class="active"
              aria-current="true" aria-label="Slide 1"></button>
            <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
            <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
          </div>
          <div class="carousel-inner ">
            <div class="carousel-item  active">
              <img src={image2}  class="d-block w-100 " alt="..." />
              <div class="carousel-caption d-none d-md-block text-dark">
                <h5>Marathon</h5>
                <p>Marathon .Register Now Event will be conducted in 8-september-23</p>
              </div>
            </div>
            <div class="carousel-item h-25">
              <img src={image3}  class="d-block w-100 " alt="..." />
              <div class="carousel-caption d-none d-md-block text-dark">
                <h5>Hockey</h5>
                <p>Hockey Competition on 23-october 23</p>
              </div>
            </div>
            <div class="carousel-item">
              <img src={image} class="d-block w-100 " alt="..." />
              <div class="carousel-caption d-none d-md-block text-dark">
                <h5>Third slide label</h5>
                <p>Some representative placeholder content for the third slide.</p>
              </div>
            </div>
          </div>
          <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Previous</span>
          </button>
          <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Next</span>
          </button>
        </div></div>
    </div>
  )
}

export default Slide