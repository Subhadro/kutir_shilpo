import {Fragment} from "react";
import {Disclosure, Menu, Transition} from "@headlessui/react";
import {Bars3Icon, BellIcon, XMarkIcon} from "@heroicons/react/24/outline";

const navigation = [
	{name: "Dashboard", href: "#", current: true},
	{name: "Team", href: "#", current: false},
	{name: "Projects", href: "#", current: false},
	{name: "Calendar", href: "#", current: false},
];

function classNames(...classes) {
	return classes.filter(Boolean).join(" ");
}

export default function Navbar() {
	return (
		<Disclosure as="nav" className="bg-gray-800 relative z-10">
			{({open}) => (
				<>
					<div className="max-w-9xl sm:px-6 lg:m-0 lg:p-0">
						<div className="flex h-16 items-center justify-between">
							<div className="inset-y-0 left-0 flex items-center sm:hidden">
								{/* Mobile menu button*/}
								<Disclosure.Button className="relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
									<span className="absolute -inset-0.5" />
									<span className="sr-only">
										Open main menu
									</span>
									{open ? (
										<XMarkIcon
											className="block h-6 w-6"
											aria-hidden="true"
										/>
									) : (
										<Bars3Icon
											className="block h-6 w-6"
											aria-hidden="true"
										/>
									)}
								</Disclosure.Button>
							</div>
							<div className="flex items-center justify-start">
								<div className="flex flex-shrink-0 items-center justify-center">
									<div className="p-2 m-2">
										<img
											className="h-8 w-auto rounded-2xl"
											src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSwPCODeWiVfeT82Yu6J6q5t0yJFoKUmFD_9XPOTfTCcA&s"
											alt="Your Company"
										/>
									</div>

									<div className="searchbar relative">
										<input
											type="text"
											placeholder="Search..."
											className="py-2 pl-10 pr-4 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
										/>
										<svg
											xmlns="http://www.w3.org/2000/svg"
											className="h-6 w-6 text-gray-400 absolute top-1/2 transform -translate-y-1/2 left-3"
											fill="none"
											viewBox="0 0 24 24"
											stroke="currentColor"
										>
											<path
												strokeLinecap="round"
												strokeLinejoin="round"
												strokeWidth={2}
												d="M15 11a4 4 0 11-8 0 4 4 0 018 0z"
											/>
											<path
												strokeLinecap="round"
												strokeLinejoin="round"
												strokeWidth={2}
												d="M17.5 17.5l2.5 2.5"
											/>
										</svg>
									</div>
								</div>
							</div>
							<div className="hidden sm:flex justify-end">
								<div className="flex space-x-12">
									{navigation.map(item => (
										<a
											key={item.name}
											href={item.href}
											className={classNames(
												item.current
													? "bg-gray-900 text-white"
													: "text-gray-300 hover:bg-gray-700 hover:text-white",
												"rounded-md px-5 py-2 text-sm font-medium"
											)}
											aria-current={
												item.current
													? "page"
													: undefined
											}
										>
											{item.name}
										</a>
									))}
								</div>
							</div>
							<div className="flex p-4 m-2 items-center justify-center ">
								<button
									type="button"
									className="relative rounded-full bg-gray-800 p-1 text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
								>
									<span className="absolute -inset-1.5" />
									<span className="sr-only">
										View notifications
									</span>
									<BellIcon
										className="h-6 w-6"
										aria-hidden="true"
									/>
								</button>

								{/* Profile dropdown */}
								<Menu as="div" className="relative ml-5">
									<div>
										<Menu.Button className="relative flex rounded-full bg-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
											<span className="absolute -inset-1.5" />
											<span className="sr-only">
												Open user menu
											</span>
											<img
												className="h-8 w-8 rounded-full"
												src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
												alt=""
											/>
										</Menu.Button>
									</div>
									<Transition
										as={Fragment}
										enter="transition ease-out duration-100"
										enterFrom="transform opacity-0 scale-95"
										enterTo="transform opacity-100 scale-100"
										leave="transition ease-in duration-75"
										leaveFrom="transform opacity-100 scale-100"
										leaveTo="transform opacity-0 scale-95"
									>
										<Menu.Items className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
											<Menu.Item>
												{({active}) => (
													<a
														href="#"
														className={classNames(
															active
																? "bg-gray-100"
																: "",
															"block px-4 py-2 text-sm text-gray-700"
														)}
													>
														Your Profile
													</a>
												)}
											</Menu.Item>
											<Menu.Item>
												{({active}) => (
													<a
														href="#"
														className={classNames(
															active
																? "bg-gray-100"
																: "",
															"block px-4 py-2 text-sm text-gray-700"
														)}
													>
														Settings
													</a>
												)}
											</Menu.Item>
											<Menu.Item>
												{({active}) => (
													<a
														href="#"
														className={classNames(
															active
																? "bg-gray-100"
																: "",
															"block px-4 py-2 text-sm text-gray-700"
														)}
													>
														Sign out
													</a>
												)}
											</Menu.Item>
										</Menu.Items>
									</Transition>
								</Menu>
							</div>
						</div>
					</div>

					<Disclosure.Panel className="sm:hidden">
						<div className="space-y-15 px-2 pb-3 pt-2">
							{navigation.map(item => (
								<Disclosure.Button
									key={item.name}
									as="a"
									href={item.href}
									className={classNames(
										item.current
											? "bg-gray-900 text-white"
											: "text-gray-300 hover:bg-gray-700 hover:text-white",
										"block rounded-md px-3 py-2 text-base font-medium"
									)}
									aria-current={
										item.current ? "page" : undefined
									}
								>
									{item.name}
								</Disclosure.Button>
							))}
						</div>
					</Disclosure.Panel>
				</>
			)}
		</Disclosure>
		//blog section
	);
}
