const shows = [
  {
    date: "Mon Sept 09 2024",
    venue: "Ronald Lane",
    location: "San Francisco, CA",
  },
  {
    date: "Tue Sept 17 2024",
    venue: "Pier 3 East",
    location: "San Francisco, CA",
  },
  {
    date: "Sat Oct 12 2024",
    venue: "View Lounge",
    location: "San Francisco, CA",
  },
  {
    date: "Sat Nov 16 2024",
    venue: "Hyatt Agency",
    location: "San Francisco, CA",
  },
  {
    date: "Fri Nov 29 2024",
    venue: "Moscow Center",
    location: "San Francisco, CA",
  },
  {
    date: "Wed Dec 18 2024",
    venue: "Press Club",
    location: "San Francisco, CA",
  },
];

function displayShow(show) {
  const section = createContainer("shows__section");
  showsContainer.append(section);

  for (const [key, value] of Object.entries(show)) {
    const info = createContainer("shows__info");
    const label = createElementWithText("p", "label shows__info-label", key);
    const val = createElementWithText("p", "shows__info-value", value);

    info.append(label);
    info.append(val);

    section.append(info);
  }

  const buttonContainer = createContainer("shows__button-container");
  const button = createElementWithText("button", "button shows__button", "Buy Tickets");
  buttonContainer.append(button);
  section.append(buttonContainer);

  console.log(section);
}

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

shows.forEach(displayShow);

//date
//venue
//location
//button
