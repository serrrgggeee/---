let root_nodes = '';
let place_right_side_html = '';

get_left_side(places);
left_side_ready();
let path = window.location.pathname;
router(path);
single_page();


function router(path) {
  if(path.includes('index.html')) {
    path = localStorage.getItem("link", path) ? localStorage.getItem("link"): path;
  }
  if((path[path.length -1]) != '/') {
    path = path[path.length -1] + '/'
  }
  for (const item in ROUNTERS) {
    const router = ROUNTERS[item];
    const re = new RegExp(item);
    match = re.exec(path)
    if (match !== null) {
      if(router.file) {
	      load_data(match, router.file, router.data);
        get_data(router.data).then(data=>{
	        router.method(match, data);
        })
      }
      return;
    }
  }
  window[default_page]()

}


function get_left_side(places) {
    for(let index in places) {
      category = places[index];
      if(category['is_root_node']) {
        root_nodes += `<a class="single_page_link parent" href="/${category['id']}/">${category['name']}</a>`;
        for(let index in places) {
          child = places[index];
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
  const href = target.pathname;
  try {
    toDesctiption();
  } catch(e) {

  }
  
  try {
    router(href)
    localStorage.setItem("link", href);
    history.pushState({}, null, target);
  } catch(e){
    console.log(e);
  }
  hideMenu();
}

function hideMenu() {
  const left_side = document.querySelector('.left-side .place');
  const hided_buton_show_menu = document.querySelector('.left-side .hided_buton_show_menu');
  left_side.style.display = 'none';
  hided_buton_show_menu.style.display = 'block';

  const namvbar  = document.getElementById('navbar');
  namvbar.classList.remove("in");
}

function showMenu() {
  const left_side = document.querySelector('.left-side .place');
  const hided_buton_show_menu = document.querySelector('.left-side .hided_buton_show_menu');
  left_side.style.display = 'block';
  hided_buton_show_menu.style.display = 'none';
}

function get_data(data_name) {
  return new Promise(function(resolve, reject) {
    let loop = () => { // use arrow function to capture "this"
      if(!window.hasOwnProperty(data_name)) setTimeout(loop, 1000);
      else  resolve(window[data_name]);
    }
    loop();
  })
}

function load_data(match, src_name=null, data_name=null) {
  if(!window.hasOwnProperty(data_name)) {
    const src = src_name? `${static_dot}/${src_name}.js`: `${static_dot}/${match}.js`;
    var s = document.createElement( 'script' );
    s.setAttribute( 'src', src );
    s.setAttribute( 'charset', 'utf-8' );
    document.body.appendChild( s );
  }
   
}

