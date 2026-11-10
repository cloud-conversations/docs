const home = document.querySelector(".md-header__button.md-logo");
const title = document.querySelector(".md-header__topic:first-child .md-ellipsis");
const link = Object.assign(document.createElement("a"), { href: home.href, className: "md-ellipsis" });
link.textContent = title.textContent.trim();
title.replaceWith(link);
