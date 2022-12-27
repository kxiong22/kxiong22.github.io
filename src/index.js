import React from 'react';
import ReactDom from 'react-dom';
import './index.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Projects from './Projects.js';
import About from './About.js';
import Map from './Map.js';
import Photos from './Photos.js';

class Main extends React.Component {
    render() {
        return (
            <div>
                <About />
                <Projects />
                <Map />
                <Photos />
            </div>
        )
    }
}

ReactDom.render(
    <Main />,
    document.getElementById('root')
);