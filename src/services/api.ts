import { IAnimalResponse } from '../utils/interfaces';

const getData = async (
  value: string,
  page: { number: number; size: number },
): Promise<IAnimalResponse> => {
  const response = await fetch(
    `https://stapi.co/api/v1/rest/animal/search?pageNumber=${page.number}&pageSize=${page.size}&name=${value}`,
    {
      method: 'POST',
      headers: {
        accept: 'application/json',
        'Content-Type': 'application/x-www-form-urlencoded',
      },
    },
  );

  if (!response.ok) {
    throw new Error(`HTTP error! status: ${response.status}`);
  } else {
    const json = (await response.json()) as IAnimalResponse;
    return json;
  }
};

export default getData;
