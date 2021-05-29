import { useState, useEffect, createContext } from 'react';
import { Link } from 'react-router-dom';
const IndexProduct = (props) => {
	return (
		<>
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
						</div>
					</div>
					<div class="lg:mx-4 -mt-4 w-full lg:w-2/5">
						<div class="flex shadow-lg my-10 h-cart">
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
		</>
	);
};

export default IndexProduct;
