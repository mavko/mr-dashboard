import React from 'react'
import ChartCard from '../components/Chart/ChartCard'
import Tables from './Tables'

function Dashboard() {
	return (
		<>
			<Tables />
			<div className='flex flex-row justify-between space-x-4 pb-10'>
				<div className='flex-none p-2 h-full relative'>
					<header className='absolute z-10 top-0 inset-x-0 m-5 w-2/3'>
						<p className='text-white font-weight-normal text-xl leading-8 tracking-wider pt-5 pl-3'>
							Our latest{' '}
							<strong className='font-weight-bold text-purple-300 px-1'>
								Mixrank Mobile Gaming Report
							</strong>
							is now available for download
						</p>
					</header>
					<footer className='absolute z-10 bottom-0 inset-x-0 m-5 w-full'>
						<button className='text-white font-weight-bold mb-5 ml-3 py-2 px-4 border-2 border-white rounded-full'>
							See the report
						</button>
					</footer>
					<img src='/assets/report-card.png' alt='' className='h-full' />
				</div>

				<ChartCard title='Currently Trending' className='rounded-3xl'>
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
