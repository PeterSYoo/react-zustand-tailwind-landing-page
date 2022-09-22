import { useState } from 'react';

const useSearchModal = () => {
  const [openSearch, setOpenSearch] = useState(false);

  return { openSearch, setOpenSearch };
};

export default useSearchModal;
