import React from 'react'

const Cars = () => {

  const carData = [
   {id: 1, name:'Audi',price: 35.00000,  description: 'An Automobile Manufacturer', image:'/audi.jpg'},
   {id: 2, name:'BMW',price: 65.000000,  description: 'A German Multinational Manufacturer of Luxury Vehicles', image: '/BMW.jpg'},
   {id:3, name:'Jaguar' ,price: 62.00000, description: 'Stunning Sports Car',image: '/jaguar.jpg'},
   {id:4, name:'Lamborghini',price: 70.00000, description: 'An Italian Manufacturer of Luxury Sports Car', image: '/lamborghini.jpg'},
  ];

  return (
    <div>
      <div className="cars">
        {carData.map((car) => (
         <div key={car.id} className="car-card">
          <img src={car.image} alt={car.name}/>
          <h3>{car.name}</h3>
          <p>{car.description}</p>
          <div className="price">${car.price}</div>
          <button>Add to Cart</button>
         </div>
        ))}
      </div>
    </div>
  )
}

export default Cars
