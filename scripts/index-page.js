import getItems, { postComment, timestampToDate } from "./band-site-api.js";

function displayComment(comment) {
  const area = createElementWithClass("div", "comment__area");
  commentContainer.append(area);

  const avatar = createElementWithClass("div", "avatar comment__avatar");
  area.append(avatar);

  const body = createElementWithClass("div", "comment__body");
  area.append(body);

  const header = createElementWithClass("div", "comment__header");
  body.append(header);

  const user = createParagraph("comment__user", comment.name);
  header.append(user);

  const date = createParagraph(
    "comment__date",
    timestampToDate(comment.timestamp)
  );
  header.append(date);

  const content = createParagraph("comment__content", comment.comment);
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
  getItems("comments").then((commentList) => {
    commentList.forEach((comment) => displayComment(comment));
  });
}

render();

// Comment submission

const form = document.getElementById("commentForm");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const comment = {
    name: e.target.nameInput.value,
    comment: e.target.commentInput.value,
  };

  postComment(comment).then(
    setTimeout(() => {
      render();
    }, 1000)
  );

  form.reset();
});
