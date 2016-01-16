export function ajax(endpointURL) {

    return new Promise(

        function(resolve, reject) {

            let request = new XMLHttpRequest();
            let apiKey = "d12778c094f405675974d6628d1c231d43daccc267d6d7bec8eedc894c410b4e";

            request.onload = function(){

                if (request.status == 200 && request.status < 400) {
                    resolve(JSON.parse(request.responseText));

                } else {
                    reject(Error(request.statusText))
                }

            }

            request.open('GET', endpointURL, true);
            request.setRequestHeader('Authorization', 'Bearer ' + apiKey);
            request.send();

    })
}
