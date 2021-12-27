import React, { useContext, useState } from 'react'

import SidebarContent from './SidebarContent'
import { Transition, Backdrop } from '@windmill/react-ui'

import { SidebarContext } from '../../context/SidebarContext'
import { BellIcon, MoonIcon, SunIcon } from '@heroicons/react/solid'
import {
	Avatar,
	Badge,
	Dropdown,
	DropdownItem,
	WindmillContext,
} from '@windmill/react-ui'
import {
	OutlineCogIcon,
	OutlineLogoutIcon,
	OutlinePersonIcon,
} from '../../icons'

function MobileSidebar() {
	const { isSidebarOpen, closeSidebar } = useContext(SidebarContext)
	const { mode, toggleMode } = useContext(WindmillContext)
	const { toggleSidebar } = useContext(SidebarContext)

	const [isNotificationsMenuOpen, setIsNotificationsMenuOpen] = useState(false)
	const [isProfileMenuOpen, setIsProfileMenuOpen] = useState(false)

	function handleNotificationsClick() {
		setIsNotificationsMenuOpen(!isNotificationsMenuOpen)
	}

	function handleProfileClick() {
		setIsProfileMenuOpen(!isProfileMenuOpen)
	}
	return (
		<Transition show={isSidebarOpen}>
			<>
				<Transition
					enter='transition ease-in-out duration-150'
					enterFrom='opacity-0'
					enterTo='opacity-100'
					leave='transition ease-in-out duration-150'
					leaveFrom='opacity-100'
					leaveTo='opacity-0'>
					<Backdrop onClick={closeSidebar} />
				</Transition>

				<Transition
					enter='transition ease-in-out duration-150'
					enterFrom='opacity-0 transform -translate-x-20'
					enterTo='opacity-100'
					leave='transition ease-in-out duration-150'
					leaveFrom='opacity-100'
					leaveTo='opacity-0 transform -translate-x-20'>
					<aside className='fixed inset-y-0 z-50 flex-shrink-0 w-11/12 pa-3 rounded-lg overflow-y-auto left-0 bg-white dark:bg-gray-800 lg:hidden'>
						<header className='relative z-60 pt-20 pl-5 text-purple-500 dark:text-purple-300 '>
							<div className='grid grid-rows-4 h-full space-y-5'>
								<div className='w-32'>
									{mode === 'dark' ? (
										<img src={'/mixrank_white.svg'} alt='mixrank' />
									) : (
										<img src={'/mixrank_dark.svg'} alt='mixrank' />
									)}
								</div>
								{/* <!-- Profile menu --> */}
								<div className='relative'>
									<button
										className='rounded-full focus:shadow-outline-purple focus:outline-none'
										onClick={handleProfileClick}
										aria-label='Account'
										aria-haspopup='true'>
										<Avatar
											className='align-middle mr-3'
											src='https://images.unsplash.com/photo-1502378735452-bc7d86632805?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=200&fit=max&s=aa3a807e1bbdfd4364d1f449eaa96d82'
											alt=''
											aria-hidden='true'
										/>
										My profile
									</button>
									<Dropdown
										align='left'
										isOpen={isProfileMenuOpen}
										onClose={() => setIsProfileMenuOpen(false)}
										className='z-50'>
										<DropdownItem tag='a' href='#'>
											<OutlinePersonIcon
												className='w-4 h-4 mr-3'
												aria-hidden='true'
											/>
											<span>Profile</span>
										</DropdownItem>
										<DropdownItem tag='a' href='#'>
											<OutlineCogIcon
												className='w-4 h-4 mr-3'
												aria-hidden='true'
											/>
											<span>Settings</span>
										</DropdownItem>
										<DropdownItem onClick={() => alert('Log out!')}>
											<OutlineLogoutIcon
												className='w-4 h-4 mr-3'
												aria-hidden='true'
											/>
											<span>Log out</span>
										</DropdownItem>
									</Dropdown>
								</div>
								{/* <!-- Notifications menu --> */}
								<div className='relative'>
									<button
										className='relative rounded-md focus:outline-none focus:shadow-outline-purple flex items-center align-middle'
										onClick={handleNotificationsClick}
										aria-label='Notifications'
										aria-haspopup='true'>
										<BellIcon className='w-5 h-5 mr-3' aria-hidden='true' />
										{/* <!-- Notification badge --> */}
										<span
											aria-hidden='true'
											className='absolute top-0 right-0 inline-block w-3 h-3 transform translate-x-1 -translate-y-1 bg-red-600 border-2 border-white rounded-full dark:border-gray-800'></span>
										Notifications
									</button>

									<Dropdown
										align='left'
										isOpen={isNotificationsMenuOpen}
										onClose={() => setIsNotificationsMenuOpen(false)}
										className='z-50'>
										<DropdownItem tag='a' href='#' className='justify-between'>
											<span>Reports</span>
											<Badge type='danger'>13</Badge>
										</DropdownItem>
										<DropdownItem tag='a' href='#' className='justify-between'>
											<span>Queries</span>
											<Badge type='danger'>2</Badge>
										</DropdownItem>
										<DropdownItem onClick={() => alert('Alerts!')}>
											<span>Alerts</span>
										</DropdownItem>
									</Dropdown>
								</div>

								{/* <!-- Theme toggler --> */}
								<div className='flex'>
									<button
										className='rounded-md focus:outline-none focus:shadow-outline-purple text-purple-500'
										onClick={toggleMode}
										aria-label='Toggle color mode'>
										{mode === 'dark' ? (
											<span className=' flex items-center align-middle'>
												<SunIcon className='w-5 h-5 mr-3' aria-hidden='true' />
												Light Mode
											</span>
										) : (
											<span className=' flex items-center align-middle'>
												<MoonIcon className='w-5 h-5 mr-3' aria-hidden='true' />
												Dark Mode
											</span>
										)}
									</button>
								</div>
							</div>
						</header>
						<SidebarContent />
					</aside>
				</Transition>
			</>
		</Transition>
	)
}

export default MobileSidebar
