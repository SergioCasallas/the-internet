/// <reference types="cypress" />

declare namespace Cypress {
  interface Chainable {
    /**
     * Agrega un nuevo elemento haciendo clic en el botón "Add Element"
     */
    addElement(): Chainable<void>;

    /**
     * Obtiene la cantidad de elementos agregados
     */
    getElementsCount(): Chainable<number>;

    /**
     * Elimina el primer elemento de la lista
     */
    deleteFirstElement(): Chainable<void>;
  }
}
