import AppImage from "../../components/elements/AppImage";
import React from "react";

const jobs = [
  {
    number: "01",
    title: "Residential driveways",
    text: "Homeowners who want a cracked or patched driveway repaved, resurfaced or sealed.",
    img: "/assets/images/photos/driveway.jpg",
    alt: "A finished residential driveway running up to a double garage",
  },
  {
    number: "02",
    title: "Commercial parking lots",
    text: "Property managers with alligator cracking, potholes and striping that has worn off.",
    img: "/assets/images/photos/parking-lot.jpg",
    alt: "Overhead view of a freshly striped commercial parking lot",
  },
  {
    number: "03",
    title: "Sealcoating and striping",
    text: "Smaller, faster jobs that fill the gaps between the big pours.",
    img: "/assets/images/photos/road-roller.jpg",
    alt: "A roller compacting a fresh asphalt surface",
  },
];

const Work = () => {
  return (
    <section className="work-section pp-work section-padding">
      <div className="auto-container">
        <div className="row justify-content-center">
          <div className="col-lg-8">
            <div className="sec-title text-center">
              <span className="sub-title justify-content-center">
                <i className="fa-solid fa-circle-dot" aria-hidden="true"></i>
                The work
              </span>
              <h2>What lands in your territory</h2>
            </div>
          </div>
        </div>

        {jobs.map((job, index) => (
          <div
            className="work-single-box pp-work-row wow"
            data-wow-delay={`${index * 150}ms`}
            key={job.number}
          >
            <h3 className="wokr-number">{job.number}</h3>
            <div className="work-content">
              <h2 className="title">{job.title}</h2>
              <p>{job.text}</p>
            </div>
            <div className="work-img">
              <AppImage src={job.img} alt={job.alt} width={1400} height={900} />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Work;
