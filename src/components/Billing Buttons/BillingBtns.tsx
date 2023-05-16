
const BillingBtns = () => {
  return (
    <div className="billing grid grid-cols-2 px-5 mt-10 xl:px-96">
      <button className="border-2 border-[#C6D2D9] px-10 py-3 bg-white rounded-sm lg:px-0">
        Monthly Billing
      </button>
      <button className="border-2 border-[#C6D2D9] px-10 py-3 bg-[#C6D2D9] flex items-center whitespace-nowrap gap-2  rounded-sm">
        Annual Billing
        <span className="bg-[#4CAF50] text-white px-2 text-sm py-1 rounded-sm">
          SAVE 20%
        </span>
      </button>
    </div>
  )
}

export default BillingBtns
