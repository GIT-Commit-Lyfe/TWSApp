import api from './index';

const ModelsAPI = {
  get(type) {
    return api.get(`/${type}`);
  },
  getPopularNearby() {
    return api.get('/popular-nearby');
  },
};

export default ModelsAPI;
