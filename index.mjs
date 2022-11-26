import { Splide } from "./node_modules/@splidejs/splide/dist/js/splide.esm.js";


var splideInstance = new Splide( '.splide', {
  perPage: 3,
  rewind : true,
} );

splideInstance.mount();

var splideIncorrectDong = new Splide( '.splide', {
  perPage: 5,
  rewind : true,
} );

splideIncorrectDong.mount();