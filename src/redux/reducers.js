import { combineReducers } from 'redux';
import { FETCH_CATEGORIES, FETCH_CAT_IMAGES, SELECT_CATEGORY } from './actions';

const categoriesReducer = (state = [], action) => {
  switch (action.type) {
    case FETCH_CATEGORIES:
      return action.payload;
    default:
      return state;
  }
};

const catImagesReducer = (state = [], action) => {
  switch (action.type) {
    case FETCH_CAT_IMAGES:
      return action.payload;
    default:
      return state;
  }
};

const selectedCategoryReducer = (state = null, action) => {
  switch (action.type) {
    case SELECT_CATEGORY:
      return action.payload;
    default:
      return state;
  }
};

export default combineReducers({
  categories: categoriesReducer,
  catImages: catImagesReducer,
  selectedCategory: selectedCategoryReducer,
});
