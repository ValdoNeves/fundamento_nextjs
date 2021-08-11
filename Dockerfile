#minimal version of function with node
FROM  node:alpine

#my work diretory in the container
WORKDIR /usr/app

#copy files with name contains package with extention is .json
COPY package*.json ./

#run this command in terminal
RUN npm install

#copy everthing that diretory in my machine for /usr/app
COPY . .

EXPOSE 3000

CMD ["npm","run","start"]

