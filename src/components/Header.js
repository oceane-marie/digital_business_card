import profilePic from "../images/Océane.png"

export default function header() {
  return (
    <div className="header">
      <img src= { profilePic } alt="" className="profile-pic"/>
    </div>
  )
}
