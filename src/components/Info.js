

export default function About() {
  return (
    <div className="info">
      <div className="general-section">
        <h1>Océane Feltrin</h1>
        <h2>Web developer</h2>
        <div className="info-flex">
          <button href="#" className="mail ctr-flex">
            <i class="fa-solid fa-envelope"></i>
            <h4>Mail</h4>
          </button>
          <button href="#" className="linkedin ctr-flex">
            <i class="fa-brands fa-linkedin"></i>
            <h4>Linkedin</h4>
          </button>
        </div>
      </div>
      <div className="about-section">
        <h3>Skills</h3>
        <ul className="list-flex">
          <li>#React</li>
          <li>#Html</li>
          <li>#Css/ Scss</li>
          <li>#JavaScript</li>
          <li>#Ruby/ Ruby on Rails</li>
        </ul>
      </div>
    </div>
  )
}
