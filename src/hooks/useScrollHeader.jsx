const useScrollHeader = () => {
  const scrollFunction = () => {
    if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
      document.querySelector('#header').style.backgroundColor = '#222';
    } else {
      document.querySelector('#header').style.backgroundColor = 'transparent';
    }
  };

  window.onscroll = () => scrollFunction();
};

export default useScrollHeader;
