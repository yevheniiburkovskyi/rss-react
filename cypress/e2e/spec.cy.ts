describe('Navigation', () => {
  afterEach(() => {
    cy.window().trigger('unload');
  });
  it('should change page', () => {
    cy.visit('/');
    cy.get('a').contains('Form').click();
    cy.get('form').should('exist');
    cy.get('h1').contains('Form').should('exist');
    cy.url().should('include', '/Form');

    cy.get('a').contains('About us').click();
    cy.get('p').should('exist');
    cy.get('h1').contains('About us').should('exist');
    cy.url().should('include', '/About');

    cy.get('a').contains('Home').click();
    cy.get('h1').contains('Home').should('exist');
    cy.url().should('include', '/');

    cy.visit('/qwerty');
    cy.contains('404').should('exist');
  });
});

describe('Home', () => {
  afterEach(() => {
    cy.window().trigger('unload');
  });
  beforeEach(() => cy.visit('/'));
  it('should find,open card details and close', () => {
    const input = cy.get('input[type="text"]');
    input.type('Rick{enter}');
    cy.contains('Rick').should('be.visible');
    cy.get('li').contains('Rick Sanchez').click();
    cy.contains('Human').should('be.visible');
    cy.get('span').contains('✖').click();
    cy.contains('Human').should('not.exist');
    input.clear();
  });
  it('should find nothing', () => {
    const input = cy.get('input[type="text"]');
    input.type('Юрій{enter}');
    cy.contains('Nothing found').should('be.visible');
  });
});

describe('Form', () => {
  afterEach(() => {
    cy.window().trigger('unload');
  });
  beforeEach(() => cy.visit('/Form'));
  it('success submition', () => {
    cy.get('form').should('exist');
    cy.get('input[name=name]').type('Eugene');
    cy.get('input[name=date]').type('2023-01-21');
    cy.get('select').select('Ukraine');
    cy.get('input[value=Male]').click();
    cy.get('input[type=checkbox]').click();
    cy.fixture('photo.jpg').as('myFixture');
    cy.get('input[type=file]').selectFile('@myFixture');
    cy.get('button').click();
    cy.get('div')
      .contains(/success/i)
      .should('exist');
    cy.wait(1000);
    cy.get('div')
      .contains(/success/i)
      .should('not.exist');
    cy.get('h3').contains('Eugene').should('exist');
  });
  it('invalid submition', () => {
    cy.get('form').should('exist');
    cy.get('input[name=name]').type('eugene');
    cy.get('input[name=date]').type('2030-01-21');
    cy.get('button').click();
    cy.get('div')
      .contains(/success/i)
      .should('not.exist');
    cy.get('p').contains('Required field').should('exist');
    cy.get('p')
      .contains('Name must start with a upper letter and have at least 2 letters')
      .should('exist');
    cy.get('p').contains('Date must be lower than current date').should('exist');
  });
});
