document.addEventListener('DOMContentLoaded', async function() {
    const BASE_URL = repoName => `https://api.github.com/repos/mosdef-hub/${repoName}/releases`;
    const fetchReleasesHTML = async function(repoName){
        const URL = BASE_URL(repoName);
        let htmlContent = '<div class="col s12 m8 offset-m2"> <ul class="collection">';
        try {
            const releases = await (await fetch(URL)).json();
            releases.forEach((release) => {
                htmlContent += `<li class="collection-item">Release:
                                    <a href=" ${release.html_url}" target="_blank"> ${release.name}</a>
                                    Released On: ${new Date(release.published_at).toUTCString()}
                                </li>`;
            });
            htmlContent += '</ul></div>';
            return htmlContent;
        } catch (e) {
            console.error(e);
        }
    };

    const populateContainer = async function (repoName, targetDivID){
        const htmlContent = await fetchReleasesHTML(repoName);
        const targetDiv = document.getElementById(targetDivID);
        if(targetDiv){
            targetDiv.innerHTML = htmlContent;
        }
    };

    await populateContainer('mbuild', 'mbReleasesDiv');
    await populateContainer('foyer', 'foyerReleasesDiv');
    await populateContainer('gmso', 'gmsoReleasesDiv')

});
