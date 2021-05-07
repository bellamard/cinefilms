import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Carousel } from 'react-bootstrap';

const managedslider = () => {
    return (
        <Carousel>
            <Carousel.Item interval={5000}>
                <img
                    classNameName="d-block w-100 h-60"
                    src="https://images8.alphacoders.com/104/1040194.jpg"
                    alt="First slide"
                />
                <Carousel.Caption>
                    <h3>First slide label</h3>
                    <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item interval={5000}>
                <img
                    classNameName="d-block w-100 h-60"
                    src="https://wallpaperaccess.com/full/1560686.jpg"
                    alt="Second slide"
                />
                <Carousel.Caption>
                    <h3>Second slide label</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    classNameName="d-block w-100 h-60"
                    src="data:image/jpeg;base64,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"
                    alt="Third slide"
                />
                <Carousel.Caption>
                    <h3>Third slide label</h3>
                    <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>

    )
}
const managedcard = () => {
    return (
        <div className="cards">
            <figure class="card">

                <img src="https://mrreiha.keybase.pub/codepen/hover-fx/1.jpg" />

                <figcaption>Dota 2</figcaption>

            </figure>

            <figure class="card">

                <img src="https://mrreiha.keybase.pub/codepen/hover-fx/2.jpg" />

                <figcaption>Stick Fight</figcaption>

            </figure>

            <figure class="card">

                <img src="https://mrreiha.keybase.pub/codepen/hover-fx/3.jpg" />

                <figcaption>Minion Masters</figcaption>

            </figure>

            <figure class="card">

                <img src="https://mrreiha.keybase.pub/codepen/hover-fx/4.jpg" />

                <figcaption>KoseBoz!</figcaption>

            </figure>

        </div>
    )
}

function Home(props) {
    return (
        <div>
            {managedslider()}
            card
            {managedcard()}
        </div>
    );
}

export default Home;