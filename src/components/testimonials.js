import React from 'react';
import PropTypes from 'prop-types';
import Slider from 'react-slick';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import testimonials from './testimonialList';

const isIterableArray = array => Array.isArray(array) && !!array.length;

const TestimonialItem = ({ description, author, designation, companyImage, size }) => {
  return (
    <div className="px-5 px-sm-6">
      <p className="fs-sm-1 fs-md-2 font-italic text-dark">{description}</p>
      <p className="fs-0 text-600">
        - {author}, {designation}
      </p>
    </div>
  );
};

TestimonialItem.propTypes = {
  description: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  designation: PropTypes.string.isRequired,
  companyImage: PropTypes.string.isRequired
};

const settings = {
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1
};

const Testimonial = () => (
  <div className="text-center">
    <div className="row justify-content-center">
      <div className="col-10 col-lg-9 col-xl-8">
        <Slider {...settings}>
          {isIterableArray(testimonials) &&
            testimonials.map((testimonial, index) => <TestimonialItem {...testimonial} key={index} />)}
        </Slider>
      </div>
    </div>
  </div>
);

export default Testimonial;
