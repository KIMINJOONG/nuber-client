import React from "react";
import Helmet from "react-helmet";
import styled from "styled-components";
import Header from "../../Components/Header";
import Input from "../../Components/Input";
import Form from "../../Components/Form";
import Button from "../../Components/Button";
import { Link } from "react-router-dom";

const Container = styled.div`
  padding: 0 40px;
`;

const ExtendedInput = styled(Input)`
  margin-bottom: 40px;
`;

const ExtendedLink = styled(Link)`
  text-decoration: underline;
  margin-bottom: 20px;
  display: block;
`;

interface IProps {
  address: string;
  name: string;
  onInputChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  loading: boolean;
}

const AddPlacePresenter: React.SFC<IProps> = ({
  address,
  name,
  onInputChange,
  loading
}) => (
  <>
    <Helmet>
      <title>Add Place | Nuber</title>
    </Helmet>
    <Header title={"Add Place"} backTo={"/"} />
    <Container>
      <Form submitFn={null}>
        <ExtendedInput
          placeholder={"Name"}
          type={"text"}
          onChange={onInputChange}
          value={name}
        />
        <ExtendedInput
          placeholder={"Address"}
          type={"text"}
          onChange={onInputChange}
          value={address}
        />
        <ExtendedLink to={"find-address"}>Pick place from map</ExtendedLink>
        <Button onClick={null} value={loading ? "Adding Place" : "Add place"} />
      </Form>
    </Container>
  </>
);

export default AddPlacePresenter;
