import { GetServerSidePropsContext } from 'next';

import { ParsedUrlQuery } from 'querystring';
import { useDispatch } from 'react-redux';
import App from '../App';
import { pageNumber, searchResult, totalPages } from '../store/appSlice';
import { IAnimalsResponse } from '../utils/interfaces';

function Page({ data }: { data: IAnimalsResponse }) {
  const dispatch = useDispatch();
  if (data) {
    dispatch(totalPages(data.page.totalPages));
    dispatch(pageNumber(data.page.pageNumber));
    dispatch(searchResult(data.animals));
  }
  return <App />;
}

export default Page;

interface QueryTypes extends ParsedUrlQuery {
  name: string;
}

export async function getServerSideProps(context: GetServerSidePropsContext) {
  const { name } = context.query as QueryTypes;

  const res = await fetch(
    `https://stapi.co/api/v1/rest/animal/search?pageNumber=0&pageSize=12&name=${name ?? ''}`,
    {
      method: 'GET',
    },
  );
  const data = (await res.json()) as IAnimalsResponse;

  return {
    props: { data },
  };
}
