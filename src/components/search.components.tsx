interface Modal {
  open: boolean;
  onClose: () => void;
}

const Search = ({ open, onClose }: Modal) => {
  if (!open) return null;

  return (
    <section onClick={onClose}>
      <div className="fixed w-full h-full z-50 bg-white bg-opacity-80 flex justify-center pt-[160px]">
        <div
          onClick={(e) => {
            e.stopPropagation();
          }}
          className="w-[480px]"
        >
          <div className="w-full bg-gray-900 bg-opacity-80 backdrop-blur-sm rounded-lg py-[20px] px-[27px] flex gap-4 justify-between items-center">
            <img
              src="/img/light/magnifying.png"
              height={17}
              width={17}
              alt=""
            />
            <input
              type="text"
              placeholder="Email"
              className="w-full text-[24px] bg-transparent text-white"
            />
            <span className="text-gray-300 text-[12px] w-[40px] dark:text-black">
              ⌘ + F
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Search;
