import { getServerAuthSession } from '@/lib/auth'
import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'

export const metadata: Metadata = {
	title: 'Create T3 App',
	description: 'Generated by create-t3-app',
	icons: { shortcut: '/favicon.ico' }
}

export default async function Home() {
	const session = await getServerAuthSession()

	return (
		<>
			<div className='absolute -z-10 h-full w-full'>
				<Image
					src={'/stacked-waves-haikei.svg'}
					fill={true}
					alt='flatbg'
					priority={true}
					className='object-cover brightness-50'
				/>
			</div>
			<main className='flex h-screen items-center justify-center'>
				<div className='grid max-w-7xl grid-cols-1 grid-rows-2 gap-8 md:grid-cols-2 md:grid-rows-1'>
					<div className='mx-4 md:mx-8 2xl:ml-0'>
						<h1 className='text-xl font-bold leading-normal text-white md:text-2xl lg:text-4xl lg:leading-10 xl:text-6xl'>
							Upgrade YOUR skills for better future
						</h1>
						<p className='mt-4 text-lg leading-normal text-white md:mt-8 md:text-xl lg:text-2xl xl:text-3xl'>
							Lorem Ipsum is simply dummy text of the printing and typesetting
							industry.
						</p>
						<div className='mt-4 flex flex-row items-center gap-5 md:mt-8 lg:mt-12'>
							{!session ? (
								<Link
									href={'/signin'}
									className='rounded-xl bg-purple-700 px-4 py-2 font-semibold text-white drop-shadow-2xl transition-colors hover:bg-white hover:text-black md:text-lg'
								>
									Sign In
								</Link>
							) : null}
							<Link
								href={'/courses'}
								className='rounded-xl border border-white bg-transparent px-2 py-1 font-medium text-white hover:bg-white hover:text-black md:text-lg'
							>
								Check Courses
							</Link>
						</div>
					</div>
					<div className='relative w-full'>
						<Image
							src={'/hero-img.png'}
							fill={true}
							alt='heroimg'
							className='overflow-visible object-cover'
							quality={100}
						/>
					</div>
				</div>
			</main>
			{/* <section className="flex min-h-screen flex-col items-center justify-center bg-[#6100ba] brightness-50">
        Хуй
      </section>
      <footer className="flex h-80 flex-col items-center justify-center">
        gavno
      </footer> */}
		</>
	)
}