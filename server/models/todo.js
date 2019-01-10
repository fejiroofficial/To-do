'use strict';
module.exports = (sequelize, DataTypes) => {
  const Todo = sequelize.define('Todo', {
    title: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  });

  Todo.associate = (models) => {
    Todo.hasMany(models.TodoItem, {
      foreignKey: 'todoId',
      as: 'todoItems',
    });
  };
  return Todo;
};

// const Sequelize = require("sequelize");
// class TodoModel extends Sequelize.Model {

//   static init(sequelize, DataTypes) {
//     return super.init({
//         title: {
//           type: DataTypes.STRING,
//           allowNull: false,
//         }
//       },
//       { sequelize }
//     );
//   }

//   static associate(models) {
//     // this.myAssociation = this.belongsTo(models.OtherModel);
//     // // or
//     // this.myAssociation = models.MyModel.belongsTo(models.OtherModel);
//     Todo.hasMany(models.TodoItem, {
//       foreignKey: 'todoId',
//       as: 'todoItems',
//     });
//   };
// }

