import React from 'react'

import {
	AdjustmentsIcon,
	BookmarkIcon,
	CloudDownloadIcon,
	DotsHorizontalIcon,
	LinkIcon,
	SearchIcon,
} from '@heroicons/react/solid'

function SidebarContent() {
	return (
		<div className='relative h-full'>
			<div className='pl-6 pb-6'>
				<p className='text-3xl font-medium text-gray-800 dark:text-gray-200 pt-20'>
					My favorites
				</p>
				<ul>
					<li>
						<span className=' text-gray-600 font-weight-bold dark:text-gray-200'>
							1 game
						</span>
					</li>
					<li>
						<span className=' text-gray-600 font-weight-bold dark:text-gray-200'>
							1 query
						</span>
					</li>
				</ul>
			</div>
			<div className='pl-6 flex space-x-5 items-center pb-3 pt-5 border-b border-gray-300 dark:border-gray-600 text-gray-800 dark:text-gray-200 w-full'>
				<button>
					<AdjustmentsIcon className='h-6 w-6 justify-start' />
				</button>

				<button>by Publisher</button>
				<button>by Query</button>
				<button>
					<SearchIcon className='h-6 w-6 justify-end' />
				</button>
			</div>
			<ul className='py-10 flex flex-wrap space-y-4 justify-center min-h-screen"'>
				{/* favorited card */}
				<li className='border-b border-gray-300 dark:border-gray-600 w-full pb-10 sm:pl-6 sm:pr-5'>
					<div class='flex px-4 py-5 rounded-lg items-center bg-gray-900 dark:bg-gray-100  mx-5 relative'>
						<aside className='bg-blue-600 rounded-lg p-2'>
							<BookmarkIcon className='h-8 w-8' />
						</aside>

						{/* <img
							src={'/assets/pokemonicon.png'}
							alt=''
							className='h-12 w-12 rounded-lg'
						/> */}
						<div>
							<h2 class='text-gray-50 dark:text-gray-800 font-bold text-lg pl-2'>
								Query:
								<br />
								Poke
							</h2>
						</div>
						<button className='border-purple-500 border rounded-lg p-1 right-0 mr-5 inset-y-5 absolute'>
							<DotsHorizontalIcon className='h-6 w-6 text-blue-600' />
						</button>
					</div>
					<footer className='flex items-center justify-end mx-5 py-3'>
						<button className='py-1 rounded-xl text-sm font-medium text-blue-600 transition-all flex align-middle items-center space-x-2 text-right float-right'>
							<LinkIcon className='w-3 h-3 align-middle ' />
							<span>Share query link </span>
						</button>
					</footer>
				</li>
				{/* favorited card */}
				<li className='border-b border-gray-300 dark:border-gray-600 w-full pb-10 sm:pl-6 sm:pr-5'>
					<div class='flex px-4 py-5 rounded-lg items-center bg-gray-900 dark:bg-gray-100  mx-5 relative'>
						{/* <aside className='bg-blue-600 rounded-lg p-2'>
							<BookmarkIcon className='h-8 w-8' />
						</aside> */}

						<img
							src={'/assets/pokemonicon.png'}
							alt=''
							className='h-12 w-12 rounded-lg justify-start'
						/>
						<div>
							<h2 class='text-gray-50 dark:text-gray-800 font-bold text-lg px-2'>
								Pokemon UNITE
							</h2>
						</div>
						<button className='border-purple-500 border rounded-lg p-1 right-0 mr-5 inset-y-5 absolute'>
							<DotsHorizontalIcon className='h-6 w-6 text-blue-600' />
						</button>
					</div>
					<footer className='flex items-center justify-end mx-5 py-3'>
						<button className='py-1 rounded-xl text-sm font-medium text-blue-600 transition-all flex align-middle items-center space-x-2 text-right float-right'>
							<LinkIcon className='w-3 h-3 align-middle ' />
							<span>Share query link </span>
						</button>
					</footer>
				</li>
				{/* export favorites as pdf/etc */}
			</ul>
			<div className='bg-black h-auto py-3 text-center absolute inset-x-0 bottom-0 '>
				<button className='mx-auto border-2 border-white text-blue-600 font-weight-bold bg-white rounded-full font-weight-bold text-sm py-2 px-5 flex items-center align-middle space-x-2'>
					<CloudDownloadIcon className='h-5 w-5' />
					<span>Export my favorites</span>
				</button>
			</div>
		</div>
	)
}

export default SidebarContent
