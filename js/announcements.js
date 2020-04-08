$(document).ready(function() {
    let mbhtmlContent = `<div class="col s12 m8 offset-m2"> <ul class="collection">`;

    fetch('https://api.github.com/repos/mosdef-hub/mbuild/releases').then(
        (response) => {
            return response.json()
        })
        .then((releases) => {
            releases.forEach((release, index, records) => {
                mbhtmlContent += `<li class="collection-item">Release:
                                    <a href=" ${release.html_url}" target="_blank"> ${release.name}</a>
                                    Released On: ${new Date(release.published_at).toUTCString()}
                                </li>`;


            });
            mbhtmlContent += `</ul></div>`;

            let mbreleasesDiv = document.getElementById('mbreleasesDiv');
            if (mbreleasesDiv !== null){
                mbreleasesDiv.innerHTML = mbhtmlContent;
            }
        });

    let foyerhtmlContent = `<div class="col s12 m8 offset-m2"> <ul class="collection">`;

    fetch('https://api.github.com/repos/mosdef-hub/foyer/releases').then(
        (response) => {
            return response.json()
        })
        .then((releases) => {
            releases.forEach((release, index, records) => {
                foyerhtmlContent += `<li class="collection-item">Release:
                                    <a href=" ${release.html_url}" target="_blank"> ${release.name}</a>
                                    Released On: ${new Date(release.published_at).toUTCString()}
                                </li>`;
                // console.log(release.name);
                // console.log(mbhtmlContent);
                console.log(release);

            });
            foyerhtmlContent += `</ul></div>`;
            // console.log(mbhtmlContent);

            let freleasesDiv = document.getElementById('freleasesDiv');
            if (freleasesDiv !== null){
                freleasesDiv.innerHTML = foyerhtmlContent;
            }
        });

    let gmsohtmlContent = `<div class="col s12 m8 offset-m2"> <ul class="collection">`;

    fetch('https://api.github.com/repos/mosdef-hub/gmso/releases').then(
        (response) => {
            return response.json()
        })
        .then((releases) => {
            releases.forEach((release, index, records) => {
                gmsohtmlContent += `<li class="collection-item">Release:
                                    <a href=" ${release.html_url}" target="_blank"> ${release.name}</a>
                                    Released On: ${new Date(release.published_at).toUTCString()}
                                </li>`;
                // console.log(release.name);
                // console.log(gmsohtmlContent);
                console.log(release);

            });
            gmsohtmlContent += `</ul></div>`;
            // console.log(gmsohtmlContent);

            let gmsoreleasesDiv = document.getElementById('gmsoreleasesDiv');
            if (gmsoreleasesDiv !== null){
                gmsoreleasesDiv.innerHTML = gmsohtmlContent;
            }
        });

});
