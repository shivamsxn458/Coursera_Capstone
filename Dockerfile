FROM  node:16.16.0

COPY . .

EXPOSE 3000

CMD ["npm", "start"]