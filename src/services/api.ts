import { IAnimalResponse, IAnimalsResponse } from '../utils/interfaces';

export const getData = async (
  value: string,
  page: { number: number; size: number },
): Promise<IAnimalsResponse> => {
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
    const json = (await response.json()) as IAnimalsResponse;
    return json;
  }
};

export const getCurrentAnimal = async (
  UID: string,
): Promise<IAnimalResponse> => {
  const response = await fetch(
    `https://stapi.co/api/v1/rest/animal?uid=${UID}`,
    {
      method: 'GET',
      headers: {
        accept: 'application/json',
        'Content-Type': 'application/json;charset=UTF-8',
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
