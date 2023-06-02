# Layers get cached if nothing changes
FROM node:12

WORKDIR /app

COPY package*.json ./

RUN npm install
# (SHELL FORM)

COPY . .

ENV PORT=8080

EXPOSE 8080

# Only 1 of these per dockerfile
CMD [ "npm", "start"]
# (EXEC FORM) - preferred way as it doesnt start up a shell session
