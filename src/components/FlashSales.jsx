
import Section from './Section'
import SectionHeading from './SectionHeading'

const FlashSales = () => {

  return (
    <Section className="pt-[140px] pb-[60px]">
        <SectionHeading subHeading="Today’s" heading="Flash Sale" countDown={true}/>
    </Section>
  )
}

export default FlashSales