import React from "react";

const NoFreeListings = () => {
  return (
    <section className="no-free-section section-padding">
      <div className="auto-container">
        <div className="row justify-content-center">
          <div className="col-lg-9 text-center wow fadeInUp">
            <h2 className="text-reveal-anim">Why we don&apos;t do free listings</h2>
            <p className="lead-para">
              Free directories fill up with every contractor in the state, and
              the leads get split a dozen ways. We charge a membership because
              it&apos;s the only way to keep one contractor per territory and still
              keep the leads coming.
            </p>
            <p className="pull-quote">
              You&apos;re not paying for a badge. You&apos;re paying for the fact that
              nobody else in your area gets the call.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NoFreeListings;
