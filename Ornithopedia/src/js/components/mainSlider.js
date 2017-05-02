/**
 * Created by pratikgarala on 13/4/17.
 */

import React from 'react';

// require("../../css/mainSlider.css");

const MainSlider = () => (
    <div className="slider-container">
        {/*<!-- Controls -->*/}
        {/*<div className="slider-control left inactive"></div>*/}
        {/*<div className="slider-control right"></div>*/}
        {/*<ul className="slider-pagi"/>*/}
        {/*<!--Slider -->*/}
        <div className="slider">
            {/*<!-- Slide 1 -->*/}
            <div className="slide slide-0 active">
                <div className="slide__bg"></div>
                <div className="slide__content">
                    <svg className="slide__overlay" viewBox="0 0 720 405" preserveAspectRatio="xMaxYMax slice">
                        <path className="slide__overlay-path" d="M0,0 150,0 500,405 0,405" />
                    </svg>
                    <div className="slide__text">
                        <h1 className="slide__text-heading">Welcome To Ornithopedia</h1>
                        <div className="hidden-sm hidden-xs">
                            <p className="lead">Discover extraordinary array of australian bird life.</p>
                            <div className="page-scroll">
                                <a href="#features" className="btn btn-default">Discover More</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/*<!-- Slide 2 -->*/}
            {/*<div className="slide slide-1">*/}
                {/*<div className="slide__bg"></div>*/}
                {/*<div className="slide__content">*/}
                    {/*<svg className="slide__overlay" viewBox="0 0 720 405" preserveAspectRatio="xMaxYMax slice">*/}
                        {/*<path className="slide__overlay-path" d="M0,0 150,0 500,405 0,405" />*/}
                    {/*</svg>*/}
                    {/*<div className="slide__text">*/}
                        {/*<h1 className="slide__text-heading">Create bird friendly environment</h1>*/}
                        {/*<div className="hidden-sm hidden-xs">*/}
                            {/*<p className="lead">Restore the balance of bird life in urban area by creating bird friendly environment.</p>*/}
                            {/*<div className="page-scroll">*/}
                                {/*<a href="#features" className="btn btn-default">Discover More</a>*/}
                            {/*</div>*/}
                        {/*</div>*/}
                    {/*</div>*/}
                {/*</div>*/}
            {/*</div>*/}
            {/*<!-- Slide 3-->*/}
            {/*<div className="slide slide-2">*/}
                {/*<div className="slide__bg"></div>*/}
                {/*<div className="slide__content">*/}
                    {/*<svg className="slide__overlay" viewBox="0 0 720 405" preserveAspectRatio="xMaxYMax slice">*/}
                        {/*<path className="slide__overlay-path" d="M0,0 150,0 500,405 0,405" />*/}
                    {/*</svg>*/}
                    {/*<div className="slide__text">*/}
                        {/*<h1 className="slide__text-heading">Attract birds to your backyard</h1>*/}
                        {/*<div className="hidden-sm hidden-xs">*/}
                            {/*<p className="lead">Explore tips and tricks to attract birds in your backyard and neighbourhood.</p>*/}
                            {/*<div className="page-scroll">*/}
                                {/*<a href="#features" className="btn btn-default">Discover More</a>*/}
                            {/*</div>*/}
                        {/*</div>*/}
                    {/*</div>*/}
                {/*</div>*/}
            {/*</div>*/}
            {/*<!-- Slide 4-->*/}
            {/*<div className="slide slide-3">*/}
                {/*<div className="slide__bg"></div>*/}
                {/*<div className="slide__content">*/}
                    {/*<svg className="slide__overlay" viewBox="0 0 720 405" preserveAspectRatio="xMaxYMax slice">*/}
                        {/*<path className="slide__overlay-path" d="M0,0 150,0 500,405 0,405" />*/}
                    {/*</svg>*/}
                    {/*<div className="slide__text">*/}
                        {/*<h1 className="slide__text-heading">Join Local Projects</h1>*/}
                        {/*<div className="hidden-sm hidden-xs">*/}
                            {/*<p className="lead">Create and join the local projects to save and increase the bird biodiversity.</p>*/}
                            {/*<div className="page-scroll">*/}
                                {/*<a href="#features" className="btn btn-default">Discover More</a>*/}
                            {/*</div>*/}
                        {/*</div>*/}
                    {/*</div>*/}
                {/*</div>*/}
            {/*</div>*/}
        </div>
    </div>
);

export default MainSlider;


