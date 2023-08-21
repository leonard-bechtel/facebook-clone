// Some helper functions to check if a user is authenticated/authorized to access certain resources on the backend

function isAuth(req, res, next) {
  // allow access if user is already authenticated
  if (req.isAuthenticated()) {
    next()
  } else {
    res.status(403).json({
      msg: "You are not authorized to access this resource",
      isAuthenticated: false
    })
  }
}

module.exports = {
  isAuth
}