module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.addColumn('groups', 'category_id', {
      type: Sequelize.INTEGER,
      references: {
        model: 'categories',
        key: 'id',
      },
      onUpdate: 'CASCADE',
      onDelete: 'CASCADE',
    });
  },

  down: async queryInterface => {
    return queryInterface.removeColumn('groups', 'category_id');
  },
};
