class EditHeroPage {
    selectorsList() {
        const selectors = {
          editButton: '[data-cy="pencil"]', 
          heroCard: '[data-cy="hero-card"]',
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

        navigateToEditHero(heroName) {
          cy.contains(this.selectorsList().heroCard, heroName).find(this.selectorsList().editButton).click({force: true});
        }  
    
        editHeroInfo(newName, newPrice, newFans, newSaves) {
          cy.get(this.selectorsList().nameField).clear().type(newName);
          cy.get(this.selectorsList().priceField).clear().type(newPrice);
          cy.get(this.selectorsList().fansField).clear().type(newFans);
          cy.get(this.selectorsList().savesField).clear().type(newSaves);
          cy.get(this.selectorsList().powerSelect).select(['Mind Control']);
          cy.get(this.selectorsList().submitButton).click();
        }

        checkHeroInfoUpdated(heroName) {
          cy.location('pathname').should('equal', `/heroes`);
          cy.get(this.selectorsList().heroCard).contains(heroName).should('be.visible');
        }

        verifyHeroInfo(name, price, fans, saves) {
          //cy.get(this.selectorsList().nameField).contains(heroName).should('be.visible');
          
          
          cy.get(this.selectorsList().nameField).should('have.value', name);
          cy.get(this.selectorsList().priceField).should('have.value', price);
          cy.get(this.selectorsList().fansField).should('have.value', fans);
          cy.get(this.selectorsList().savesField).should('have.value', saves);
          cy.url().should('include', '/edit');
          cy.get(this.selectorsList().submitButton).should('be.visible');
        }

        changeAvatarHero(avatarFileName) {
          cy.get(this.selectorsList().avatarFile).selectFile(`cypress/fixtures/${avatarFileName}`, {force:true});       
          cy.get(this.selectorsList().submitButton).click();
          cy.url().should('include', '/edit');
          cy.get(this.selectorsList().submitButton).should('be.visible');
        }
}

export default EditHeroPage;