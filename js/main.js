$(document).ready(function() {

     // get started button scrolling
     (function() {
        var btn = document.getElementById('get-started-btn');
        var tgtSection = document.getElementById('ecoSystem');
        if(btn != null){
        btn.onclick = function() {
            // console.log('clicked', $('#ecoSystem').offset().top);
            $("body, html").animate({
                'scrollTop':   $('#ecoSystem').offset().top
            }, 500); 
        };
        }
    })();

    $('.sidenav').sidenav({onOpenStart: () => {
                    $('#main').toggleClass('push-left');
                    $('#brandLogo').toggleClass('hidden');
                },
                onCloseStart: () => {
                    $('#main').toggleClass('push-left');   
                    $('#brandLogo').toggleClass('hidden');
                }    
    }); // Initialize the sidenav

    $('#close-sidenav').click(function() {
        $('.sidenav').sidenav('close'); // Close the sidenav
        
    });


    $('.carousel.carousel-slider').carousel({
        fullWidth: true,
        indicators: true
    });

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
                if (description != null && name != 'msibi'){
                if (name == 'mbuild' || name === 'foyer'){
                    let docsUrl = "";
                    if (name==='mbuild'){
                        docsUrl = "http://mosdef-hub.github.io/mbuild/";
                    }
                    else{
                        docsUrl = "http://mosdef-hub.github.io/foyer/";
                    }
                    htmlContent += `
                        <div class="col s12 l4">
                        <div class="card small banner-background">
                        <div class="card-content white-text">
                        <div class="card-title">${name}</div>
                        <p>${description}</p>
                        <a  style="margin-right:30%" class="btn-floating halfway-fab waves-effect waves-light black"><i class="material-icons red-text">star</i></a>
                        <a  style="margin-right:15%" class="btn-floating halfway-fab waves-effect waves-light black" href=${docsUrl} target="_blank"><i class="material-icons">more</i></a>
                        <a class="btn-floating halfway-fab waves-effect waves-light black" href=${repo.html_url} target="_blank"><i class="fa fa-github"></i></a>
                        
                        </div>
                        </div>
                     </div>`;
                        count++;
                } else{
                    htmlContent += `
                        <div class="col s12 l4">
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
                }
                
                
            });
            // No longer necessary, decided to hard code
            // console.log(htmlContent);
            // let reposDiv = document.getElementById('ecoSystem');
            // if (reposDiv !== null){
            //     reposDiv.innerHTML = htmlContent;
            // }
        });
});