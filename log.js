const {DataTypes} = require('sequelize');
const db = require('../db');

const Log = db.define('Logs',{
    description: {
        unique: true,
        type: DataTypes.STRING
    },
    definition: {
        type: DataTypes.STRING,
        unique: true
    },
    result:{
        type: DataTypes.STRING,
        unique: true

    },

    owner_id: {
        type: DataTypes.INTEGER,
        unique: true
    }
})

module.exports = Log