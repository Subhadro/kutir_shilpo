import React, { useState, useRef } from "react";
import Slider from "react-slick";
import Banner from "./banner";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
	faStar as solidStar,
	faStar as regularStar,
} from "@fortawesome/free-solid-svg-icons";
import { faCartPlus } from "@fortawesome/free-solid-svg-icons";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { faIndianRupeeSign } from "@fortawesome/free-solid-svg-icons";
import Navbar from "./navbar";

const rs = <FontAwesomeIcon icon={faIndianRupeeSign} />;

function Rating({ rating, handleRatingChange }) {
	const stars = [1, 2, 3, 4, 5];

	return (
		<div className="flex items-center mb-4">
			{stars.map(star => (
				<FontAwesomeIcon
					key={star}
					icon={star <= rating ? solidStar : regularStar}
					className="text-yellow-500 text-lg mr-1 cursor-pointer"
					onClick={() => handleRatingChange(star)}
				/>
			))}
		</div>
	);
}

function Details() {
	// Sample images
	const images = [
		"src/assets/pics/pic1.jpg",
		"src/assets/pics/pic2.jpg",
		"src/assets/pics/pic3.jpg",
		"src/assets/pics/pic4.jpg",
		"src/assets/pics/pic5.jpg",
	];
	const alldetails = [
		{
			heading: "New Creation",
			description:
				"Description goes here. You can add more details in this section.",
			detail1: "Detail 1",
			detail2: "Detail 2",
			detail3: "Detail 3",
			lastdescription: "Another brief description goes here.",
			price: "200",
		},
	];
	const briefdetails = [
		"something1",
		"something1",
		"something2",
		"something3",
		"something4",
	];

	// State to track the active slide index
	const [activeSlide, setActiveSlide] = useState(0);
	const [rating, setRating] = useState(0);

	// Ref to access the Slider component
	const sliderRef = useRef(null);

	// Function to handle click on thumbnail
	const handleThumbnailClick = index => {
		setActiveSlide(index);
		// Go to the clicked slide index
		sliderRef.current.slickGoTo(index);
	};

	// Function to handle rating change
	const handleRatingChange = newRating => {
		setRating(newRating);
	};

	// Settings for the Slider component
	const settings = {
		dots: true,
		infinite: true,
		speed: 500,
		slidesToShow: 1,
		slidesToScroll: 1,
		initialSlide: activeSlide,
		customPaging: function (i) {
			return (
				<div
					style={{
						margin: "10px",
						width: "5px",
						height: "5px",
						border: "2px solid white",
						borderRadius: "15px",
						background: activeSlide === i ? "#fff" : "#ccc", // Change dot color based on activeSlide
					}}
				></div>
			);
		},
	};

	return (
		<>
			<Navbar />
			<div className="flex justify-center items-center min-h-screen bg-blue-950 text-white gap-12">
				{/* Thumbnail Column */}
				<div className="w-1/12 py-10 mx-10 px-10">
					{images.map((image, index) => (
						<img
							key={index}
							src={image}
							alt={`Thumbnail ${index + 1}`}
							className="w-full h-auto mb-3 rounded-lg cursor-pointer"
							onClick={() => handleThumbnailClick(index)}
						/>
					))}
				</div>

				{/* Carousel Section */}
				<div className="w-1/3 p-10">
					<Slider {...settings} ref={sliderRef}>
						{images.map((image, index) => (
							<div key={index}>
								<img
									src={image}
									alt={`Slide ${index + 1}`}
									className="w-full h-auto rounded-lg"
								/>
							</div>
						))}
					</Slider>
				</div>

				{/* Details Section */}
				<div className="w-1/3 p-10 border border-r-2 rounded-2xl flex flex-col justify-between">
					<div>
						<Banner />
						<h1 className="text-3xl font-bold mb-4">
							{alldetails[0].heading}
						</h1>
						<Rating
							rating={rating}
							handleRatingChange={handleRatingChange}
						/>
						<p className="text-lg mb-4">
							{alldetails[0].description}
						</p>
						<p className="text-2xl mb-4">
							{rs}
							{alldetails[0].price}
						</p>
						<hr className="p-2 h-2" />

						{/* More Details in Column */}
						<div className="mb-4">
							<h2 className="text-xl font-semibold mb-2">
								More Details
							</h2>
							<ul>
								<li>{alldetails[0].detail1}</li>
								<li>{alldetails[0].detail2}</li>
								<li>{alldetails[0].detail3}</li>
							</ul>
						</div>

						{/* Brief Description */}
						<p className="text-sm">
							{alldetails[0].lastdescription}
						</p>
					</div>
					<div className="flex justify-center  gap-10 mt-6">
						<button className="bg-blue-600 text-white px-4 py-2 rounded-md">
							Buy Now
						</button>
						<button className="bg-blue-600 text-white px-4 py-2 rounded-md">
							<FontAwesomeIcon
								icon={faCartPlus}
								className="mr-2"
							/>
							Add to Cart
						</button>
					</div>
				</div>
			</div>
			<div className="flex justify-start ml-32 min-h-screen bg-blue-950 text-white gap-12">
				<ol className="text-white m-2" type="i">
					<p className="text-2xl mb-10">For more details:</p>
					{briefdetails.map((ele, index) => (
						<li key={index}>{ele}</li>
					))}
				</ol>
			</div>
		</>
	);
}

export default Details;
