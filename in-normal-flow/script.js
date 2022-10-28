import { addStickyStateDetection } from '../addStickyStateDetection.js';

addStickyStateDetection({
  elem: document.getElementsByClassName('header')[0],
  guard: document.getElementsByClassName('top-guard')[0],
});

addStickyStateDetection({
  elem: document.getElementsByClassName('action-button')[0],
  guard: document.getElementsByClassName('bottom-guard')[0],
});