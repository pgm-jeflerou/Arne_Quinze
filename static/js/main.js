(function () {

  const $go_top = document.querySelector(".go_top");
  $go_top.addEventListener("click", function (e) {
    e.preventDefault();
    window.scroll({
      top: 0,
      behavior: 'smooth' 
    });
  }, false)

}) ();

function createTags (artwork) {
  return artwork.tags.map((tag) => {
    return tag
  }).join(' / ');
}