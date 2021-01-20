import Sequelize, { Model } from 'sequelize';

class Group extends Model {
  static init(sequelize) {
    super.init(
      {
        name: Sequelize.STRING,
      },
      { sequelize }
    );

    return this;
  }

  static associate(models) {
    this.belongsTo(models.Category, {
      foreignKey: 'category_id',
      as: 'category',
    });

    this.belongsTo(models.User, {
      foreignKey: 'user_id',
      as: 'user',
    });

    this.hasMany(models.Note, {
      foreignKey: 'group_id',
      as: 'note',
    });
  }
}

export default Group;
