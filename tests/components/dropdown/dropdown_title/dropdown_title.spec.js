import React from "react";
import renderer from "react-test-renderer";

import DropdownTitle from "../../../../src/components/dropdown/dropdown_title/dropdown_title";

describe("DropdownTitle component", () => {
  test("default snapshot", () => {
    const cmp = renderer.create(<DropdownTitle />);
    expect(cmp).toMatchSnapshot();
  });

  test("renders children", () => {
    const cmp = renderer.create(<DropdownTitle>TEST</DropdownTitle>);
    expect(cmp).toMatchSnapshot();
  });

  test("className prop", () => {
    const cmp = renderer.create(
      <DropdownTitle className="TEST">TEST</DropdownTitle>
    );
    expect(cmp).toMatchSnapshot();
  });

  test("arrow direction - left", () => {
    const cmp = renderer.create(
      <DropdownTitle className="TEST" direction="left">
        TEST
      </DropdownTitle>
    );
    expect(cmp).toMatchSnapshot();
  });

  test("arrow direction - bottom", () => {
    const cmp = renderer.create(
      <DropdownTitle className="TEST" direction="bottom">
        TEST
      </DropdownTitle>
    );
    expect(cmp).toMatchSnapshot();
  });

  test("arrow direction - right", () => {
    const cmp = renderer.create(
      <DropdownTitle className="TEST" direction="right">
        TEST
      </DropdownTitle>
    );
    expect(cmp).toMatchSnapshot();
  });

  test("arrow direction - unknown", () => {
    const cmp = renderer.create(
      <DropdownTitle className="TEST" direction="TEST">
        TEST
      </DropdownTitle>
    );
    expect(cmp).toMatchSnapshot();
  });

  test("disabled prop", () => {
    const cmp = renderer.create(<DropdownTitle isDisabled>TEST</DropdownTitle>);
    expect(cmp).toMatchSnapshot();
  });

  test("disabledClassName prop", () => {
    const cmp = renderer.create(
      <DropdownTitle isDisabled disabledClassName="TEST">
        TEST
      </DropdownTitle>
    );
    expect(cmp).toMatchSnapshot();
  });
});
