import jwt from 'jsonwebtoken'


const userAuth = async (req, res, next) => {
    const { token } = req.headers;
    if (!token) {
        return res.json({ success: false, message: 'not authorized login again' })
    }
    try {
        const tokenDecode = jwt.verify(token, process.env.JWT_SECRET)
        if (tokenDecode.id) {
            req.userId = tokenDecode.id
        } else {
            next();
            return res.json({ success: false, message: 'not authorized login again' })
          
        }
    } catch (error) {
        res.json({ success: false, message: error.message })
    }
}
export default userAuth;