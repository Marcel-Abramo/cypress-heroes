class LoginPage {
    selectorsList() {
        const selectors = {    
            usernameField: '[data-cy="email"]',
            passwordField: '[data-cy="password"]',
            loginButton: 'button:contains("Login")',
            signInButton: '.bg-blue-700',
            checkLogin: 'button:contains("Logout")',
        };

        return selectors;
        }

    accessLoginPage() {
        cy.visit("http://localhost:3000/heroes");
        cy.get(this.selectorsList().loginButton).click({force:true});
    }

    loginWithUser(username, password) {
        cy.get(this.selectorsList().usernameField).type(username);
        cy.get(this.selectorsList().passwordField).type(password);
        cy.get(this.selectorsList().signInButton).click({force:true});
    }

    checkAccessValid() {
        cy.get(this.selectorsList().checkLogin).should('have.text', 'Logout');
    }

    loginWithBlankField() {
        cy.get(this.selectorsList().usernameField).clear();
        cy.get(this.selectorsList().passwordField).clear();
        cy.get(this.selectorsList().signInButton).click({force:true});
    }

    getErrorMessage(expectedText) {
        return cy.contains('.text-red-500', expectedText);
    }
}

export default LoginPage;