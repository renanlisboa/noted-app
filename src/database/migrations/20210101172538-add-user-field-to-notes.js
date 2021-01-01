module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.addColumn('notes', 'user_id', {
      type: Sequelize.INTEGER,
      references: {
        model: 'users',
        key: 'id',
      },
      onUpdate: 'CASCADE',
      onDelete: 'CASCADE',
    });
  },

  down: async queryInterface => {
    return queryInterface.removeColumn('notes', 'user_id');
  },
};
