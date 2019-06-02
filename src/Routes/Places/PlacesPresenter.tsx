import React from "react";
import Helmet from "react-helmet";
import { Link } from "react-router-dom";
import Header from "../../Components/Header";
import Place from "../../Components/Place";
import styled from "../../typed-components";
import { getPlaces } from "../../types/api";

const Container = styled.div`
  padding: 0 40px;
`;

const SLink = styled(Link)`
  text-decoration: underline;
`;

interface IProps {
  data?: getPlaces;
  loading: boolean;
}

const PlacesPresenter: React.SFC<IProps> = ({ data, loading }) => (
  <>
    <Helmet>
      <title>Places | Nuber</title>
    </Helmet>
    <Header title={"Places"} backTo={"/"} />
    <Container>
      {!loading &&
        data!.GetMyPlaces.places &&
        data!.GetMyPlaces.places.length === 0 &&
        "You have no places"}
      {!loading &&
        data!.GetMyPlaces.places &&
        data!.GetMyPlaces.places.map(place => (
          <Place
            onStarPress={null}
            key={place!.id}
            id={place!.id}
            fav={place!.isFav}
            name={place!.name}
            address={place!.address}
          />
        ))}
      <SLink to={"/add-place"}>Add some plaes!</SLink>
    </Container>
  </>
);

export default PlacesPresenter;
