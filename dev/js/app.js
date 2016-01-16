import {initMap} from './lib/maps';
import {ajax} from './lib/ajax';

let dribUser = "https://api.dribbble.com/v1/users/sofi_smith/"

ajax(dribUser).then(function (data) {

    console.log(data);

}).catch(function (err) {
    console.log(err);
})

initMap()
