import * as React from "react";
import * as bowser from "bowser";
import * as PropTypes from "prop-types";

class BowserProvider extends React.Component<{}> {
  static childContextTypes = {
    bowser: PropTypes.object
  };

  getChildContext() {
    return { bowser: bowser };
  }

  render() {
    return React.Children.only(this.props.children);
  }
}

export default BowserProvider;
