const allowedOrigins = [ 
    'http://localhost:5173',
    'https://resumeup-app.vercel.app'
] 

export const corsOptions = {
    origin: (origin, callback) => {
        if(!origin || allowedOrigins.includes(origin)){
            callback(null, true);
        }
        else{
            callback(new Error('Not allowed by CORS.'));
        }
    },

    credentials: true
}