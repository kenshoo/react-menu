import React from "react";
import renderer from "react-test-renderer";
import { mount } from "enzyme";

import WithMenuContext from "../../src/components/with_menu_context";
import Menu from "../../src/components/menu";

const mockCmp = () => <div>TEST</div>;
const MockCmpWithMenuContext = WithMenuContext(mockCmp);

describe("WithMenuContext HOC", () => {
  test("renders wrapped component", () => {
    const cmp = renderer.create(
      <Menu>
        <MockCmpWithMenuContext />
      </Menu>
    );
    expect(cmp).toMatchSnapshot();
  });

  test("adds context to children", () => {
    const cmp = mount(
      <Menu>
        <MockCmpWithMenuContext />
      </Menu>
    );

    expect(cmp.find(mockCmp).props().onSelectElement).toBeTruthy();
  });
});
