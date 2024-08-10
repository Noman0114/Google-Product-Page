import React from 'react'

const Bluegrid = () => {
  return (
    <>
    <div className="devices-main" style={{   " margin-top": "180px" }}>
    <div className="devices-img">
      <img src=" /bluegrid.jpg" alt=""   style={{"width":"40vw", "border-radius":"5px"}}/>
    </div>
    <div className="devices-content">
      <h3>Grow with Google </h3>
      <p>
      Discover and learn from training, tools, and resources created by Google to help you grow your skills, career, or business.
      </p>
      <button
        className="btn btn-primary  w-6 rounded-1 my-3"
        style={{ width: "240px", "font-weight": "500", padding: "15px" }}
      >
       Visit Grow with Google
      </button>
    </div>
  </div>
  <div className="Bluegrid-card">
     <div className="devices-card">
        <div class="card" style={{"width": "25rem"}}>
          <img src="/devices-card1.png" class="card-img-top" alt="..." />
          <div class="card-body">
            <h5 class="card-title">Phones</h5>
            <p class="card-text">
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </p>
            <a href="#" class="">
            Learn more
            </a>
          </div>
        </div>
        <div class="card" style={{"width": "25rem"}}>
          <img src="/devices-card2.png" class="card-img-top" alt="..." />
          <div class="card-body">
            <h5 class="card-title">Tablets</h5>
            <p class="card-text">
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </p>
            <a href="#" class="">
            Learn more
            </a>
          </div>
        </div>
        <div class="card" style={{"width": "25rem"}}>
          <img src="/devices-card3.png" class="card-img-top" alt="..." />
          <div class="card-body">
            <h5 class="card-title">Watches</h5>
            <p class="card-text">
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </p>
            <a href="#" class="">
            Learn more
            </a>
          </div>
        </div>
        
      </div>
  </div>
  </>
  )
}

export default Bluegrid