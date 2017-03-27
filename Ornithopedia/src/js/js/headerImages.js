/**
 * Created by pratikgarala on 24/3/17.
 */

import bird1 from '../../images/Birds/1.jpg';
import bird2 from '../../images/Birds/2.jpg';
import bird3 from '../../images/Birds/3.jpg';
import bird4 from '../../images/Birds/4.jpg';
import bird5 from '../../images/Birds/5.jpg';
import bird6 from '../../images/Birds/6.jpg';
import bird7 from '../../images/Birds/7.jpg';


$( document ).ready(function() {
    var screenSize = function () {
        if ($(window).width() > 1024) {
            $("<img>").attr("class", "boxshadow")
                .attr('src', bird1)
                .attr('id', 'birdimg1')
                .attr('height', 200)
                .attr('width', 300)
                .appendTo("#images");
            $("<img>").attr("class", "boxshadow")
                .attr('src', bird2)
                .attr('id', 'birdimg2')
                .attr('height', 200)
                .attr('width', 300)
                .appendTo("#images");
            $("<img>").attr("class", "boxshadow")
                .attr('src', bird3)
                .attr('id', 'birdimg3')
                .attr('height', 200)
                .attr('width', 300)
                .appendTo("#images");
            $("<img>").attr("class", "boxshadow")
                .attr('src', bird4)
                .attr('id', 'birdimg4')
                .attr('height', 200)
                .attr('width', 300)
                .appendTo("#images");
            $("<img>").attr("class", "boxshadow")
                .attr('src', bird5)
                .attr('id', 'birdimg5')
                .attr('height', 200)
                .attr('width', 300)
                .appendTo("#images");
            $("<img>").attr("class", "boxshadow")
                .attr('src', bird6)
                .attr('id', 'birdimg6')
                .attr('height', 200)
                .attr('width', 300)
                .appendTo("#images");
            $("<img>").attr("class", "boxshadow")
                .attr('src', bird7)
                .attr('id', 'birdimg7')
                .attr('height', 200)
                .attr('width', 300)
                .appendTo("#images");
        }else if($(window).width() <= 1024 && $(window).width() > 768){
            $("<img>").attr("class", "boxshadow")
                .attr('src', bird1)
                .attr('id', 'birdimg1')
                .attr('height', 160)
                .attr('width', 240)
                .appendTo("#images");
            $("<img>").attr("class", "boxshadow")
                .attr('src', bird2)
                .attr('id', 'birdimg2')
                .attr('height', 160)
                .attr('width', 240)
                .appendTo("#images");
            $("<img>").attr("class", "boxshadow")
                .attr('src', bird3)
                .attr('id', 'birdimg3')
                .attr('height', 160)
                .attr('width', 240)
                .appendTo("#images");
            $("<img>").attr("class", "boxshadow")
                .attr('src', bird4)
                .attr('id', 'birdimg4')
                .attr('height', 160)
                .attr('width', 240)
                .appendTo("#images");
            $("<img>").attr("class", "boxshadow")
                .attr('src', bird5)
                .attr('id', 'birdimg5')
                .attr('height', 160)
                .attr('width', 240)
                .appendTo("#images");
            $("<img>").attr("class", "boxshadow")
                .attr('src', bird6)
                .attr('id', 'birdimg6')
                .attr('height', 160)
                .attr('width', 240)
                .appendTo("#images");
            $("<img>").attr("class", "boxshadow")
                .attr('src', bird7)
                .attr('id', 'birdimg7')
                .attr('height', 160)
                .attr('width', 240)
                .appendTo("#images");
        }else if($(window).width() <= 768 && $(window).width() > 414){
            $("<img>").attr("class", "boxshadow")
                .attr('src', bird1)
                .attr('id', 'birdimg1')
                .attr('height', 120)
                .attr('width', 180)
                .appendTo("#images");
            $("<img>").attr("class", "boxshadow")
                .attr('src', bird2)
                .attr('id', 'birdimg2')
                .attr('height', 120)
                .attr('width', 180)
                .appendTo("#images");
            $("<img>").attr("class", "boxshadow")
                .attr('src', bird3)
                .attr('id', 'birdimg3')
                .attr('height', 120)
                .attr('width', 180)
                .appendTo("#images");
            $("<img>").attr("class", "boxshadow")
                .attr('src', bird4)
                .attr('id', 'birdimg4')
                .attr('height', 120)
                .attr('width', 180)
                .appendTo("#images");
            $("<img>").attr("class", "boxshadow")
                .attr('src', bird5)
                .attr('id', 'birdimg5')
                .attr('height', 120)
                .attr('width', 180)
                .appendTo("#images");
            $("<img>").attr("class", "boxshadow")
                .attr('src', bird6)
                .attr('id', 'birdimg6')
                .attr('height', 120)
                .attr('width', 180)
                .appendTo("#images");
            $("<img>").attr("class", "boxshadow")
                .attr('src', bird7)
                .attr('id', 'birdimg7')
                .attr('height', 120)
                .attr('width', 180)
                .appendTo("#images");
        }else if($(window).width() <= 414){
            $("<img>").attr("class", "boxshadow")
                .attr('src', bird1)
                .attr('id', 'birdimg1')
                .attr('height', 64)
                .attr('width', 96)
                .appendTo("#images");
            $("<img>").attr("class", "boxshadow")
                .attr('src', bird2)
                .attr('id', 'birdimg2')
                .attr('height', 64)
                .attr('width', 96)
                .appendTo("#images");
            $("<img>").attr("class", "boxshadow")
                .attr('src', bird3)
                .attr('id', 'birdimg3')
                .attr('height', 64)
                .attr('width', 96)
                .appendTo("#images");
            $("<img>").attr("class", "boxshadow")
                .attr('src', bird4)
                .attr('id', 'birdimg4')
                .attr('height', 64)
                .attr('width', 96)
                .appendTo("#images");
            $("<img>").attr("class", "boxshadow")
                .attr('src', bird5)
                .attr('id', 'birdimg5')
                .attr('height', 64)
                .attr('width', 96)
                .appendTo("#images");
            $("<img>").attr("class", "boxshadow")
                .attr('src', bird6)
                .attr('id', 'birdimg6')
                .attr('height', 64)
                .attr('width', 96)
                .appendTo("#images");
            $("<img>").attr("class", "boxshadow")
                .attr('src', bird7)
                .attr('id', 'birdimg7')
                .attr('height', 64)
                .attr('width', 96)
                .appendTo("#images");
        }
    }

    screenSize();
    $(window).on('resize',function () {
        location.reload();
    });

    // images = $('document').querySelectorAll('.boxshadow');
    // images.each(image => image.on('mouseover',function () {
    //         image.css('z-index',1111);
    // }));
    // images.each(image => image.on('mouseout',function () {
    //
    // }));


});