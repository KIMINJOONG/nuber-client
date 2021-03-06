import React from "react";
import ReactDOM from "react-dom";
import FindAddressPresenter from "./FindAddressPresenter";

class FindAddressContainer extends React.Component<any> {
  public mapRef: any;
  public map: google.maps.Map;
  constructor(props) {
    super(props);
    this.mapRef = React.createRef();
  }
  public componentDidMount() {
    navigator.geolocation.getCurrentPosition(
      this.handleGeoSuccess,
      this.handleGeoError
    );
  }
  public render() {
    return <FindAddressPresenter mapRef={this.mapRef} />;
  }
  public handleGeoError = () => {
    return;
  };
  public handleGeoSuccess = (position: Position) => {
    const latitude = position.coords.latitude;
    const longitude = position.coords.longitude;
    this.loadMap(latitude, longitude);
  };

  public loadMap = (lat, lng) => {
    const { google } = this.props;
    const maps = google.maps;
    const mapNode = ReactDOM.findDOMNode(this.mapRef.current);

    const mapConfig: google.maps.MapOptions = {
      center: {
        lat,
        lng
      },
      disableDefaultUI: true,
      zoom: 11
    };
    this.map = new maps.Map(mapNode, mapConfig);
  };
}

export default FindAddressContainer;
