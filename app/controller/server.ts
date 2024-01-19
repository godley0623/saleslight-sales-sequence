export const server = "https://dev.server.saleslights.com"

export const getAuthToken = async (email: string, password: string) => {
    let authData;

    const data = {
        email: email,
        password: password
    }

    const options = {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      }

    await fetch(`${server}/api/user/signin`, options)
        .then((res) => res.json())
        .then((data) => {
        if (data.err) {
            authData = { err: data.err }
            return;
        } else {
            authData = {
            status: "OK",
            base32: data.base32,
            authEmail: data.authEmail,
            token: data.token
            };
        }
        }).catch(rej => {
        return { err: "Currently could not connect to server" }
        });
    return authData
}

export const jwtAuthCheck = async (token: string) => {
    const options = {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          "authorization": `Bearer ${token}`
        }
    }
    
    fetch(`${server}/api/authenticateUser`, options)
      .then(res => res.json())
      .then(data => console.log(data))
      .catch(error => console.error('Error:', error))

    return true
}