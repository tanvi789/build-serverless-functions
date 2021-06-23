const fetch = require('node-fetch');

exports.handler = async () => {

    const result = await fetch('https://no-cors-api.netlify.app/api/corgis')
        .then((res) => res.json());
    //const corgis = [];

    return {
        statusCode: 200,
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(result),
};
};