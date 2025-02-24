import React from 'react'
import "../Home/Home.css"
import Section1 from '../Home-Components/Section 1/Secton1Card'
import Cards from '../Home-Components/Cards/Cards'
import Category from '../Home-Components/Popular-Category/Categories'
import Login_Page from '../Home-Components/login Box/Email'
import RecipeCards from '../Home-Components/Latest Recepies/RecipeCards'
import Footer from '../Home-Components/Footer/Footer'
export default function home() {
  return (
    <>
      <div className="container">
        <Section1 />
        <Cards />
        <Category />
      </div>
      <Login_Page />
      <div className="container">
        <RecipeCards/>
        <Footer />
      </div>
    </>
  )
}

