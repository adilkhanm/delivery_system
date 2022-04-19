const ApiError = require('../exceptions/api-error');

module.exports = function (err, req, res, next){  //middleware для обработки ошибок
    console.log(err);
    if(err instanceof ApiError) {
        return res.status(err.status).json({message: err.message, errors: err.errors}) //статус ошибки, в клиент идет сообщение о ней
    }
    return res.status(500).json({message: 'Непредвиденная ошибка'}) //500 говорит об ошибке на самом сервере
};