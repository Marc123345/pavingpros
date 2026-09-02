import AppImage from "../../components/elements/AppImage";
import React from "react";
import { statesRun } from "../../../lib/site";

const Origin = () => {
  return (
    <section className="about-section problem-section">
      <div className="large-container">
        <div className="row align-items-center">
          <div className="content-column col-xl-6 col-lg-12 wow fadeInLeft">
            <div className="inner-column">
              <div className="sec-title">
                <span className="sub-title">
                  <AppImage src="/assets/images/main-home/sub-title-shape.svg" alt="" width={16} height={16} />
                  Our story
                </span>
                <h2 className="text-reveal-anim">Why Paving Pros exists</h2>
              </div>
              <p className="lead-para">
                We started out running advertising campaigns for individual
                paving contractors, one at a time, across {statesRun} states. We
                learned a few things doing that.
              </p>
              <p className="lead-para">
                Homeowners and property managers looking for paving rarely know
                who to call. They search, they ask an AI assistant, they click an
                ad, and they end up talking to whoever answers first. Meanwhile,
                contractors were spending money on leads that were being sold to
                their competitors at the same time.
              </p>
              <p className="lead-para">
                The fix was obvious once we saw it. Put all the owner demand in
                one place, and give each area to one contractor. That&apos;s Paving
                Pros.
              </p>
            </div>
          </div>
          <div className="image-column col-xl-6 col-lg-12 order-lg-first">
            <div className="inner-column">
              <figure className="diagram-figure wow fadeInLeft">
                <AppImage
                  src="/assets/images/brand/about-loop.svg"
                  alt="Owner demand collected in one place, then routed to one contractor per territory"
                  width={600}
                  height={520}
                />
              </figure>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-blur"></div>
    </section>
  );
};

export default Origin;
