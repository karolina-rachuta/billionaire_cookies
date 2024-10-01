const handler = async (event) => {
    const authHeader = event.headers['authorization'];
    const encodedCredentials = authHeader && authHeader.split(' ')[1];

    const validUsername = process.env.REACT_APP_protected_id;
    const validPassword = process.env.REACT_APP_protected_password;

    const validCredentials = Buffer.from(`${validUsername}:${validPassword}`).toString('base64');

    if (!encodedCredentials || encodedCredentials !== validCredentials) {
        return {
            statusCode: 401,
            headers: {
                'WWW-Authenticate': 'Basic realm="Protected Area"'
            },
            body: 'Authentication required.'
        };
    }

    return {
        statusCode: 200,
        body: JSON.stringify({ message: 'Access granted!' }),
    };
};

exports.handler = handler;
