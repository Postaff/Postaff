const db = require("./indexDb.js");

const School = db.sequelize.define('school', { 
    school_name: db.sequelize.Sequelize.STRING,
    username: db.sequelize.Sequelize.STRING,
    plain_text_password: db.sequelize.Sequelize.STRING,
    address_street: db.sequelize.Sequelize.TEXT,
    address_city: db.sequelize.Sequelize.STRING,
    adress_state: db.sequelize.Sequelize.STRING,
    address_zipcode: db.sequelize.Sequelize.INTEGER,
    contact_name: db.sequelize.Sequelize.STRING,
    contact_title: db.sequelize.Sequelize.STRING,
    contact_phone: db.sequelize.Sequelize.INTEGER,
    contact_email: db.sequelize.Sequelize.STRING,
    main_phone: db.sequelize.Sequelize.INTEGER,
    main_phone_ext: db.sequelize.Sequelize.INTEGER,
    total_jobs: db.sequelize.Sequelize.INTEGER,
    completed_jobs: db.sequelize.Sequelize.INTEGER,
    unclaimed_jobs: db.sequelize.Sequelize.INTEGER,
    rating: db.sequelize.Sequelize.INTEGER,
    notes: db.sequelize.Sequelize.TEXT,
    date_registered: db.sequelize.Sequelize.DATEONLY
});

School.sync();

module.exports.School = School;