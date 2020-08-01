import React from 'react';
import '../Assets/css/styles.css';


function Carousel() {
    return (
        <div id="carousel-example-generic" class="carousel slide" data-ride="carousel">
            <ol class="carousel-indicators">
                <li data-target="#carousel-example-generic" data-slide-to="0" class="active"></li>
                <li data-target="#carousel-example-generic" data-slide-to="1"></li>
                <li data-target="#carousel-example-generic" data-slide-to="2"></li>
            </ol>

            <div class="carousel-inner" role="listbox">
                <div class="item active">
                    <img src="images/peter-bravo-de-los-rios-OklpRh8-Sns-unsplash.jpg" alt="Pizza" />
                </div>

                <div class="item">
                    <img src="images/pinar-kucuk-Ae7jQFDTPk4-unsplash.jpg" alt="Pizza" />
                </div>

                <div class="item">
                    <img src="images/alan-hardman-SU1LFoeEUkk-unsplash.jpg" alt="Pizza" />
                </div>

                <a class="left carousel-control" href="#carousel-example-generic" role="button" data-slide="prev">
                    <span class="glyphicon glyphicon-chevron-left" aria-hidden="true"></span>
                    <span class="sr-only">Previous</span>
                </a>
                <a class="right carousel-control" href="#carousel-example-generic" role="button" data-slide="next">
                    <span class="glyphicon glyphicon-chevron-right" aria-hidden="true"></span>
                    <span class="sr-only">Next</span>
                </a>
            </div>
        </div>
    )
}

export default Carousel;