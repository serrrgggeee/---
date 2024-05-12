function create_urls(pages, getHref) {
    let urls = '';
    for(let index in pages) {
        const page = pages[index];
        const href = getHref(page)
        const date_array = new Date().toLocaleDateString().split('.')
        const date = [date_array[2], date_array[1], date_array[0]].join('-');
        const changefreq = 'monthly';
        urls += `<url>
            <loc>${domain}${href}</loc>
            <lastmod>${date}</lastmod>
            <changefreq>${changefreq}</changefreq>
        </url>`
    }
    return urls;
}

function create_sitemap(pages, getHref) {
    const urls = create_urls(pages, getHref);
    return `<?xml version="1.0" encoding="UTF-8"?>
        <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"> 
            ${urls}
        </urlset>
    `;
}