export function getShots(endpointURL) {

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

export function renderShots(shots) {

    // Compile our template
    let shotsTemplate = document.getElementById('shots-template')
    let shotsSection  = document.querySelector('.shots')
    let template = Handlebars.compile(shotsTemplate.innerHTML)

    shotsSection.innerHTML = template(shots)

}

export function convertISOToDate(shots) {

    shots.forEach(function(shot) {

        let isoDate          = shot.created_at
        let shotCreationDate = new Date(isoDate)
        let readableDate     = shotCreationDate.toDateString()

        shot["created_at"]   = readableDate

    })
}
