function place_ready(match, result) {
    const place = result['categories'].find((element) => element['id'] == match[1]);
    
    let photos = '';
    let photos_corousel = '';
    for(let index in place["photo"]) {
        const photo = place["photo"][index];
        photos += `
            <div class="col-md-3 col-md-offset- col-sm-3 col-xs-12 thumb text-center">
                <div class="image">
                    <a class="thumbnail img-responsive" data-fancybox-group="group" id="image-${index}" title="${photo['name']}" src="" alt="${photo['name']}">
                        <img class="img-responsive" src="${photo['image']}" alt="${photo['name']}">
                    </a>
                    <a class="name_link" href="${photo['image']}" title="${photo['name']}">${photo['name']}</a>
                </div>
            </div>`;
        photos_corousel += `
            <div id="slide-image-${index}" class="item">
                <img src="${photo['image']}" alt="${photo['name']}" height="100%">
                <div class="img-description"><p>${photo['name']}</p></div>
            </div>
        `;

    } 

    place_right_side_html = `
        <div class="col-md-12 col-md-offset- right-side">
            <div class="row single_place">
        
                <div itemprop="description" class="col-md-12">
                            <h1>${place['name']}</h1>
                        </div>
                        <div class="col-md-12">
                            ${place['description']}
                        </div>
                        <div class="col-md-12">
                            ${photos}
                        </div>
                <div class="col-md-12 col-md-offset- col-sm-12 col-xs-12 delimiter">
                </div>
                <!-- Lightbox -->
                <div class="modal" id="modal-gallery" role="dialog">
                <div class="modal-dialog">
                <div class="modal-content">
                <div class="modal-header">
                    <button class="close" type="button" data-dismiss="modal">×</button>
                    <h3 class="modal-title"></h3>
                </div>
                <div class="modal-body">
                    <div id="modal-carousel" class="carousel">
                        <div class="carousel-inner">
                            ${photos_corousel}
                        </div>
                        <a class="carousel-control left" href="#modal-carousel" data-slide="prev"><i class="chevron-left"></i></a>
                        <a class="carousel-control right" href="#modal-carousel" data-slide="next"><i class="chevron-right"></i></a>

                    </div>
                </div>
                <div class="modal-footer">
                    <button class="btn btn-default" data-dismiss="modal">Close</button>
                </div>
                </div>
                </div>
                </div>
            </div>
        </div>
        `

    block_content_html = `
        <place-right-side></place-right-side>
    `

    const app_block_content = document.getElementById('app-block-content');
    app_block_content.innerHTML = block_content_html;
    carousel();

    let root_nodes = '';
    for(let index in result["categories"]) {
        category = result["categories"][index];
        if(category['is_root_node']) {
            root_nodes += `<a class="parent" href="${category['id']}/">${category['name']}</a>`;
            for(let index in result["categories"]) {
                child = result["categories"][index];
                if(child['parent'] == category['id']) {
                    root_nodes += `<li><a class="children" href="${child['id']}/">${child['name']}</a></li>`;
                }
            }
        }
    }
    
}