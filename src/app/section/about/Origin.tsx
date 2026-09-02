import AppImage from "../../components/elements/AppImage";
import React from "react";

const Origin = () => (
  <section className="about-section problem-section">
    <div className="large-container">
      <div className="row align-items-center">
        <div className="content-column col-xl-6 col-lg-12 wow">
          <div className="inner-column">
            <div className="sec-title">
              <span className="sub-title">
                <i className="fa-solid fa-circle-dot" aria-hidden="true"></i>
                Our story
              </span>
              <h2>We got tired of fixing other people&apos;s shortcuts</h2>
            </div>
            <p className="lead-para">
              Most of the failed asphalt we get called to look at was not badly
              laid. It was laid on a base that was too thin, over ground that
              never drained, by a crew that was already booked somewhere else
              that afternoon.
            </p>
            <p className="lead-para">
              So we do the unglamorous part properly. We dig, we grade, we
              compact, and we do not start paving until the thing underneath is
              right. It costs a little more on the day and it is the reason the
              driveway is still flat in ten years.
            </p>
            <p className="lead-para">
              We also stay small enough that the person who quotes your job is
              the person accountable for it.
            </p>
          </div>
        </div>
        <div className="image-column col-xl-6 col-lg-12 order-lg-first">
          <div className="inner-column">
            <figure className="diagram-figure wow">
              <AppImage
                src="/assets/images/photos/crew-laying.jpg"
                alt="A crew raking and laying hot asphalt behind a paver"
                width={1400}
                height={933}
              />
            </figure>
          </div>
        </div>
      </div>
    </div>
    <div className="bg-blur"></div>
  </section>
);

export default Origin;
