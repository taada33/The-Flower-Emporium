const withAuth = (req, res, next) => {
    if(!req.session.loggenIn){
      
      res.redirect('/login') 
      }
      
      else {

        next()
      }
    };
  
  
  module.exports = withAuth;