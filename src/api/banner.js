import api from './index';

const BannersAPI = {
  getPriceBanners() {
    return api.get('/price-banners');
  },
};

export default BannersAPI;
