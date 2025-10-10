const URL_API_BASE = import.meta.env.VITE_URL_API_BASE;

export interface ReadingsType {
  id: string;
  distance: number;
  denger: 'HIGH' | 'MEDIUM' | 'LOW';
  deviceId: string;
  createdAt: Date;
}
export async function getReadingsBydeviceId(deviceId: string) {
  try {
    const token =
      'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjIzNWFmNGRhLWZiMDgtNDA0OS04MDA5LThhN2Y0M2E0ZjRhZSIsImVtYWlsIjoidGVzdGVAdGVzdGUuY29tIiwiaWF0IjoxNzYwMTA4MDUyLCJleHAiOjE3NjA5NzIwNTJ9.A9dSyzkUnMnzDdJhHAVdeuMhgF0RDXGykOMj15k4vpc';
    const response = await fetch(`${URL_API_BASE}/readings/${deviceId}`, {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${token}`,
        'Content-Type': 'application/json',
      },
    });

    const data = await response.json();

    return data;
  } catch (error) {
    console.error(error);
  }
}
