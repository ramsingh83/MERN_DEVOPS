describe ('Asset Store', () => {
  beforeEach(() => {
    cy.fixture("asset.json").as("assetData");
  });

  it ('Should visit store app', () => {
    cy.visit ('/');
  });

  context('Asset List', function () {
    it('should allow me to see list of assets', function () {
      cy.get('.nav-link').contains('List').click();
    });
  });

  context('Asset Create', function () {
    it('should allow me to create a new assets', function () {
      cy.get('.nav-link').contains('Create').click();

      // Compiling the form
      cy
      .get('input[id="cName"]')
      .type(this.assetData.createrName)
      .should("have.value", this.assetData.createrName);
      cy
        .get('input[id="aName"]')
        .type(this.assetData.assetName)
        .should("have.value", this.assetData.assetName);
      cy
        .get('input[id="aNumber"]')
        .type(this.assetData.assetNumber)
        .should("have.value", this.assetData.assetNumber);
      
      cy.get("#save").click();
    });
  });

  context('Asset Edit', function () {
    it('Should allow me to edit an asset', function () {

    });
  });

  context('Asset Delete', function () {
    it('Should allow me to delete an asset', function () {
      
    });
  });
});
