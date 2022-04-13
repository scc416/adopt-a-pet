# Adopt A Pet

A [Vue.js](https://vuejs.org/) app for pet adoption, with pet data fetched from the [Petfinder API](https://www.petfinder.com/). Visitors can view and save pets, search with keywords and/or filters.

## Table of Content

- [Live Demo](#live-demo)
- [Final Product](#final-product)
- [Dependencies](#dependencies)
- [Getting Started](#getting-started)
- [Credits](#credits)

## Live Demo

The server is deployed to [Heroku](https://heroku.com/). [Netlify](https://www.netlify.com/) serves the static client assets:

https://the-pets.netlify.app/

## Final Product

## Dependencies

### Frontend

- [Vue.js](vuejs.org/)
- [Axios](https://axios-http.com/)
- [Vue 3 Slider](https://github.com/vueform/slider): slider for varying distance in filter
- [Vue-Multiselect](https://vue-multiselect.js.org/): filters
- [Vue Material Design Icon Components](https://github.com/robcresswell/vue-material-design-icons)

### Backend

- [Express](https://expressjs.com/)
- [cookie-session](https://github.com/expressjs/cookie-session)
- [pg](https://www.npmjs.com/package/pg)
- [nodemon](https://nodemon.io/): reload the server when there is a change in the file during development

## Getting Started

1. Clone or download this repository onto your local device.
2. `cd` to the folder where this project is cloned.
3. Install all dependencies with `npm install` command.
4. Create a `.env.local` file by copying the contents from `.env`:

- Set up your [PostgreSQL](https://www.postgresql.org/) database for this project and fill in the values for `DB_HOST`, `DB_USER`, `DB_PASS` and `DB_NAME`
- Get API key from [Petfinder API](https://www.petfinder.com/developers/) and fill in the values for `VUE_APP_ID` and `VUE_APP_SECRET`
- Fill in the `SECRET` value for the cookie sessions

5. Create tables in the database with the files in `server/db/schema`.
6. Run the server with `npm start` command.
7. Run the app in the development mode with `npm run serve` command.
8. Open the broswer and visit: [http://localhost:3001/](http://localhost:3001/).

## Credits

- [Petfinder API](https://www.petfinder.com/developers/)

- [Design](https://www.behance.net/gallery/134895919/Puppos-Dog-Adoption-Matchmaker-Design-Sprint-Case-Study) by [Christy Chan](https://www.behance.net/christykchan) on [behance](behance.net/)

- [Favicon](https://www.flaticon.com/premium-icon/paws_4225935) by [Creatype](https://www.flaticon.com/authors/creatype) in [flaticon](https://www.flaticon.com/)

- [Backgrouund image on home page](https://unsplash.com/photos/O_UbPKaz6no) by [Slavy Darozhkin](https://unsplash.com/@hashtaglilac) on [Unsplash](https://unsplash.com)
