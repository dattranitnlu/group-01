const result = (json) => ({ errorCode: 0, data: json });
const error = (code, mess) => ({
    errorCode: code,
    message: mess
});

module.exports = {
    Result: result,
    ErrorResult: error
}