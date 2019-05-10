import React from "react";
import SocailLoginPresenter from "./SocailLoginPresenter";
import { Mutation } from "react-apollo";
import { facebookConnect, facebookConnectVariables } from "src/types/api";
import { FACEBOOK_CONNECT } from "./SocailLoginQueries";
import { RouteComponentProps } from "react-router-dom";

class LoginMutation extends Mutation<
  facebookConnect,
  facebookConnectVariables
> {}

interface IState {
  firstName: string;
  lastName: string;
  email?: string;
  fbId: string;
}

interface IProps extends RouteComponentProps<any> {}

class SocailLoginContainer extends React.Component<IProps, IState> {
  public render() {
    return (
      <LoginMutation mutation={FACEBOOK_CONNECT}>
        <SocailLoginPresenter />
      </LoginMutation>
    );
  }
}

export default SocailLoginContainer;
