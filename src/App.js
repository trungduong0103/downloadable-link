import React from "react";
import "./styles.css";

export default function App() {
  // https://assets.parcelperform.com/demo-account-assets/Assembly-Instructions.pdf
  // downloadable image
  // React.useEffect(() => {
  //   const link = document.createElement("a");
  //   link.href = "/apple.png";
  //   link.download = "file";
  //   link.click();
  // }, []);

  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <h2>Start editing to see some magic happen!</h2>
      <a href="/src/apple.png" download="png" alt="123" title="123">
        Link..
      </a>

      <div style={{ display: "flex" }} class="container">
        <div style={{ flexShrink: 0 }} class="image">
          <img
            style={{ width: "100%" }}
            src="http://placehold.it/100x100"
            width="100"
            height="100"
          />
        </div>
        <div class="info">
          <p>
            Temporibus luctus inventore! Ornare adipisicing occaecati sunt leo
            optio porta rhoncus venenatis illum, consequat vulputate, ab.
            Tenetur velit porta pariatur.
          </p>
        </div>
      </div>
    </div>
  );
}
