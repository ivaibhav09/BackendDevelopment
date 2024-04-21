/*
const asyncHandler = (requestHandler) => {
    (req, res, next) => {
        promise
        .resolve(asyncHandler(req, res, next))
        .catch((err) => next(err) )
    }

}

export { asyncHandler }
*/



const asyncHandlers = (fn) => async (req, res, next) => {
    try {
        await fn(req, res, next)
    } catch (error) {
        res.status(err.code || 500).json({
            success: false,
            message: err.message
        })
    }
}

export default asyncHandlers;