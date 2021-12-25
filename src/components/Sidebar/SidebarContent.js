import React from 'react'

import {
	AdjustmentsIcon,
	BookmarkIcon,
	DotsHorizontalIcon,
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

				<button>by Genre</button>
				<button>by Genre</button>
				<button>
					<SearchIcon className='h-6 w-6 justify-end' />
				</button>
			</div>
			<ul className='py-10 flex flex-wrap space-y-4 justify-center min-h-screen"'>
				{/* favorited card */}
				<li className='border-b border-gray-300 dark:border-gray-600 w-full pb-10'>
					<div class='flex px-4 py-5 rounded-lg items-center bg-gray-900 dark:bg-gray-100  mx-5 relative'>
						<aside className='bg-purple-500 rounded-lg p-2'>
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
							<DotsHorizontalIcon className='h-6 w-6 text-purple-500' />
						</button>
					</div>
				</li>
				{/* favorited card */}
				<li className='border-b border-gray-300 dark:border-gray-600 w-full pb-10'>
					<div class='flex px-4 py-5 rounded-lg items-center bg-gray-900 dark:bg-gray-100  mx-5 relative'>
						{/* <aside className='bg-purple-500 rounded-lg p-2'>
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
							<DotsHorizontalIcon className='h-6 w-6 text-purple-500' />
						</button>
					</div>
				</li>
				{/* export favorites as pdf/etc */}
			</ul>
			<div className='bg-black h-auto py-3 text-center absolute inset-x-0 bottom-0 '>
				<button className='mx-auto border-2 border-white text-white rounded-full font-weight-bold text-sm py-1 px-3'>
					Export my favorites
				</button>
			</div>
		</div>
	)
}

export default SidebarContent
