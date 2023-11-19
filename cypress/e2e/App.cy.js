describe("template spec", () => {
  it("Navigation test", () => {
    /* Show TTN page */
    cy.visit("http://localhost:3000/nova-poshta-tracking");
    cy.get('[data-testid="ttn-page"]').should("exist");
    cy.contains("a", "Перевірити ТТН").should("exist");
    cy.contains("a", "Список відділень").should("exist");

    /* Move to Offices page */
    cy.contains("a", "Список відділень").click();
    cy.get('[data-testid="ttn-page"]').should("not.exist");
    cy.get('[data-testid="offices-page"]').should("exist");
    cy.url().should("include", "/offices");

    /* Return to TTN page */
    cy.contains("a", "Перевірити ТТН").click();
    cy.get('[data-testid="ttn-page"]').should("exist");
    cy.get('[data-testid="offices-page"]').should("not.exist");
    cy.url().should("not.include", "/offices");

    /* Move to unavailable page */
    cy.visit("http://localhost:3000/nova-poshta-tracking/some-way");
    cy.get('[data-testid="error-page"]').should("exist");

    /* Return to TTN page from Error page */
    cy.contains("a", "Повернутись на головну сторінку").should("exist").click();
    cy.url().should("include", "/nova-poshta-tracking");
    cy.get('[data-testid="ttn-page"]').should("exist");
    cy.get('[data-testid="error-page"]').should("not.exist");
  });

  it("Correct TTN page work", () => {
    cy.visit("http://localhost:3000/nova-poshta-tracking");

    /* There are Статус ТТН button and input on the page */
    cy.contains("button", "Статус ТТН").should("exist");
    cy.get('input[type="number"]').should("exist");

    /* Correct form validation work */
    cy.contains("button", "Статус ТТН").click();
    cy.contains("div", "Обов'язкове поле").should("exist");

    cy.get('input[type="number"]').type("1");
    cy.get('input[type="number"]').should("have.value", "1");
    cy.contains("div", "Має складатись з 14 цифр").should("exist");

    cy.get('input[type="number"]').clear();
    cy.get('input[type="number"]').should("have.value", "");
    cy.contains("div", "Обов'язкове поле").should("exist");

    /* Correct show info about orders and correct work of OrdersInfo component */
    cy.get('[data-testid="orders-info"]').should("have.css", "display", "none");

    cy.get('input[type="number"]').type("20450761920712");
    cy.get('input[type="number"]').should("have.value", "20450761920712");

    cy.contains("button", "Статус ТТН").click();
    cy.get('input[type="number"]').should("have.value", "");

    cy.get('[data-testid="orders-info"]').should(
      "have.css",
      "display",
      "block"
    );

    cy.contains("p", "20450761920712").should("exist");
    cy.contains("span", "20450761920712").should("exist");

    cy.contains("button", "Очистити дані та історію").should("exist").click();

    cy.get('[data-testid="orders-info"]').should("have.css", "display", "none");

    /* Correct work of OrderHistory block  */
    cy.get('input[type="number"]').type("20450761920713");
    cy.get('input[type="number"]').should("have.value", "20450761920713");

    cy.contains("button", "Статус ТТН").click();
    cy.get('input[type="number"]').should("have.value", "");
    cy.get('[data-testid="order-history"]').children().should("have.length", 1);

    cy.get('input[type="number"]').type("20450761920714");
    cy.contains("button", "Статус ТТН").click();
    cy.get('[data-testid="order-history"]').children().should("have.length", 2);

    cy.get('input[type="number"]').type("20450761920715");
    cy.contains("button", "Статус ТТН").click();
    cy.get('[data-testid="order-history"]').children().should("have.length", 3);

    cy.contains("p", "20450761920715").should("exist");

    cy.contains("span", "20450761920714").should("exist").click();
    cy.contains("p", "20450761920715").should("not.exist");
    cy.contains("p", "20450761920714").should("exist");

    cy.get('[data-testid="order-history"]')
      .find("div")
      .eq(1)
      .find("svg")
      .click();
    cy.contains("span", "20450761920714").should("not.exist");

    cy.contains("button", "Очистити історію").click();
    cy.get('[data-testid="order-history"]').children().should("have.length", 0);
  });

  it("Correct Offices page work", () => {
    cy.visit("http://localhost:3000/nova-poshta-tracking/offices");
    cy.get('[data-testid="offices-page"]').should("exist");

    /* There are Статус ТТН button, select and input on the page */
    cy.contains("button", "Пошук").should("exist");
    cy.get('input[type="text"]').should("exist");
    cy.get('select[name="branchType"]').should("exist");

    /* Correct form validation work */
    cy.get('input[type="text"]').type("Lviv");
    cy.get('input[type="text"]').should("have.value", "Lviv");
    cy.get('input[type="text"]').blur();
    cy.contains("div", "Місто має включати лиш українські літери").should(
      "exist"
    );

    cy.get('input[type="text"]').clear();
    cy.get('input[type="text"]').should("have.value", "");
    cy.contains("div", "Обов'язкове поле").should("exist");

    cy.get('input[type="text"]').type("Львів");
    cy.get('input[type="text"]').should("have.value", "Львів");
    cy.contains("div", "Місто має включати лиш українські літери").should(
      "not.exist"
    );
    cy.contains("div", "Обов'язкове поле").should("not.exist");

    cy.contains("button", "Пошук").click();
    cy.contains("div", "Обов'язкове поле").should("have.length", 1);

    cy.get('select[name="branchType"]').select("Поштове відділення");
    cy.get('select[name="branchType"]').should("have.value", "30");
    cy.contains("div", "Обов'язкове поле").should("not.exist");

    /* Show info about post offices */
    cy.get('[data-testid="offices-info"]').should(
      "have.css",
      "display",
      "none"
    );
    cy.contains("button", "Пошук").click();
    cy.get('[data-testid="offices-info"]').should(
      "have.css",
      "display",
      "block"
    );

    /* Correct ScheduleModalWindow work */
    cy.contains("div", "Часи роботи").should("exist").click();
    cy.get('[data-testid="schedule-modal-window"]').should(
      "have.css",
      "opacity",
      "1"
    );
    cy.get('[data-testid="schedule-modal-window"]').eq(0).find("svg").click();
    cy.get('[data-testid="schedule-modal-window"]').should(
      "have.css",
      "opacity",
      "0"
    );

    /* Remove post office info */
    cy.contains("button", "Очистити").should("exist").click();
    cy.get('[data-testid="offices-info"]').should(
      "have.css",
      "display",
      "none"
    );
  });
});
