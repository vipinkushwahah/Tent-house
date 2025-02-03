import './whatwedo.css'
import tentthree from '../assates/tenttree.jpg'
import tentone from '../assates/tenthouseone.jpg'
import tentow from '../assates/tenthousefive.jpg'
import tenthree from '../assates/tenthousefour.jpg'
import tenfour from '../assates/tenthouseseven.jpg'
import tenfive from '../assates/tenthousesix.jpg'
import tensix from '../assates/tenthousetree.jpg'

const WhatWeDo = () => {
    const services = [
        {
            id: 1,
            name: "Event",
            description: "We specialize in Event.",
            image: tentone
        },
        {
            id: 2,
            name: "Exhibitions",
            description: "Our team handles Exhibitions projects with a focus on efficiency and quality.",
            image: tentow
        },
        {
            id: 3,
            name: "Maa Bhawani Convention Center",
            description: "Our team handles Convention Center projects with a focus on efficiency and quality.",
            image: tenthree
        },
        {
            id: 4,
            name: "Conferences",
            description: "Our team handles Conferences projects with a focus on efficiency and quality.",
            image: tenfour
        },
        {
            id: 5,
            name: "Weddings",
            description: "Our team handles Weddings projects with a focus on efficiency and quality.",
            image: tensix
        },
        {
            id: 6,
            name: "Warehousing",
            description: "Our team handles Warehousing projects with a focus on efficiency and quality.",
            image: tenfive
        }
    ];
    const itemstwo = [
        'Super Structures for Rent in salempur', 'AC Tents for Rent in salempur', 'Pandals for Rent in salempur', 'Tent House Dealer salempur',
        'Canopy for Rent in salempur', 'Octanorm Exhibition Stalls for Rent salempur', "Shamiyana Tent House salempur",
    ]
    const itemstree = [
        'Aluminium Hanger Tents salempur', 'Exhibition Stalls for Rent in salempur',
        'Octanorm Exhibition Stalls salempur', 'Mega Hangers salempur', 'Wooden Stage for Rent in salempur', 'Waterproof Sheds for Rent in salempur'
    ]
    const items = [
        'Tent House for Rent in salempur', 'Chairs for Rent in salempur', ' Tent House Supplier salempur',
        'Shamiana for Rent in salempur', 'German Tents for Rent in salempur', 'Pagoda Tents salempur', 'Aluminium Tents salempur',
    ];
    return (
        <div className='container-section'>
            <div>
                <img
                    className="main_image"
                    src={tentthree}
                    alt="main"
                />
            </div>
            <div>
                <div className="heading-work">WHAT WE DO</div>
                <div>

                </div>
                <div>
                    <div className="services__list">
                        {Array.from({ length: 6 }).map((_, index) => (
                            <div className="service__card" key={index}>
                                <img
                                    src={services[index % services.length].image}
                                    alt={services[index % services.length].name}
                                    className="service__image"
                                />
                                <h2 className="service__name">{services[index % services.length].name}</h2>
                                <p className="service__description">{services[index % services.length].description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
            <div className='whtvdo_txt_1'>
                Contact Maa Bhawani Tent House for the following equipments on Hire / for rent in salempur Uttar-Pradesh.
            </div>
            <div className='doList'>
                <ul className="dot-list">
                    {items.map((item, index) => (
                        <li key={index} className="dot-list-item">
                            {item}
                        </li>
                    ))}
                </ul>
                <ul className="dot-list">
                    {itemstwo.map((item, index) => (
                        <li key={index} className="dot-list-item">
                            {item}
                        </li>
                    ))}
                </ul>
                <ul className="dot-list">
                    {itemstree.map((item, index) => (
                        <li key={index} className="dot-list-item">
                            {item}
                        </li>
                    ))}
                </ul>
            </div>
            <div>.</div>
            <div className='text_subhaeding'>
                <b>MAA BHAWANI Tent House - </b>Aluminum Tents, German Tents, Canopies, Pandals, Shamianas, Exhibition Stalls,
                Super Structures, Mega Hangers,
                AC Tents, Wooden Stages, Waterproof Sheds and more for Rent and on Hire in Salempur, Uttar-Pradesh.
            </div>
        </div>
    )
}
export default WhatWeDo