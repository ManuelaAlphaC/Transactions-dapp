import logo from '../../images/logo.png';


const Footer=()=> {
    return (
        <div className='w-full flex md:justify-center justify-between items-center flex-col p-4 gradient-bg-footer'>
            <div className='w-full flex sm:flex-row flex-col justify-between items-center my-4'>
                <div className='flex flex-[0.5] justify-center items-center'>
                    <img src={logo} alt="logo" className='w-32' />
                </div>
                <div className='flex flex-1 justify-evenly items-center flex-wrap sm:mt-0 mt-5 w-full'>
                    <p className='text-white text-base text-center mx-2 cursor-pointer'>Exchange</p>
                    <p className='text-white text-base text-center mx-2 cursor-pointer'>Blog</p>
                    <p className='text-white text-base text-center mx-2 cursor-pointer'>Wallet</p>
                </div>
            </div>
            <div className='flex justify-center items-center flex-col mt-5'>
                <p><a href='manuela2cuci8@gmail.com' className='text-white text-sl text-center' ><img src='https://gateway.pinata.cloud/ipfs/QmZkD8rKUQTt6ZWhsGvLA3c1isrhP1tgREDQLLDkWEi5M6' alt='Contact Me'/></a></p>
                <p><a href='https://manuelita.podia.com/' target="_blank" className='text-white text-sl text-center'>My portfolio</a></p>
            </div>
            <div className='sm:w-[90%] w-full h-[0.25px] bg-gray-400 mt-5'/>
            <div className='sm:w-[90%] w-full flex justify-between items-center mt-3'>
                <p className='text-white text-sl text-center'>@CUCI 2022</p>
                <p className='text-white text-sl text-center'>All rights reserverd</p>
            </div>
        </div>
    );
}

export default Footer;