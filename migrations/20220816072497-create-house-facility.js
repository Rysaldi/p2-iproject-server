"use strict";
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("HouseFacilities", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      HouseId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: "Houses",
          key: "id",
        },
        onDelete: "cascade",
        onUpdate: "cascade",
      },
      FacilityId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: "Facilities",
          key: "id",
        },
        onDelete: "cascade",
        onUpdate: "cascade",
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable("HouseFacilities");
  },
};
