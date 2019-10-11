let handleClick = (_event) => Js.log("clicked!");

[@react.component]
let make = (~message) => {
  <div onClick={handleClick}>
    { message |> ReasonReact.string }
  </div>;
};

let default = make;
