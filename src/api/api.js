const BASE_URL = 'https://app.ftoyd.com/fronttemp-service';

export const getData = async () => {
  const response = await fetch(`${BASE_URL}/fronttemp`);
  if (!response.ok) {
    throw new Error("Ошибка загрузки данных");
  }
  return response.json();
};
