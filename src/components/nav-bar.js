import { useState, useEffect, createContext } from 'react';
import { Link } from 'react-router-dom';
import logo from './../MotoLogo.png'; // Tell webpack this JS file uses this image
const Navbar = (props) => {
	function setDropDown(e) {
		e.preventDefault();
		document.getElementById('myDropdown').classList.toggle('invisible');
	}
	const { auth } = props;
	return (
		<>
			<nav
				class="bg-gray-800 pt-2 md:pt-1 pb-1 px-1 mt-0 h-auto fixed w-full
			z-20 top-0"
			>
				<div class="flex flex-wrap items-center">
					<div class="flex flex-shrink md:w-1/3 justify-center md:justify-start text-white">
						<a href="#">
							<span
								class="text-xl text-gradient-to-r
							from-teal_custom
							to-gray-800 pl-2"
							>
								<i class="far fa-motorcycle fa-2x"></i>
							</span>
						</a>
					</div>
					<div class="flex flex-1 md:w-1/3 justify-center md:justify-start text-white px-4 my-2">
						<span class="relative w-full">
							<input
								type="search"
								placeholder="Search"
								class="w-full bg-gray-900 text-white transition border border-transparent focus:outline-none focus:border-gray-400 rounded py-3 px-2 pl-10 appearance-none leading-normal"
							/>
							<div
								class="absolute search-icon"
								style={{ top: '1rem', left: '.8rem' }}
							>
								<svg
									class="fill-current pointer-events-none text-white w-4 h-4"
									xmlns="http://www.w3.org/2000/svg"
									viewBox="0 0 20 20"
								>
									<path d="M12.9 14.32a8 8 0 1 1 1.41-1.41l5.35 5.33-1.42 1.42-5.33-5.34zM8 14A6 6 0 1 0 8 2a6 6 0 0 0 0 12z"></path>
								</svg>
							</div>
						</span>
					</div>
					<div
						class="flex
						w-full
						pt-2
						content-center
						justify-between
						md:w-1/3
						md:justify-end"
					>
						<div
							class="flex
							justify-around
							flex-1
							md:flex-none
							items-center"
						>
							<a
								class="inline-block py-2 px-4 text-white no-underline"
								href="#"
							>
								Product
							</a>
							<div class="relative inline-block md:mr-2">
								<button
									onClick={setDropDown}
									class="drop-button text-white focus:outline-none"
								>
									{' '}
									<span class="pr-2">
										<i class="fad fa-user-friends"></i>
									</span>{' '}
									Hi, User{' '}
									<svg
										class="h-3 fill-current inline"
										xmlns="http://www.w3.org/2000/svg"
										viewBox="0 0 20 20"
									>
										<path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
									</svg>
								</button>
								<div
									id="myDropdown"
									class="dropdownlist absolute bg-gray-800 text-white right-0 mt-3 p-3 overflow-auto z-30 w-36 invisible"
								>
									<div className="">
										<a
											href="#"
											class="p-2 hover:bg-gray-800 text-white text-sm hover:no-underline inline-block"
										>
											<i class="fa fa-cog fa-fw"></i> Settings
										</a>
										<div class="border border-gray-800"></div>
										<a
											href="#"
											class="p-2 hover:bg-gray-800 text-white text-sm hover:no-underline inline-block"
										>
											<i class="fas fa-sign-out-alt fa-fw"></i> Log Out
										</a>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</nav>
			<div class="flex flex-col lg:flex-row">
				<div class="bg-gray-800 shadow-xl h-16 fixed bottom-0 lg:relative lg:h-auto z-10 w-full lg:w-48">
					<div class="lg:mt-20 lg:w-48 lg:fixed md:left-0 md:top-0 text-left">
						<ul class="flex flex-row lg:flex-col py-0 md:py-3 px-1 lg:px-2 text-center lg:text-left">
							<li class="mr-3 flex-1">
								<a
									href="#"
									class="block py-1 md:py-3 pl-1 align-middle text-white no-underline hover:text-white border-b-2 border-gray-800 hover:border-pink-500"
								>
									<i class="fas fa-tasks pr-0 md:pr-3"></i>
									<span class="pb-1 md:pb-0 text-xs md:text-base text-gray-600 md:text-gray-400 block md:inline-block">
										Tasks
									</span>
								</a>
							</li>
							<li class="mr-3 flex-1">
								<a
									href="#"
									class="block py-1 md:py-3 pl-1 align-middle text-white no-underline hover:text-white border-b-2 border-gray-800 hover:border-purple-500"
								>
									<i class="fa fa-envelope pr-0 md:pr-3"></i>
									<span class="pb-1 md:pb-0 text-xs md:text-base text-gray-600 md:text-gray-400 block md:inline-block">
										Messages
									</span>
								</a>
							</li>
							<li class="mr-3 flex-1">
								<a
									href="#"
									class="block py-1 md:py-3 pl-1 align-middle text-white no-underline hover:text-white border-b-2 border-teal_custom "
								>
									<i class="fas fa-chart-area pr-0 md:pr-3 text-teal_custom "></i>
									<span class="pb-1 md:pb-0 text-xs md:text-base text-white md:text-white block md:inline-block">
										Analytics
									</span>
								</a>
							</li>
							<li class="mr-3 flex-1">
								<a
									href="#"
									class="block py-1 md:py-3 pl-0 md:pl-1 align-middle text-white no-underline hover:text-white border-b-2 border-gray-800 hover:border-red-500"
								>
									<i class="fa fa-wallet pr-0 md:pr-3"></i>
									<span class="pb-1 md:pb-0 text-xs md:text-base text-gray-600 md:text-gray-400 block md:inline-block">
										Payments
									</span>
								</a>
							</li>
						</ul>
					</div>
				</div>
				<div class="flex-1 bg-gray-100 mt-28 md:mt-16 pb-24 md:pb-5">
					<div class="bg-gray-800 pt-3">
						<div
							class="
							rounded-tl-3xl
							bg-gradient-to-r
							from-teal_custom
							to-gray-800
							p-4
							shadow
							text-2xl text-white
						"
						>
							<h3 class="font-bold pl-2">Analytics</h3>
						</div>
					</div>

					{/* <div class="flex flex-wrap">
						<div class="w-full md:w-1/2 xl:w-1/3 p-6">
							<div
								class="
								bg-gradient-to-b
								from-green-200
								to-green-100
								border-b-4 border-green-600
								rounded-lg
								shadow-xl
								p-5
							"
							>
								<div class="flex flex-row items-center">
									<div class="flex-shrink pr-4">
										<div class="rounded-full p-5 bg-green-600">
											<i class="fa fa-wallet fa-2x fa-inverse"></i>
										</div>
									</div>
									<div class="flex-1 text-right md:text-center">
										<h5 class="font-bold uppercase text-gray-600">
											Total Revenue
										</h5>
										<h3 class="font-bold text-3xl">
											$3249
											<span class="text-green-500">
												<i class="fas fa-caret-up"></i>
											</span>
										</h3>
									</div>
								</div>
							</div>
						</div>
					</div> */}
					<div class="flex flex-col lg:flex-row">
						<div class="w-full mt-4 lg:w-3/5 p-8 lg:mx-2">
							<div class="mt-8 grid 2xl:grid-cols-5 xl:grid-cols-3 lg:grid-cols-3 md:grid-cols-4 gap-5">
								<div class="rounded bg-white border-gray-200 shadow-md overflow-hidden relative hover:shadow-lg">
									<img
										src="https://www.yamaha-motor.com.ph/parts-and-accessories/images/accessories/tfx-150-accessories/tfx150-bikers-fat-hand-bar-hole-set.png"
										alt="stew"
										class="h-32 sm:h-48 w-full object-cover"
									/>
									<div class="m-4">
										<span class="font-bold">
											BIKERS FAT HAND.BAR HOL.SET GD B48-SF344-Q3-GD
										</span>
										<span class="block text-gray-500 text-sm">By Yamaha</span>
									</div>
									<div class="absolute top-0 ml-2 p-2 mt-2 bg-teal_custom text-white text-sm uppercase font-bold rounded-full">
										<i class="fad fa-tags fa-lg"></i>
										<span>₱25,200</span>
									</div>
								</div>
								<div class="rounded bg-white border-gray-200 shadow-md overflow-hidden relative hover:shadow-lg">
									<img
										src="https://www.yamaha-motor.com.ph/parts-and-accessories/images/accessories/tfx-150-accessories/tfx150-bikers-fat-hand-bar-hole-set.png"
										alt="stew"
										class="h-32 sm:h-48 w-full object-cover"
									/>
									<div class="m-4">
										<span class="font-bold">
											BIKERS FAT HAND.BAR HOL.SET GD B48-SF344-Q3-GD
										</span>
										<span class="block text-gray-500 text-sm">By Yamaha</span>
									</div>
									<div class="absolute top-0 ml-2 p-2 mt-2 bg-teal_custom text-white text-sm uppercase font-bold rounded-full">
										<i class="fad fa-tags fa-lg"></i>
										<span>₱25,200</span>
									</div>
								</div>
								<div class="rounded bg-white border-gray-200 shadow-md overflow-hidden relative hover:shadow-lg">
									<img
										src="https://www.yamaha-motor.com.ph/parts-and-accessories/images/accessories/tfx-150-accessories/tfx150-bikers-fat-hand-bar-hole-set.png"
										alt="stew"
										class="h-32 sm:h-48 w-full object-cover"
									/>
									<div class="m-4">
										<span class="font-bold">
											BIKERS FAT HAND.BAR HOL.SET GD B48-SF344-Q3-GD
										</span>
										<span class="block text-gray-500 text-sm">By Yamaha</span>
									</div>
									<div class="absolute top-0 ml-2 p-2 mt-2 bg-teal_custom text-white text-sm uppercase font-bold rounded-full">
										<i class="fad fa-tags fa-lg"></i>
										<span>₱25,200</span>
									</div>
								</div>
								<div class="rounded bg-white border-gray-200 shadow-md overflow-hidden relative hover:shadow-lg">
									<img
										src="https://www.yamaha-motor.com.ph/parts-and-accessories/images/accessories/tfx-150-accessories/tfx150-bikers-fat-hand-bar-hole-set.png"
										alt="stew"
										class="h-32 sm:h-48 w-full object-cover"
									/>
									<div class="m-4">
										<span class="font-bold">
											BIKERS FAT HAND.BAR HOL.SET GD B48-SF344-Q3-GD
										</span>
										<span class="block text-gray-500 text-sm">By Yamaha</span>
									</div>
									<div class="absolute top-0 ml-2 p-2 mt-2 bg-teal_custom text-white text-sm uppercase font-bold rounded-full">
										<i class="fad fa-tags fa-lg"></i>
										<span>₱25,200</span>
									</div>
								</div>
								<div class="rounded bg-white border-gray-200 shadow-md overflow-hidden relative hover:shadow-lg">
									<img
										src="https://www.yamaha-motor.com.ph/parts-and-accessories/images/accessories/tfx-150-accessories/tfx150-bikers-fat-hand-bar-hole-set.png"
										alt="stew"
										class="h-32 sm:h-48 w-full object-cover"
									/>
									<div class="m-4">
										<span class="font-bold">
											BIKERS FAT HAND.BAR HOL.SET GD B48-SF344-Q3-GD
										</span>
										<span class="block text-gray-500 text-sm">By Yamaha</span>
									</div>
									<div class="absolute top-0 ml-2 p-2 mt-2 bg-teal_custom text-white text-sm uppercase font-bold rounded-full">
										<i class="fad fa-tags fa-lg"></i>
										<span>₱25,200</span>
									</div>
								</div>
								<div class="rounded bg-white border-gray-200 shadow-md overflow-hidden relative hover:shadow-lg">
									<img
										src="https://www.yamaha-motor.com.ph/parts-and-accessories/images/accessories/tfx-150-accessories/tfx150-bikers-fat-hand-bar-hole-set.png"
										alt="stew"
										class="h-32 sm:h-48 w-full object-cover"
									/>
									<div class="m-4">
										<span class="font-bold">
											BIKERS FAT HAND.BAR HOL.SET GD B48-SF344-Q3-GD
										</span>
										<span class="block text-gray-500 text-sm">By Yamaha</span>
									</div>
									<div class="absolute top-0 ml-2 p-2 mt-2 bg-teal_custom text-white text-sm uppercase font-bold rounded-full">
										<i class="fad fa-tags fa-lg"></i>
										<span>₱25,200</span>
									</div>
								</div>
							</div>
						</div>
						<div class="lg:mx-4 -mt-4 w-full lg:w-2/5">
							<div class="flex shadow-lg my-10 ">
								<div class="w-full bg-white px-10 py-10">
									<div class="flex justify-between border-b pb-8">
										<h1 class="font-semibold text-2xl">Shopping Cart</h1>
										<h2 class="font-semibold text-2xl">3 Items</h2>
									</div>
									<div class="flex justify-between mt-10 mb-5">
										<h3 class="font-semibold text-gray-600 text-xs uppercase w-full">
											Product Details
										</h3>
										<h3 class="font-semibold text-gray-600 text-xs uppercase w-full text-center">
											Quantity
										</h3>
										<h3 class="font-semibold text-gray-600 text-xs uppercase w-full text-center">
											Price
										</h3>
										<h3 class="font-semibold text-gray-600 text-xs uppercase w-full text-center">
											Total
										</h3>
									</div>
									<div class="flex items-center justify-between hover:bg-gray-100 py-5">
										<div class="flex w-full">
											<div class="flex flex-col justify-between flex-grow h-24">
												<span class="font-bold text-sm">BIKERS FAT HAND</span>
												<span class="text-red-500 text-xs">Yamaha</span>
												<a
													href="#"
													class="font-semibold hover:text-red-500 text-gray-500 text-xs"
												>
													Remove
												</a>
											</div>
										</div>

										<div class="flex xl:flex-row lg:flex-col items-center justify-between w-full h-24">
											<svg
												class="xl:order-first lg:order-last fill-current text-gray-600 w-3"
												viewBox="0 0 448 512"
											>
												<path d="M416 208H32c-17.67 0-32 14.33-32 32v32c0 17.67 14.33 32 32 32h384c17.67 0 32-14.33 32-32v-32c0-17.67-14.33-32-32-32z" />
											</svg>
											<input
												class="mx-2 border text-center w-14 rounded-md"
												type="text"
											/>
											<svg
												class="xl:order-last lg:order-first fill-current text-gray-600 w-3"
												viewBox="0 0 448 512"
											>
												<path d="M416 208H272V64c0-17.67-14.33-32-32-32h-32c-17.67 0-32 14.33-32 32v144H32c-17.67 0-32 14.33-32 32v32c0 17.67 14.33 32 32 32h144v144c0 17.67 14.33 32 32 32h32c17.67 0 32-14.33 32-32V304h144c17.67 0 32-14.33 32-32v-32c0-17.67-14.33-32-32-32z" />
											</svg>
										</div>
										<span class="text-center w-full font-semibold text-sm pr-2 break-words">
											$400.0000
										</span>
										<span class="text-center w-full font-semibold text-sm break-words">
											$400.0000
										</span>
									</div>
									{/* <a
										href="#"
										class="flex font-semibold text-indigo-600 text-sm mt-10"
									>
										<svg
											class="fill-current mr-2 text-indigo-600 w-4"
											viewBox="0 0 448 512"
										>
											<path d="M134.059 296H436c6.627 0 12-5.373 12-12v-56c0-6.627-5.373-12-12-12H134.059v-46.059c0-21.382-25.851-32.09-40.971-16.971L7.029 239.029c-9.373 9.373-9.373 24.569 0 33.941l86.059 86.059c15.119 15.119 40.971 4.411 40.971-16.971V296z" />
										</svg>
										Continue Shopping
									</a> */}
									<div className="flex flex-col border-t pt-8 gap-y-2">
										<div class="flex justify-between">
											<h1 class="font-semibold text-lg">Sub Total : </h1>
											<h2 class="font-semibold text-xl">3000</h2>
										</div>
										<div class="flex justify-between">
											<h1 class="font-semibold text-lg">Tax : </h1>
											<h2 class="font-semibold text-xl">3000</h2>
										</div>
										<div class="flex justify-between">
											<h1 class="font-semibold text-2xl">Total : </h1>
											<h2 class="font-semibold text-2xl">3000</h2>
										</div>
										<button
											class="
							bg-teal_custom 
							font-semibold
							py-3
							mt-2
							text-sm text-white
							uppercase
							w-full
							shadow-lg
							rounded-lg
						"
										>
											Checkout
										</button>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default Navbar;
