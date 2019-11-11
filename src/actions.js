export const registerJobSeeker = async (jobseeker) => {
    const url = process.env.HOST+'/user/register';
    const settings = {  
        method: 'POST',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ "email": jobseeker.email, "account_type": "employee", "username": jobseeker.email, "first_name": jobseeker.firstName, "last_name": jobseeker.lastName, "password": jobseeker.password, "phone":jobseeker.phone  })
    };
    try {
        const fetchResponse = await fetch(url, settings);
        const data = await fetchResponse.json();
        return data;
    } catch (e) {
        throw e;
    }    
  
  }