import { AiOutlineInfoCircle } from "react-icons/ai"

type cardprops = {
  borderColor: string
  firstPriceFigure: string
  name: string
  textColor: string
  background: string
  scale: boolean
  textArray: any
  secondPriceFigure: string
  keepOnPrivateVisible: boolean
}

const Card: React.FC<cardprops> = ({
  borderColor: color,
  firstPriceFigure: price,
  name,
  textColor,
  background,
  scale,
  textArray,
  secondPriceFigure,
  keepOnPrivateVisible,
}) => {
  return (
    <section
      className={`Card min-h-[500px] bg-white  border-x-2 border-y-4 ${color}  ${
        scale ? "h-[550px]" : "h-[500px]"
      } ${scale ? "scale-105" : ""}`}
    >
      <div className="card-content px-5 flex flex-col items-center py-5 gap-5">
        <h1 className={`uppercase font-bold text-2xl ${textColor}`}>{name}</h1>
        <p className={`text-[#3D4853] font-semibold ${textColor}`}>
          Administration
        </p>
        <div className="flex items-center gap-8 font-bold text-sm text-[#3D4853]">
          <p className={`${textColor}`}>$ </p>
          <p className={`${textColor}`}>{secondPriceFigure}</p>
        </div>
        <h2 className={`text-3xl font-bold -mt-8 ${textColor}`}>{price}</h2>
        <p className={`${textColor} font-semibold`}>per seat / month</p>
        <button
          className={`uppercase ${background} text-white w-full py-3 hover:opacity-75 rounded-sm`}
        >
          upgrade
        </button>
        <div className="features-testimonials flex flex-col items-start w-full ">
          {textArray.map((feature: any) => {
            return (
              <div className="flex items-center gap-2">
                <p className="text-left text-[#718191] font-medium text-sm">
                  {feature}
                </p>
                <AiOutlineInfoCircle className="text-sm" />
              </div>
            )
          })}
        </div>

        {keepOnPrivateVisible && (
          <div className="border-t-2 w-full flex flex-col items-center  pt-5 gap-2">
            <p className="font-normal">Want to keep on private server?</p>
            <button className={`${textColor} font-medium`}>
              Contact sales
            </button>
          </div>
        )}
      </div>
    </section>
  )
}

export default Card
