class HomePage {
  selectorsList() {
    const selectors = {
      loginButton: 'button:contains("Login")',
      checkLogin: 'button:contains("Logout")',
      likeButton: '[data-cy="like"]',
      hireButton: '[data-cy="money"]',
      modalAlert: '.modal-container > .open',
      mustLoginAlert: ':contains("You must log in to like.")',
      okButton: ':contains("Ok")',
      fansCount: '[data-cy="fans"]',
      saveCount: '[data-cy="saves"]',
      priceCount: '[data-cy="price"]',
      editButton: '[data-cy="pencil"]',
      deleteHeroButton:'[data-cy="trash"]',
      deleteHeroMsg: ':contains("Delete Hero")',
      yesButton: 'button:contains("Yes")',
      noButton: 'button:contains("No")',
      cardHeroName: '[data-cy="name"]',
      heroCard: '[data-cy=hero-card]',
    };
    return selectors;
  }

    checkAccessValid() {
      cy.get(this.selectorsList().checkLogin).should('have.text', 'Logout');
    }

    likeHeroWithoutLogin(heroName) {   
      cy.contains(this.selectorsList().heroCard, heroName).find(this.selectorsList().likeButton).click();
      cy.contains('You must log in to like.');
      cy.get(this.selectorsList().okButton).contains('Ok').click();
    }

    hireHeroWithoutLogin(heroName) {
      cy.contains(this.selectorsList().heroCard, heroName).find(this.selectorsList().hireButton).click();
      cy.contains('You must log in to hire this hero.');
      cy.get(this.selectorsList().okButton).contains('Ok').click();
    }

    normalUserLikeHero(heroName) {  
      cy.contains(this.selectorsList().heroCard, heroName)
        .find(this.selectorsList().fansCount)
        .invoke('text')
        .then((fansBefore) => {
          const fansBeforeInt = parseInt(fansBefore);

          cy.contains(this.selectorsList().heroCard, heroName)
            .find(this.selectorsList().likeButton)
            .click();

          cy.reload();
          
          cy.contains(this.selectorsList().heroCard, heroName)
            .find(this.selectorsList().fansCount)
            .invoke('text')
            .then((fansAfter) => {
              const fansAfterInt = parseInt(fansAfter);
              expect(fansAfterInt).to.eq(fansBeforeInt + 1);
            });
        });
    }

    normalUserHireHero(heroName) {
      cy.contains(this.selectorsList().heroCard, heroName)
        .find(this.selectorsList().saveCount)
        .invoke('text')
        .then((savesBefore) => {
          const savesBeforeInt = parseInt(savesBefore);

          cy.contains(this.selectorsList().heroCard, heroName)
            .find(this.selectorsList().hireButton)
            .click();
              
          cy.get(this.selectorsList().yesButton).contains('Yes').click();
          cy.reload();
        
          cy.contains(this.selectorsList().heroCard, heroName)
            .find(this.selectorsList().saveCount)
            .invoke('text')
            .then((savesAfter) => {
              const savesAfterInt = parseInt(savesAfter);
              expect(savesAfterInt).to.eq(savesBeforeInt + 1);
            });
        });
    }

    normalUserCancelHireHero(heroName) {
      cy.contains(this.selectorsList().heroCard, heroName)
        .find(this.selectorsList().saveCount)
        .invoke('text')
        .then((savesBefore) => {
          const savesBeforeInt = parseInt(savesBefore);

          cy.contains(this.selectorsList().heroCard, heroName)
            .find(this.selectorsList().hireButton)
            .click();
              
          cy.get(this.selectorsList().noButton).contains('No').click();
          cy.reload();
        
          cy.contains(this.selectorsList().heroCard, heroName)
            .find(this.selectorsList().saveCount)
            .invoke('text')
            .then((savesAfter) => {
              const savesAfterInt = parseInt(savesAfter);
              expect(savesAfterInt).to.eq(savesBeforeInt);
            });
        });
    }

    adminUserLikeHero(heroName) {  
      cy.contains(this.selectorsList().heroCard, heroName)
        .find(this.selectorsList().fansCount)
        .invoke('text')
        .then((fansBefore) => {
          const fansBeforeInt = parseInt(fansBefore);

          cy.contains(this.selectorsList().heroCard, heroName)
            .find(this.selectorsList().likeButton)
            .click();

          cy.reload();
              
          cy.contains(this.selectorsList().heroCard, heroName)
            .find(this.selectorsList().fansCount)
            .invoke('text')
            .then((fansAfter) => {
              const fansAfterInt = parseInt(fansAfter);
              expect(fansAfterInt).to.eq(fansBeforeInt + 1);
            });
        });
    }

    adminUserHireHero(heroName) {
      cy.contains(this.selectorsList().heroCard, heroName)
        .find(this.selectorsList().saveCount)
        .invoke('text')
        .then((savesBefore) => {
          const savesBeforeInt = parseInt(savesBefore);

          cy.contains(this.selectorsList().heroCard, heroName)
            .find(this.selectorsList().hireButton)
            .click();
              
          cy.get(this.selectorsList().yesButton).contains('Yes').click();
          cy.reload();
        
          cy.contains(this.selectorsList().heroCard, heroName)
            .find(this.selectorsList().saveCount)
            .invoke('text')
            .then((savesAfter) => {
              const savesAfterInt = parseInt(savesAfter);
              expect(savesAfterInt).to.eq(savesBeforeInt + 1);
            });
        });
    }

    adminUserEditHero(heroName) {
      cy.contains(this.selectorsList().heroCard, heroName).find(this.selectorsList().editButton).click();
      cy.get(this.selectorsList().cardHeroName).contains(heroName); 
    }

    adminUserDeleteHero(heroName) {
      cy.contains(this.selectorsList().heroCard, heroName).find(this.selectorsList().deleteHeroButton).click();
      cy.get(this.selectorsList().yesButton).contains('Yes').click();
    }

    adminUserCancelDeleteHero(heroName) {
      cy.contains(this.selectorsList().heroCard, heroName).find(this.selectorsList().deleteHeroButton).click();
      cy.get(this.selectorsList().noButton).contains('No').click();
    }
}

export default HomePage;