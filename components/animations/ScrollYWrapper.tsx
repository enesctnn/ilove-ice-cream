'use client';

import { cn } from '@/lib/utils';
import { motion, useScroll, useTransform } from 'framer-motion';

const ScrollYWrapper = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  const { scrollY } = useScroll();
  const framePosition = useTransform(scrollY, [0, 1000], [0, -500]);
  return (
    <motion.div
      style={{ y: framePosition }}
      className={cn('w-screen max-h-[1000px] overflow-hidden', className)}
    >
      {children}
    </motion.div>
  );
};

export default ScrollYWrapper;
