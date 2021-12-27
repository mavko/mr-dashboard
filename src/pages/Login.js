import React from 'react'
import { Link } from 'react-router-dom'

import ImageLight from '../assets/img/login-bg.png'
import ImageDark from '../assets/img/login-office-dark.jpeg'
import { GithubIcon, TwitterIcon } from '../icons'
import { Label, Input, Button } from '@windmill/react-ui'
import { ChevronDoubleRightIcon, LoginIcon } from '@heroicons/react/solid'

function Login() {
	return (
		<div className='flex items-center min-h-screen p-6 bg-blue-100 dark:bg-gray-900'>
			<div className='flex-1 h-full max-w-4xl mx-auto overflow-hidden bg-white rounded-lg shadow-xl dark:bg-gray-800'>
				<div className='flex flex-col overflow-y-auto md:flex-row'>
					<div className='h-32 md:h-auto md:w-1/2'>
						<div className='relative'>
							<div className='absolute top-0 pt-10 pl-10 grid grid-rows-5 gap-5 font-sans text-2xl text-white'>
								<p>Target accounts,</p>
								<p>Vendors,</p>
								<p>Tech installs,</p>
								<p>And decision makers.</p>
								<p>All on mixrank.</p>
							</div>
						</div>

						<img
							aria-hidden='true'
							className='object-cover w-full h-full dark:hidden'
							src={ImageLight}
							alt='Office'
						/>
						<img
							aria-hidden='true'
							className='hidden object-cover w-full h-full dark:block'
							src={ImageDark}
							alt='Office'
						/>
						<div className='relative'>
							<div className='absolute bottom-0 pb-10 pl-10'>
								<img src='/mixrank_white.svg' alt='' />
								<p className='text-white font-sans text-base pt-2'>
									//:data_driven_decision_making.cfg
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

							<Label className='mt-4'>
								<span>Password</span>
								<Input
									className='mt-1'
									type='password'
									placeholder='***************'
								/>
							</Label>

							<button
								className='mt-4 bg-blue-600 text-white w-full rounded-lg py-3 px-6 flex-row flex justify-center items-center text-center'
								block
								tag={Link}
								to='/app'>
								<span>Log in</span>
								<ChevronDoubleRightIcon className='h-5 w-5 justify-end' />
							</button>

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
									className='text-sm font-medium text-blue-600 dark:text-purple-400 hover:underline'
									to='/forgot-password'>
									Forgot your password?
								</Link>
							</p>
							<p className='mt-1'>
								<Link
									className='text-sm font-medium text-blue-600 dark:text-purple-400 hover:underline'
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
