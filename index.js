const url = 'http://xn----7sbafc3bhdcb2bd2ahhn8ni8c.xn--p1ai/data.json';
let root_nodes = '';
let place_right_side_html = '';

const ROUNTERS = {
  '^\/(\\d{1,})\/$': place_ready,
  '^(/\)$': main_ready
}

get_left_side(result);
left_side_ready();
let path = window.location.pathname;
router(path);
single_page();


function router(path) {
  if((path[path.length -1]) != '/') {
    path = path[path.length -1] + '/'
  }

  for (const item in ROUNTERS) {
    const method = ROUNTERS[item];
    const re = new RegExp(item);
    match = re.exec(path)
    console.log(method);
    if (match !== null) {
      console.log(method);
      method(match, result);
      return;
    }
  }
  window[default_page]()

}


function get_left_side(result) {
    for(let index in result["categories"]) {
      category = result["categories"][index];
      if(category['is_root_node']) {
        root_nodes += `<a class="single_page_link parent" href="/${category['id']}/">${category['name']}</a>`;
        for(let index in result["categories"]) {
          child = result["categories"][index];
          if(child['parent'] == category['id']) {
            root_nodes += `<li><a class="single_page_link children" href="/${child['id']}/">${child['name']}</a></li>`;
          }
        }
      }
  }
}

function single_page() {
  
  const a = document.querySelectorAll(".single_page_link");
  a.forEach((input) => {
    input.addEventListener("click", linkClick, false);
  });
  const hided_buton_show_menu = document.querySelector('.left-side .hided_buton_show_menu');
  hided_buton_show_menu.addEventListener("click", showMenu, false);
}

function linkClick(event) {
  event.preventDefault();
  event.stopPropagation();
  const target = event.currentTarget;
  const href = target.pathname
  console.log(target);
  console.log(href);
  router(href)
  try {

  } catch {
    history.pushState({}, null, target);
  }
  hideMenu();
}

function hideMenu() {
  const left_side = document.querySelector('.left-side .place');
  const hided_buton_show_menu = document.querySelector('.left-side .hided_buton_show_menu');
  left_side.style.display = 'none';
  hided_buton_show_menu.style.display = 'block';
}

function showMenu() {
  const left_side = document.querySelector('.left-side .place');
  const hided_buton_show_menu = document.querySelector('.left-side .hided_buton_show_menu');
  left_side.style.display = 'block';
  hided_buton_show_menu.style.display = 'none';
}