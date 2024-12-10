///<reference types="cypress"/>

describe('Verify Hello,Fetch table values,open new window,Handle Alerts ', () => {
  
  it('Hello', () => {
      cy.visit('https://the-internet.herokuapp.com/dynamic_loading/1');
    //verify Hello
      cy.contains('Start').click();
      cy.wait(4000)
      cy.contains('Hello World!').should('be.visible')
  });

  //Table 1 and 2
  it('Fetch table values', () => {
    cy.visit("https://the-internet.herokuapp.com/tables") 
    cy.xpath('//table[@id="table1"]/tbody[1]/tr[4]/td[3]').each(($ele)=>{
     if($ele.text()=='$50.00'){
         cy.log($ele.text())
     }
    })
    cy.xpath('//table[@id="table2"]/tbody[1]/tr[2]/td[5]').each(($ele)=>{
      if($ele.text()=='Action'){
         cy.log($ele.text())
      }
    })
 });


  it('open new window', () => {
      cy.visit('https://the-internet.herokuapp.com/windows');
    //Click new window button
      cy.get('[href="/windows/new"]').invoke('removeAttr','target').click();
  });

  it('Handle Alerts', () => {
      cy.visit('https://the-internet.herokuapp.com/javascript_alerts');
     //click first alert button
      cy.get('[onclick="jsAlert()"]').click();
    //Verify alert button
      cy.on('window:alert',(alerttex)=>{
          expect(alerttex).to.equal('I am a JS Alert');
      })
    //Verify confirm button
      cy.get('[onclick="jsConfirm()"]').click();
      cy.on('window:confirm', (confimtext)=>{
          expect(confimtext).to.equal('I am a JS Confirm');
      })
    //Verify JS prompt
      cy.get('[onclick="jsPrompt()"]').click();
      cy.on('window:prompt',(prompt)=>{
          cy.stub(prompt,'prompt').returns('I am a JS prompt');
      cy.get('#triggerPromptButton').click();  
      cy.get('#output').should('contain', 'Cypress Input');  
      })
  });

});