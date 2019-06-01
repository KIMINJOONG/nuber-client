import React from "react";
import { Query } from "react-apollo";
import { getPlaces } from "../../types/api";
import PlacesPresenter from "./PlacesPresenter";
import { GET_PLACES } from "../../sharedQueries";

class PlaceQuery extends Query<getPlaces> {}

class PlacesContainer extends React.Component {
  public render() {
    return (
      <PlaceQuery query={GET_PLACES}>
        {({ data, loading }) => (
          <PlacesPresenter data={data} loading={loading} />
        )}
      </PlaceQuery>
    );
  }
}
export default PlacesContainer;
