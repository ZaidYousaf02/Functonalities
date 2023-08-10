import React from "react";
import TeamCard from "../subComponents/TeamCard";
import Zaid from "../Assets/Images/Zaid.png";
import Usama from "../Assets/Images/Moiz.png";
import Moiz from "../Assets/Images/usama.png";
import Haleema from "../Assets/Images/haleema.png";

function TeamMembers() {
  return (
    <>
      <div className="team">
        <div className="team-head">
          <h4>Team Member</h4>
          <h1>Meet the MedSight Team</h1>
        </div>
        <div className="team-members">
          <TeamCard
            img={Zaid}
            name="Muhammad Zaid"
            text="Front-End Developer"
            para="  A front-end developer creates websites and applications using web
          languages such as HTML, CSS, and JavaScript that allow users to access
          and interact with the site or app."
          />
          <TeamCard
            img={Moiz}
            name="Abdul Moiz"
            text="Back-End Developer"
            para="Back-end developers are the experts who build and maintain the mechanisms that process data and perform actions on websites"
          />
          <TeamCard
            img={Usama}
            name="Usama Javed"
            text="UI/UX Designer"
            para="A UI/UX developer is a specialized software developer who focuses on creating user interfaces and user experiences for a variety of products, such as websites and mobile apps"
          />
          <TeamCard
            img={Haleema}
            name="Haleema Waseem"
            text="Content Writer"
            para="Content writing skills are the skills that enable you to write clear, consistent and relevant articles to deliver a captivating experience for the company's target audience."
          />
        </div>
      </div>
    </>
  );
}

export default TeamMembers;
