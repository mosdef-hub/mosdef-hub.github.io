$(document).ready(function() {
    var viewer = $3Dmol.createViewer(
        '3dmolViewer', //id of div to create canvas in
        {
        defaultcolors: $3Dmol.elementColors.rasmol,
        // backgroundColor: 'black',
        id: 'vizCanvas',
        nomouse: true,
        doAssembly: true
        }
    );
    $('#vizCanvas').css({height: '420px'});
    $('#vizCanvas').css({position: 'relative'});

    $.get('js/5ire.pdb', function(data) {
        console.log('here');
        viewer.addModel(data,'pdb');
        viewer.setStyle({cartoon:{color:'spectrum'}});
                
  
        viewer.render();        
      });


    viewer.render();
});