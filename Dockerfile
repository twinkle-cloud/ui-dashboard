FROM hub.twinkle.net:8443/system/alpine-nginx

RUN mkdir /code
ADD www/build /code
ADD docker /code
WORKDIR /code
RUN touch -c /code/index.html

CMD ./run.sh

