import api from './index';

const ListingsAPI = {
  getWatchLists() {
    return api.get('/watch-lists');
  },
  getFollowedListings() {
    return api.get('/followed-listings');
  },
};

export default ListingsAPI;
