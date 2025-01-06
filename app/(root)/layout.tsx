import React from 'react'
import Navbar from '@/components/Navbar';

const MainLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <>
      <Navbar/>
      {children}
    </>
  )
}

export default MainLayout