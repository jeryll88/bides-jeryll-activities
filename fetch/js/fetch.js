async function submitData(username, password) {

    const data = {
        username: username,
        password: password
    };

    const response = await fetch(
        'http://localhost/api/login.php', 
        {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        }
    );

    const resData = await response.json();

    console.log(resData);

    if (!response.ok) {
        throw new Error(resData.message || 'Login failed');
    }

    return resData;
}
