/**
 * Created by pratikgarala on 21/3/17.
 */


$( document ).ready(function() {

    var d3 = require('d3');
    var topojson = require("topojson");

    var width = $(window).width() * 0.7,
        height = ($(window).width() * 0.7) * 0.66;

    var projection = d3.geo.conicConformal()
        .rotate([-132, 0])
        .center([0, -27])
        .parallels([-18, -36])
        .scale(Math.min(height * 2.2, width * 1.1))
        .translate([width / 2, height / 2])
        .precision(0.1);

    var path = d3.geo.path()
        .projection(projection);

    var svg = d3.select("#map").append("svg")
        .attr("width", width)
        .attr("height", height);

    d3.json("australia.json", function(error, australia) {
        if (error) throw error;


        svg.append("g")
            .attr("class", "states")
            .selectAll("path")
            .data(topojson.feature(australia, australia.objects.states).features)
            .enter().append("path")
            .attr("d", path);
    });

    d3.select(self.frameElement).style("height", height + "px");
});