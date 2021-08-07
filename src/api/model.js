import api from './index';

const ModelsAPI = {
  get(type) {
    return api.get(`/${type}`);
  },
  getTrendingModels() {
    return api.get('/trending-models');
  },
  getPopularNearby() {
    return api.get('/popular-nearby');
  },
};

export default ModelsAPI;
