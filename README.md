uwsgi --http :9090 --ini uwsgi.ini --need-app
https://testdriven.io/courses/python-web-framework/requests-routing/
https://stackoverflow.com/questions/10091271/how-can-i-implement-a-simple-web-server-using-python-without-using-any-libraries
https://uwsgi-docs.readthedocs.io/en/latest/WSGIquickstart.html

https://github.com/klen/http-router


# sync media
    rsync -avu back/media/. front/media

# get places
    res=$(curl backend_url/places/)
    echo "window.places=$res" > places.js

    # local
        source .env
        source ./sync.sh

    # prod 
        source .env_prod
        source ./sync.sh
