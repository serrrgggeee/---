function book_ready(match, books) {
    let contents = '';
    for(let index in books) {
        const page = books[index];
        contents += `<li><a class="single_page_link" href="/book/${page['id']}/" title="${page['name']}">${page['name']}</a></li>`;
    } 
    const contents_html = `
        <div class="col-md-12>
            <ul>${contents}</ul>
            
        </div>
    `

    class СontentsContent extends HTMLElement {
        connectedCallback() {
            this.innerHTML = contents_html;
        }
    }
    console.log(match[1]);
    // check if <contents-book> is registered
    if(customElements.get('contents-book') === undefined) {
        window.customElements.define("contents-book", СontentsContent)
        console.log('custom element not defined');
    }
    else {
        console.log('custom element is defined');
    }
    

    const book = books.find((element) => element['id'] == match[1]);
    block_content_html = `
        <contents-book></contents-book>
        <div class="col-md-12 col-md-offset- right-side">
            <!--button type="button" class="btn btn-primary btn-lg" onclick="App.book_context_views('/book/ajax/${book['parent']}/')" id="btn_book_context" data-toggle="modal" data-target="#myModal">
                Содержание книги
            </button-->

            <div class="row single_place">
                <div class="col-md-12">
                </div>
                <div itemprop="description" class="col-md-12">

                        <h1 class="text-center">${book['name']}</h2>
                        ${book['description']}

                </div>
            </div>
            <div class="row">
                <span class="share__title">Поделиться:</span>
                <a onclick="Share.vkontakte('{{ request.build_absolute_uri }}','Октябрьский район ','','Октябрьский район ')"class="social__link" ><img src="${static_dot}/static/soc/soc1.png" alt="image"></a>
                <a onclick="Share.facebook('{{ request.build_absolute_uri }}','Октябрьский район ','','Октябрьский район ')" class="social__link"><img src="${static_dot}/static/soc/soc2.png" alt="image"></a>
                <a onclick="Share.twitter('{{ request.build_absolute_uri }}','Октябрьский район ','','Октябрьский район ')" class="social__link"><img src="${static_dot}/static/soc/soc3.png" alt="image"></a>
                <a onclick="Share.odnoklassniki('{{ request.build_absolute_uri }}','Октябрьский район ','','Октябрьский район ')"class="social__link"><img src="${static_dot}/static/soc/soc4.png" alt="image"></a>
                <a onclick="Share.mailru('{{ request.build_absolute_uri }}','Октябрьский район ','','Октябрьский район ')" class="social__link"><img src="${static_dot}/static/soc/soc5.png" alt="image"></a>
                <a onclick="Share.google('{{ request.build_absolute_uri }}','Октябрьский район ','','Октябрьский район ')" class="social__link"><img src="${static_dot}/static/soc/soc7.png" alt="image"></a>
            </div>
            <div class="row delimiter">
            </div>
        </div>

    `
    const app_block_content = document.getElementById('app-block-content');
    app_block_content.innerHTML = block_content_html;
    single_page();

    const head_html = `
		   <meta name="title" content="${book['name']}">
		   <title>${book['name']}</title>
		   <meta name="description" content="${book['name']}">
		   <meta name="keywords" content="${book['name']}">
	   	`
	const head_html_content = document.getElementById('app-head');
	head_html_content.innerHTML = head_html;
}