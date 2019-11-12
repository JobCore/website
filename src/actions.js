export const registerJobSeeker = async jobseeker => {
    const url = process.env.HOST + '/user/register'
    const settings = {
        method: 'POST',
        mode: 'cors',
        headers: new Headers({ "Content-Type": "application/json" }),
        body: JSON.stringify({ email: jobseeker.email, account_type: 'employee', username: jobseeker.email, first_name: jobseeker.firstName, last_name: jobseeker.lastName, password: jobseeker.password, phone: jobseeker.phone }),
    }
    try {
        let response = await fetch(url, settings)
        return await response.json()
    } catch (err) {
        return err

    }
}

export const registerEmployer = async employer => {
    const url = process.env.HOST + '/user/register'
    const settings = {
        method: 'POST',
        mode: 'cors',
        headers: new Headers({ "Content-Type": "application/json" }),
        body: JSON.stringify({ "email": employer.business_email, "account_type": "employer", "username": employer.business_email, "first_name": employer.firstName, "last_name": employer.lastName, "password": employer.password, "phone": employer.phone, "business_name": employer.business_name, "business_website": employer.business_website, "about_business": employer.about_business })
    }
    try {
        let response = await fetch(url, settings)
        return await response.json()
    } catch (err) {
        return err

    }
}
export const loginUser = async user => {
    const url = "https://jobcore.herokuapp.com/api" + '/login'
    const settings = {
        method: 'POST',
        mode: 'cors',
        headers: new Headers({ "Content-Type": "application/json" }),
        body: JSON.stringify({ "username_or_email": user.email, "password": user.password })
    }
    try {
        const fetchResponse = await fetch(url, settings);
        const data = await fetchResponse.json();

        return data;
    } catch (err) {
        return err

    }
}
