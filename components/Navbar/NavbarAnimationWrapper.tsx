'use client';

import { motion, useScroll, useTransform } from 'framer-motion';

const NavbarAnimationWrapper = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const { scrollY } = useScroll();
  const headerPosition = useTransform(scrollY, [0, 250], [0, -280]);
  return (
    <motion.div
      style={{ y: headerPosition }}
      className="fixed top-10 z-50 inset-x-0"
    >
      {children}
    </motion.div>
  );
};

export default NavbarAnimationWrapper;
