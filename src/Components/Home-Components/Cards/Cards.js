import React, { useState, useEffect } from "react";
import BreakFast from './CardsData/Data';
import "./Cards.css";

function Card() {
    const [loading, setLoading] = useState(true);
    const [breakfastItems, setBreakfastItems] = useState([]);

    const selectedIds = [25, 26, 27];
    const desertIds = [1, 6, 28];
    const desertItems = BreakFast.filter(item => desertIds.includes(item.id));


    useEffect(() => {
        setTimeout(() => {
            const items = BreakFast.filter(item => selectedIds.includes(item.id));
            setBreakfastItems(items);
            setLoading(false);
        }, 1000); // Simulate fetching delay
    }, []);

    const stars = [
        { id: 1, img: "https://fabrx.co/fullpreview/tastebite/assets/images/icons/star-fill.svg" },
        { id: 2, img: "https://fabrx.co/fullpreview/tastebite/assets/images/icons/star-fill.svg" },
        { id: 3, img: "https://fabrx.co/fullpreview/tastebite/assets/images/icons/star-fill.svg" },
        { id: 4, img: "https://fabrx.co/fullpreview/tastebite/assets/images/icons/star-fill.svg" },
        { id: 5, img: "https://fabrx.co/fullpreview/tastebite/assets/images/icons/star-fill.svg" }
    ];

    if (loading) {
        return <div className="loader"></div>;
    }

    return (
        <>
            <div className="card-container-breakfast">
                <h1>Breakfast</h1>
                <div className="Breakfast-cards">
                    {breakfastItems.map(BreakFast => (
                        <div key={BreakFast.id} className="card">
                            <img src={BreakFast.img} alt={BreakFast.name} />

                            {/* Star rating below the main image */}
                            <div className="star-rating">
                                {stars.map(star => (
                                    <img key={star.id} src={star.img} alt="star" className="star" />
                                ))}
                            </div>

                            <h2>{BreakFast.name}</h2>
                        </div>
                    ))}
                </div>
            </div>

            <div className="card-container-Desert">
                <h1>Desseret</h1>
                <div className="Deresrt-cards">
                    {desertItems.map(Desert => (
                        <div key={Desert.id} className="card">
                            <img src={Desert.img} alt={Desert.name} />

                            {/* Star rating below the main image */}
                            <div className="star-rating">
                                {stars.map(star => (
                                    <img key={star.id} src={star.img} alt="star" className="star" />
                                ))}
                            </div>

                            <h2>{Desert.name}</h2>
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
}

export default Card;