let result;
const url = '../data.json';
let root_nodes = '';
let place_right_side_html = '';

const ROUNTERS = {
  '^\/(\\d{1,})\/$': place_ready,
  '^(/\)$': main_ready
}

var getJSON = function(url, callback) {
    var xhr = new XMLHttpRequest();
    xhr.open('GET', url, false);
    
    xhr.onload = function() {
      var status = xhr.status;
      if (status === 200) {
        callback(null, xhr.response);
      } else {
        callback(status, xhr.response);
      }
    };
    xhr.send();
};
if (document.readyState == 'loading') { 
    getJSON(url,
      function(err, data) {
          if (err !== null) {
              console.log('Something went wrong: ' + err);
          } else {
            result = JSON.parse(data);
            get_left_side(result);
            left_side_ready();
            let path = window.location.pathname;
            router(path);
            single_page();
          }
      });
}


function router(path) {
  if((path[path.length -1]) != '/') {
    path = path[path.length -1] + '/'
  }

  for (const item in ROUNTERS) {
    const method = ROUNTERS[item];
    const re = new RegExp(item);
    match = re.exec(path)
    if (match !== null) {
      method(match, result);
      return;
    }
  }
  page_not_found();

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
}

function linkClick(event) {
  event.preventDefault();
  const target = event.target;
  const href = target.pathname
  router(href)
  history.pushState({}, null, target);
}