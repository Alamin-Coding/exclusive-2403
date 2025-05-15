
const OutlateButton = ({children, type='button', TagName, ...props}) => {
  return (
    <TagName {...props} className='text-black bg-transparent rounded-[4px] leading-[56px] text-center border border-black/40 flex justify-center gap-3 items-center' type={type}>
        {children}
    </TagName>
  )
}

export default OutlateButton
