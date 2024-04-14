import json
import os
from http_router import Router
from http_router.exceptions import NotFoundError

def application(environ, start_response):
    app = Application(environ, start_response) 
    app.get_headers(start_response)
    return [app.run()]
    

class Application:
    def __init__(self, environ, start_response) -> None:
        self.environ = environ
        self.start_response = start_response

    def get_headers(self, start_response):
        headers = [
            ('Content-Type', 'application/json'),
            ('Access-Control-Allow-Origin', '*'),
            ('Access-Control-Allow-Headers', '*'),
            ('Access-Control-Allow-Methods', 'POST'),
        ]
 
        start_response('200 OK', headers) 

    def run(self):
        router = Router(trim_last_slash=True)
        @router.route('/categories/{id}')
        def categories(id=None):
            path = os.path.abspath('data.json')
            with open(path) as json_string:
                data = json.loads(json_string.read())
                data_string_json = json.dumps(data)
                return data_string_json.encode('utf-8')


        try:
            match = router(self.environ['PATH_INFO'], method=self.environ['REQUEST_METHOD'])
        except NotFoundError:
            return []
        else:
            return match.target(match.params['id'])



    