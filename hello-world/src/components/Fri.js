import React from "react";

// function Fri() {
//   return (
//     <div>
//       <input type="text" />
//     </div>
//   );
// }
const Fri = React.forwardRef((props, ref) => {
  return (
    <div>
      <input type="text" ref={ref} />
    </div>
  );
});

export default Fri;
