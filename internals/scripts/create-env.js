const fs = require('fs');
fs.writeFileSync('./.env', `CLIENT_ID=${process.env.CLIENT_ID}\nCLIENT_SECRET=${process.env.CLIENT_SECRET}`)
