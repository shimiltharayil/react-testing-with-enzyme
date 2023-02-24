import ClickCounter from "../ClickCounter";
import Enzyme, { shallow } from "enzyme";
import EnzymeAdapter from "@wojtekmaj/enzyme-adapter-react-17";

Enzyme.configure({ adapter: new EnzymeAdapter() });

const setup = () => {
  return shallow(<ClickCounter />);
};
const findByTestAttribute = (wrapper, val) => {
  return wrapper.find(`[data-test='${val}']`);
};


describe("Renders without crashing", () => {
  it("Click Counter without error", () => {
    const wrapper = setup();
    const clickCounterComponent = findByTestAttribute(
      wrapper,
      "component-click-counter"
    );

    expect(clickCounterComponent.length).toBe(1);
  });

  it("Button", () => {
    const wrapper = setup();
    const button = findByTestAttribute(wrapper, "increment-button");
    expect(button.length).toBe(1);
  });

  it("Counter display", () => {
    const wrapper = setup();
    const display = findByTestAttribute(wrapper, "counter-display");
    expect(display.length).toBe(1);
  });
});

// test("Counter Should Start from 0 ", () => {

// });
