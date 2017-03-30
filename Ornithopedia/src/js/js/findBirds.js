/**
 * Created by pratikgarala on 28/3/17.
 */

$( document ).ready(function() {

    var jsonData = null;

    const endpoint = 'https://api.gbif.org/v1/occurrence/search?datasetkey=4fa7b334-ce0d-4e88-aaae-2e0c138d049e&' +
        'country=au&victoria&q=melbourne&limit=5';
    // const endpoint = "https://api.gbif.org/v1/species/search?rank=species&q=Aves"
    // const endpoint = "https://bie.ala.org.au/ws/search.json?fq=rk_class:AVES&facets=imageAvailable";

    jsonData = $.getJSON(endpoint, function(data) {
    }).done(function(data){
        var jsonData = data.results;
        $.each( data.results, function( i, item ) {
            const url = 'http://api.gbif.org/v1/species/' + item.speciesKey +'/media';
            $.getJSON(url, function(media){
            }).done(function(media){
                // $.each( media.results, function( i, item ) {
                $("<div>").attr("class","card")
                    .append(
                        $( "<img>" ).attr( "src", media.results[0].identifier)
                            .attr("height", '200')
                            .attr("width", '300'))
                    .append($("<div>")
                        .attr("class","title")
                        .append($("<span>").text(item.species)))
                    .appendTo("#birdImages");
                // });
            })
        });
        return jsonData;
    });


    function findMatches(wordToMatch, birds) {
        return birds.filter(bird => {
            // here we need to figure out if the city or state matches what was searched
            const regex = new RegExp(wordToMatch, 'gi');
            return bird.scientificName.match(regex) || bird.species.match(regex);
        });
    }

    function displayMatches(e) {
        // console.log(this.value);
        const matchArray = findMatches(this.value, jsonData.responseJSON.results);
        console.log(matchArray);

        $("#birdImages").empty();

        $.each( matchArray, function( i, item ) {
            // const nameUrl = 'http://api.gbif.org/v1/species/' + item.speciesKey +'/name';
            // let nameData = $.getJSON(nameUrl, function(name){});

            const mediaUrl = 'http://api.gbif.org/v1/species/' + item.speciesKey +'/media';
            $.getJSON(mediaUrl, function(media){
            }).done(function(media){
                // $.each( media.results, function( i, item ) {
                $("<div>").attr("class","card")
                    .append(
                        $( "<img>" ).attr( "src", media.results[0].identifier)
                            .attr("height", '200')
                            .attr("width", '300'))
                    .append($("<div>")
                        .attr("class","title")
                        .append($("<span>").text(item.species)))
                    .appendTo("#birdImages");
                // });
            })
        });
    }



    const searchInput = document.querySelector('.search');
    const suggestions = document.querySelector('.suggestions');

    searchInput.addEventListener('change', displayMatches);
    searchInput.addEventListener('keyup', displayMatches);

});
