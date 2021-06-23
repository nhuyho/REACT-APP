import React, { Component } from "react";
import Header from "./Header";
import Banner from "./Banner";
import Item from "./Item";
import Footer from "./Footer";

export default class Home extends Component {
  render() {
    return (
      <div className="row">
        <div className="col-12">
          <Header />
        </div>
        <div className="container bg-success">
          <Banner />
        </div>
        <div className="container">
          <Item />
        </div>
        <div className="col-12 bg-secondary">
          <Footer />
        </div>
      </div>
    );
  }
}
