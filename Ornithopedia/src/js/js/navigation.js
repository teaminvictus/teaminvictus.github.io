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
            case "mapOfBirdsLink":
                $('#landingPage').hide();
                $('#mapOfBirds').show();
                $('#birdFinder').hide();
                $('#birdIdentifier').hide();
                break;
            case "birdFinderLink":
                $('#landingPage').hide();
                $('#mapOfBirds').hide();
                $('#birdFinder').show();
                $('#birdIdentifier').hide();
                break;
            case "birdIdentifierLink":
                $('#landingPage').hide();
                $('#mapOfBirds').hide();
                $('#birdFinder').hide();
                $('#birdIdentifier').show();
                break;
            case "contactLink":
                break;
            default:
                $('#landingPage').show();
                $('#mapOfBirds').hide();
                $('#birdFinder').hide();
                $('#birdIdentifier').hide();
        };
    };

    $("#homeLink").click(navigate);
    $("#mapOfBirdsLink").click(navigate);
    $("#birdFinderLink").click(navigate);
    $("#birdIdentifierLink").click(navigate);
})

