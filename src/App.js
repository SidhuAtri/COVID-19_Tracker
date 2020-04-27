import React, { Component } from "react";

import Chart from "./components/Chart/Chart";
import Cards from "./components/Cards/Cards";
import CountryPicker from "./components/CountryPicker/CountryPicker";
import Footer from "./components/Footer/Footer";

import styles from "./App.module.css";

import { fetchData } from "./api";
import coronaImage from "./images/image.png";

export default class App extends Component {
  state = {
    data: {},
    country: "",
  };

  async componentDidMount() {
    const fetcheData = await fetchData();
    // console.log(fetcheData);

    this.setState({ data: fetcheData });
  }

  handleCountryChange = async (country) => {
    const fetcheData = await fetchData(country);

    this.setState({ data: fetcheData, country: country });
  };

  render() {
    const { data, country } = this.state;

    return (
      <div className={styles.container}>
        <img className={styles.image} src={coronaImage} alt="COVID-19" />
        <Cards data={data} />
        <CountryPicker handleCountryChange={this.handleCountryChange} />
        <Chart data={data} country={country} />
        <Footer />
      </div>
    );
  }
}
