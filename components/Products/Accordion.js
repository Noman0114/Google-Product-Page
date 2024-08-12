import React from 'react'

const Accordion = () => {
  return (
    <div>
         <div className="media">
            <h4>Follow Us</h4>
            <ul>
              <li>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  class="feather feather-instagram"
                >
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                  <path d="M16 11.37a4 4 0 1 1-2.63-3.77"></path>
                  <line x1="17.5" y1="6.5" x2="17.5" y2="6.5"></line>
                </svg>
              </li>
              <li>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  class="feather feather-facebook"
                >
                  <path d="M18 2h-3.5a5.5 5.5 0 0 0-5.5 5.5v3h-3v4h3v9h4v-9h3.5l.5-4h-4z"></path>
                </svg>
              </li>
              <li>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  class="feather feather-twitter"
                >
                  <path d="M23 3a10.9 10.9 0 0 1-3.14 1.23A5.5 5.5 0 0 0 22.36 1a10.89 10.89 0 0 1-3.49 1.34A5.45 5.45 0 0 0 16.55 0a5.5 5.5 0 0 0-5.5 5.5a5.45 5.45 0 0 0 .14 1.25A15.6 15.6 0 0 1 1.64 2.43a5.45 5.45 0 0 0 1.7 7.29A5.5 5.5 0 0 1 1 9.5a5.5 5.5 0 0 0 4.4 5.4A5.5 5.5 0 0 1 2 16v.07a5.48 5.48 0 0 0 4.45 5.4a10.9 10.9 0 0 1-6.75 2.33a10.4 10.4 0 0 1-1.29-.07a15.4 15.4 0 0 0 8.27 2.43c9.94 0 15.36-8.24 15.36-15.36v-.7A10.98 10.98 0 0 0 23 3z"></path>
                </svg>
              </li>
              <li>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  class="feather feather-youtube"
                >
                  <path d="M22.54 6.42a2.74 2.74 0 0 0-1.92-1.92C19.12 4 12 4 12 4s-7.12 0-8.62.5A2.74 2.74 0 0 0 1.46 6.42C.96 7.91.96 12 .96 12s0 4.09.5 5.58a2.74 2.74 0 0 0 1.92 1.92C4.88 20 12 20 12 20s7.12 0 8.62-.5a2.74 2.74 0 0 0 1.92-1.92C23.04 16.09 23.04 12 23.04 12s0-4.09-.5-5.58zM10 15V9l6 3-6 3z"></path>
                </svg>
              </li>
            </ul>
          </div>
        <div className="accordion accordion-flush" id="accordionFlushExample" style={{    width:'70vw'}}>
  <div className="accordion-item">
    <h2 className="accordion-header ">
      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
      Company Resources
      </button>
    </h2>
    <div id="flush-collapseOne" className="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
      <div className="accordion-body"> <div className="lg:w-1/4 md:w-1/2 w-full px-4 footer-item">
             
              <nav className="list-none mb-10">
                <li>
                  <a className="text-gray-600 hover:text-gray-800">
                    Contact us
                  </a>
                </li>
                <li>
                  <a className="text-gray-600 hover:text-gray-800">
                    Help center
                  </a>
                </li>
                <li>
                  <a className="text-gray-600 hover:text-gray-800">Locations</a>
                </li>
                <li>
                  <a className="text-gray-600 hover:text-gray-800">Careers</a>
                </li>
                <li>
                  <a className="text-gray-600 hover:text-gray-800">Blog</a>
                </li>
                <li>
                  <a className="text-gray-600 hover:text-gray-800">
                    Press resources
                  </a>
                </li>
              </nav>
            </div></div>
    </div>
  </div>
  <div className="accordion-item">
    <h2 className="accordion-header">
      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseTwo" aria-expanded="false" aria-controls="flush-collapseTwo">
        Feature Product
      </button>
    </h2>
    <div id="flush-collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
      <div className="accordion-body"> <div className="lg:w-1/4 md:w-1/2 w-full px-4 footer-item">
              
              <nav className="list-none mb-10">
                <li>
                  <a className="text-gray-600 hover:text-gray-800">
                    Contact us
                  </a>
                </li>
                <li>
                  <a className="text-gray-600 hover:text-gray-800">
                    Help center
                  </a>
                </li>
                <li>
                  <a className="text-gray-600 hover:text-gray-800">Locations</a>
                </li>
                <li>
                  <a className="text-gray-600 hover:text-gray-800">Careers</a>
                </li>
                <li>
                  <a className="text-gray-600 hover:text-gray-800">Blog</a>
                </li>
                <li>
                  <a className="text-gray-600 hover:text-gray-800">
                    Press resources
                  </a>
                </li>
              </nav>
            </div></div>
    </div>
  </div>
  <div className="accordion-item">
    <h2 className="accordion-header">
      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseThree" aria-expanded="false" aria-controls="flush-collapseThree">
       Responsibility
      </button>
    </h2>
    <div id="flush-collapseThree" className="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
      <div className="accordion-body"> <div className="lg:w-1/4 md:w-1/2 w-full px-4 footer-item">
             
              <nav className="list-none mb-10">
                <li>
                  <a className="text-gray-600 hover:text-gray-800">
                    Contact us
                  </a>
                </li>
                <li>
                  <a className="text-gray-600 hover:text-gray-800">
                    Help center
                  </a>
                </li>
                <li>
                  <a className="text-gray-600 hover:text-gray-800">Locations</a>
                </li>
                <li>
                  <a className="text-gray-600 hover:text-gray-800">Careers</a>
                </li>
                <li>
                  <a className="text-gray-600 hover:text-gray-800">Blog</a>
                </li>
                <li>
                  <a className="text-gray-600 hover:text-gray-800">
                    Press resources
                  </a>
                </li>
              </nav>
            </div></div>
    </div>
  </div>
</div>
    </div>
  )
}

export default Accordion