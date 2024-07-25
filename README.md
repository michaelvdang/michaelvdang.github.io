# portfolio-starter
# michaelvdang.github.io

add homepage attribute to package.json
  "homepage": "https://michaelvdang.github.io/",

# to build app
npm run build

# to copy to server, make sure there is an ssh key in .ssh/<key_name>.pem
scp -r -i ~/.ssh/<key_name>.pem build <username>@<server_ip_or_domain_name>:.
# or
scp -r -i ~/.ssh/<key_name>.pem build ubuntu@michaeldang.dev:.


# ssh into server to copy to location specified by NGINX
# for my case
sudo cp -r build/* /var/www/michaeldang.dev/html/