const URL_API_BASE = import.meta.env.VITE_URL_API_BASE;

export async function signup(signupUser: {
  name: string;
  email: string;
  password: string;
}) {
  try {
    const response = await fetch(`${URL_API_BASE}/users`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(signupUser),
    });

    const data = await response.json();
    if (response.status === 201) {
      localStorage.setItem('email', data.email);
      localStorage.setItem('name', data.name);
      localStorage.setItem('token', data.token);
      return true;
    }

    if (response.status === 400) {
      throw new Error(data.message);
    }
    if (response.status === 500) {
      throw new Error(data.message);
    }
  } catch (error) {
    console.error(error);
    throw error;
  }
}
