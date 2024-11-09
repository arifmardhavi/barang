
const Cards = (props) => {
    const {children, className} = props
    return (
        <div className={`bg-white p-3 rounded-md shadow ${className}`}>
            {children}
        </div>
    )
}

export default Cards