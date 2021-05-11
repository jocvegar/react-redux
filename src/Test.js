// import React from "react";

// class Test extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       showButton: false,
//     };
//     this.handleClick = this.handleClick.bind(this);
//   }

//   handleClick(e) {
//     e.preventDefault();
//     this.setState({
//       showButton: !this.state.showButton,
//     });
//   }

//   render() {
//     return (
//       <React.Fragment>
//         <a href="#" onClick={this.handleClick}>
//           Want to buy a new car?
//         </a>
//         {this.state.showButton == true && <p>Call +11 22 33 44 now!</p>}
//       </React.Fragment>
//     );
//   }
// }
// export default Test;
import React, { useState, useEffect } from "react";

export default function Test() {
  const [show, setShow] = useState(false);
  useEffect(() => console.log("Hola!"));
  return (
    <>
      <button onClick={() => setShow(!show)}>Want to buy a new car?</button>
      {show && <p>Call +11 22 33 44 now!</p>}
    </>
  );
}
