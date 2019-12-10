**Created using parcel for a basic static site (html,css,js)**

```bash
  html includes
  sass compiler
  css autoprefixer
  Animation On Scroll library
  Materialize Library
```

## Steps

**Download or Pull This Repo**
Top of this page you can see where it says clone or download

**Install Node**
https://nodejs.org/en/

**Install Yarn-Optional**
https://yarnpkg.com/en/

**Install Parcel**
https://parceljs.org/

```bash
  yarn global add parcel-bundler
  npm install -g parcel-bundler
```

**Install all the node packages**

```bash
  npm install
  yarn install
```

**Start the dev server**
Server will run at http://localhost:1234

```bash
  npm run dev
  yarn dev
```

**Build production files**

```bash
  All files will build to ./build directory
  npm run production
  yarn production
```

**SCSS Structure**

```
assets/scss: Entry Folder
assets/scss/0-plugins:materialize,bootstrap etc
assets/scss/1-helpers: mixins,variables etc
assets/scss/2-base:resets,global styles, etc
assets/scss/3-layout:header,footer,nav, etc
assets/scss/4-modules:features, video, re-usable components etc
assets/scss/5-templates:any over-riding styles for layouts or modules
```

**Notes**

```bash
  In order to call js functions in your html document. You must call it via  index.function
  Ex: Is shown in the src/js/index.js file
  It is called in the src/index.html file by clicking on the H1 tag
```
