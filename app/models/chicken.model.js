module.exports = (sequelize, Sequelize) => {
  const Chicken = sequelize.define("chicken", {
    name: {
      type: Sequelize.STRING,
      allowNull: false
    },
    birthday: {
      type: Sequelize.DATE,
      defaultValue: Sequelize.literal('CURRENT_TIMESTAMP')
    },
    weight: {
      type: Sequelize.FLOAT,
      allowNull: false
    },
    steps: {
      type: Sequelize.FLOAT,
      defaultValue: 0
    },
    isRunning: {
      type: Sequelize.BOOLEAN,
      defaultValue: false
    }
  });

  return Chicken;
};