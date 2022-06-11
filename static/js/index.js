(function () {

  const $cover_art = document.querySelector(".cover_art");
  const $cover_atelier = document.querySelector(".cover_atelier");

  function createLayout1(artwork) {
    return `
    <li>
    <a href='art-and-exhibitions/detail/index.html'>
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
    <span class="underline">
      learn more
    </span>
    </a>
    </li>
    `
  }

  function createLayout2(artwork) {
    return `
    <li>
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
    <span class="underline">
      learn more
    </span>
    </a>
    </li>
    `
  }

  $cover_art.innerHTML = '<ul>' + ARTWORKS.map( (artwork) => {
    if(artwork.highlight === true){
      return createLayout1(artwork);
    } else {
      return "";
    }
  }).join("") + '</ul>';

  let html = "<ul>";
  for(let i = 0;i < 3; i++){
    html += createLayout2(ATELIERS[i]);
  }
  $cover_atelier.innerHTML = html + '</ul>';

}) ();