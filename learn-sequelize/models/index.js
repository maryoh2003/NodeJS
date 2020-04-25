const path = require('path');
const Sequelize = require('sequelize');

const env = process.env.NODE_ENV || 'development';
const config = require(__dirname + '/../config/config.json')[env];
const db = {};

const sequelize = new Sequelize(config.database, config.username, config.password, config);

db.sequelize = sequelize;
db.Sequelize = Sequelize;

db.User = require('./user')(sequelize, Sequelize);
db.Comment = require('./comment')(sequelize, Sequelize);
// db라는 객체에 User와 Comment 모델을 담아두었다. 앞으로 db 객체를 require하여 User와 Comment 모델에 접근할 수 있다.

db.User.hasMany(db.Comment, {foreignKey: 'commenter', sourceKey: 'id'});
db.Comment.belongsTo(db.User, {foreignKey: 'commenter', targetKey: 'id'});

module.exports = db;
