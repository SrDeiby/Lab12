import { describe, test, expect, beforeEach } from "vitest";

import "./user-dashboard.js";
import "../user-card.js";
import "../warning-badge.js";
import "../weather-time.js";

describe("user-dashboard", () => {

  beforeEach(() => {

    document.body.innerHTML = `
      <user-dashboard></user-dashboard>
    `;

  });

  test("debe renderizar el componente", () => {

    const dashboard =
      document.querySelector("user-dashboard");

    expect(dashboard).toBeTruthy();

  });

  test("debe contener user-card", () => {

    const dashboard =
      document.querySelector("user-dashboard");

    const card =
      dashboard.shadowRoot.querySelector("user-card");

    expect(card).toBeTruthy();

  });

  test("debe activar pulsing al hacer click", () => {

    const dashboard =
      document.querySelector("user-dashboard");

    const card =
      dashboard.shadowRoot.querySelector("user-card");

    const badge =
      dashboard.shadowRoot.querySelector("warning-badge");

    const button =
      card.shadowRoot.querySelector("button");

    button.click();

    expect(
      badge.hasAttribute("pulsing")
    ).toBe(true);

  });

  test("debe coincidir con el snapshot", () => {

    const dashboard =
      document.querySelector("user-dashboard");

    expect(
      dashboard.shadowRoot.innerHTML
    ).toMatchSnapshot();

  });

});