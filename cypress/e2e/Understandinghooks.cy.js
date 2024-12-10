describe('Login Page Tests,Clear cookies afterEach test,Login button is visible,Placeholder ', () => {
    //1.beforeEach()
    beforeEach(() => {
      cy.visit("https://the-internet.herokuapp.com/login");
    });

//2.Clear cookies after each test
    afterEach(() => {
        cy.clearCookies();
      });

  //3. should check if the login button is visible'
    it('should check if the login button is visible', () => {
      cy.get('button').should('be.visible');
    });

// should verify the page contains a field with placeholder
    it('should verify the page contains a field with placeholder "Username"', () => {
       cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");
        cy.contains('input[placeholder="Username"]').should('exist');
    });
  });
  

