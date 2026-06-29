export const errorHandler = (err, req, res, next) => {
    console.error(err.stack);

    return res.status(500).json({
        success: false,
        message: "Internal Server Error.",
        error: err.message || "An unexpected error occurred"
    });
}
