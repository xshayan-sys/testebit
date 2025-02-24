import React from 'react';
import "../Popular-Category/categories.css"
export default function PopularCategories() {
    const categories = [
        {
            id: 1,
            img: "https://fabrx.co/fullpreview/tastebite/assets/images/menus/menu8.png",
            name: "Pasta"
        },
        {
            id: 2,
            img: "https://fabrx.co/fullpreview/tastebite/assets/images/menus/menu9.png",
            name: "Pizza"
        },
        {
            id: 3,
            img: "https://fabrx.co/fullpreview/tastebite/assets/images/menus/menu10.png",
            name: "Vegan"
        },
        {
            id: 4,
            img: "https://fabrx.co/fullpreview/tastebite/assets/images/menus/menu11.png",
            name: "Desserts"
        },
        {
            id: 5,
            img: "https://fabrx.co/fullpreview/tastebite/assets/images/menus/menu12.png",
            name: "Smoothies"
        },
        {
            id: 6,
            img: "https://fabrx.co/fullpreview/tastebite/assets/images/menus/menu13.png",
            name: "Breakfast"
        },
    ];

    return (
        <>
            <div className="PopularCategories">
                <h1 id='pop-ceta'>Popular Categories</h1>
                <div className="categories-container">
                    {categories.map(category => (
                        <div key={category.id} className="category-card">
                            <img src={category.img} alt={category.name} />
                            <h3>{category.name}</h3>
                        </div>
                    ))}
                </div>
            </div>
        </>
    );

}
