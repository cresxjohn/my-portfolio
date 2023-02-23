'use client'

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion } from 'framer-motion';
import clsx from 'clsx';
import { ButtonTheme } from './';
import { MobileMenuNav } from './';
// import { useScrollPosition } from '@/hooks';
import { NavItemHeaderAnimation } from '@/types';

const animation = {
  hide: { y: -8, opacity: 0 },
  show: {
    y: 0,
    opacity: 1,
  },
};

const navItems: { [key: string]: NavItemHeaderAnimation } = {
  '/': {
    name: 'home',
    x: 1,
    y: -3,
    w: '60px',
  },
  '/about': {
    name: 'about',
    x: 63,
    y: -3,
    w: '60px',
  },
  '/projects': {
    name: 'projects',
    x: 123,
    y: -3,
    w: '78px',
  },
  '/blog': {
    name: 'blog',
    x: 200,
    y: -3,
    w: '52px',
  },
};

export const Header = () => {

  let pathname = usePathname() as string;

  if (pathname.includes('/blog/')) pathname = '/blog';

  const classNames = (...classes: string[]) => classes.filter(Boolean).join(' ');

  // const scrollPosition = useScrollPosition();

  return (
    <motion.header
      className={classNames(
        // scrollPosition > 0 ? 'backdrop-blur-md bg-white/60 dark:bg-black/30' : '',
        'min-w-xs max-w-screen-md rounded-3xl sticky top-0 flex flex-col justify-center pl-4 z-10 transition ease-in-out mx-auto'
      )}
      initial={animation.hide}
      animate={animation.show}
      transition={{ delay: 0.5 }}
    >
      <nav className='w-full flex items-center justify-start lg:justify-between flex-row-reverse lg:flex-row relative border-gray-200 dark:border-gray-700 py-8 sm:pb-8 text-gray-900 bg-opacity-60 dark:text-gray-100 gap-5 lg:gap-0'>

        {/* <div>
          <h1>
            <Link href='/'>
              <strong>Jeandv</strong>();
            </Link>
          </h1>
        </div> */}

        <div className='ml-[-0.80rem]'>

          <MobileMenuNav />

          {/* <NavItem href='/' text='Home' />

          <NavItem href='/about' text='About' />

          <NavItem href='/projects' text='Projects' />

          <NavItem href='/contact' text='Contact' />

          <NavItem href='/blog' text='Blog' /> */}

          {
            navItems[pathname] ? (
              <>
                {/* Desktop version, hidden on mobile, animates y axis */}
                <div className='hidden lg:block'>
                  <motion.div
                    className='absolute bg-neutral-200 dark:bg-neutral-800 h-[34px] rounded-md z-[-1]'
                    layoutId='test2'
                    initial={{ opacity: 0, x: navItems[pathname].x, y: navItems[pathname].y }}
                    animate={{
                      opacity: 1,
                      x: navItems[pathname].x,
                      width: navItems[pathname].w,
                    }}
                    transition={{
                      type: 'spring',
                      stiffness: 350,
                      damping: 30,
                    }}
                  />
                </div>
              </>
            ) : null}

          {
            Object.entries(navItems).map(([path, { name }]) => {

              const isActive = path === pathname;

              return (
                <Link
                  key={path}
                  href={path}
                  className={clsx(
                    'hidden lg:inline-block transition ease hover:text-neutral-800 dark:hover:text-neutral-200 py-[2px] px-[10px]',
                    {
                      'text-neutral-500': !isActive,
                      'font-bold': isActive,
                    }
                  )}
                >
                  {name}
                </Link>
              );
            })
          }

        </div>

        <ButtonTheme />

      </nav>
    </motion.header>
  )
}