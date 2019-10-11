import React from "react";
import { connect } from "react-redux";

const SocketExample = ({ counter, countUp }) => (
  <div className="row container-small pad-20-t pad-20-b is-grey pad-10-l">
    <div className="col-xs-12">
      <h1 className="is-hero-sub-menu margin-0">Redux Example</h1>
    </div>
    <div className="col-xs-12">
      <h4>
        Find this component in{" "}
        <code className="is-orange">src/components/ReduxExample.js</code>
      </h4>
      <h4>This is our count stored in redux:</h4>
      <code className="pad-3 is-grey-bg is-white border-radius">{counter}</code>
      <h4>This is our dispatch action:</h4>
      <code className="pad-3 is-grey-bg is-white border-radius">
        {`countUp: () => dispatch({ type: "count" })`}
      </code>
      <h4>You can trigger it with this button:</h4>
      <button className="btn" onClick={() => countUp()}>
        Dispatch the action
      </button>
    </div>
  </div>
);

const mapStateToProps = ({ counter }) => {
  return { counter };
};

const mapDispatchToProps = dispatch => {
  return {
    countUp: () => dispatch({ type: "count" })
  };
};

const ConnectedSocketExample = connect(
  mapStateToProps,
  mapDispatchToProps
)(SocketExample);

export default ConnectedSocketExample;
