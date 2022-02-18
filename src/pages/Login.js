import React from 'react'
import { Link } from 'react-router-dom'
import { GithubIcon, TwitterIcon } from '../icons'
import { Label, Input, Button } from '@windmill/react-ui'
import { ChevronDoubleRightIcon } from '@heroicons/react/solid'

function Login() {
	return (
		<div className='flex items-center min-h-screen p-6 bg-blue-900 dark:bg-gray-900'>
			<div className='flex-1 h-full max-w-4xl mx-auto overflow-hidden bg-white rounded-lg shadow-xl dark:bg-gray-800'>
				<div className='flex flex-col overflow-y-auto md:flex-row'>
					<div className='h-32 md:h-auto md:w-1/2'>
						<div className='relative'>
							<div className='absolute top-0 grid grid-rows-5 gap-5 pt-10 pl-10 font-sans text-2xl text-white'>
								<p>Target accounts,</p>
								<p>Vendors,</p>
								<p>Tech installs,</p>
								<p>And decision makers.</p>
								<p>All on CoreDataVault.</p>
							</div>
						</div>

						<img
							aria-hidden='true'
							className='object-cover w-full h-full'
							src={'/assets/login-bg.png'}
							alt='Office'
						/>
						<div className='relative'>
							<div className='absolute bottom-0 pb-10 pl-10'>
								<h2 className='text-2xl font-medium text-white'>
									CoreDataVault
								</h2>

								<p className='pt-2 font-sans text-base text-white'>
									_data_driven_decision_making
								</p>
							</div>
						</div>
					</div>
					<main className='flex items-center justify-center p-6 sm:p-12 md:w-1/2'>
						<div className='w-full'>
							<h1 className='mb-4 text-xl font-semibold text-gray-700 dark:text-gray-200'>
								Login
							</h1>
							<Label>
								<span>Email</span>
								<Input
									className='mt-1'
									type='email'
									placeholder='john@doe.com'
								/>
							</Label>

							<Label className='my-4'>
								<span>Password</span>
								<Input
									className='mt-1'
									type='password'
									placeholder='***************'
								/>
							</Label>
							<p className='text-center text-black dark:text-white'>
								No account needed
							</p>
							<Button
								className='flex flex-row items-center justify-center w-full py-3 mt-4 text-center text-white bg-purple-500 rounded-lg'
								block
								tag={Link}
								to='/app'>
								<span>Press here to start the app</span>
								<ChevronDoubleRightIcon className='w-5 h-5' />
							</Button>

							<hr className='my-8' />

							<Button block layout='outline'>
								<GithubIcon className='w-4 h-4 mr-2' aria-hidden='true' />
								Github
							</Button>
							<Button className='mt-4' block layout='outline'>
								<TwitterIcon className='w-4 h-4 mr-2' aria-hidden='true' />
								Twitter
							</Button>

							<p className='mt-4'>
								<Link
									className='text-sm font-medium text-purple-500 dark:text-purple-400 hover:underline'
									to='/forgot-password'>
									Forgot your password?
								</Link>
							</p>
							<p className='mt-1'>
								<Link
									className='text-sm font-medium text-purple-500 dark:text-purple-400 hover:underline'
									to='/create-account'>
									Create account
								</Link>
							</p>
						</div>
					</main>
				</div>
			</div>
		</div>
	)
}

export default Login
