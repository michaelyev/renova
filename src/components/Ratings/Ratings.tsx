import React from 'react'

import Image from 'next/image'

const ratings = [
    {
        logo: '/images/logos/thumbtack_logo.svg',
        link: '/'
    },
    {
        logo: '/images/logos/home_advisor_logo.svg',
        link: '/'
    },
    {
        logo: '/images/logos/gmb_logo.svg',
        link: '/'
    },
    {
        logo: '/images/logos/porch_logo.svg',
        link: '/'
    },
    {
        logo: '/images/logos/yelp_logo.svg',
        link: '/'
    },
    {
        logo: '/images/logos/houzz_logo.svg',
        link: '/'
    },
    {
        logo: '/images/logos/facebook_logo.svg',
        link: '/'
    }
]


const Ratings = () => {
  return (
    <section>
      <div className="container">
        <div className="mt-[128px]">
          <h3 className="font-darkGrotesque font-bold text-4xl leading-tight mb-[40px]">
            Manufacturers
          </h3>
          <p className="pb-[24px]">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla
            distinctio consequuntur obcaecati deleniti alias vero ab deserunt
            dolores impedit mollitia. Lorem ipsum dolor sit amet. Lorem ipsum
            dolor sit amet.
          </p>
        </div>

        <div className="flex flex-wrap justify-around items-center gap-5 mt-[67px]">
            {ratings.map((rating, i) => {
                return (
                    <a key={i} href={rating.link}> <Image alt='' src={rating.logo} width={315} height={0} /> </a>
                )
            })}
        </div>


      </div>
    </section>
  );
}

export default Ratings