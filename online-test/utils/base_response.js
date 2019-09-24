const result = (json) => ({ errorCode: 0, data: json });
const error = (code, mess) => ({
    errorCode: code,
    message: mess
});

const objResult = (data) => ({errorCode: 0, data: data});

const pagingResult = (data, pageInfo) => ({
    errorCode: 0,
    data: data,
    pageInfo: pageInfo
})

module.exports = {
    Result: result,
    ErrorResult: error,
    PagingResult: pagingResult,
    ObjResult: objResult
}