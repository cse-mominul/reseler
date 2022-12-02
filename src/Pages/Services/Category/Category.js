import React from 'react';

const Category = ({service}) => {
    const {name, img} = service;
    return (
        <div>
            <div className="card w-96 bg-base-100 shadow-xl">
  <figure className="px-10 pt-10">
    <img src={img}alt="Shoes" className="rounded-xl h-40" />
  </figure>
  <div className="card-body items-center text-center">
    <h2 className="card-title">{name}</h2>
    <div className="card-actions">
      <button className="btn btn-primary">View All</button>
    </div>
  </div>
</div>
        </div>
    );
};

export default Category;