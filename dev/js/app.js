import {initMap} from './lib/maps';
import {ajax} from './lib/ajax';

let dribUser = "https://api.dribbble.com/v1/users/hezy/"

ajax(dribUser).then(function (userInfo) {

    let name = userInfo.name
    let bio = userInfo.bio
    let likes = userInfo.likes_count

    console.log(name + " BIO: " + bio + " LIKES " + likes);

}).catch(function (err) {
    console.log(err);
})

initMap()
