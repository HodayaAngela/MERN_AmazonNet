import React from 'react';

const Footer = () => {
  return (
    <>
      {/* // Remove the container if you want to extend the Footer to full width. */}
      <div className=" mt-1">
        {/* <!-- Footer --> */}
        <footer className="bg-dark text-center text-white">
          {/* <!-- Grid container --> */}
          <div className="container p-4">
            {/* <!-- Section: Social media --> */}
            <section className="mb-4">
              {/* <!-- Facebook --> */}
              <a
                className="btn btn-outline-light btn-floating m-1"
                href="#!"
                role="button"
              >
                <i className="fab fa-facebook-f"></i>
              </a>

              {/* <!-- Twitter --> */}
              <a
                className="btn btn-outline-light btn-floating m-1"
                href="#!"
                role="button"
              >
                <i className="fab fa-twitter"></i>
              </a>

              {/* <!-- Google --> */}
              <a
                className="btn btn-outline-light btn-floating m-1"
                href="#!"
                role="button"
              >
                <i className="fab fa-google"></i>
              </a>

              {/* <!-- Instagram --> */}
              <a
                className="btn btn-outline-light btn-floating m-1"
                href="#!"
                role="button"
              >
                <i className="fab fa-instagram"></i>
              </a>

              {/* <!-- Linkedin --> */}
              <a
                className="btn btn-outline-light btn-floating m-1"
                href="#!"
                role="button"
              >
                <i className="fab fa-linkedin-in"></i>
              </a>

              {/* <!-- Github --> */}
              <a
                className="btn btn-outline-light btn-floating m-1"
                href="#!"
                role="button"
              >
                <i className="fab fa-github"></i>
              </a>
            </section>
            {/* <!-- Section: Social media --> */}

            {/* <!-- Section: Form --> */}
            <section className="">
              <form action="">
                {/* <!--Grid row--> */}
                <div className="row d-flex justify-content-center">
                  {/* <!--Grid column--> */}
                  <div className="col-auto">
                    <p className="pt-2">
                      <strong>Sign up for our newsletter</strong>
                    </p>
                  </div>
                  {/* <!--Grid column--> */}

                  {/* <!--Grid column--> */}
                  <div className="col-md-5 col-12">
                    {/* <!-- Email input --> */}
                    <div className="form-outline form-white mb-4">
                      <input
                        type="email"
                        id="form5Example2"
                        className="form-control"
                      />
                      <label className="form-label" htmlFor="form5Example2">
                        Email address
                      </label>
                    </div>
                  </div>
                  {/* <!--Grid column--> */}

                  {/* <!--Grid column--> */}
                  <div className="col-auto">
                    {/* <!-- Submit button --> */}
                    <button
                      type="submit"
                      className="btn btn-outline-light mb-4"
                    >
                      Subscribe
                    </button>
                  </div>
                  {/* <!--Grid column--> */}
                </div>
                {/* <!--Grid row--> */}
              </form>
            </section>
            {/* <!-- Section: Form --> */}

            {/* <!-- Section: Links --> */}
            <section className="">
              {/* <!--Grid row--> */}
              <div className="row">
                {/* <!--Grid column--> */}
                <div className="col-lg-3 col-md-6 mb-4 mb-md-0">
                  <ul className="list-unstyled mb-0">
                    <li>
                      <a href="#!" className="text-white">
                        Book Depository
                      </a>
                    </li>
                    <li>
                      <a href="#!" className="text-white">
                        PillPack
                      </a>
                    </li>
                    <li>
                      <a href="#!" className="text-white">
                        Ring
                      </a>
                    </li>
                    <li>
                      <a href="#!" className="text-white">
                        IMDb
                      </a>
                    </li>
                  </ul>
                </div>
                {/* <!--Grid column--> */}

                {/* <!--Grid column--> */}
                <div className="col-lg-3 col-md-6 mb-4 mb-md-0">
                  <ul className="list-unstyled mb-0">
                    <li>
                      <a href="#!" className="text-white">
                        Audible
                      </a>
                    </li>
                    <li>
                      <a href="#!" className="text-white">
                        ACX
                      </a>
                    </li>
                    <li>
                      <a href="#!" className="text-white">
                        Zappos
                      </a>
                    </li>
                    <li>
                      <a href="#!" className="text-white">
                        Web Services
                      </a>
                    </li>
                  </ul>
                </div>
                {/* <!--Grid column--> */}

                {/* <!--Grid column--> */}
                <div className="col-lg-3 col-md-6 mb-4 mb-md-0">
                  <ul className="list-unstyled mb-0">
                    <li>
                      <a href="#!" className="text-white">
                        Goodreads
                      </a>
                    </li>
                    <li>
                      <a href="#!" className="text-white">
                        Neighbors App
                      </a>
                    </li>
                    <li>
                      <a href="#!" className="text-white">
                        Fabric
                      </a>
                    </li>
                    <li>
                      <a href="#!" className="text-white">
                        6pm
                      </a>
                    </li>
                  </ul>
                </div>
                {/* <!--Grid column--> */}

                {/* <!--Grid column--> */}
                <div className="col-lg-3 col-md-6 mb-4 mb-md-0">
                  <ul className="list-unstyled mb-0">
                    <li>
                      <a href="#!" className="text-white">
                        Shopbop
                      </a>
                    </li>
                    <li>
                      <a href="#!" className="text-white">
                        DPReview
                      </a>
                    </li>
                    <li>
                      <a href="#!" className="text-white">
                        AmazoNet Music
                      </a>
                    </li>
                    <li>
                      <a href="#!" className="text-white">
                        ComiXology
                      </a>
                    </li>
                  </ul>
                </div>
                {/* <!--Grid column--> */}
              </div>
              {/* <!--Grid row--> */}
            </section>
            {/* <!-- Section: Links --> */}
          </div>
          {/* <!-- Grid container --> */}

          {/* <!-- Copyright --> */}
          <div
            className="text-center p-3"
            style={{ backgroundColor: (0, 0, 0, 0.2) }}
          >
            © 2023 Copyright:
            <a className="text-white" href="https://mdbootstrap.com/">
              {''} Hodaya Angela Dabakarov
            </a>
          </div>
          {/* <!-- Copyright --> */}
        </footer>
        {/* <!-- Footer --> */}
      </div>
      {/* <!-- End of .container --> */}
    </>
  );
};

export default Footer;
