const homeRouter = require('./home.route');
const _19110425Router = require('./19110425.route');
const messageRouter = require('./message.route');
const logMiddleware = require('../middleware/log.middleware')

function route(app) {
    app.use('/', logMiddleware , homeRouter)
    app.use('/19110425', logMiddleware , _19110425Router)
    app.use('/message', logMiddleware , messageRouter)
}

module.exports = route