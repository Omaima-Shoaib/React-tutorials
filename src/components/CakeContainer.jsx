import React from "react";
import { buyCake } from "./redux/cakes/CakeActions";
import { connect } from "react-redux";

function CakeContainer(props) {
  return (
    <div className="flex flex-col  align-middle justify-center">
      <h2>Number of cakes:{props.numOfCakes}</h2>
      <button onClick={props.buyCake}>BUY CAKE</button>
    </div>
  );
}
const mapStateToProps = (state) => {
  return {
    numOfCakes: state.numOfCakes,
  };
};

const mapDispatchToprops = (dispatch) => {
  return {
    //we will pass the dispatch function as a prop to the component
    buyCake: () => dispatch(buyCake()),
  };
};
//  The connection is established through the connect function,
// which handles the communication between the React component and the Redux store.
export default connect(mapStateToProps, mapDispatchToprops)(CakeContainer);
