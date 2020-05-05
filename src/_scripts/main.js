// Main javascript entry point
// Should handle bootstrapping/starting application

'use strict';

import 'core-js';
import 'regenerator-runtime/runtime';
import $ from 'jquery';
import Header from '../_modules/header/header';

$(() => {
  new Header(); // Activate Link modules logic
  console.log('Welcome to Yeogurt!');
});
