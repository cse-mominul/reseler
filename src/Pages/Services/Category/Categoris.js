import React from 'react';
import Category from './Category';

const Categoris = () => {

 const services = [
    {
        id : 1,
        name : "Premium Phonnes",
        img : "https://www.91-cdn.com/hub/wp-content/uploads/2022/11/Oppo-Reno-9-Pro-Plus.png"
    },
    {
        id : 2,
        name : "Midrange Phones",
        img : "https://fairmartslive.s3.ap-south-1.amazonaws.com/public/assets/images/thumbnails/fairmart-lafzwl8oXo.png"
    },
    {
        id : 3,
        name : "Low Buduget Phones",
        img : "https://www.bgr.in/wp-content/uploads/2022/08/pictures144234-v7-oneplus-10-pro-mobile-phone-large-1.jpg"
    }
 ] 


    return (
<div className='grid gird-cols-1 md:grid-cols-2 lg:grid-cols-3 h-60'>
    {
        services.map(service => <Category
        key={service.id}
        service={service}
        ></Category>)
    }
</div>
    );
};

export default Categoris;