module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.addColumn('notes', 'group_id', {
      type: Sequelize.INTEGER,
      references: {
        model: 'groups',
        key: 'id',
      },
      onUpdate: 'CASCADE',
      onDelete: 'CASCADE',
    });
  },

  down: async queryInterface => {
    return queryInterface.removeColumn('notes', 'group_id');
  },
};
