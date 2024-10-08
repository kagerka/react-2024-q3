import { useRouter } from 'next/navigation';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { searchString } from './store/appSlice';
import { RootState } from './store/store';
import Home from './views/Home/Home';

function App() {
  const router = useRouter();
  const dispatch = useDispatch();

  const searchStringValue = useSelector(
    (store: RootState) => store.app.searchString,
  );
  const pageNumber = useSelector((store: RootState) => store.app.pageNumber);

  useEffect(() => {
    dispatch(searchString(localStorage.getItem('searchValue')! || ''));
    router.replace(
      `/search?page=${pageNumber + 1}&name=${localStorage.getItem('searchValue') ?? ''}`,
    );
  }, [pageNumber, searchStringValue, router, dispatch]);

  return <Home />;
}

export default App;
