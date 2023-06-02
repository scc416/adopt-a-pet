# Adopt a Pet

See the `master` branch's `README.md` for information about this application. This `README.md` (on branch `production`) is the documentation of the deployment (changes that need to be made for deployment to happen).

## Table of Content

- [Client](#client)
- [Server](#server)

## Client

1. New file: `public/_redirects`

```
/api/*  https://pet--api.herokuapp.com/api/:splat 200
/*  /index.html 200
```

## Server

1. Install cors and add settings to `server/server.js`

```
const cors = require("cors");

const corsOptions = {
  origin: "https://the-pets.netlify.app",
  methods: "GET,POST",
  allowedHeaders: ["Content-Type", "Authorization"],
};

app.use(cors(corsOptions));
```

2. Includes the version of node in `package.json`:

```
"engines": {
  "node": "12.22.5"
}
```

3. Add a line to `server/lib/db.js`

```
dbParams.ssl = { rejectUnauthorized: false };
```
