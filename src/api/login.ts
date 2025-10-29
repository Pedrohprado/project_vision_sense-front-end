const URL_API_BASE = import.meta.env.VITE_URL_API_BASE;

export async function login(userLogin: { email: string; password: string }) {
  try {
    const response = await fetch(`${URL_API_BASE}/users/login`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(userLogin),
    });

    const data = await response.json();

    if (response.status === 404) {
      throw new Error('Usuário não encontrado');
    }
    if (response.status === 401) {
      throw new Error('Email e/ou senha inválidos');
    }

    if (!response.ok) {
      throw new Error(data?.message || 'Erro desconhecido no login');
    }

    localStorage.setItem('email', data.email);
    localStorage.setItem('name', data.name);
    localStorage.setItem('token', data.token);
    return data;
  } catch (error) {
    console.error(error);
    throw error;
  }
}
