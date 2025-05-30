import {appleImg, bagImg, searchImg} from '../utils/index'
import {navLists} from '../constants/index'

export default function Navbar() {
  return (
    <header className='w-full py-5 sm:px-10 px-5 flex justify-center items-center'>
      <nav className='flex w-full screen-max-width'>
        <img 
          src={appleImg}
          alt='apple' 
          width={18} 
          height={18}
        />
        <div className='flex flex-1 justify-center max-sm:hidden'>
          {navLists.map((nav,i)=>(
            <div key={i} className='px-5 text-sm cursor-pointer text-gray-500 hover:text-white transition-all'>
                {nav}
            </div>
          ))}
        </div>
        <div className='flex items-baseline gap-7 max-sm:justify-end max-sm:flex-1'>
          <img src={searchImg} alt='search' width={18}   height={18}/>
          <img src={bagImg} alt='bag' width={18} height={18}/>
        </div>
      </nav>
    </header>
  )
}

