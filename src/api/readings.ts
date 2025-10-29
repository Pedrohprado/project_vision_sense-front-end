const URL_API_BASE = import.meta.env.VITE_URL_API_BASE;

export interface ReadingsType {
  id: string;
  distance: number;
  denger: 'HIGH' | 'MEDIUM' | 'LOW';
  deviceId: string;
  createdAt: Date;
}

export interface ReadingPorcentProps {
  porcentLow: number;
  porcentMedium: number;
  porcentHigh: number;
}
export async function getReadingsBydeviceId(deviceId: string) {
  try {
    const token = localStorage.getItem('token');
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
