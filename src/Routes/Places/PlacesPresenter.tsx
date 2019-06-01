import React from "react";
import Helmet from "react-helmet";
import styled from "../../typed-components";
import Place from "../../Components/Place";
import { getPlaces } from "../../types/api";
import Header from "../../Components/Header";
import { Link } from "react-router-dom";

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
        data!.GetMyPlaces.places.length === 0 && (
          <SLink to={"/add-place"}>Place add some plaes!</SLink>
        )}
      {!loading &&
        data!.GetMyPlaces.places &&
        data!.GetMyPlaces.places.map(place => (
          <Place
            key={place!.id}
            fav={place!.isFav}
            name={place!.name}
            address={place!.address}
          />
        ))}
    </Container>
  </>
);

export default PlacesPresenter;
