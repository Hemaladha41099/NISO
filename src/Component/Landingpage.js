import React from 'react'
import Slide from './Productcard/Slide'
import Footer from "./../Component/Pages/Footer"
import img from "./../Component/Pages/Images/gymnstic.jpeg"
import img1 from "./../Component/Pages/Images/hockey1.jpeg"
import img2 from "./../Component/Pages/Images/badmi1.webp"
import { Link } from 'react-router-dom'
const Landingpage = () => {
const Card= [
    {
      img: img,
      title: "Gymnastics",
      content: "The 40th edition of these championships marks the exciting end of the 2023 #RhythmicGymnastics calendar, as athletes and teams compete to qualify for the Olympics. In Valencia, 14 spots for individuals and five for groups will be up for grabs. The atmosphere will be electric! #RoadtoParis2024 #OlympicQualifiers",
    },
    {
      img: img1,
      title: "Hockey",
      content: "Don't miss this hockey party at Sparkassenpark Mönchengladbach! Eight women's and eight men's teams will battle it out for the title of European Champion during this unforgettable ten-day event, with Olympic spots up for grabs! #RoadtoParis2024 #OlympicQualifiers #Hockey",
    },
    {img:img2,
      title: "Badmiton",
      content: "Get ready for badminton greatness! Join us for free live streaming of this thrilling competition, where teams will fight their way to the top, earning points to Paris 2024! #RoadToParis2024 #OlympicQualifiers #badminton",},
  ]

  return (
    <div >
      <Slide />
      <div className='centered'><b>UPCOMING EVENT</b></div>
      {Card.map((Card,index) => (
        <div  key={index} class="card mb-3"  style={{ width: "100vw", height: "260px" }}>
          <div class="row g-0">
            <div class="col-md-4">
              <img src={Card.img} class="img-fluid rounded-start" alt="..." />
            </div>
            <div class="col-md-8">
              <div class="card-body">
                <h5 class="card-title">{Card.title}</h5>
                <p class="card-text">{Card.content}</p>
  <Link  to="/course" className="btn btn-primary" >Show more</Link>
              </div>

            </div>
          </div>
        </div>
      ))}
      <Footer />
    </div>
  )
}

export default Landingpage
