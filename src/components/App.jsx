import { useState, useEffect } from 'react';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { WelcomeView } from './WelcomeView/WelcomeView';
import { ErrorView } from './ErrorView/ErrorView';

import { SearchBar } from './SearchBar/SearchBar';
import { requestPhotos } from './APIRequest';
import { ImageGallery } from './ImageGallery/ImageGallery';
import { Modal } from './Modal/Modal';
import { LoadMoreBtn } from './LoadMoreBtn/LoadMoreBtn';
import { Loader } from './Loader/Loader';

export const App = () => {
  const [query, setQuery] = useState('');
  const [photos, setPhotos] = useState([]);
  const [page, setPage] = useState(1);
  const [totalHits, setTotalHits] = useState(0);
  const [largeImageURL, setLargeImageURL] = useState('');
  const [showModal, setShowModal] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [status, setStatus] = useState('idle');
  const [error, setError] = useState(null);
  const perPage = 12;

  useEffect(() => {
    if (!query) {
      return;
    }

    const fetchPhotos = async () => {
      setIsLoading(true);

      try {
        const { hits, totalHits } = await requestPhotos(query, page, perPage);

        if (hits.length === 0) {
          setError(
            'Sorry, there are no images matching your search query. Please try again 🔎.'
          );
          setStatus('rejected');
        } else {
          setPhotos(prevPhotos => [...prevPhotos, ...hits]);
          setTotalHits(totalHits);
          setStatus('resolved');
        }
      } catch (error) {
        console.log(error);
        setError(error.message);
        setStatus('rejected');
      } finally {
        setIsLoading(false);
      }
    };

    fetchPhotos();
  }, [query, page]);

  const onFormSubmit = query => {
    setQuery(query);
    setPhotos([]);
    setPage(1);
    // setError(null);
  };

  const onLoadMorePhotos = () => {
    setPage(prevPage => prevPage + 1);

    onScrollPage();
  };

  const onOpenModal = largeImageURL => {
    setShowModal(true);
    setLargeImageURL(largeImageURL);
  };

  const onCloseModal = () => {
    setShowModal(false);
  };

  const onScrollPage = () => {
    // setTimeout(() => {
    window.scrollBy({
      top: document.documentElement.clientHeight - 160,
      behavior: 'smooth',
    });
    // }, 1000);
  };

  return (
    <>
      <SearchBar onFormSubmit={onFormSubmit} />

      <ToastContainer autoClose={3000} theme={'colored'} />
      {status === 'idle' && <WelcomeView />}

      {status === 'rejected' && <ErrorView message={error} />}

      {status === 'resolved' && (
        <ImageGallery photos={photos} onOpenModal={onOpenModal} />
      )}

      {isLoading && <Loader />}

      {showModal && (
        <Modal largeImageURL={largeImageURL} onCloseModal={onCloseModal} />
      )}

      {totalHits - page * perPage > 0 && photos.length !== 0 && (
        <LoadMoreBtn onLoadMorePhotos={onLoadMorePhotos} />
      )}
    </>
  );
};
