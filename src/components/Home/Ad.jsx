
export default function Ad() {
  return (
    <section className=" relative  h-screen bg-[url(@/assets/png/phone-banner.png)] bg-cover">
      <div className="absolute w-full h-full inset-0 gradient"></div>
      <section className="wrapper h-full ">
        <div className=" space-y-10 text-white/100  w-[40%] my-auto flex flex-col justify-center  h-full">
          <h1 className="text-display-md font-semibold leading-20 drop-shadow-lg">
            Get More with Every Fill , Turn Every Drop into Value
          </h1>
          <p className="text-textColor-50 drop-shadow-lg text-heading-md">Fuel smarter. Earn more. Drive better with Fuel Subsidy </p>
        </div>
      </section>
    </section>
  );
}
