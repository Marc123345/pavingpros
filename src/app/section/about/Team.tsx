import AppImage from "../../components/elements/AppImage";
import React from "react";
import { team } from "../../../lib/site";

const Team = () => {
  if (team.length === 0) return null;

  return (
    <section className="team-section-pp section-padding">
      <div className="auto-container">
        <div className="row justify-content-center">
          <div className="col-lg-8">
            <div className="sec-title text-center">
              <span className="sub-title justify-content-center">
                <AppImage src="/assets/images/main-home/sub-title-shape.svg" alt="" width={16} height={16} />
                The crew
              </span>
              <h2>Who turns up</h2>
            </div>
          </div>
        </div>
        <div className="row g-4 justify-content-center">
          {team.map((member, index) => (
            <div className="col-lg-5 col-md-6 wow fadeInUp" data-wow-delay={`${index * 200}ms`} key={index}>
              <div className="team-card">
                <div className="team-photo" aria-hidden="true">
                  <span>{member.name.replace(/[^A-Za-z ]/g, "").trim().slice(0, 2).toUpperCase() || "PP"}</span>
                </div>
                <div className="team-info">
                  <h4 className="title">{member.name}</h4>
                  <span className="role">{member.title}</span>
                  <p>{member.bio}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;
