import React from "react";
import { Provider } from "react-redux";
import store from "store/store";

interface ReduxProviderProps {
  children: JSX.Element;
}

const ReduxProvider = ({ children }: ReduxProviderProps): JSX.Element => {
  return <Provider store={store}>{children}</Provider>;
};

export default ReduxProvider;
