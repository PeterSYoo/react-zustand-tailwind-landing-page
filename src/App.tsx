import './App.css';
import useThemeStore from './stores/useThemeStore';
import { useTheme } from './hooks/useTheme';
import Search from './components/search.components';
import useKey from './hooks/useKey';
import useSearchStore from './stores/useSearchStore';

function App() {
  const setOpenSearch = useSearchStore((state: any) => state.setOpenSearch);

  const toggleTheme = useThemeStore((state: any) => state.toggleTheme);
  const dark = document.querySelector('html[class*="dark"]');
  const handleK = () => {
    setOpenSearch();
  };
  const handleF = () => {
    setOpenSearch();
  };

  useKey('k', handleK);
  useKey('f', handleF);
  useTheme();

  return (
    <>
      <Search />
      <div className="max-w-[1680px] px-[250px] mx-auto">
        {/* Header - Nav */}
        <section className="flex justify-between pt-[38px]">
          <div className="flex items-center gap-16">
            <div className="flex items-center gap-3">
              {dark ? (
                <img src="/img/light/logo.png" alt="" />
              ) : (
                <img src="/img/dark/logo.png" alt="" />
              )}

              <span className="dark:text-teal">
                Tax
                <span className="text-blue-700 dark:text-white">Pal</span>
              </span>
            </div>
            <ul className="flex text-[14px] gap-10 text-gray-500 dark:text-teal">
              <li>Features</li>
              <li>Testimonials</li>
              <li>Pricing</li>
            </ul>
          </div>
          <div className="flex items-center gap-8">
            <button
              onClick={() => setOpenSearch(true)}
              className="w-[202px] bg-gray-500 dark:bg-teal dark:opacity-50 px-[16px] py-[12px] rounded-xl flex justify-between items-center gap-2"
            >
              <span className="">
                {dark ? (
                  <img
                    src="/img/light/magnifying.png"
                    height={11}
                    width={11}
                    alt=""
                  />
                ) : (
                  <img
                    src="/img/dark/magnifying.png"
                    height={11}
                    width={11}
                    alt=""
                  />
                )}
              </span>
              <span className="text-gray-300 text-[12px] w-[40px] dark:text-black">
                ⌘ + k
              </span>
            </button>
            <button className="text-[14px] dark:text-teal">Sign in</button>
            <button className="bg-blue-600 text-white text-[14px] py-[12px] px-[14px] rounded-3xl dark:bg-teal dark:text-black">
              Get started today
            </button>
            <button onClick={toggleTheme} type="button" className="text-2xl">
              {dark ? <>☀️</> : <>🌙</>}
            </button>
          </div>
        </section>

        {/* Hero */}
        <section className="mt-[157px] flex flex-col justify-center font-lexend">
          <h1 className="text-center text-[69px] dark:text-white">
            Accounting
            <span className="text-blue-700 bg-textBgLight bg-no-repeat bg-bottom dark:bg-textBgDark dark:text-teal">
              &nbsp;made simple&nbsp;
            </span>
            for
            <br />
            small businesses.
          </h1>
          <p className="mt-[21px] text-center dark:text-[#4B5563]">
            Most book keeping software is accurate, but hard to use. We make the
            <br />
            opposite trade-off, and hope you don’t get audited.
          </p>
          <div className="flex justify-center mt-[39px] gap-5">
            <button className="text-[14px] bg-black text-white py-[12px] px-[16px] rounded-3xl dark:bg-white dark:text-black">
              Get 6 months free
            </button>
            <button className="text-[14px] py-[12px] px-[20px] border rounded-3xl flex items-center gap-2 dark:bg-teal dark:border-0">
              <img src="/img/light/play.png" alt="" />
              Watch video
            </button>
          </div>

          {/* Companies */}
          <p className="mt-[174px] text-center dark:text-white">
            Trusted by these six companies so far
          </p>
          <div className="flex mt-[37px] gap-10 justify-center items-center">
            <span>
              {dark ? (
                <img src="/img/light/transistor.png" alt="" />
              ) : (
                <img src="/img/dark/transistor.png" alt="" />
              )}
            </span>
            <span>
              {dark ? (
                <img src="/img/light/tuple.png" alt="" />
              ) : (
                <img src="/img/dark/tuple.png" alt="" />
              )}
            </span>
            <span>
              {dark ? (
                <img src="/img/light/statickit.png" alt="" />
              ) : (
                <img src="/img/dark/statickit.png" alt="" />
              )}
            </span>
            <span>
              {dark ? (
                <img src="/img/light/mirage.png" alt="" />
              ) : (
                <img src="/img/dark/mirage.png" alt="" />
              )}
            </span>
            <span>
              {dark ? (
                <img src="/img/light/laravel.png" alt="" />
              ) : (
                <img src="/img/dark/laravel.png" alt="" />
              )}
            </span>
            <span>
              {dark ? (
                <img src="/img/light/statamic.png" alt="" />
              ) : (
                <img src="/img/dark/statamic.png" alt="" />
              )}
            </span>
          </div>
        </section>
      </div>
    </>
  );
}

export default App;
