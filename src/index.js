import React from 'react'
import { render } from 'react-dom'

import App from './App'
import countries from './data/countries.json'

render(<App data={countries} />, document.getElementById('app'))
