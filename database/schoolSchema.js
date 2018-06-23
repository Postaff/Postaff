const db = require("./db.js");

const School = sequelize.define('school', { 
    school_name: Sequelize.STRING,
    username: Sequelize.STRING,
    plain_text_password: Sequelize.STRING,
    address_street: Sequelize.TEXT,
    address_city: Sequelize.STRING,
    adress_state: Sequelize.STRING,
    address_zipcode: Sequelize.INTEGER,
    contact_name: Sequelize.STRING,
    contact_title: Sequelize.STRING,
    contact_phone: Sequelize.INTEGER,
    contact_email: Sequelize.STRING,
    main_phone: Sequelize.INTEGER,
    main_phone_ext: Sequelize.INTEGER,
    total_jobs: Sequelize.INTEGER,
    completed_jobs: Sequelize.INTEGER,
    unclaimed_jobs: Sequelize.INTEGER,
    rating: Sequelize.INTEGER,
    notes: Sequelize.TEXT,
    date_registered: Sequelize.DATEONLY
});