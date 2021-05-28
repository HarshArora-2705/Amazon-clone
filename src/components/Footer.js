function Footer(){
    return (
        <footer className='flex flex-col bg-amazon_blue  text-sm text-gray-500 '>
            <div className='grid grid-flow-row-dense p-5 mx-auto md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4'>
            <div className='relative flex flex-col text-sm items-center link'>
                <h2 className='text-gray-300'>AbeBooks</h2>
                <p>Books,Art</p>
                <p className='mb-5'>& collectibles</p>
            </div>
            <div className='relative flex flex-col text-sm items-center link'>
                <h2 className='text-gray-300'>Amazon web Services</h2>
                <p>Scalable cloud</p>
                <p className='mb-5'>Computing services</p>
            </div>
            <div className='relative flex flex-col text-sm items-center link '>
                <h2 className='text-gray-300'>Audible</h2>
                <p>Download</p>
                <p className='mb-5'>Audio Books</p>
            </div>
            <div className='relative flex flex-col text-sm items-center link'>
                <h2 className='text-gray-300'>IMdb</h2>
                <p>Movies ,Tv</p>
                <p className='mb-5'>& celebrities</p>
            </div>
            <div className='relative flex flex-col text-sm items-center  link'>
                <h2 className='text-gray-300'>DP Review</h2>
                <p>Digital</p>
                <p className='mb-5'>Photography</p>
            </div>
            <div className='relative flex flex-col text-sm items-center link'>
                <h2 className='text-gray-300'>Amazon Business</h2>
                <p>Everything for</p>
                <p className='mb-5'>Your Business</p>
            </div>
            <div className='relative flex flex-col text-sm items-center link '>
                <h2 className='text-gray-300'>Prime Now</h2>
                <p>2-hr-Delivery</p>
                <p className='mb-5'>On EverydayItems</p>
            </div>
            <div className='relative flex flex-col text-sm items-center link'>
                <h2 className='text-gray-300'>Amazon Prime Music</h2>
                <p>70 million songs,ad free</p>
                <p className='mb-5'>Over 9 million podcasts episodes</p>
            </div>
            </div>
            <div className='p-4 mx-auto text-gray-300 link'>
               <p className='relative align-center '>© 1996-2021, Amazon.com, Inc. or its affiliates</p>
            </div>
        </footer>
    )
}

export default Footer;