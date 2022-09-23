import create from 'zustand';

const useSearchStore = create((set) => ({
  openSearch: false,
  // set is similar to useState
  setOpenSearch: () => {
    set((state: any) => ({ openSearch: !state.openSearch }));
  },
}));

export default useSearchStore;
