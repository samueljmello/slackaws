FROM node:8.11

#make our app directory and set it as the working directory
WORKDIR /usr/src/app

# copy in package.json and run the install (caching)
COPY package*.json ./
RUN npm i -y

# copy all the app files over
COPY . .

# expose the ports
EXPOSE 8080

# the command!
CMD [ "npm", "start" ]
