import Sequelize from 'sequelize';

import dbConfig from '../config/database';

import User from '../app/models/User';
import File from '../app/models/File';
import Category from '../app/models/Category';
import Group from '../app/models/Group';

const models = [User, File, Category, Group];

class Database {
  constructor() {
    this.init();
  }

  init() {
    this.connection = new Sequelize(dbConfig);

    models.map(model => model.init(this.connection));
    models.map(
      model => model.associate && model.associate(this.connection.models)
    );
  }
}

export default new Database();
