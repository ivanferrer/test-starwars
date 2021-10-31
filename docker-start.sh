#!/bin/bash
echo 'var ProcessEnv = {' > /usr/share/nginx/html/env.js

filename="configmap-$STAGE.env"
n=1
while read line; do
l="${line//=/:\'}"
l=$(echo $l | sed -e 's/\r//g')
echo -e "${l}'," >> /usr/share/nginx/html/env.js
n=$((n+1))
done < $filename

echo '};' >> /usr/share/nginx/html/env.js
echo 'window.processEnv = ProcessEnv;' >> /usr/share/nginx/html/env.js

/usr/sbin/nginx -g "daemon off;"