import {initMap} from './lib/maps';
import ajax, * as dribbble from './lib/ajax';


let dribUser         = "https://api.dribbble.com/v1/users/hezy/shots"
let overlay          = document.querySelector('.loading-animation')
let introSection     = document.querySelector('.intro')

dribbble.getShots(dribUser).then(function (shots) {

    dribbble.convertISOToDate(shots)
    dribbble.renderShots(shots)
    setTimeout(function () {
        document.body.classList.add("loaded")
        overlay.classList.add("is-hidden")
        introSection.classList.add("show-meta")
    }, 1000);

}).catch(function (err) {
    console.log(err);
})

initMap()
