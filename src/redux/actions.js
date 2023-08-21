import axios from 'axios';

export const FETCH_CATEGORIES = 'FETCH_CATEGORIES';
export const FETCH_CAT_IMAGES = 'FETCH_CAT_IMAGES';
export const SELECT_CATEGORY = 'SELECT_CATEGORY';

export const fetchCategories = () => async (dispatch) => {
  try {
    const response = await axios.get('https://api.thecatapi.com/v1/categories');
    dispatch({ type: FETCH_CATEGORIES, payload: response.data });
  } catch (error) {
    console.error('Error fetching categories:', error);
  }
};

export const fetchCatImages = (category, page = 1) => async (dispatch) => {
  try {
    const response = await axios.get(
      `https://api.thecatapi.com/v1/images/search?limit=10&page=${page}&category_ids=${category}`
    );
    dispatch({ type: FETCH_CAT_IMAGES, payload: response.data });
  } catch (error) {
    console.error('Error fetching cat images:', error);
  }
};

export const selectCategory = (categoryId) => {
  return { type: SELECT_CATEGORY, payload: categoryId };
};
