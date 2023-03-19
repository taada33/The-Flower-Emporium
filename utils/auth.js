const withAuth = (req, res, next) => {
    if(!req.session.loggenIn){
      
      res.redirect('/login') 
      }
      
      else {

        next()
      }
    };
  
  
<<<<<<< HEAD
  module.exports = withAuth;
  
=======
  module.exports = withAuth;
>>>>>>> 7ae245f59351fdc98a7985cad8a95c473bbe0b8f
