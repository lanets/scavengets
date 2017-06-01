var swaggerJSDoc = require('swagger-jsdoc');

const swaggerJs = swaggerJSDoc({
    swaggerDefinition: {
        info: {
            title: 'Scavengets',
            version: '1.0.0'
        },
        produces: ['application/json'],
        consumes: ['application/json'],
        // securityDefinitions: {
        //     jwt: {
        //         type: 'apiKey',
        //         name: 'Authorization',
        //         in: 'header'
        //     }
        // },
        security: [
            { jwt: [] }
        ]
    },
    apis: [
        './models/*.js'
    ]
});

// MongoDB URL from the docker-compose file
const dbHost = 'mongodb://database/mean-docker';
const port = process.env.PORT || '3000';


module.exports = {
    swaggerJs: swaggerJs,
    dbHost: dbHost,
    port: port
};
