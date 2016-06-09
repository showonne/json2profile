import Vue from 'vue'

require('../node_modules/reset.css/reset.css')
require('./styles/stylus/app.styl')

import app from './components/app.vue'

new Vue(app)
