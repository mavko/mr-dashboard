import React, { useState, useEffect } from 'react'

import {
	CheckIcon,
	DownloadIcon,
	FilterIcon,
	HeartIcon,
	InformationCircleIcon,
	LinkIcon,
	SearchIcon,
	StarIcon,
	TrendingUpIcon,
	UserGroupIcon,
	XCircleIcon,
} from '@heroicons/react/solid'

import {
	Table,
	TableHeader,
	TableCell,
	TableBody,
	TableRow,
	TableFooter,
	TableContainer,
	Badge,
	Avatar,
	Button,
	Pagination,
	Input,
	Dropdown,
	Select,
	ChartCard,
} from '@windmill/react-ui'
import { Modal, ModalHeader, ModalBody, ModalFooter } from '@windmill/react-ui'

import response from '../utils/demo/tableData'
// make a copy of the data, for the second table
const response2 = response.concat([])

function Tables() {
	/**
	 * DISCLAIMER: This code could be badly improved, but for the sake of the example
	 * and readability, all the logic for both table are here.
	 * You would be better served by dividing each table in its own
	 * component, like Table(?) and TableWithActions(?) hiding the
	 * presentation details away from the page view.
	 */

	// setup pages control for every table
	const [pageTable2, setPageTable2] = useState(1)

	// setup data for every table
	const [dataTable2, setDataTable2] = useState([])

	// pagination setup
	const resultsPerPage = 5
	const totalResults = response.length

	// pagination change control
	function onPageChangeTable2(p) {
		setPageTable2(p)
	}

	// on page change, load new sliced data
	// here you would make another server request for new data
	useEffect(() => {
		setDataTable2(
			response2.slice(
				(pageTable2 - 1) * resultsPerPage,
				pageTable2 * resultsPerPage
			)
		)
	}, [pageTable2])
	// filter
	const [isFilterMenuOpen, setIsFilterMenuOpen] = useState(false)

	function handleFilterClick() {
		setIsFilterMenuOpen(!isFilterMenuOpen)
	}
	// modal for detail view
	const [isModalOpen, setIsModalOpen] = useState(false)

	function openModal() {
		setIsModalOpen(true)
	}
	function closeModal() {
		setIsModalOpen(false)
	}

	return (
		<>
			<TableContainer className='mb-8 md:mt-20 relative z-0'>
				<div className='flex flex-col px-5 space-y-5 md:space-y-0 md:flex-row md:items-center md:align-middle md:justify-between bg-white dark:bg-gray-800 py-5 text-blue-600 dark:text-purple-300'>
					<div className='justify-start flex-auto'>
						<span className='font-sans text-3xl font-weight-black text-gray-900 dark:text-white'>
							Games
						</span>
					</div>
					{/* <!-- Search input --> */}
					<div className='flex flex-auto justify-between md:items-center md:mx-auto md:justify-center'>
						<div className='rounded-full focus-within:text-blue-600 relative mr-2'>
							<div className='absolute inset-y-0 flex items-center pl-2'>
								<SearchIcon className='w-4 h-4' aria-hidden='true' />
							</div>
							<Input
								className='pl-8 text-gray-700 rounded-full'
								placeholder='Search for games..'
								aria-label='Search'
							/>
						</div>
						{/* filter search */}
						<div className='relative'>
							<button
								className='border-2 border-purple-500 rounded-lg p-1 text-purple-400 cursor-pointer hover:bg-blue-600 active:bg-blue-600 hover:text-purple-200 transition duration-100 inline-flex items-center align-middle'
								onClick={handleFilterClick}>
								<FilterIcon className='w-5 h-4' />
							</button>
							<Dropdown
								align='right'
								isOpen={isFilterMenuOpen}
								onClose={() => setIsFilterMenuOpen(false)}
								className='z-50 p-8'>
								<header className='flex justify-between align-middle items-center mb-3'>
									<span className='justify-start text-medium font-weight-bold text-lg'>
										Filters
									</span>
									<button className='justify-end outline-none border-none'>
										<XCircleIcon className='w-8 h-8' />
									</button>
								</header>
								<div className='grid gap-4 sm:grid-cols-2 sm:grid-rows-3 my-5'>
									<Select className='mt-1 rounded-lg'>
										<option>Genre</option>
										<option>$1,000</option>
										<option>$5,000</option>
									</Select>
									<Select className='mt-1 rounded-lg'>
										<option>Date</option>
										<option>$1,000</option>
										<option>$5,000</option>
									</Select>
									<Select className='mt-1 rounded-lg'>
										<option>Devices</option>
										<option>$1,000</option>
										<option>$5,000</option>
									</Select>
									<Select className='mt-1 rounded-lg'>
										<option>OS version</option>
										<option>$1,000</option>
										<option>$5,000</option>
									</Select>
									<Select className='mt-1 rounded-lg'>
										<option>Country</option>
										<option>$1,000</option>
										<option>$5,000</option>
									</Select>
									<Select className='mt-1 rounded-lg active:bg-blue-600'>
										<option>Technology</option>
										<option>Facebook Login</option>
										<option>Chartboost</option>
										<option>Optimizely</option>
										<option>New Relic</option>
										<option>FreshWorks</option>
									</Select>
								</div>
								<footer className='flex justify-between align-middle items-center pt-3'>
									<span className='justify-start text-medium font-weight-bold'>
										Clear all
									</span>
									<button className='justify-end outline-none border-none flex items-center align-middle'>
										Save
										<CheckIcon className='w-4 h-4' />
									</button>
								</footer>
							</Dropdown>
						</div>
					</div>

					{/* show search results + save + share */}
					<div className='justify-end'>
						<p className='space-x-2 md:text-right text-base'>
							Showing <strong>{resultsPerPage}</strong> out of
							<strong>{totalResults}</strong> results
						</p>
						<div className='md:flex md:flex-row md:align-middle'>
							<button className='py-1 rounded-xl text-sm font-medium text-blue-600 transition-all flex align-middle items-center space-x-2 mr-5'>
								<HeartIcon className='w-3 h-3 align-middle ' />
								<span>Favorite query</span>
							</button>
							<button className='py-1 rounded-xl text-sm font-medium text-blue-400 transition-all flex align-middle items-center space-x-2 '>
								<LinkIcon className='w-3 h-3 align-middle ' />
								<span>Share query link </span>
							</button>
						</div>
					</div>
				</div>
				<Table>
					<TableHeader>
						<tr>
							<TableCell>Title</TableCell>
							<TableCell>Publisher</TableCell>
							<TableCell>Genre</TableCell>
							<TableCell>Rank</TableCell>
							<TableCell>Rating</TableCell>
							<TableCell>Downloads</TableCell>
							<TableCell>Favorite</TableCell>
						</tr>
					</TableHeader>
					<TableBody className='cursor-default'>
						{dataTable2.map((user, i) => (
							<TableRow key={i} onClick={openModal}>
								<TableCell className=''>
									<div className='flex items-center text-sm'>
										<Avatar
											className='hidden mr-3 md:block'
											src={user.avatar}
											alt='User avatar'
										/>
										<div>
											<p className='font-semibold'>{user.name}</p>
										</div>
									</div>
								</TableCell>
								<TableCell>
									<span className='text-sm'>{user.pub}</span>
								</TableCell>
								<TableCell>
									<Badge type={user.status}>{user.genre}</Badge>
								</TableCell>
								<TableCell>
									<span className='text-sm'>{user.rank}</span>
								</TableCell>
								<TableCell>
									<span className='text-sm'>{user.rating}</span>
								</TableCell>
								<TableCell>
									<span className='text-sm'>{user.downloads}</span>
								</TableCell>
								<TableCell>
									<div className='flex items-center space-x-4'>
										<Button
											layout='link'
											size='icon'
											aria-label='Favorite'
											className='border border-purple-500 p-1 rounded-lg'>
											<HeartIcon
												className='w-5 h-5 text-blue-600'
												aria-hidden='true'
											/>
										</Button>
									</div>
								</TableCell>
							</TableRow>
						))}
					</TableBody>
				</Table>
				<TableFooter>
					<div className='flex  flex-1  w-full h-auto relative'>
						<div className='mx-auto text-center'>
							<Pagination
								totalResults={totalResults}
								resultsPerPage={resultsPerPage}
								onChange={onPageChangeTable2}
								label='Table navigation'
							/>
						</div>
					</div>
				</TableFooter>
			</TableContainer>
			{/* modal for the detailview */}
			<div className=''>
				<Modal
					isOpen={isModalOpen}
					onClose={closeModal}
					className='w-full max-w-screen-lg md:mx-20 bg-white dark:bg-gray-900 p-10 rounded-lg relative md:mt-20 overflow-auto'>
					<Button
						layout='link'
						size='icon'
						aria-label='Favorite'
						className='border border-purple-500 bg-blue-600 p-1 rounded-lg absolute top-0 left-0 m-10'>
						<HeartIcon className='w-5 h-5 text-white' aria-hidden='true' />
					</Button>
					<ModalHeader className='text-center relative'>
						<img
							src='/assets/pokemonicon.png'
							alt=''
							className='w-24 h-24 mx-auto'
						/>
						<h1 className='text-4xl'>Pokemon UNITE</h1>
					</ModalHeader>
					<ModalBody className=''>
						<header className='h-auto w-2/3 grid grid-rows-5 sm:grid-rows-1 grid-flow-col sm:mx-auto sm:text-center sm:space-x-4 sm:space-y-0 space-y-4'>
							<div className='flex items-center align-middle space-x-2'>
								<UserGroupIcon className='h-4 w-4' />
								<span>The Pokemon Company</span>
							</div>
							<div className='flex items-center align-middle space-x-2'>
								<InformationCircleIcon className='h-4 w-4' />
								<span>Action</span>
							</div>
							<div className='flex items-center align-middle space-x-2'>
								<TrendingUpIcon className='h-4 w-4' />
								<span>4</span>
							</div>
							<div className='flex items-center align-middle space-x-2'>
								<StarIcon className='h-4 w-4' />
								<span>4.4 avg</span>
							</div>
							<div className='flex items-center align-middle space-x-2'>
								<DownloadIcon className='h-4 w-4' />
								<span>5.12M</span>
							</div>
						</header>
						<div className='h-64'>
							<div className=' overflow-y-scroll'>
								{/* game tech stack */}
								<div className='mx-auto border-2 rounded-lg border-gray-200 p-5 my-5 '>
									<header className='flex justify-between mb-5'>
										<p className='font-weight-bold text-lg'>Technology</p>
										<button className='flex items-center align-middle space-x-2 font-weight-bold text-lg'>
											<span>Open links</span>
											<LinkIcon className='h-4 w-4' />
										</button>
									</header>
									<footer className='flex flex-col sm:flex-row justify-center flex-no-wrap sm:overflow-x-auto overflow-y-auto text-center mx-auto sm:space-x-5 space-y-5 sm:space-y-0 py-3'>
										<div className='align-middle items-center flex mx-auto sm:mx-0'>
											<img
												src='/assets/details/inmobi.png'
												alt=''
												className='object-contain'
											/>
										</div>
										<div className='align-middle items-center flex mx-auto sm:mx-0'>
											<img
												src='/assets/details/lightship.png'
												alt=''
												className='object-contain'
											/>
										</div>
										<div className='align-middle items-center flex mx-auto sm:mx-0'>
											<img
												src='/assets/details/pokemonunity.png'
												alt=''
												className='object-contain'
											/>
										</div>
									</footer>
								</div>
								{/* any game assets or screens */}
								<div className='mx-auto border-2 rounded-lg border-gray-200 p-5 my-5'>
									<header className='flex justify-between mb-5'>
										<p className='font-weight-bold text-lg'>Assets</p>
										<button className='flex items-center align-middle space-x-2 font-weight-bold text-lg'>
											<span>Download</span>
											<DownloadIcon className='h-4 w-4' />
										</button>
									</header>
									<footer className='flex flex-col sm:flex-row justify-center flex-no-wrap sm:overflow-x-auto overflow-y-auto text-center mx-auto sm:space-x-5 space-y-5 sm:space-y-0 py-3'>
										<div className='align-middle items-center flex mx-auto sm:mx-0'>
											<img
												src='/assets/details/pokemonuniteasset1.png'
												alt=''
												className='object-contain'
											/>
										</div>
										<div className='align-middle items-center flex mx-auto sm:mx-0'>
											<img
												src='/assets/details/pokemonuniteasset2.png'
												alt=''
												className='object-contain'
											/>
										</div>
										<div className='align-middle items-center flex mx-auto sm:mx-0'>
											<img
												src='/assets/details/pokemonuniteasset3.png'
												alt=''
												className='object-contain'
											/>
										</div>
									</footer>
								</div>
								{/* game performance */}
								<div className='mx-auto my-5'>
									<img
										src='/assets/details/performance.png'
										alt=''
										className='object-contain h-auto'
									/>
								</div>
							</div>
						</div>
					</ModalBody>
					{/* <ModalFooter>
						<Button
							className='w-full sm:w-auto'
							layout='outline'
							onClick={closeModal}>
							Cancel
						</Button>
						<Button className='w-full sm:w-auto'>Accept</Button>
					</ModalFooter> */}
				</Modal>
			</div>
		</>
	)
}

export default Tables
