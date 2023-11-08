export default function MisionAndVision() {
  return (
    <>
      <div className="my-16">
        <div className="mb-8">
          <h1 className="font-bold text-center text-[28px] md:text-[48px] text-primary-800">
            MISIÓN Y VISIÓN
          </h1>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-y-12 md:gap-x-12">
          <div className="flex flex-col">
            <div className="bg-primary-800 py-4 flex items-center justify-center rounded-tl-3xl">
              <img
                className="h-36 "
                src={`${process.env.PUBLIC_URL}${"/icons/mision.svg"}`}
                alt="mision"
              />
            </div>
            <div className="flex-1 bg-secondary-400  p-4 flex flex-col items-center justify-center rounded-br-3xl min-h-[176px]">
              <h1 className="text-[30px] font-bold">MISIÓN</h1>
              <p className="text-[20px] font-normal text-justify">
                "Combatir la exlusión social y la pobreza a través del 
                microcrédito y soluciones financieras innovadoras, 
                apalancadas en el uso de tecnologia."
              </p>
            </div>
          </div>
          <div className="flex flex-col">
            <div className="bg-primary-800 py-4 flex items-center justify-center rounded-tl-3xl">
              <img
                className="h-36"
                src={`${process.env.PUBLIC_URL}${"/icons/vision.svg"}`}
                alt="vision"
              />
            </div>
            <div className="flex-1 bg-secondary-400 p-4 flex flex-col items-center justify-center rounded-br-3xl min-h-[176px]">
              <h1 className="text-[30px] font-bold">VISIÓN</h1>
              <p className="text-[20px] font-normal text-justify">
                "Ser la Cooperativa de Ahorro y Crédito con mayor número de socios 
                en el Perú, sirviendo a sus socioss con un modelo rentable, eficiente,
                innovador y con enfoque tecnológico.""
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
