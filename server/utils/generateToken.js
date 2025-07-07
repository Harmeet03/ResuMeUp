import jwt from 'jsonwebtoken';

const generateToken = (res, userId, userRole) => {
    const token = jwt.sign(
        {
            id: userId,
            role: userRole
        }, 
        
        process.env.JWT_SECRET,
        
        {
            expiresIn: '4h'
        }
    );

    res.cookie('token', token, {
        httpOnly: true,
        secure: false,
        sameSite: 'lax',    
        maxAge: 4 * 60 * 60 * 1000 // 4 hours
    });

    // res.cookie('token', token, {
    //     httpOnly: true,
    //     secure: process.env.NODE_ENV === 'production',
    //     sameSite: 'strict',
    //     maxAge: 4 * 60 * 60 * 1000 // 4 hours
    // });
}

export default generateToken;