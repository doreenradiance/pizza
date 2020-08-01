import React from 'react';
import '../Assets/css/styles.css';

function Thumbnail() {
    return (
    <div className="container pizza-types">
        <div className="row">
                <h3 className="text-center"> PIZZA TYPES</h3>
                <div className="col-md-3">
                    <div className="thumbnail">
                        <img src="images/fatima-akram-uU0Anw-8Vsg-unsplash.jpg" alt="Pepper+Spag" />
                        <div className="caption">
                            <h3>Pepper+Spag Pizza</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                            tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                            quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                  consequat. </p>
                        </div>
                    </div>
                </div>

                <div className="col-md-3">
                    <div className="thumbnail">
                        <img src="images/nicolas-perondi-UxRhrU8fPHQ-unsplash.jpg" alt="Meat" />
                        <div className="caption">
                            <h3>Meat Pizza</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                            tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                            quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                  consequat. </p>
                        </div>
                    </div>
                </div>

                <div className="col-md-3">
                    <div className="thumbnail">
                        <img src="images/brenna-huff-22Vt7JIf7ZI-unsplash.jpg" alt="Beef" />
                        <div className="caption">
                            <h3>Beef Pizza</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                            tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                            quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                  consequat. </p>
                        </div>
                    </div>
                </div>

                <div className="col-md-3">
                    <div className="thumbnail">
                        <img src="images/victoria-shes-hbNOsm2eM1M-unsplash.jpg" alt="Vegetables" />
                        <div className="caption">
                            <h3>Vegetables Pizza</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                            tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                            quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                  consequat. </p>
                        </div>
                    </div>
                </div>
            </div>   
        </div>
    )
}


export default Thumbnail;