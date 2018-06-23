const db = require("./indexDb");

const School = db.sequelize.define('school', { 

    school_name: db.sequelize.STRING,
    username: db.sequelize.STRING,
    plain_text_password: db.sequelize.STRING,
    address_street: db.sequelize.TEXT,
    address_city: db.sequelize.STRING,
    adress_state: db.sequelize.STRING,
    address_zipcode: db.sequelize.INTEGER,
    contact_name: db.sequelize.STRING,
    contact_title: db.sequelize.STRING,
    contact_phone: db.sequelize.INTEGER,
    contact_email: db.sequelize.STRING,
    main_phone: db.sequelize.INTEGER,
    main_phone_ext: db.sequelize.INTEGER,
    total_jobs: db.sequelize.INTEGER,
    completed_jobs: db.sequelize.INTEGER,
    unclaimed_jobs: db.sequelize.INTEGER,
    rating: db.sequelize.INTEGER,
    notes: db.sequelize.TEXT,
    date_registered: db.sequelize.DATEONLY

});