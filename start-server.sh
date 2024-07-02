## start an nginx server in docker at port 8080
docker pull nginx
docker build -t my-nginx-image .
docker run --name my-nginx-container -d -p 8080:80 my-nginx-image