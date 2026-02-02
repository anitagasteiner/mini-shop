import React, { Component } from 'react';
import Navbar from "./components/navbar";
import Product from "./components/product";
import "./app.css";

class App extends Component {
    state = {  } 
    render() { 
        return <React.Fragment>
                <Navbar/>
                <div className="product-container">
                    <Product title="Converse" img="/assets/img/converse_red.jpg" alt="Red Converse" description="Classic red Converse shoes."/>
                    <Product title="White and Blue Running Shoes" img="/assets/img/running_shoes_blue.jpg" alt="White and Blue Running Shoes" description="High quality running shoes with classic design."/>
                    <Product title="Colored Running Shoes" img="/assets/img/running_shoes_colored.jpg" alt="Colored Runnung Shoes" description="High quality running shoes with modern design."/>
                    <Product title="Bright Running Shoes" img="/assets/img/running_shoes_bright.jpg" alt="Bright Running Shoes" description="High quality running shoes with elegant design."/>
                    <Product title="Converse Heroes" img="/assets/img/shoes_heroes.jpg" alt="Converse with Comic Heroes" description="Converse shoes with comic heroes design."/>
                    <Product title="Sneakers" img="/assets/img/sneakers.jpg" alt="Blue and Beige Sneakers" description="Elegant sneakers in dark blue and beige."/>
                </div>                
            </React.Fragment>;
    }
}
 
export default App;


