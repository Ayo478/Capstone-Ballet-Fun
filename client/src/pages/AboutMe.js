import "./AboutMe.scss";
import photo from "../assets/Pic of me.jpg";

export default function AboutMe() {
  return (
    <div className="about">
      <img className="about__photo" src={photo} alt="pic of me" />
      <p className="about__text">
        I studied ballet and the Graham technique of modern dance at the High
        School of Performing Arts (the Fame school) in New York city. Upon
        graduation, I danced with Dance Theatre of Harlem and Alvin Ailey. I
        have also taught ballet, jazz, tap and modern to children and adults.{" "}
      </p>
      {/* <img className="about__photo" src={photo} alt="pic of me" /> */}
    </div>
  );
}
