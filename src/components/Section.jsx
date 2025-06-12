
const Section = ({Tagname="section" ,children, className, ...props}) => {
  return (
    <Tagname className={className} {...props}>
        <div className="container">
            {children}
        </div>
    </Tagname>
  )
}

export default Section
