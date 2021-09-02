# blog-nodejs


1. Node
2. [express](https://www.npmjs.com/package/express)
3. [nodemon](https://www.npmjs.com/package/nodemon) --inspect src/index.js
4. [morgan](https://www.npmjs.com/package/morgan) (http logger)
5. [express-handlebars](https://www.npmjs.com/package/express-handlebars): template-engine
6. [node-sass](https://www.npmjs.com/package/node-sass)
   - `node-sass --watch src/resources/scss --output src/public/css`  
7. add bootstrap 4
8. Basic routing
9. Form default behavior
10. MVC
11. MongoDB
    - `npm i mongoose` 
    - [quick start](https://github.com/Automattic/mongoose)
    - [mongoose docs](https://mongoosejs.com/docs/connections.html)
    - [CRUD mongoose](https://mongoosejs.com/docs/models.html#constructing-documents)
    - `mongooseObject.toObject()` : nomarlize object to access `this.attr` in handlebars
    - Connect mongoose to MongoDB
     ```javascript 
         await mongoose.connect('mongodb://localhost:27017/db_name');
      ````   
    -  Create new table (schema)
      ```javascript
         const mongoose = require('mongoose');
         const slug = require('mongoose-slug-generator'); //generator name to slug

         mongoose.plugin(slug);

         const Schema = mongoose.Schema;


         const Course_schema = new Schema({
            name: { type: String, require: true },
            description: { type: String, maxLength: 600 },
            image: { type: String },
            videoId: { type: String, require: true},
            slug: { type: String, slug: 'name', unique: true },
         }, { timestamps: true, });

         module.exports = mongoose.model('Course', Course_schema);



         //new model

         const course = new Course(formData);
      ```
12. Express.Router
    - :slug
    - [mongoose-slug-generator](https://www.npmjs.com/package/mongoose-slug-generator) / unique: true
