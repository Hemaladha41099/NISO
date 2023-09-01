import React from 'react'
import { Link } from "react-router-dom"
import img from "./../Pages/Images/run.jpeg"
import img1 from "./../Pages/Images/hockey.jpeg"
import img2 from "./../Pages/Images/swimming.jpeg"
import img3 from "./../Pages/Images/chess.jpeg"
import img4 from "./../Pages/Images/running.jpg"
import img5 from "./../Pages/Images/gymnstic.jpeg"
import img6 from "./../Pages/Images/badmi1.webp"
import img7 from "./../Pages/Images/footbal.jpeg"
const Cardarrangement = () => {
    const Cardlist = [
        {
            imgsrc: img,
            title: 'Running',
            content: 
            "EVENT INFORMATION  AUGUST 2023 CYCLING AND RUNNING MONTHLY CHALLENGE 1 AUGUST 2023 TO 31 AUGUST 2023"
        }, {
            imgsrc: img1,
            title: 'Hockey',
            content: "EVENT INFORMATION \n \n AUGUST 2023 HOCKEY MONTHLY CHALLENGE 1 AUGUST 2023 TO 31 AUGUST 2023",
        }, {
            imgsrc: img2,
            title: 'Swimming',
            content: "EVENT INFORMATION  AUGUST 2023 SWIMMING MONTHLY CHALLENGE 1 AUGUST 2023 TO 31 AUGUST 2023",
        }, {
            imgsrc: img3,
            title: 'Chess',
            content:"EVENT INFORMATION  AUGUST 2023 CHESS MONTHLY CHALLENGE 1 AUGUST 2023 TO 31 AUGUST 2023",
        },
        {
            imgsrc: img4,
            title: '200meters',
            content: "EVENT INFORMATION  AUGUST 2023 200 METERS MONTHLY CHALLENGE 1 AUGUST 2023 TO 31 AUGUST 2023",
        },
        {
            imgsrc: img5,
            title: 'Gymnastics',
            content: "EVENT INFORMATION  AUGUST 2023 GYMNASTICS MONTHLY CHALLENGE 1 AUGUST 2023 TO 31 AUGUST 2023",
        },
        {
            imgsrc: img6,
            title: 'Badminton',
            content: "EVENT INFORMATION  AUGUST 2023 BADMINTON MONTHLY CHALLENGE 1 AUGUST 2023 TO 31 AUGUST 2023",
        },
        {
            imgsrc: img7,
            title: 'FOOTBALL',
            content:"EVENT INFORMATION  AUGUST 2023 F MONTHLY CHALLENGE 1 AUGUST 2023 TO 31 AUGUST 2023",
        },
    ]


    return (
        <div><h3 className='centered'>Competitions</h3>
                    <div className='cards'></div>
                    <div className='d-flex flex-wrap justify-content-between'>
                        {Cardlist.map((cardlist, index) => (
                            <div key={index} className="card mb-3 " style={{ width: '18rem' }}>
                                <img src={cardlist.imgsrc} className="card-img-top" alt="..." />
                                <div className="card-body">
                                    <h5 className="card-title">{cardlist.title}</h5>
                                    <p className="card-text">{cardlist.content}</p>
                                    <Link to="/Participation" className="btn btn-primary">
                                        Go somewhere
                                    </Link>
                                </div>
                            </div>

                        ))}
                    </div>
                </div>
           
      
    )
}

export default Cardarrangement