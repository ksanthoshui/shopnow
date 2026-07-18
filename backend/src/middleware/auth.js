import Jwt from "jsonwebtoken";

const authUser = async (req, res, next) => {
  const { token } = req.headers;

  if (!token) {
    return res.send({ success: false, message: "not authorized log in again" });
  }
  try {
    const token_decode = Jwt.verify(token, process.env.JWT_SECRET);
    req.body.userId = token_decode.id;
    next();
  } catch (error) {
    console.log(error);
    res.send({ success: false, message: error.message });
  }
};


export default authUser ;
