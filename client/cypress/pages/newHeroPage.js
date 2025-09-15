class NewHeroPage {
    selectorsList() {
        const selectors = {
            createNewHeroButton: 'button:contains("Create New Hero")',
            nameField: '[data-cy="nameInput"]',
            priceField: '[data-cy="priceInput"]',
            fansField: '[data-cy="fansInput"]',
            savesField: '[data-cy="savesInput"]',
            powerSelect: '[data-cy="powersSelect"]',
            avatarFile: '[data-cy="avatarFile"]',
            submitButton: 'button:contains("Submit")',
            newHeroCheck: '[data-cy="hero-card"]',
        };
        return selectors;
        }

   
    createNewHero(name, price, fans, saves) {
        cy.get(this.selectorsList().createNewHeroButton).click();
        cy.get(this.selectorsList().nameField).type(name);
        cy.get(this.selectorsList().priceField).type(price);
        cy.get(this.selectorsList().fansField).type(fans);
        cy.get(this.selectorsList().savesField).type(saves);
        cy.get(this.selectorsList().powerSelect).select(['Fireball', 'Super Speed']);
        cy.get(this.selectorsList().submitButton).click();
    }

    checkNewHeroCreated(heroName) {
        cy.location('pathname').should('equal', `/heroes`);
        cy.get(this.selectorsList().newHeroCheck).contains(heroName).should('be.visible');
    }

    createNewHeroWithAvatar(name, price, fans, saves, avatarFileName) {
        cy.get(this.selectorsList().createNewHeroButton).click();
        cy.get(this.selectorsList().nameField).type(name);
        cy.get(this.selectorsList().priceField).type(price);
        cy.get(this.selectorsList().fansField).type(fans);
        cy.get(this.selectorsList().savesField).type(saves);
        cy.get(this.selectorsList().powerSelect).select(['Fireball', 'Super Speed']);
        cy.get(this.selectorsList().avatarFile).selectFile(`cypress/fixtures/${avatarFileName}`, { force: true });       
        cy.get(this.selectorsList().submitButton).click();
    }
}

export default NewHeroPage;