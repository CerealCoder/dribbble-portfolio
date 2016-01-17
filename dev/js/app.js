import {initMap} from './lib/maps';
import ajax, * as dribbble from './lib/ajax';


let dribUser = "https://api.dribbble.com/v1/users/hezy/shots"

dribbble.getShots(dribUser).then(function (shots) {

    dribbble.convertISOToDate(shots)
    dribbble.renderShots(shots)

}).catch(function (err) {
    console.log(err);
})

initMap()
