import { useState } from "react";

function Blog() {
  const [a, b] = useState (false);
    return (
      <div className="text-center">
        <h1>Blog Page</h1>
        <h2 className={`$ {a === false ? }`}>{a === false ? "hello" : "hey"}</h2>
        <button className="btn btn-danger" onClick={() => b(!a)}>Change Here</button>
      </div>
    )
  }
  
  export default Blog;