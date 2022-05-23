exports.isUserAllowed = (req, res, next) => {
    switch (req.user.permissions) {
        case 'admin':
            return next();
        case 'user':
            if (req.user.id == req.params.id || req.user.id == req.body.user_id) {
            return next();
            } else {
            return res.sendStatus(401);
            }
        default:
            console.log('Unauthorized');
            return res.sendStatus(401);
    }
};

exports.isAdmin = (req, res, next) => {
    if (req.user.permissions == 'admin') {
        next();
    } else {
        res.sendStatus(401);
    }
};
  