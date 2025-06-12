import CountdownTimer from "./CountdownTimer"

const SectionHeading = ({subHeading, heading, countDown=false}) => {
  return (
    <div className={`flex ${countDown && "gap-[87px] items-end"}`}>
        <div>
            <h3 className="text-primary text-base font-semibold relative pl-[56px] after:content-[''] after:absolute after:w-[20px] after:h-[40px] after:bg-primary after:rounded-[4px] after:left-0 after:top-1/2 after:translate-y-[-50%]">{subHeading}</h3>
            <h2 className="pt-7.5 text-black text-[46px] font-semibold">{heading}</h2>
        </div>

        {countDown && <CountdownTimer />}

    </div>
  )
}

export default SectionHeading