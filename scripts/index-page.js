// Comment generation

const comments = [
  {
    user: "Victor Pinto",
    date: "11/02/2023",
    content:
      "This is art. This is inexplicable magic expressed in the purest way, everything that makes up this majestic work deserves reverence. Let us appreciate this for what it is and what it contains.",
  },
  {
    user: "Christina Cabrera",
    date: "10/28/2023",
    content:
      "I feel blessed to have seen them in person. What a show! They were just perfection. If there was one day of my life I could relive, this would be it. What an incredible day.",
  },
  {
    user: "Isaac Tadesse",
    date: "10/20/2023",
    content:
      "I can't stop listening. Every time I hear one of their songs - the vocals - it gives me goosebumps. Shivers straight down my spine. What a beautiful expression of creativity. Can't get enough.",
  },
];

function displayComment(comment) {
  const area = createElementWithClass("div", "comment__area");
  commentContainer.append(area);

  const avatar = createElementWithClass("div", "avatar comment__avatar");
  area.append(avatar);

  const body = createElementWithClass("div", "comment__body");
  area.append(body);

  const header = createElementWithClass("div", "comment__header");
  body.append(header);

  const user = createParagraph("comment__user", comment.user);
  header.append(user);

  const date = createParagraph("comment__date", comment.date);
  header.append(date);

  const content = createParagraph("comment__content", comment.content);
  body.append(content);
}

function createElementWithClass(type, className) {
  const element = document.createElement(type);
  element.className = className;
  return element;
}

function createParagraph(className, text) {
  const par = document.createElement("p");
  par.className = className;
  par.textContent = text;
  return par;
}

function render() {
  commentContainer.replaceChildren();
  comments.forEach(displayComment);
}

render();

// Comment submission

const form = document.getElementById("commentForm");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  let today = new Date();

  const comment = {
    user: e.target.nameInput.value,
    date: new Intl.DateTimeFormat("en-US", {
      month: "2-digit",
      day: "2-digit",
      year: "numeric",
    }).format(today),
    content: e.target.commentInput.value,
  };

  comments.push(comment);
  render();
  form.reset();
});
