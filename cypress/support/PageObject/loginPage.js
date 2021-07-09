/// <reference types = "cypress"/>

export class LoginPage {
  //const USER_NAME = "standard_user";
  //static PASSWORD = "secret_sauce";

  visit() {
    cy.visit("https://www.saucedemo.com/");
  }

  login() {
    //cy.get("#user-name").type(USER_NAME);
    //cy.get("#password").type(PASSWORD);
    cy.get("#user-name").type("standard_user");
    cy.get("#password").type("secret_sauce");
    cy.get("div").contains("Login").click();
    cy.get("div").should("have.class", "shopping_cart_container");
  }
}

export const loginPage = new LoginPage();