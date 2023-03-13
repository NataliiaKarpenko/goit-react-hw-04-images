import { Component } from 'react';
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

export class App extends Component {
  state = {
    query: '',
    photos: [],
    page: 1,
    perPage: 12,
    totalHits: 0,
    largeImageURL: '',
    showModal: false,
    isLoading: false,
    status: 'idle',
    error: null,
  };

  componentDidUpdate(_, prevState) {
    const prevQuery = prevState.query;
    const prevPage = prevState.page;

    // if (prevQuery !== this.state.query) {
    //   this.setState({ photos: [], page: 1 });
    //   this.fetchPhotos();
    // }
    // if (prevPage !== this.state.page) {
    //   this.fetchPhotos();
    // }
    if (prevQuery !== this.state.query || prevPage !== this.state.page) {
      this.fetchPhotos();
    }
  }

  fetchPhotos = async () => {
    const { query, page, perPage } = this.state;

    if (!query) {
      this.setState({ status: 'idle' });
      return;
    }

    this.onToggleLoader();

    try {
      const { hits, totalHits } = await requestPhotos(query, page, perPage);

      if (hits.length === 0) {
        this.setState({
          error:
            'Sorry, there are no images matching your search query. Please try again 🔎.',
          status: 'rejected',
        });
      } else {
        this.setState(({ photos }) => ({
          photos: [...photos, ...hits],
          totalHits,
          status: 'resolved',
        }));
      }
    } catch (error) {
      console.log(error);
      this.setState({
        error: error.message,
        status: 'rejected',
      });
    } finally {
      this.onToggleLoader();
    }
  };

  onFormSubmit = query => {
    this.setState({
      query,
      photos: [],
      page: 1,
      perPage: 12,
      totalHits: 0,
      largeImageURL: '',
      showModal: false,
      isLoading: false,
    });
  };

  // onQueryChange = query => {
  //   this.setState({ query });
  // };

  onLoadMorePhotos = () => {
    this.setState(prevState => ({ page: prevState.page + 1 }));

    this.onScrollPage();
  };

  onOpenModal = largeImageURL => {
    this.setState({ largeImageURL, showModal: true });
  };

  onCloseModal = () => {
    this.setState({
      showModal: false,
    });
  };

  onToggleLoader = () => {
    this.setState({ isLoading: !this.state.isLoading });
  };

  onScrollPage = () => {
    // setTimeout(() => {
    window.scrollBy({
      top: document.documentElement.clientHeight - 160,

      behavior: 'smooth',
    });
    // }, 1000);
  };

  render() {
    const {
      photos,
      page,
      perPage,
      largeImageURL,
      totalHits,
      status,
      showModal,
      isLoading,
      error,
    } = this.state;
    return (
      <>
        <SearchBar
          onFormSubmit={this.onFormSubmit}
          onQueryChange={this.onQueryChange}
        />

        <ToastContainer autoClose={3000} theme={'colored'} />
        {status === 'idle' && <WelcomeView />}

        {status === 'rejected' && <ErrorView message={error} />}

        {status === 'resolved' && (
          <ImageGallery photos={photos} onOpenModal={this.onOpenModal} />
        )}

        {isLoading && <Loader />}

        {showModal && (
          <Modal
            largeImageURL={largeImageURL}
            onCloseModal={this.onCloseModal}
          />
        )}

        {totalHits - page * perPage > 0 && photos.length !== 0 && (
          <LoadMoreBtn onLoadMorePhotos={this.onLoadMorePhotos} />
        )}
      </>
    );
  }
}
