import React from 'react'
import Card from './Card'
import img2 from './Images/Book1.jpg';
const Product = () => {
  return (
    <div>
      <div className='row'>
        <div class="col-md"><Card imgsrc={img2} title="Sudha moorty " /></div>
        <div class="col-md"><Card imgsrc={img2} title="Sudha moorty " /></div>
        <div class="col-md"><Card imgsrc={img2} title="Sudha moorty" /></div>
        <div class="col-md"><Card imgsrc={img2} title="Sudha moorty" /></div>
      </div>
      <div className='row'>
        <div class="col-md"><Card imgsrc={img2} title="Sudha moorty" /></div>
        <div class="col-md"><Card imgsrc={img2} title="Sudha moorty" /></div>
        <div class="col-md"><Card imgsrc={img2} title="Sudha moorty" /></div>
        <div class="col-md"><Card imgsrc={img2} title="Sudha moorty" /></div>
      </div>
      <div className='row'>
        <div class="col-md"><Card imgsrc={img2} title="Sudha moorty" /></div>
        <div class="col-md"><Card imgsrc={img2} title="Sudha moorty" /></div>
        <div class="col-md"><Card imgsrc={img2} title="Sudha moorty" /></div>
        <div class="col-md"><Card imgsrc={img2} title="Sudha moorty" /></div>
      </div>
      <div className='row'>
        <div class="col-md"><Card imgsrc={img2} title="Sudha moorty" /></div>
        <div class="col-md"><Card imgsrc={img2} title="Sudha moorty" /></div>
        <div class="col-md"><Card imgsrc={img2} title="Sudha moorty" /></div>
        <div class="col-md"><Card imgsrc={img2} title="Sudha moorty" /></div>
      </div>
      <div><nav aria-label="Page navigation example">
        <ul class="pagination centered">
          <li class="page-item  "><a class="page-link bg-primary" href="#">Previous</a></li>
          <li class="page-item "><a class="page-link bg-primary" href="#">1</a></li>
          <li class="page-item "><a class="page-link bg-primary" href="#">2</a></li>
          <li class="page-item "><a class="page-link bg-primary" href="#">3</a></li>
          <li class="page-item "><a class="page-link bg-primary" href="#">Next</a></li>
        </ul>
      </nav></div>
    </div>

  );
}
export default Product