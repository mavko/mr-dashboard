import { ChevronRightIcon } from '@heroicons/react/solid'
import React from 'react'
import ChartCard from '../components/Chart/ChartCard'
import Tables from './Tables'

function Dashboard() {
	return (
		<>
			<Tables />
			<div className='flex flex-col justify-between pb-10 space-y-10 md:flex-row sm:space-x-4 md:space-y-0'>
				<div className='relative flex-none '>
					<header className='absolute inset-x-0 top-0 z-10 w-2/3 max-w-xs m-5'>
						<p className='pt-5 pl-3 text-xl leading-8 tracking-wider text-white font-weight-normal'>
							Our latest{' '}
							<strong className='px-1 text-purple-300 font-weight-bold'>
								Mobile Gaming Report
							</strong>
							is now available for download
						</p>
					</header>
					<footer className='absolute inset-x-0 bottom-0 z-10 w-full m-5'>
						<button className='px-4 py-2 mb-5 ml-3 text-white border-2 border-white rounded-full font-weight-bold'>
							See the report
						</button>
					</footer>
					<img src='/assets/report-card.png' alt='' className='h-full' />
				</div>

				<ChartCard className='flex-none rounded-lg'>
					<header className='flex justify-between mb-5 text-gray-900 dark:text-white'>
						<span className=''>Currently Trending</span>
						<span className='flex items-center align-middle'>
							This month <ChevronRightIcon className='w-5 h-5' />
						</span>
					</header>

					<div className='flex flex-row flex-no-wrap overflow-auto'>
						<div className='flex-none p-2'>
							<img src='/assets/lotr-card.png' alt='' />
						</div>
						<div className='flex-none p-2'>
							<img src='/assets/lotr-card.png' alt='' />
						</div>
						<div className='flex-none p-2'>
							<img src='/assets/report-card.png' alt='' />
						</div>
					</div>
				</ChartCard>
			</div>
		</>
	)
}

export default Dashboard
