import { mount } from 'svelte'
import './app.css'
import Overview from './lib/Overview.svelte'

const app = mount(Overview, {
  target: document.getElementById('app'),
})

export default app
