import logo from '../assets/star-346.svg'

const Productcontainer = ({ data }) => {
    return(
        <div className="product">
            <img className="product-image" src={data.image} alt={data.title} />
            <div className='product-title-rating-container'>
            <h4 className="product-title">{data.title}</h4>
            <img src={logo} className='rating-icon' alt="rating-icon" />
            <span>{data.rating.rate} </span>
            <span> ({data.rating.count})</span>
            </div>
            <p className="product-price">₹ {data.price}</p>
            <p className="product-desc">{data.description}</p>
        </div>
    )
}

export default Productcontainer