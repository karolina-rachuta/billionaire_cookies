const handler = async (event) => {
    const authHeader = event.headers['authorization'];
    const encodedCredentials = authHeader && authHeader.split(' ')[1];

    const validUsername = 'test1';
    const validPassword = 'testtest2';

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
