import { h } from "hyperapp"
import Header from "./Header"
import Menu from "./Menu"
import Works from "./Works"

const Home = (state) => h('div', {class:"page"}, [Menu(), Header(state.header), Works()])

export default Home