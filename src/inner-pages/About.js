import { useState } from "react";

function About() {
  var [a, b] = useState(69);
  return(
    <div className="text-center">
      <h1>About Page</h1>
      <h2>{a}</h2>
      <button onClick={() => b(a+20)} className="btn btn-danger">Change it</button>
    </div>
  )
}

export default About;