import React from "react";
import logo from "../logo.png";
import LanguageIcon from '@mui/icons-material/Language';

function Navbar() {
    // var toggleBtn = document.getElementById('toggle');
    // var collapseMenu = document.getElementById('collapseMenu');

    function handleClick() {
      if ( document.getElementById('collapseMenu').style.display === 'block') {
        document.getElementById('collapseMenu').style.display = 'none';
      } else {
        document.getElementById('collapseMenu').style.display = 'block';
      }
    }
    // toggleBtn.addEventListener('click', handleClick);


    return (
    <header class='py-3 px-4 sm:px-10 bg-white font-[sans-serif] min-h-[60px]'>
    <div class='flex flex-wrap items-center justify-between lg:gap-y-4 gap-y-6 gap-x-4'>
    <a href="#!">
        <img  src={logo} alt="logo" class='w-36' />
      </a>
      <button id="toggle" class='lg:hidden ml-7' onClick={handleClick}>
          <svg class="w-7 h-7" fill="#000" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
            <path fill-rule="evenodd"
              d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
              clip-rule="evenodd"></path>
          </svg>
        </button>

     
      <ul id="collapseMenu" class='lg:!flex lg:space-x-10 max-lg:space-y-2 max-lg:hidden max-lg:w-full max-lg:my-4'>
        <li
          class=' max-lg:border-b max-lg:py-2 relative lg:hover:after:absolute lg:after:bg-orange-600  lg:after:w-0 lg:hover:after:w-full lg:hover:after:h-[2px] lg:after:block lg:after:top-6 lg:after:transition-all lg:after:duration-300  '>
          <a href='#!' class='text-black block text-[15px] hover:font-weight-bold'>Home</a>
        </li>
        <li
          class='max-lg:border-b max-lg:py-2 relative lg:hover:after:absolute lg:after:bg-orange-600 lg:after:w-0 lg:hover:after:w-full lg:hover:after:h-[2px] lg:after:block lg:after:top-6 lg:after:transition-all lg:after:duration-300'>
          <a href='#!' class='text-black block text-[15px]'>Careers</a>
        </li>
        <li
          class='max-lg:border-b max-lg:py-2 relative lg:hover:after:absolute lg:after:bg-orange-600 lg:after:w-0 lg:hover:after:w-full lg:hover:after:h-[2px] lg:after:block lg:after:top-6 lg:after:transition-all lg:after:duration-300'>
          <a href='#!' class='text-black block text-[15px]'>Pricing</a>
        </li>
        <li
          class='max-lg:border-b max-lg:py-2 relative lg:hover:after:absolute lg:after:bg-orange-600 lg:after:w-0 lg:hover:after:w-full lg:hover:after:h-[2px] lg:after:block lg:after:top-6 lg:after:transition-all lg:after:duration-300'>
          <a href='#!' class='text-black block text-[15px]'>Features</a>
        </li>
      </ul>
      
      <div class='flex  items-center  max-lg:hidden '>
      <div className="select-container relative">
        <LanguageIcon style={{ color: '#242222' }}/>
        <select className="rounded-md cursor-pointer focus:outline-none text-gray-700 bg-white px-4 py-2 mt-1">
            <option value="en">English</option>
            <option value="es">Spanish</option>
            <option value="fr">French</option>
        </select>
        </div>
      <div class="border-l border-[#333] h-6 max-lg:hidden"></div>
      
        <button>
        <a href='/signin' class='lg:hover:text-[#007bff] text-gray-600 block font-bold text-[15px] mr-6'>Log
          in</a>
          </button>
        <button
          class='px-4 py-2 text-sm rounded-md font-bold text-gray border-2  border-orange-300  transition-all ease-in-out duration-300 hover:bg-transparent hover:text-[#1d294f]'>Get
          Demo</button>

          </div>
          
       
    </div>
    
  </header>
    );
// return (
//     <header class='border-b py-4 px-4 sm:px-10 bg-white font-sans min-h-[70px]'>
//     <div class='flex flex-wrap items-center relative gap-x-4 gap-y-3'>
//       <a href="javascript:void(0)"><img src="https://readymadeui.com/readymadeui.svg" alt="logo" class='w-36' />
//       </a>
//       <div id="collapseMenu"
//         class='lg:!flex lg:flex-auto lg:ml-12 max-lg:hidden max-lg:w-full max-lg:absolute max-lg:top-16 max-sm:top-24 max-lg:bg-white max-lg:p-4'>
//         <ul class='lg:flex lg:space-x-8 max-lg:space-y-2'>
//           <li class='max-lg:border-b max-lg:py-2'>
//             <a href='javascript:void(0)'
//               class='lg:hover:text-[#007bff] text-[#007bff] block font-bold text-[15px]'>Home</a>
//           </li>
//           <li class='max-lg:border-b max-lg:py-2'><a href='javascript:void(0)'
//               class='lg:hover:text-[#007bff] text-gray-600 block font-bold text-[15px]'>Shop</a>
//           </li>
//           <li class='max-lg:border-b max-lg:py-2'><a href='javascript:void(0)'
//               class='lg:hover:text-[#007bff] text-gray-600 block font-bold text-[15px]'>Sale</a>
//           </li>
//           <li class='max-lg:border-b max-lg:py-2'><a href='javascript:void(0)'
//               class='lg:hover:text-[#007bff] text-gray-600 block font-bold text-[15px]'>Manage</a>
//           </li>
//         </ul>
//         <ul class='lg:flex lg:items-center ml-auto max-lg:block lg:space-x-8 ml-auto'>
//           <li class='max-lg:border-b max-lg:py-2 max-lg:mt-2'>
//             <a href='javascript:void(0)'
//               class='lg:hover:text-[#007bff] text-gray-600 block font-bold text-[15px]'>Pricing</a>
//           </li>
//           <li class='max-lg:border-b max-lg:py-2 max-lg:mt-2'><a href='javascript:void(0)'
//               class='lg:hover:text-[#007bff] text-gray-600 block font-bold text-[15px]'>Learn</a>
//           </li>
//         </ul>
//       </div>
//       <div class="border-l border-[#333] h-6 max-lg:hidden"></div>
//       <div class='flex items-center ml-auto'>
//         <a href='javascript:void(0)' class='lg:hover:text-[#007bff] text-gray-600 block font-bold text-[15px] mr-6'>Log
//           in</a>
//         <button
//           class='px-4 py-2 text-sm rounded-sm font-bold text-white border-2 border-[#1d294f] bg-[#1d294f] transition-all ease-in-out duration-300 hover:bg-transparent hover:text-[#1d294f]'>Start
//           free trial</button>
//         <button id="toggle" class='lg:hidden ml-7' onClick={handleClick}>
//           <svg class="w-7 h-7" fill="#000" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
//             <path fill-rule="evenodd"
//               d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
//               clip-rule="evenodd"></path>
//           </svg>
//         </button>
//       </div>
//     </div>
//   </header>
// );
}
    export default Navbar;