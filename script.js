const followButton = document.querySelector(".follow-button");
const likeButton = document.querySelector(".like-button");
const saveButton = document.querySelector(".save-button");
const commentButton = document.querySelector(".comment-button");
const commentForm = document.querySelector("#comment-form");
const commentInput = document.querySelector("#comment-input");
const commentList = document.querySelector("#comment-list");
const commentCount = document.querySelector("#comment-count");

function togglePressed(button) {
  const pressed = button.getAttribute("aria-pressed") === "true";
  button.setAttribute("aria-pressed", String(!pressed));
  return !pressed;
}

followButton.addEventListener("click", () => {
  followButton.textContent = togglePressed(followButton) ? "已关注" : "关注";
});

likeButton.addEventListener("click", () => {
  likeButton.setAttribute("aria-label", togglePressed(likeButton) ? "取消点赞" : "点赞");
});

saveButton.addEventListener("click", () => {
  saveButton.setAttribute("aria-label", togglePressed(saveButton) ? "取消收藏" : "收藏");
});

commentButton.addEventListener("click", () => commentInput.focus());

commentForm.addEventListener("submit", (event) => {
  event.preventDefault();
  const text = commentInput.value.trim();
  if (!text) {
    commentInput.focus();
    return;
  }

  const comment = document.createElement("article");
  comment.className = "comment";
  const avatar = document.createElement("img");
  avatar.className = "avatar";
  avatar.src = "images/头像-自己.jpg";
  avatar.alt = "";
  const body = document.createElement("div");
  body.className = "comment-body";
  const name = document.createElement("span");
  name.className = "comment-name";
  name.textContent = "我";
  const content = document.createElement("p");
  content.textContent = text;
  body.append(name, content);
  comment.append(avatar, body);
  commentList.append(comment);
  commentCount.textContent = String(commentList.children.length);
  commentInput.value = "";
  comment.scrollIntoView({ block: "nearest", behavior: "smooth" });
});