const URL_API_BASE = import.meta.env.VITE_URL_API_BASE;

export async function login(userLogin: { email: string; password: string }) {
  try {
    const token =
      'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjIzNWFmNGRhLWZiMDgtNDA0OS04MDA5LThhN2Y0M2E0ZjRhZSIsImVtYWlsIjoidGVzdGVAdGVzdGUuY29tIiwiaWF0IjoxNzYwMTA4MDUyLCJleHAiOjE3NjA5NzIwNTJ9.A9dSyzkUnMnzDdJhHAVdeuMhgF0RDXGykOMj15k4vpc';
    const response = await fetch(`${URL_API_BASE}/users/login`, {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${token}`,
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
    return data;
  } catch (error) {
    console.error(error);
    throw error;
  }
}
