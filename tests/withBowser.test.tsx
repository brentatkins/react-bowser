import * as React from "react";
import withBowser from "../src/withBowser";
import BowserProvider from "../src/components/BowserProvider";
import { shallow } from "enzyme";

const TestComponent = withBowser(props => <div>{props.bowser.osname}</div>);

describe("BowserProvider", () => {
  it("renders component", () => {
    const testRender = shallow(
      <BowserProvider>
        <TestComponent />
      </BowserProvider>
    );
    expect(testRender).toBeDefined();
    expect(testRender).toHaveLength(1);
  });
});
