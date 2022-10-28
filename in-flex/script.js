import { addStickyStateDetection } from '../addStickyStateDetection.js';

addStickyStateDetection({
  elem: document.getElementsByClassName('header__content')[0],
  guard: document.getElementsByClassName('header__top-guard')[0],
});

addStickyStateDetection({
  elem: document.getElementsByClassName('action-button__content')[0],
  guard: document.getElementsByClassName('action-button__bottom-guard')[0],
});