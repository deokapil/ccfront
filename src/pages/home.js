import React from "react";

function Home() {
  return (
    <React.Fragment>
      <div className="container">
        <div className="row vh-100 align-items-center justify-content-center">
          <div className="col-12 text-center">
            <div className="flex-button">
              <div className="database-icon"> </div>
              <a
                className="btn btn-outline-primary bt-configure btn-lg"
                href="/configure-domain"
              >
                Configure Domain <i className="fal fa-chevron-right"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}

export default Home;
