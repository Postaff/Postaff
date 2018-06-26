const db = require("./indexDb");

const Job = db.sequelize.define('job', { 
    
    description: db.sequelize.Sequelize.TEXT,
    School_id: db.sequelize.Sequelize.INTEGER,
    start_time: db.sequelize.Sequelize.INTEGER,
    end_time: db.sequelize.Sequelize.INTEGER, 
    start_date: db.sequelize.Sequelize.DATEONLY,
    end_date: db.sequelize.Sequelize.DATEONLY,
    subject: db.sequelize.Sequelize.STRING,
    grade: db.sequelize.Sequelize.INTEGER,
    notes: db.sequelize.Sequelize.TEXT,
    attachments: db.sequelize.Sequelize.STRING,
    rate: db.sequelize.Sequelize.INTEGER,
    approved: db.sequelize.Sequelize.BOOLEAN,
    claimed: db.sequelize.Sequelize.BOOLEAN, 
    complete: db.sequelize.Sequelize.BOOLEAN,
    hours_submitted: db.sequelize.Sequelize.BOOLEAN,
    hours_completed: db.sequelize.Sequelize.INTEGER,
    hours_approved: db.sequelize.Sequelize.BOOLEAN,
    school_rating: db.sequelize.Sequelize.INTEGER,
    sub_rating: db.sequelize.Sequelize.INTEGER, 
    paid: db.sequelize.Sequelize.BOOLEAN
    
});