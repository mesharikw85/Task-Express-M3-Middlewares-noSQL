const errorHandler = (err, req, res, next) => {
  console.log("error handler is work");
  console.log(err);
  return res
    .status(err.status || 500)
    .json({ message: err.message || "Internal Server Error", details: err });
};

module.exports = errorHandler;
