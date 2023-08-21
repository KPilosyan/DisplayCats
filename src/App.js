import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchCategories, fetchCatImages, selectCategory } from './redux/actions';
import CatImage from './components/CatImage';
import CategorySidebar from './components/CategorySidebar';
import LoadMoreButton from './components/LoadMoreButton';
import './App.scss';

function App() {
  const dispatch = useDispatch();
  const categories = useSelector(state => state.categories);
  const selectedCategory = useSelector(state => state.selectedCategory);
  const catImages = useSelector(state => state.catImages);

  useEffect(() => {
    dispatch(fetchCategories());
  }, [dispatch]);

  useEffect(() => {
    if (selectedCategory) {
      dispatch(fetchCatImages(selectedCategory));
    }
  }, [selectedCategory, dispatch]);

  const handleCategoryClick = (categoryId) => {
    dispatch(selectCategory(categoryId));
  };

  const handleLoadMore = () => {
    dispatch(fetchCatImages(selectedCategory, catImages.length));
  };

  return (
    <div className="app">
      <CategorySidebar
        categories={categories}
        selectedCategory={selectedCategory}
        onCategoryClick={handleCategoryClick}
      />
      <div className="main-display">
        {selectedCategory ? (
          <div className="cat-images">
            {catImages.map(image => (
              <CatImage key={image.id} url={image.url} />
            ))}
          </div>
        ) : (
          <div className="choose-category-message">
            Choose a category
          </div>
        )}
        {selectedCategory && (
          <LoadMoreButton onClick={handleLoadMore} />
        )}
      </div>
    </div>
  );
}

export default App;
