const mongoose = require("mongoose");

const ProjectSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    organization: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    githubUrl: {
        type: String,
        required: true
    },
    skillLevel: {
        type: String,
        enum: ['beginner', 'intermediate', 'advanced'],
        required: true
    },
    status: {
        type: String,
        enum: ['planning', 'in progress', 'completed', 'on hold'],
        default: 'planning'
    },
    creator_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
    },
    timezone: {
        type: String,
        required: true
    },
    // Temporarily commenting out to focus on Project creation
    // technologiesUsed: [{
    //     type: mongoose.Schema.Types.ObjectId,
    //     ref: 'Technology'
    // }],
    // members: [{
    //     type: mongoose.Schema.Types.ObjectId,
    //     ref: 'User'
    // }]
});

module.exports = mongoose.model('Project', ProjectSchema);