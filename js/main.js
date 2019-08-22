$(document).ready(function() {
    let htmlContent = '';
    fetch('https://api.github.com/orgs/mosdef-hub/repos').then(
        (response) => {
            return response.json()
        })
        .then((reposList) => {
            let count = 0;
            reposList.forEach((repo, index, records) => {
                let description = repo.description;
                let name = repo.name
                name = name.split('_').join(" ");
                if (description != null){
                htmlContent += `
                    <div class="col s12 m3">
                    <div class="card small banner-background">
                        <div class="card-content white-text">
                        <div class="card-title">${name}</div>
                        <p>${description}</p>
                        <a class="btn-floating halfway-fab waves-effect waves-light black" href=${repo.html_url} target="_blank"><i class="fa fa-github"></i></a>
                        </div>
                    </div>
                    </div>`;
                    count++;
                }
                
            });
            console.log(htmlContent);
            let reposDiv = document.getElementById('addGithubRepos');
            reposDiv.innerHTML = htmlContent;
        });
    
});