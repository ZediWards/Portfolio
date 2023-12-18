import Image from "next/image";

export default function HeaderNav() {
  return (
    <header className="-m-24 flex justify-between bg-gray-500 p-4">
      <div className="overflow-hidden rounded-[50%] font-headings">
        <Image
          src="/avatar.jpeg"
          width={100}
          height={100}
          // className="hidden md:block"
          alt="avatar image"
        />
      </div>

      <button>{/* <img src="" alt=""> */}</button>

      <nav className="mr-24 flex border border-solid border-neutral-400">
        <ul className="flex items-end justify-end gap-12">
          <li className="px-1 pt-2">About</li>
          <li className="px-1 pt-2">Skills</li>
          <li className="px-1 pt-2">Projects</li>
          <li className="px-1 pt-2">Contact</li>
        </ul>
      </nav>
    </header>

    // <header class="primary-header flex">
    //     <div>
    //       <img src="./assets/shared/logo.svg" alt="space tourism logo" class="logo">
    //     </div>
    //     <button class="mobile-nav-toggle" aria-controls="primary-navigation"><span class="sr-only" aria-expanded="false">Menu</span></button>
    //     <nav>
    //         <ul id="primary-navigation" data-visible="false" class="primary-navigation underline-indicators flex">
    //             <li class="active"><a class="ff-sans-cond uppercase text-white letter-spacing-2" href="index.html"><span aria-hidden="true">00</span>Home</a>
    //             <li><a class="ff-sans-cond uppercase text-white letter-spacing-2" href="destination.html"><span aria-hidden="true">01</span>Destination</a>
    //             <li><a class="ff-sans-cond uppercase text-white letter-spacing-2" href="crew.html"><span aria-hidden="true">02</span>Crew</a>
    //             <li><a class="ff-sans-cond uppercase text-white letter-spacing-2" href="technology.html"><span aria-hidden="true">03</span>Technology</a>
    //         </ul>
    //     </nav>
    //   </header>
  );
}
