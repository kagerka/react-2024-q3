import { GetServerSidePropsContext } from 'next';
import { ParsedUrlQuery } from 'querystring';
import { useDispatch } from 'react-redux';
import {
  currentAnimalData,
  pageNumber,
  searchResult,
  totalPages,
} from '../../store/appSlice';
import { IAnimalResponse, IAnimalsResponse } from '../../utils/interfaces';
import Home from '../../views/Home/Home';

export default function Search({
  data,
}: {
  data: IAnimalsResponse | IAnimalResponse;
}) {
  const dispatch = useDispatch();
  if ((data as IAnimalsResponse).animals) {
    dispatch(totalPages((data as IAnimalsResponse).page.totalPages));
    dispatch(pageNumber((data as IAnimalsResponse).page.pageNumber));
    dispatch(searchResult((data as IAnimalsResponse).animals));
  }
  if ((data as IAnimalResponse).animal) {
    dispatch(currentAnimalData((data as IAnimalResponse).animal));
  }

  return <Home />;
}

interface QueryTypes extends ParsedUrlQuery {
  page: string;
  name: string;
  uid: string;
}

export async function getServerSideProps(context: GetServerSidePropsContext) {
  const { page, name, uid } = context.query as QueryTypes;

  const res = uid
    ? await fetch(`https://stapi.co/api/v1/rest/animal?uid=${uid}`, {
        method: 'GET',
      })
    : await fetch(
        `https://stapi.co/api/v1/rest/animal/search?pageNumber=${(+page - 1).toString()}&pageSize=12&name=${name}`,
        {
          method: 'POST',
        },
      );
  const data = (await res.json()) as IAnimalsResponse;

  return {
    props: { data },
  };
}
