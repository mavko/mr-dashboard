import React, { useContext, useState } from 'react'
import { SidebarContext } from '../context/SidebarContext'
import {
	MoonIcon,
	SunIcon,
	BellIcon,
	MenuIcon,
	OutlinePersonIcon,
	OutlineCogIcon,
	OutlineLogoutIcon,
} from '../icons'
import {
	Avatar,
	Badge,
	Dropdown,
	DropdownItem,
	WindmillContext,
} from '@windmill/react-ui'

function Header() {
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
		<header className='z-40 pt-20 pb-3'>
			<div className='container flex justify-between h-full px-6 mx-auto space-x-6 text-purple-500 dark:text-purple-300'>
				<div className='w-32'>
					{mode === 'dark' ? (
						<h2 class='text-2xl font-medium'>CoreDataVault</h2>
					) : (
						<h2 class='text-2xl font-medium'>CoreDataVault</h2>
					)}
				</div>
				<ul className='items-center justify-end flex-shrink-0 hidden float-right space-x-6 sm:flex'>
					{/* <!-- Theme toggler --> */}
					<li className='flex'>
						<button
							className='rounded-md focus:outline-none focus:shadow-outline-purple'
							onClick={toggleMode}
							aria-label='Toggle color mode'>
							{mode === 'dark' ? (
								<SunIcon className='w-5 h-5' aria-hidden='true' />
							) : (
								<MoonIcon className='w-5 h-5' aria-hidden='true' />
							)}
						</button>
					</li>
					{/* <!-- Notifications menu --> */}
					<li className='relative'>
						<button
							className='relative align-middle rounded-md focus:outline-none focus:shadow-outline-purple'
							onClick={handleNotificationsClick}
							aria-label='Notifications'
							aria-haspopup='true'>
							<BellIcon className='w-5 h-5' aria-hidden='true' />
							{/* <!-- Notification badge --> */}
							<span
								aria-hidden='true'
								className='absolute top-0 right-0 inline-block w-3 h-3 transform translate-x-1 -translate-y-1 bg-red-600 border-2 border-white rounded-full dark:border-gray-800'></span>
						</button>

						<Dropdown
							align='right'
							isOpen={isNotificationsMenuOpen}
							onClose={() => setIsNotificationsMenuOpen(false)}>
							<DropdownItem tag='a' href='#' className='justify-between'>
								<span>Messages</span>
								<Badge type='danger'>13</Badge>
							</DropdownItem>
							<DropdownItem tag='a' href='#' className='justify-between'>
								<span>Sales</span>
								<Badge type='danger'>2</Badge>
							</DropdownItem>
							<DropdownItem onClick={() => alert('Alerts!')}>
								<span>Alerts</span>
							</DropdownItem>
						</Dropdown>
					</li>
					{/* <!-- Profile menu --> */}
					<li className='relative'>
						<button
							className='rounded-full focus:shadow-outline-purple focus:outline-none'
							onClick={handleProfileClick}
							aria-label='Account'
							aria-haspopup='true'>
							<Avatar
								className='align-middle'
								src='https://images.unsplash.com/photo-1502378735452-bc7d86632805?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=200&fit=max&s=aa3a807e1bbdfd4364d1f449eaa96d82'
								alt=''
								aria-hidden='true'
							/>
						</button>
						<Dropdown
							align='right'
							isOpen={isProfileMenuOpen}
							onClose={() => setIsProfileMenuOpen(false)}>
							<DropdownItem tag='a' href='#'>
								<OutlinePersonIcon
									className='w-4 h-4 mr-3'
									aria-hidden='true'
								/>
								<span>Profile</span>
							</DropdownItem>
							<DropdownItem tag='a' href='#'>
								<OutlineCogIcon className='w-4 h-4 mr-3' aria-hidden='true' />
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
					</li>
				</ul>
				{/* <!-- Mobile hamburger --> */}
				<button
					className='inline-flex items-center p-1 text-purple-400 transition duration-100 border-2 border-purple-500 rounded-lg cursor-pointer lg:hidden hover:bg-purple-500 active:bg-purple-500 hover:text-purple-200'
					onClick={toggleSidebar}
					aria-label='Menu'>
					<MenuIcon className='w-6 h-6' aria-hidden='true' />
				</button>
			</div>
		</header>
	)
}

export default Header
