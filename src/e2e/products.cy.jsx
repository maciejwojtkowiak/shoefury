import ReduxProvider from "components/wrappers/ReduxProvider";
import MainPage from "pages/MainPage";
import { BrowserRouter } from "react-router-dom";

describe("Main page", () => {
  it("mounts", () => {
    cy.mount(
      <BrowserRouter>
        <ReduxProvider>
          <MainPage />
        </ReduxProvider>
      </BrowserRouter>,
    );
  });
});
