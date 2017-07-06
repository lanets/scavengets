module.exports = {
    db: process.env.MONGODB || process.env.MONGOHQ_URL,
    sessionSecret: process.env.SESSION_SECRET
};