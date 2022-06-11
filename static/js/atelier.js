(function () {
  const $Atelier = document.querySelector(".Atelier");

  function createLayout(artwork) {
    return `
    <li class='atelier_container'>
    <a href='atelier-studio/detail/index.html'>
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
    <span class="underline atelier">
      learn more
    </span>
    </a>
    </li>
    `
  }

  $Atelier.innerHTML = '<ul>' + ATELIERS.map((atelier) => {
    return createLayout(atelier);
  }).join('') + '</ul>';
})();