import jwt from 'jsonwebtoken'

export const authUser = async (req, res, next) => {
  try {
    if (!req.headers.authorization) res.status(403).json({ success: false, message: "You need to sign in" });

    const token = req.headers.authorization.split(" ")[1];
    const isCustomAuth = token.length < 500;

    let decodedData;

    if(token && isCustomAuth) {
      decodedData = jwt.verify(token, 'SECRET');

      req.userId = decodedData?.id;
      req.userRole = decodedData?.role

      next();
    }  
  } catch (error) {  
    console.log(error);
  } 
}  

export const authRole = (role) => async (req, res, next) => { 
  try {
    if (!role.includes(req.userRole)) return res.status(401).json({ success: false, message: "Unauthorized" });

    next()
  } catch (error) {
    console.log(error); 
  }
}