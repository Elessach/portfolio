import {h, app} from "hyperapp"
import './style.css'
import './main.js'
import Home from "./Home"

const state = {
	header: {
		logo: "img/white-logo.png"
	}
}
const actions = {}
const view = state => Home(state)

app(state, actions, view, document.body)