import Card from "../Card/Card"

const OptionsList = () => {

  let basicTestimonials = [
    "Add time for others",
    " Hide time and pages",
    " Time audit",
    "Required fields",
    "Project templates",
    " Bulk edit",
    "Customize",
  ]

  let standardTestiomonials = [
    "All BASIC features",
    " Lock timesheets",
    "Time approval",
    "Manager role",
    "Timesheet reminders",
    " Import timesheets",
    "Time rounding",
    "Task rates",
    "Invoicing"
  ]

  let proTestiomonials = [
    "All STANDARD features",
    "Labor costs & profit",
    "Scheduled reports",
    "Budget & estimates",
    "Alerts",
    " Force timer",
    "GSP tracking",
    "Screenshots",
    "Custom fields"
  ]

  let enterpriseTestiomonials = [
    "All PRO features",
    "Single sign-on (SSO)",
    "Custom subdomain",
    "Control accounts"
  ]


  return (
    <div className="options px-5 grid grid-cols-1 gap-5 mt-10 md:grid-cols-2 xl:grid-cols-4 xl:gap-0">
      <Card
        borderColor="border-[#5A6B7B]"
        textColor="text-[#5A6B7B]"
        background="bg-[#5A6B7B]"
        name="basic"
        firstPriceFigure="4"
        secondPriceFigure="99"
        textArray={basicTestimonials}
        keepOnPrivateVisible={false}
        scale={false}
        description="Administration"

      />
      <Card
        borderColor="border-[#2F80ED]"
        textColor="text-[#2F80ED]"
        background="bg-[#2F80ED]"
        name="standard"
        firstPriceFigure="6"
        secondPriceFigure="49"
        textArray={standardTestiomonials}
        keepOnPrivateVisible={false}
        scale={true}
        description="Timesheet & Billing"

      />
      <Card
        borderColor="border-[#EB5757]"
        textColor="text-[#EB5757]"
        background="bg-[#EB5757]"
        name="pro"
        firstPriceFigure="9"
        secondPriceFigure="99"
        textArray={proTestiomonials}
        keepOnPrivateVisible={false}
        scale={false}
        description="Profit & Productivity"


      />
      <Card
        borderColor="border-[#9B51E0]"
        textColor="text-[#9B51E0]"
        background="bg-[#9B51E0]"
        name="enterprise"
        firstPriceFigure="11"
        secondPriceFigure="99"
        textArray={enterpriseTestiomonials}
        keepOnPrivateVisible={true}
        scale={false}
        description="Control & Secrurity"


      />
    </div>
  )
}

export default OptionsList
