import { useState, useEffect, createContext } from 'react';
import { Link } from 'react-router-dom';
import logo from './../MotoLogo.png'; // Tell webpack this JS file uses this image
const Layout = (props) => {
	function setDropDown(e) {
		e.preventDefault();
		document.getElementById('myDropdown').classList.toggle('invisible');
	}
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
				<div class="bg-gray-800 shadow-xl h-16 fixed bottom-0 lg:relative lg:h-screen z-10 w-full lg:w-48">
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
				{props.children}
			</div>
		</>
	);
};

export default Layout;
