function page_not_found() {
    block_content_html = `
        <h1>Страница не найдена!</h1>
    `
    const app_block_content = document.getElementById('app-block-content');
   	app_block_content.innerHTML = block_content_html;
}