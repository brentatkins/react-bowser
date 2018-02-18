import * as React from "react";
import hoistNonReactStatic from "hoist-non-react-statics";
import * as PropTypes from "prop-types";

const withBowser = Component => {
  class Enhance extends React.Component<{}> {
    static contextTypes = { bowser: PropTypes.object };
    static displayName = `withBowser(${Component.displayName ||
      Component.name})`;

    render() {
      return <Component {...this.props} bowser={this.context.bowser} />;
    }
  }
  hoistNonReactStatic(Enhance, Component);

  return Enhance;
};
