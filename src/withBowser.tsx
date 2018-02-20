import * as React from "react";
import hoistNonReactStatic = require("hoist-non-react-statics");
import * as PropTypes from "prop-types";
import { IBowser } from "bowser";

export interface WithBowser {
  bowser: IBowser;
}

const withBowser = <P extends WithBowser>(
  Component: React.ComponentClass<P> | React.StatelessComponent<P>
) => {
  const result = class Enhance extends React.Component<{}> {
    static contextTypes = { bowser: PropTypes.object };
    static displayName = `withBowser(${Component.displayName})`;

    render() {
      return <Component {...this.props} bowser={this.context.bowser} />;
    }
  };
  hoistNonReactStatic(result, Component);

  return result;
};

export default withBowser;
