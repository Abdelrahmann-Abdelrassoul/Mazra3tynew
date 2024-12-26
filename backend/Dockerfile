#Get node image
FROM node:16
#set up workin directory
WORKDIR /app
#copy the packages files and set the to the current working dir
COPY package*.json ./
#clean install of all dependecies 
RUN npm install
#copy sourcecode
COPY . .
# Expose the backend service port
EXPOSE 3000
#sepcify the run commands
CMD ["npm", "start"]