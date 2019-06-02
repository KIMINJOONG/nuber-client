import React from "react";
import { Mutation } from "react-apollo";
import { GET_PLACES } from "src/sharedQueries";
import { editPlace, editPlaceVariables } from "src/types/api";
import PlacePresenter from "./PlacePresenter";
import { EDIT_PLACE } from "./PlaceQueries";

interface IProps {
  key: number;
  fav: boolean;
  name: string;
  address: string;
  id: number;
}

class FavMutation extends Mutation<editPlace, editPlaceVariables> {}

class PlaceContainer extends React.Component<IProps> {
  public render() {
    const { fav, name, address, id, key } = this.props;
    return (
      <FavMutation
        mutation={EDIT_PLACE}
        variables={{
          isFav: !fav,
          placeId: id
        }}
        refetchQueries={[{ query: GET_PLACES }]}
      >
        {editPlaceFn => (
          <PlacePresenter
            onStarPress={editPlaceFn}
            key={key}
            fav={fav}
            name={name}
            address={address}
            id={id}
          />
        )}
      </FavMutation>
    );
  }
}
export default PlaceContainer;
