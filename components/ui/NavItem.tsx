'use client';

import { usePathname } from 'next/navigation';
import { motion } from 'framer-motion';
import LinksNav, { navItemsSelected } from './LinksNav';
import { useEffect } from 'react';

const NavItem = () => {
  let pathname = usePathname() as string;

  useEffect(() => {
    // Update the animation when the pathname changes
    const updateAnimation = () => {
      // Your animation update logic here
    };

    updateAnimation();

    // Clean up the effect
    return () => {
      // Clean up logic here if needed
    };
  }, [pathname]);

  return (
    <>
      {
        navItemsSelected[pathname] ? (
                  <>
            <div className='hidden lg:block'>
              <motion.div
                className='absolute bg-neutral-800 h-[34px] rounded-md z-[-1]'
                layoutId='test2'
              />
            </div>
          </>
        ) : null}

      <LinksNav />
    </>
  );
}

export default NavItem;