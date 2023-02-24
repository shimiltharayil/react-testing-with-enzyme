import App from "../App";
import Enzyme, { shallow } from "enzyme";
import EnzymeAdapter from "@wojtekmaj/enzyme-adapter-react-17";

Enzyme.configure({ adapter: new EnzymeAdapter() });

test("the app compenet render without crashing", () => {
   const wrapper = shallow(<App />)
   console.log(wrapper.debug())
   expect(wrapper.exists()).toBe(true)

});
