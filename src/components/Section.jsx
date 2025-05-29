
const Section = ({Tagname="section" ,children, className}) => {
  return (
    <Tagname className={className}>
        <div className="container">
            {children}
        </div>
    </Tagname>
  )
}

export default Section
