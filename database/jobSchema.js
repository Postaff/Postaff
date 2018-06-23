const db = require("./db.js");

const Job = sequelize.define('job', { 
    
    description: Sequelize.TEXT,
    School_id: Sequelize.INTEGER,
    start_time: Sequelize.INTEGER,
    end_time: Sequelize.INTEGER, 
    start_date: Sequelize.DATEONLY,
    end_date: Sequelize.DATEONLY,
    subject: Sequelize.STRING,
    grade: Sequelize.INTEGER,
    notes: Sequelize.TEXT,
    attachments: Sequelize.STRING,
    rate: Sequelize.INTEGER,
    approved: Sequelize.BOOLEAN,
    claimed: Sequelize.BOOLEAN, 
    complete: Sequelize.BOOLEAN,
    hours_submitted: Sequelize.BOOLEAN,
    hours_completed: Sequelize.INTEGER,
    hours_approved: Sequelize.BOOLEAN,
    school_rating: Sequelize.INTEGER,
    sub_rating: Sequelize.INTEGER, 
    paid: Sequelize.BOOLEAN
    
});