/**
 * Created by pratikgarala on 28/3/17.
 */

require('ui.leaflet.webpack');
require('../js/leaflet');
// require('mapbox-gl');
// var mapboxgl = require('mapbox-gl/dist/mapbox-gl.js');


$( document ).ready(function() {

    var d3 = require('d3');
    let jsonData = null;
    let birdDetailData = null;
    const endpoint = "https://bie.ala.org.au/ws/search.json?fq=rk_class:AVES&pageSize=20";

    jsonData = $.getJSON(endpoint, function(data) {
    }).done(function(data){
        var jsonData = data.searchResults.results;
        $.each( jsonData, function( i, item ) {

            if (item.thumbnailUrl == null) {
            } else {

                var sounds = [];
                // url = "http://www.xeno-canto.org/api/2/recordings?query=cnt:%22Australia " + item.commonName.split(",")[0];
                // url = "http://www.xeno-canto.org/api/2/recordings?query=cnt:%22Australia%22%20Olive-backed%20Oriole";
                //
                // $.ajax({
                //     url: url,
                //     dataType: 'json',
                //     success: function(data) {
                //         //stuff
                //         console.log(data);
                //         sounds.push({
                //             "file" : data.file
                //         });
                //     },
                //     beforeSend: function(xhr){
                //         xhr.setRequestHeader('Access-Control-Allow-Origin', '*');
                //     }
                // });

                $("<div>")
                    .attr("class", "card image-item")
                    .append(
                        $("<a>")
                            .attr("href", "#" + item.id)
                            .attr("class", "image-link")
                            .attr("data-toggle", "modal")
                            .append(
                                $("<div>")
                                    .attr("class", "caption")
                                    .append(
                                        $("<div>")
                                            .attr("class", "caption-content")
                                            .append(
                                                $("<i>")
                                                    .attr("class", "fa fa-search-plus fa-3x")
                                            )
                                    )
                            )
                            .append(
                                $("<img>")
                                    .attr("src", item.thumbnailUrl)
                                    .attr("height", '200')
                                    .attr("width", '300')
                            )
                            .append(
                                $("<div>")
                                    .attr("class", "title")
                                    .append(
                                        $("<span>")
                                            .text(item.commonName.split(",")[0])
                                    )
                            )
                    )
                    .appendTo("#birdImages");

                let url = "https://api.gbif.org/v1/species/match?rank=species&name=" + item.scientificName;

                $.getJSON(url, function (data) {
                }).done(function (data) {

                    url = "https://api.gbif.org/v1/species/" + data.speciesKey + "/descriptions"
                    birdDetailData = $.getJSON(url, function () {
                    }).done(function (birdData) {
                        let filteredDetail = birdData.results.filter(birdDetail => birdDetail.language == "eng");



                            // console.log(sound);

                            $("<div>").attr("id", item.id)
                                .attr("class", "image-modal modal fade")
                                .attr("tabindex", "-1")
                                .attr("role", "dialog")
                                .attr("aria-hidden", "true")
                                .append(
                                    $("<div>")
                                        .attr("class", "modal-content")
                                        .append(
                                            $("<div>")
                                                .attr("class", "close-modal")
                                                .attr("data-dismiss", "modal")
                                                .append(
                                                    $("<div>")
                                                        .attr("class", "lr")
                                                        .append(
                                                            $("<div>").attr("class", "rl")
                                                        )
                                                )
                                        )
                                        .append(
                                            $("<div>")
                                                .attr("class", "container")
                                                .append(
                                                    $("<div>")
                                                        .attr("class", "row")
                                                        .append(
                                                            $("<div>")
                                                                .attr("class", "col-lg-12")
                                                                .append(
                                                                    $("<div>")
                                                                        .attr("class", "modal-body")
                                                                        .append(
                                                                            $("<h2>")
                                                                                .text(item.commonName.split(",")[0])
                                                                        )
                                                                )
                                                                .append(
                                                                    $("<div>")
                                                                        .attr("class", "row")
                                                                        .append(
                                                                            $("<div>")
                                                                                .attr("class", "col-lg-4 card image-item")
                                                                                .append(
                                                                                    $("<img>").attr("src", item.thumbnailUrl)
                                                                                        .attr("height", '200')
                                                                                        .attr("width", '300'))
                                                                                .append($("<div>")
                                                                                    .attr("class", "title")
                                                                                    .append($("<span>").text(item.commonName.split(",")[0])))
                                                                            // $("<div>")
                                                                            //     .attr("class","col-lg-4")
                                                                            //     .append(
                                                                            //         $("<img>")
                                                                            //             .attr("src", item.thumbnailUrl)
                                                                            //             .attr("class", "boxshadow")
                                                                            //     )
                                                                        )
                                                                        .append(
                                                                            $("<div>")
                                                                                .attr("class", "col-lg-8 birdDescription")
                                                                                .append(
                                                                                    $("<p>")
                                                                                        .text(filteredDetail[0].description)
                                                                                )
                                                                        )
                                                                )
                                                                .append(
                                                                    $("<br/>")
                                                                )
                                                                .append(
                                                                    $("<div>")
                                                                        .attr("class", "row")
                                                                        .append(
                                                                            $("<div>")
                                                                                .attr("id", "map" + item.id)
                                                                                .attr("class", "col-sm-6 birdMap")
                                                                        )
                                                                        .append(
                                                                            $("<div>")
                                                                                .attr("id", "birdTrend" + item.id)
                                                                                .attr("class", "col-sm-6")
                                                                        )
                                                                )
                                                        )
                                                )
                                        )
                                )
                                .appendTo("#birdDetails");

                            var svg = d3.select("#birdTrend" + item.id).append("svg").attr("width", "300").attr("height", "150"),
                                margin = {top: 20, right: 20, bottom: 30, left: 50},
                                width = +svg.attr("width") - margin.left - margin.right,
                                height = +svg.attr("height") - margin.top - margin.bottom,
                                g = svg.append("g").attr("transform", "translate(" + margin.left + "," + margin.top + ")");

                            $("#birdTrend" + item.id)
                                .append(
                                    $("<div>")
                                        .text("Bird Count trend of " + item.commonName.split(",")[0] + " (Last 5 years)")
                                );

                            var parseTime = d3.timeParse("%d-%b-%y");

                            var x = d3.scaleTime()
                                .rangeRound([0, width]);

                            var y = d3.scaleLinear()
                                .rangeRound([height, 0]);

                            var line = d3.line()
                                .x(function (d) {
                                    return x(d.year);
                                })
                                .y(function (d) {
                                    return y(+d.count);
                                });

                            const currentYear = new Date().getFullYear();
                            var year = currentYear - 7;
                            var trendData = [];
                            while (year <= currentYear - 2) {
                                url = "https://api.gbif.org/v1/occurrence/search?datasetkey=4fa7b334-ce0d-4e88-aaae-2e0c138d049e&country=au&limit=0&speciesKey=" + data.speciesKey + "&year=" + year;

                                const date = new Date(year, 1, 1);
                                $.ajax({
                                    url: url,
                                    dataType: 'json',
                                    async: false,
                                    success: function (data) {
                                        //stuff
                                        trendData.push({
                                            "year": date,
                                            "count": parseInt(data.count)
                                        });
                                    }
                                });

                                year++;
                            }


                            x.domain(d3.extent(trendData, function (d) {
                                return d.year;
                            }));
                            y.domain(d3.extent(trendData, function (d) {
                                return +d.count;
                            }));


                            g.append("g")
                                .attr("transform", "translate(0," + height + ")")
                                // .call(d3.axisBottom(x))
                                .select(".domain")
                                .remove();

                            g.append("g")
                            // .call(d3.axisLeft(y))
                            // .append("text")
                            //   .attr("fill", "darkgreen")
                            //   .attr("transform", "rotate(-90)")
                            //   .attr("y", 6)
                            //   .attr("dy", "0.71em")
                            //   .attr("text-anchor", "end")
                            //   .text("Bird Count");

                            var path = g.append("path")
                                .datum(trendData)
                                .attr("fill", "none")
                                .attr("stroke", "darkgreen")
                                .attr("stroke-linejoin", "round")
                                .attr("stroke-linecap", "round")
                                .attr("stroke-width", 6)
                                .attr("d", line);

                            var totalLength = path.node().getTotalLength();

                            path
                                .attr("stroke-dasharray", totalLength + " " + totalLength)
                                .attr("stroke-dashoffset", totalLength)
                                .transition()
                                .duration(2000)
                                // .ease("linear")
                                .attr("stroke-dashoffset", 0);


                        // mapboxgl.accessToken = 'pk.eyJ1IjoiMDhjcDAwOSIsImEiOiJjajA4cnh0cm8wNzJtMndyN3QwM2JpN2dwIn0.l91VeUJnIf19YunIB0G1yw';
                        //
                        // url = "https://api.gbif.org/v1/map/density/tile?x={x}&y={y}&z={z}&type=TAXON&key=" + data.speciesKey + "&layer=OBS_2000_2010&layer=SP_2000_2010&layer=OTH_2000_2010&layer=OBS_2010_2020&layer=SP_2010_2020&layer=OTH_2010_2020&layer=LIVING&layer=FOSSIL&palette=yellows_reds";
                        // var simple = {
                        //     "version": 8,
                        //     "sources": {
                        //         "osm": {
                        //             "type": "vector",
                        //             "tiles": ["https://vector.mapzen.com/osm/all/{z}/{x}/{y}.mvt?api_key=vector-tiles-LM25tq4", url]
                        //         },
                        //         "birdTile":{
                        //             "type":"vector",
                        //             "tile": [url]
                        //         }
                        //     },
                        //     "layers": [
                        //         {
                        //             "id": "background",
                        //             "type": "background",
                        //             "paint": {
                        //                 "background-color": "#41afa5"
                        //             }
                        //         }, {
                        //             "id": "water",
                        //             "type": "fill",
                        //             "source": "osm",
                        //             "source-layer": "water",
                        //             "filter": ["==", "$type", "Polygon"],
                        //             "paint": {
                        //                 "fill-color": "#3887be"
                        //             }
                        //         }
                        //     ]
                        // };
                        //
                        // var birdMap = new mapboxgl.Map({
                        //         container: 'map'+item.id,
                        //         // style: 'mapbox://styles/mapbox/light-v9',
                        //         style: simple,
                        //         zoom: 2,
                        //         center: [133.7751, -25.2744]
                        //
                        //     });


                            var birdMap = L.map("map" + item.id);
                            L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token=pk.eyJ1IjoibWFwYm94IiwiYSI6ImNpejY4NXVycTA2emYycXBndHRqcmZ3N3gifQ.rJcFIG214AriISLbB6B5aw', {

                                attribution: 'Map data &copy; <a href="https://openstreetmap.org">OpenStreetMap</a> contributors, ' +
                                '<a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, ' +
                                'Imagery © <a href="http://mapbox.com">Mapbox</a>',
                                id: 'mapbox.streets'
                            }).addTo(birdMap);

                            url = "https://api.gbif.org/v1/map/density/tile?x={x}&y={y}&z={z}&type=TAXON&key=" + data.speciesKey + "&layer=OBS_2000_2010&layer=SP_2000_2010&layer=OTH_2000_2010&layer=OBS_2010_2020&layer=SP_2010_2020&layer=OTH_2010_2020&layer=LIVING&layer=FOSSIL&palette=yellows_reds"
                            var positron = L.tileLayer(url, {
                                attribution: ''
                            }).addTo(birdMap);
                            //
                            birdMap.setView([0, 10], 1);
                    })
                });

            }

        });
        return jsonData;
    });

    function findMatches(wordToMatch, birds) {

        return birds.filter(bird => {
            // here we need to figure out if the city or state matches what was searched
            const regex = new RegExp(wordToMatch, 'gi');
            return bird.commonName.match(regex);
        });
    }

    function displayMatches(e) {

        const matchArray = findMatches(this.value, jsonData.responseJSON.searchResults.results);

        $("#birdImages").empty();

        $.each( matchArray, function( i, item ) {
            if(item.thumbnailUrl != null) {
                $("<div>").attr("class","card image-item")
                    .append($("<a>").attr("href","#"+item.id)
                        .attr("class","image-link")
                        .attr("data-toggle","modal")
                        .append($("<div>").attr("class","caption")
                            .append($("<div>").attr("class","caption-content")
                                .append($("<i>").attr("class","fa fa-search-plus fa-3x"))))
                        .append(
                            $( "<img>" ).attr( "src", item.thumbnailUrl)
                                .attr("height", '200')
                                .attr("width", '300'))
                        .append($("<div>")
                            .attr("class","title")
                            .append($("<span>").text(item.commonName.split(",")[0]))))
                    .appendTo("#birdImages");
            }
        });
    }

    const searchInput = document.querySelector('.search');
    const suggestions = document.querySelector('.suggestions');

    searchInput.addEventListener('change', displayMatches);
    searchInput.addEventListener('keyup', displayMatches);
    // $("#searchForm").submit(function() {
    //     search($(".search").get(0));
    //     return false;
    // });

});
