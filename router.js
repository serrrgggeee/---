function load_router() {
	setTimeout(() => {
		try{
			window.ROUNTERS = {
				'^\/(\\d{1,})\/$': {'method': place_ready, 'file': 1, 'data': 'places'},
				'^\/book\/(\\d{1,})\/$': {'method': book_ready, 'file': 'book_data', 'data': 'book_result'},
				'^(/\)$': {'method': main_ready, 'file': 'data', 'data': 'result'}
			}
		}catch{
			load_router();
		}

	}, 0);
}

load_router();