export const registerJobSeeker = async jobseeker => {
    const url = process.env.HOST + '/user/register'
    const settings = {
        method: 'POST',
        mode: 'no-cors',
        headers: new Headers({ 'content-type': 'application/json' }),
        body: JSON.stringify({ email: jobseeker.email, account_type: 'employee', username: jobseeker.email, first_name: jobseeker.firstName, last_name: jobseeker.lastName, password: jobseeker.password, phone: jobseeker.phone }),
    }
    try {
        let response = await fetch(url, settings)
        return await response.json()
    } catch (err) {
        console.error(err)
        // Handle errors here
    }
}
