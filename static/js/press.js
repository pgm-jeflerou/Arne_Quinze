(function () {
  const $Press = document.querySelector(".Press");

  function createLayout(artwork) {
    return `
    <li class='article_container'>
    <a href='press/detail/index.html'>
    <img src="static/img/art/${artwork.images[0]}">
    <span class="tags">
      ${createTags(artwork)}${artwork.location === null? "": ' - ' + artwork.location}
    </span>
    <h2>
      ${artwork.title}
    </h2>
    <p>
      ${artwork.subtitle}
    </p>
    <span class="underline press">
      open press release
    </span>
    </a>
    </li>
    `
  }

  $Press.innerHTML = '<ul>' + PRESS_ARTICLES.map((article) => {
    return createLayout(article);
  }).join('') + '</ul>';
}) ();