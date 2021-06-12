FROM denoland/deno

RUN apt-get update -y \
 && apt-get install -y git unzip wget

# ngrok
RUN wget https://bin.equinox.io/c/4VmDzA7iaHb/ngrok-stable-linux-amd64.zip \
 && unzip ngrok-stable-linux-amd64.zip \
 && rm ngrok-stable-linux-amd64.zip \
 && mv ngrok /usr/local/bin/ngrok

# deno
RUN deno install --allow-read --allow-write --allow-env --allow-net --allow-run --no-check -f https://deno.land/x/deploy/deployctl.ts
