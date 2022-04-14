import React from "react"

type Props = {
  period: string
  companyName: string
  role: string
}

const ExperienceItem = ({ period, companyName, role }: Props) => {
  // const variants = {
  //   hidden: { opacity: 0, y: 10 },
  //   visible: {
  //     opacity: 1,
  //     y: 0,
  //     transition: { staggerChildren: 1 },
  //   },
  // }

  // const item = {
  //   hidden: { opacity: 0, y: 30 },
  //   visible: { opacity: 1, y: 0, transition: { duration: 1 } },
  // }
  return (
    <div className="flex flex-col gap-2">
      <p className="Small text-primary-400">{period}</p>
      <h4 className="font-semibold BodyMedium text-primary-link dark:text-primary-lightLink">
        {companyName}
      </h4>
      <p className="pt-1 Body text-primary dark:text-primary-100">{role}</p>
    </div>
  )
}

export default ExperienceItem
