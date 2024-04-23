function main_ready() {
		block_content_html = `
			<right-side></right-side>
		`
		const app_block_content = document.getElementById('app-block-content');
   		app_block_content.innerHTML = block_content_html;

		const head_html = `
		   <meta name="title" content="Октябрьский район Волгоградская область">
		   <title>Октябрьский район Волгоградская область. Mеста, природа, общество</title>
		   <meta name="description" content="Октябрьский район Волгоградская область">
		   <meta name="keywords" content="Октябрьский район Волгоградская область">
	   	`
		const head_html_content = document.getElementById('head');
		head_html_content.innerHTML = head_html;

		const first_category = result["categories"][0];
		let slides_category = `
			<div class="item active">
				<a class="single_page_link" href="/${first_category.id}/">
					<img src="${first_category.image_description}" alt=""/>

					<div class="col-md-12">
						<p class="text-center labale">${first_category.name} ${first_category.type_place}</p>
					</div>
				</a>
			</div>
		`;
		const categories = result["categories"].slice(1,-1)
		for(let index in categories) {
			category = categories[index];
			const image = category.image_description? category.image_description: `https://placehold.it/1050x600&text=${ category.name }`

			slides_category += `
				<div class="item">
					<a class="single_page_link" href="/${category.id}/">
						<img src="${image}" alt=""/>

						<div class="col-md-12">
							<p class="text-center labale">${category.name} ${category.type_place}</p>
						</div>
					</a>
				</div>
			`;
				
		}


		const right_side_html = `
			<div class="col-md-12 right-side">
				<div class="row slider">
					<div id="carousel-example-generic" class="carousel slide" data-ride="carousel">
						<div class="carousel-inner" role="listbox">
							${slides_category}
						</div>
					</div>
				</div>
				<video-content></video-content>
			</div>
		`
		
		class RightSideContent extends HTMLElement {
			connectedCallback() {
				this.innerHTML = right_side_html;
			}
		}
		window.customElements.define("right-side", RightSideContent)
		
		

		const side_menu_html = `
			<p>side menu</p>
		`
		class SideMenuContent extends HTMLElement {
			connectedCallback() {
				this.innerHTML = side_menu_html;
			}
		}
		window.customElements.define("side-menu", SideMenuContent)



		const videos = result["videos"]
		let videos_li = '';
		for(let index in videos) {
			video = videos[index];

			videos_li += `
				<li id="${video.url}" class="play_video">${video.name}</li>
			`;
				
		}

		const video_html = `
			<div class="row video">
				<div class="col-md-12">
					<h3>Видео Октябрьского района</h3>
					<div class="row">
						<div class="col-md-12">
							<div class="embed-responsive embed-responsive-16by9">
								<div id="player" class="embed-responsive-item"></div>
							</div>
						</div>
						<div class="col-md-12">
						<!-- Indicators -->
							<ol class="playlist_vide">
								${videos_li}
							</ol>
					</div>
					</div>
				</div>
			</div>
		`
		
		class VideoContent extends HTMLElement {
			connectedCallback() {
				this.innerHTML = video_html;
			}
		}
		window.customElements.define("video-content", VideoContent)
}