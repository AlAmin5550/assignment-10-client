
import PropTypes from 'prop-types';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const Countries = () => {
    const [countries, setCountries] = useState()
    useEffect(() => {
        fetch('https://voyage-vista-server-nu.vercel.app/countries')
            .then(res => res.json())
            .then(data => setCountries(data))
    }, [])

    return (
        <div className="container mx-auto md: text-center">
            <div className="mb-6 ">
                <p className="text-[#FFA801]">Checkout Featured</p>
                <h1 className="text-[#063970] text-4xl font-semibold ">Top Destination</h1>
            </div>
            
            <div className='mb-3  md:grid grid-cols-3 mr-10  ml-24 items-center justify-between '>
                {
                  countries &&  countries.map(country =><Link key={country._id} to={`/countrySpots/${country.name}`}><div  className="max-w-xs rounded-md shadow-md bg-gray-50 mb-5 text-gray-800">
                  <img src={country.image} alt="" className="object-cover object-center w-full rounded-t-md h-72 bg-gray-500" />
                  <div className="flex flex-col justify-between p-6 space-y-8">
                      <div className="space-y-2">
                          <h2 className="text-3xl font-semibold tracking-wide">{country.name}</h2>
                          <p className="text-gray-800">{country.description}</p>
                      </div>

                  </div>
              </div></Link> )
                }

            </div>
        </div>
    );
};

export default Countries;
Countries.propTypes = {
    countries: PropTypes.array
}