import {initMap} from './lib/maps';
import ajax, * as dribbble from './lib/ajax';


let dribUser = "https://api.dribbble.com/v1/users/hezy/shots"
let overlay  = document.querySelector('.loading-animation')

dribbble.getShots(dribUser).then(function (shots) {

    dribbble.convertISOToDate(shots)
    dribbble.renderShots(shots)
    setTimeout(function () {
        overlay.classList.add("is-hidden")
    }, 1000);


}).catch(function (err) {
    console.log(err);
})

initMap()
