import api from './index';

const BrandsAPI = {
  get() {
    return api.get('/Brand');
  },
};

export default BrandsAPI;
