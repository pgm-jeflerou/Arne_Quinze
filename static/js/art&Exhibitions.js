(function () {

  const $tags_nav = document.querySelector(".tags_nav");
  const $years_nav = document.querySelector(".years_nav");
  const $content_div = document.querySelector(".art-and-exhibitions");
  const tags = new Set();
  const years = new Set();
  let currentYear = 'null';
  let currentTag = 'null';
  let currentList = ARTWORKS;

  for (const artwork of ARTWORKS) {
    tags.add(...artwork.tags);
    years.add(artwork.year);
  }

  const tagsArray = [...tags];
  const yearsArray = [...years]

  function images(images) {
    return images.map((image) => {
      return `
      <li>
        <img src="static/img/art/${image}" loading="lazy">
      </li>
      `;
    }).join('');
  }

  function setUp() {
    createTagNav();
    createYearNav();
    createContent();
  }

  function createContent() {
    if (currentYear === 'null' && currentTag === 'null') {
      $content_div.innerHTML = yearsArray.map((year) => {
        return createHtmlYear(year)
      }).join('');
    } else if (currentYear !== 'null' && currentTag === 'null') {
      $content_div.innerHTML = createHtmlYear(currentYear);
    } else if (currentYear === 'null' && currentTag !== 'null') {
      $content_div.innerHTML = createHtmlTag(currentTag);
    } else {
      createHtmlYear(currentYear);
      $content_div.innerHTML = createHtmlTag(currentTag);
    }
  }

  function createTagNav() {
    $tags_nav.innerHTML = `<ul>
    <li class="current">
      <button class="tag_button" data-content=null>
        Show all
      </button>
    </li>` + tagsArray.map((tag) => {
      if (tag) {
        return `
        <li>
          <button data-content='${tag}' class="tag_button">
            ${tag}
          </button>
        </li>
      `;
      }
    }).join('')
  }

  function createYearNav() {
    $years_nav.innerHTML = `<ul>
  <li class="current">
    <button class="year_button" data-content=null>
      Show all
    </button>
  </li>` + yearsArray.map((year) => {
      return `
    <li>
      <button data-content='${year}' class="year_button">
        ${year}
      </button>
    </li>
  `;
    }).join("");
  }

  function createHtmlYear(year) {
    currentList = ARTWORKS.filter(artwork => artwork.year === year);
    return `
    <div>
    <h2>
      ${year}
    </h2>
    <ul class="works">
      ${currentList.map( (artwork) => {  
      return `
        <li>
        <a href='art-and-exhibitions/detail/index.html'>
      <h2>
        ${artwork.title}
      </h2>
      <span class="tags">
        ${createTags(artwork)}${artwork.location === null? "": ' - ' + artwork.location}
      </span>
        </a>
        <div class='images_container'>
        <ul class='images'>
        ${images(artwork.images)}
      </ul>
      </div>
        </li>
        `;
      }).join('')}
    </ul>
    </div>
    `;
  }

  function createHtmlTag(tag) {
    currentList = ARTWORKS.filter(artwork => {
      if (currentYear === 'null') {
        return artwork.tags.indexOf(tag) !== -1
      } else {
        if (artwork.year === currentYear) {
          return artwork.tags.indexOf(tag) !== -1
        } else {
          return false;
        }
      }
    });
    let years = new Set();
    for (const artwork of currentList) {
      years.add(artwork.year);
    }
    years = [...years];
    console.log(years);
    return years.map((year) => {
      const subList = currentList.filter(artwork => artwork.year === year);
      return `
    <div>
    <h2>
      ${year}
    </h2>
    <ul class="works">
      ${subList.map( (artwork) => {  
      return `
        <li>
        <a href='art-and-exhibitions/detail/index.html'>
          <h2>
            ${artwork.title}
          </h2>
          <span class="tags">
            ${createTags(artwork)}${artwork.location === null? "": ' - ' + artwork.location}
          </span>
          </a>
          <div class='images_container'>
          <ul class='images'>
            ${images(artwork.images)}
          </ul>
          </div>
        </li>
        `;
      }).join('')}
    </ul>
    </div>
    `;
    }).join('');
  }

  setUp();

  $yearButtons = document.querySelectorAll(".year_button");
  console.log($yearButtons)
  $yearButtons.forEach(button => {
    button.addEventListener("click", (button) => {
      currentYear = button.target.dataset.content;
      if (currentYear === 'null' && currentTag === 'null') {
        currentList = ARTWORKS;
      }
      createContent();
      console.log(currentYear);
    }, false)
  });

  $tagsButtons = document.querySelectorAll(".tag_button");
  for (const button of $tagsButtons) {
    button.addEventListener("click", (button) => {
      currentTag = button.target.dataset.content;
      if (currentTag === 'null' && currentYear === 'null') {
        currentList = ARTWORKS;
      } else if (currentTag === 'null') {

      }
      createContent();
      console.log(currentTag);
    }, false)
  }

})();