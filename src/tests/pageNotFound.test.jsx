import '@testing-library/jest-dom';
import { render, screen } from "@testing-library/react";
import { BrowserRouter as Router } from "react-router-dom";
import Page404 from "../pages/404/Page404";

describe("PageNotFound", () => {
  it("should display 404 page when navigating to an unknown route", () => {
    render(
      <Router>
        <Page404 />
      </Router>
    );

    expect(screen.getByText("Oops! The page you're looking for doesn't exist.")).toBeInTheDocument();
  });
});