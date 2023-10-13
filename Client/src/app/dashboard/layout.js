'use client';
import DashboardNavbar from '@/components/dashboard/DashboardNavbar';
import Heading from '@/components/dashboard/Heading';
import RecentActivity from '@/components/dashboard/RecentActivity';
import cn from '@/utils/classmerge';
import { Grid, GridItem, Box, Flex } from '@chakra-ui/react';
import { usePathname } from 'next/navigation';

const DashboardLayout = ({ children }) => {
    const pathname = usePathname();
    return (
        <Box className='bg-black'>
            <Grid gridTemplateColumns='repeat(6,1fr)'>
                <GridItem
                    overflow='hidden'
                    maxH={{
                        base: 'auto',
                        md: '100vh',
                    }}
                    colSpan={{
                        base: 6,
                        lg: 2,
                        xl: 1,
                    }}
                    borderRadius='0rem 0rem 1.875rem 0rem'
                    bg='linear-gradient(89deg, #158E7F 30.58%, #43D680 106.84%)'
                >
                    <DashboardNavbar />
                </GridItem>
                <GridItem
                    h='100vh'
                    overflowY='auto'
                    colSpan={{
                        base: 6,
                        lg: 4,
                        xl: 5,
                    }}
                    px='2rem'
                    pt='6rem'
                    pb='3rem'
                >
                    <Heading />
                    <Flex className='flex-col items-center justify-center gap-8 xl:flex-row '>
                        <main className=' shrink-0 w-full xl:w-[60%]'>{children}</main>
                        <section
                            className={cn(`shrink-0 w-full xl:w-[40%] mt-[1.75rem]`, {
                                hidden: pathname === '/dashboard/profile',
                            })}
                        >
                            <RecentActivity />
                        </section>
                    </Flex>
                </GridItem>
            </Grid>
        </Box>
    );
};

export default DashboardLayout;
