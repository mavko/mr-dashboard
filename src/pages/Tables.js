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
} from '@windmill/react-ui'
import { Modal, ModalHeader, ModalBody } from '@windmill/react-ui'

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
			<TableContainer className='relative z-0 mb-8 md:mt-20'>
				<div className='flex flex-col px-5 py-5 space-y-5 text-purple-500 bg-white md:space-y-0 md:flex-row md:items-center md:align-middle md:justify-between dark:bg-gray-800 dark:text-purple-300'>
					<div className='justify-start flex-auto'>
						<span className='font-sans text-3xl text-gray-900 font-weight-black dark:text-white'>
							Games
						</span>
					</div>
					{/* <!-- Search input --> */}
					<div className='flex justify-between flex-auto md:items-center md:mx-auto md:justify-center'>
						<div className='relative mr-2 rounded-full focus-within:text-purple-500'>
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
								className='relative inline-flex items-center p-1 text-purple-400 align-middle transition duration-100 border-2 border-purple-500 rounded-lg cursor-pointer hover:bg-purple-500 active:bg-purple-500 hover:text-purple-200'
								onClick={handleFilterClick}>
								<span
									aria-hidden='true'
									className='absolute top-0 right-0 inline-block w-4 h-4 transform translate-x-1 -translate-y-1 bg-purple-600 border-2 border-white rounded-full dark:border-gray-800'></span>
								<FilterIcon className='w-5 h-5' />
							</button>
							<button className='ml-2 text-xs'>Clear filters</button>
							<Dropdown
								align='right'
								isOpen={isFilterMenuOpen}
								onClose={() => setIsFilterMenuOpen(false)}
								className='z-50 p-8'>
								<header className='flex items-center justify-between mb-3 align-middle'>
									<span className='justify-start text-lg text-medium font-weight-bold'>
										Filters
									</span>
									<button className='justify-end border-none outline-none'>
										<XCircleIcon className='w-8 h-8' />
									</button>
								</header>
								<div className='grid gap-4 my-5 sm:grid-cols-2 sm:grid-rows-3'>
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
									<Select
										valid
										className='mt-1 rounded-lg focus:bg-purple-500 hover:bg-purple-500 hover:text-white focus:text-white'>
										<option>Facebook Login</option>
										<option>Chartboost</option>
										<option>Optimizely</option>
										<option>New Relic</option>
										<option>FreshWorks</option>
									</Select>
								</div>
								<footer className='flex items-center justify-between pt-3 align-middle'>
									<span className='justify-start text-medium font-weight-bold'>
										Clear all
									</span>
									<button className='flex items-center justify-end align-middle border-none outline-none'>
										Save
										<CheckIcon className='w-4 h-4' />
									</button>
								</footer>
							</Dropdown>
						</div>
					</div>

					{/* show search results + save + share */}
					<div className='justify-end'>
						<p className='space-x-2 text-gray-500 md:text-right text-md dark:text-gray-300'>
							<span>Showing</span>
							<strong className='text-gray-900 dark:text-gray-100'>
								{resultsPerPage}
							</strong>
							<span>out of</span>
							<strong className='text-gray-900 dark:text-gray-100'>
								{totalResults}
							</strong>
							<span>results</span>
						</p>
						<div className='md:flex md:flex-row md:align-middle'>
							<button className='flex items-center py-1 mr-5 space-x-2 text-sm font-medium text-purple-500 align-middle transition-all rounded-xl'>
								<HeartIcon className='w-3 h-3 align-middle ' />
								<span>Favorite query</span>
							</button>
							<button className='flex items-center py-1 space-x-2 text-sm font-medium text-blue-600 align-middle transition-all rounded-xl '>
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
											className='p-1 border border-purple-500 rounded-lg'>
											<HeartIcon
												className='w-5 h-5 text-purple-500'
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
					<div className='relative flex flex-1 w-full h-auto'>
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
					className='relative w-full max-w-screen-lg p-10 overflow-auto bg-white rounded-lg md:mx-20 dark:bg-gray-900 md:mt-20'>
					<Button
						layout='link'
						size='icon'
						aria-label='Favorite'
						className='absolute top-0 left-0 p-1 m-10 bg-purple-500 border border-purple-500 rounded-lg'>
						<HeartIcon className='w-5 h-5 text-white' aria-hidden='true' />
					</Button>
					<ModalHeader className='relative text-center'>
						<img
							src='/assets/pokemonicon.png'
							alt=''
							className='w-24 h-24 mx-auto overflow-hidden rounded-lg'
						/>
						<h1 className='text-4xl'>Pokemon UNITE</h1>
					</ModalHeader>
					<ModalBody className=''>
						<header className='grid w-2/3 h-auto grid-flow-col grid-rows-5 space-y-4 sm:grid-rows-1 sm:mx-auto sm:text-center sm:space-x-4 sm:space-y-0'>
							<div className='flex items-center space-x-2 align-middle'>
								<UserGroupIcon className='w-4 h-4' />
								<span>The Pokemon Company</span>
							</div>
							<div className='flex items-center space-x-2 align-middle'>
								<InformationCircleIcon className='w-4 h-4' />
								<span>Action</span>
							</div>
							<div className='flex items-center space-x-2 align-middle'>
								<TrendingUpIcon className='w-4 h-4' />
								<span>4</span>
							</div>
							<div className='flex items-center space-x-2 align-middle'>
								<StarIcon className='w-4 h-4' />
								<span>4.4 avg</span>
							</div>
							<div className='flex items-center space-x-2 align-middle'>
								<DownloadIcon className='w-4 h-4' />
								<span>5.12M</span>
							</div>
						</header>
						<div className='h-64'>
							<div className='overflow-y-scroll '>
								{/* game tech stack */}
								<div className='p-5 mx-auto my-5 border-2 border-gray-200 rounded-lg dark:border-gray-600 '>
									<header className='flex justify-between mb-5'>
										<p className='text-lg font-weight-bold'>Technology</p>
										<button className='flex items-center space-x-2 text-lg align-middle font-weight-bold'>
											<span>Open links</span>
											<LinkIcon className='w-4 h-4' />
										</button>
									</header>
									<footer className='flex flex-col flex-no-wrap justify-center py-3 mx-auto space-y-5 overflow-y-auto text-center sm:flex-row sm:overflow-x-auto sm:space-x-5 sm:space-y-0'>
										<div className='flex items-center mx-auto align-middle sm:mx-0'>
											<img
												src='/assets/details/inmobi.png'
												alt=''
												className='object-contain overflow-hidden rounded-lg'
											/>
										</div>
										<div className='flex items-center mx-auto align-middle sm:mx-0'>
											<img
												src='/assets/details/lightship.png'
												alt=''
												className='object-contain overflow-hidden rounded-lg'
											/>
										</div>
										<div className='flex items-center mx-auto align-middle sm:mx-0'>
											<img
												src='/assets/details/pokemonunity.png'
												alt=''
												className='object-contain overflow-hidden rounded-lg'
											/>
										</div>
									</footer>
								</div>
								{/* any game assets or screens */}
								<div className='p-5 mx-auto my-5 border-2 border-gray-200 rounded-lg dark:border-gray-600'>
									<header className='flex justify-between mb-5'>
										<p className='text-lg font-weight-bold'>Assets</p>
										<button className='flex items-center space-x-2 text-lg align-middle font-weight-bold'>
											<span>Download</span>
											<DownloadIcon className='w-4 h-4' />
										</button>
									</header>
									<footer className='flex flex-col flex-no-wrap justify-center py-3 mx-auto space-y-5 overflow-y-auto text-center sm:flex-row sm:overflow-x-auto sm:space-x-5 sm:space-y-0'>
										<div className='flex items-center mx-auto align-middle sm:mx-0'>
											<img
												src='/assets/details/pokemonuniteasset1.png'
												alt=''
												className='object-contain overflow-hidden rounded-lg'
											/>
										</div>
										<div className='flex items-center mx-auto align-middle sm:mx-0'>
											<img
												src='/assets/details/pokemonuniteasset2.png'
												alt=''
												className='object-contain overflow-hidden rounded-lg'
											/>
										</div>
										<div className='flex items-center mx-auto align-middle sm:mx-0'>
											<img
												src='/assets/details/pokemonuniteasset3.png'
												alt=''
												className='object-contain overflow-hidden rounded-lg'
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
