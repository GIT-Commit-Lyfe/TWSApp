import React, {useEffect} from 'react';
import useBanners from './customHooks/useBanners';
import RootNavigation from './navigations/RootNavigation';

function MyApp() {
  const {refetch} = useBanners();

  useEffect(() => {
    refetch();
  }, []);

  return <RootNavigation />;
}

export default MyApp;
