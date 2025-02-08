import getItems, { timestampToDate } from "./band-site-api.js";

function displayShow(show) {
  const section = createContainer("shows__section");
  showsContainer.append(section);

  for (let [key, value] of Object.entries(show)) {
    if (key !== 'id') {
      const info = createContainer("shows__info");
      const label = createElementWithText("p", "label shows__info-label", key);
      if (key === 'date') {
        value = timestampToDate(value);
      }
      const val = createElementWithText(
        "p",
        "shows__info-value shows__table-cell",
        value
      );
  
      info.append(label);
      info.append(val);
  
      section.append(info);
    }
  }

  const buttonSection = createContainer("shows__info");
  const buttonContainer = createContainer(
    "button__container shows__table-cell"
  );
  const button = createElementWithText(
    "button",
    "button shows__button",
    "Buy Tickets"
  );
  const divider = createElementWithText(
    "div",
    "label shows__info-label button__label",
    "button"
  );

  function createElementWithText(type, className, text) {
    const el = document.createElement(type);
    el.className = className;
    el.textContent = text;
    return el;
  }
  
  function createContainer(className) {
    const container = document.createElement("div");
    container.className = className;
    return container;
  }

  buttonSection.append(divider);
  buttonContainer.append(button);
  buttonSection.append(buttonContainer);
  section.append(buttonSection);

  section.addEventListener("click", (e) => {
    e.preventDefault();

    for (const container of showsContainer.getElementsByClassName(
      "shows__table-cell"
    )) {
      container.classList.remove("shows__table-cell--active");
    }

    for (const container of section.getElementsByClassName(
      "shows__table-cell"
    )) {
      container.classList.add("shows__table-cell--active");
    }
  });
  section.addEventListener("mouseover", (e) => {
    e.preventDefault();

    for (const container of showsContainer.getElementsByClassName(
      "shows__table-cell"
    )) {
      container.classList.remove("shows__table-cell--hover");
    }

    for (const container of section.getElementsByClassName(
      "shows__table-cell"
    )) {
      container.classList.add("shows__table-cell--hover");
    }
  });
}

getItems('showdates').then((showsList) => {
    showsList.forEach((show) => displayShow(show));
  });