/**
 * Created by pratikgarala on 21/3/17.
 */
$(document).ready(function() {
    $(document).delegate('.open', 'click', function(event){
        $(this).addClass('oppenned');
        event.stopPropagation();
    });
    $(document).delegate('body', 'click', function(event) {
        $('.open').removeClass('oppenned');
    });
    $(document).delegate('.cls', 'click', function(event){
        $('.open').removeClass('oppenned');
        event.stopPropagation();
    });

    const navigate = function (e) {
        switch (e.target.id){
            case "findBirdsLink":
                $('#landingPage').hide();
                $('#findBirds').show();
                break;
            case "identifyBirdsLink":
                break;
            case "projectsLink":
                break;
            case "contactLink":
                break;
            default:
                $('#landingPage').show();
                $('#findBirds').hide();
        };
    };

    $("#homeLink").click(navigate);
    $("#findBirdsLink").click(navigate);
    $("#identifyBirdsLink").click(navigate);
    $("#projectsLink").click(navigate);
    $("#contactLink").click(navigate);
})

