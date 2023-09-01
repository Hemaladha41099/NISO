import React from 'react'
import {AiFillGithub,AiFillLinkedin} from"react-icons/ai"
const year = new Date();

const Footer = () => {
  return (
    <footer class="bg-dark text-center text-white">
      <div class="container p-4">
        <section class="mb-4">
          <a class="btn btn-outline-light btn-floating m-1" href="#!" role="button"
          ><AiFillLinkedin/>
          </a>
          <a class="btn btn-outline-light btn-floating m-1" href="#!" role="button"
          ><AiFillGithub />
          </a>
        </section>
        <section class="mb-4">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt distinctio earum
            repellat quaerat voluptatibus placeat nam, commodi optio pariatur est quia magnam
            eum harum corrupti dicta, aliquam sequi voluptate quas.
          </p>
        </section>
        <div class="text-center p-3" style={{backgroundColor: "rgba(0, 0, 0, 0.2)"}}>
          © 2020 Copyright:
          <a class="text-white" href="https://mdbootstrap.com/">MDBootstrap.com</a>
        </div>
        <div className='foot'>Copyright &copy; {year.getFullYear()}</div>
      </div>
    </footer>

  )
}

export default Footer