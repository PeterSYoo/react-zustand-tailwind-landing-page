function App() {
  return (
    <>
      <div className="max-w-[1680px] px-[250px] mx-auto">
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
            <span className="text-2xl">☀️</span>
          </div>
        </section>
      </div>
    </>
  );
}

export default App;
