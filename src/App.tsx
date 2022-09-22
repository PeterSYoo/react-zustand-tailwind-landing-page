import './App.css';
import useThemeStore from './stores/useThemeStore';
import { useTheme } from './hooks/useTheme';

function App() {
  const toggleTheme = useThemeStore((state: any) => state.toggleTheme);
  useTheme();

  return (
    <>
      <div className="max-w-[1680px] px-[250px] bg-white dark:bg-[#2E3643] dark:text-white mx-auto">
        {/* Header - Nav */}
        <section className="flex justify-between mt-[38px]">
          <div className="flex items-center gap-16">
            <div className="flex items-center gap-3">
              <img src="/img/light/logo.png" alt="" />
              <span className="">
                Tax
                <span className="text-blue-700">Pal</span>
              </span>
            </div>
            <ul className="flex text-xs gap-10 text-gray-500">
              <li>Features</li>
              <li>Testimonials</li>
              <li>Pricing</li>
            </ul>
          </div>
          <div className="flex items-center gap-8">
            <div className="w-[202px] bg-gray-500 pt-[6px] pb-[10px] px-[16px] rounded-xl flex items-center gap-2">
              <span className="-mb-1">
                <img
                  src="/img/light/magnifying.png"
                  height={11}
                  width={11}
                  alt=""
                />
              </span>
              <span className="">
                <input
                  type="text"
                  className="w-full text-xs bg-gray-500 text-white"
                />
              </span>
              <span className="text-gray-300 text-[10px] w-[40px]">⌘ + k</span>
            </div>
            <button className="text-xs">Sign in</button>
            <button className="bg-blue-600 text-white text-xs py-[12px] px-[14px] rounded-3xl">
              Get started today
            </button>
            <button onClick={toggleTheme} type="button" className="text-2xl">
              ☀️
            </button>
          </div>
        </section>

        {/* Hero */}
        <section className="mt-[157px] flex flex-col justify-center font-lexend">
          <h1 className="text-center text-[69px]">
            Accounting
            <span className="text-blue-700 bg-textBgLight bg-no-repeat bg-bottom">
              &nbsp;made simple&nbsp;
            </span>
            for
            <br />
            small businesses.
          </h1>
          <p className="mt-[21px] text-center">
            Most book keeping software is accurate, but hard to use. We make the
            <br />
            opposite trade-off, and hope you don’t get audited.
          </p>
          <div className="flex justify-center mt-[39px] gap-5">
            <button className="text-[14px] bg-black text-white py-[12px] px-[16px] rounded-3xl">
              Get 6 months free
            </button>
            <button className="text-[14px] py-[12px] px-[20px] border rounded-3xl flex items-center gap-2">
              <img src="/img/light/play.png" alt="" />
              Watch video
            </button>
          </div>

          {/* Companies */}
          <p className="mt-[174px] text-center">
            Trusted by these six companies so far
          </p>
          <div className="flex mt-[37px] gap-10 justify-center items-center">
            <span>
              <img src="/img/light/transistor.png" alt="" />
            </span>
            <span>
              <img src="/img/light/tuple.png" alt="" />
            </span>
            <span>
              <img src="/img/light/statickit.png" alt="" />
            </span>
            <span>
              <img src="/img/light/mirage.png" alt="" />
            </span>
            <span>
              <img src="/img/light/laravel.png" alt="" />
            </span>
            <span>
              <img src="/img/light/statamic.png" alt="" />
            </span>
          </div>
        </section>
      </div>
    </>
  );
}

export default App;
