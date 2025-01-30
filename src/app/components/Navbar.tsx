// import { ArrowDownIcon } from "@heroicons/react/16/solid";
import Link from "next/link";
import React from "react";
import { IoIosArrowDown } from "react-icons/io";
import { Sheet, SheetContent, SheetTrigger } from "@/app/components/ui/sheet";
import { MdMenu } from "react-icons/md";
import { BsCart2 } from "react-icons/bs";
import { FiUser } from "react-icons/fi";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/app/components/ui/dropdown-menu";
import SearchWithSanity from "./Search";

function Navbar() {
  return (
    <div className="max-w-[1000px] lg:flex  my-5 mx-auto h-[40px]  justify-between gap-x-[100px] items-center">
      <div>
        <h1 className="font-[700] text-[34px] leading-[34px]">Hekto</h1>
      </div>
      <div className="set_lato hidden lg:flex md:justify-center  items-center">
        <ul className="flex items-center gap-x-7">
          <li className="flex items-center ">
            <Link className="text-pink-600 font-bold" href={"/"}>
              Home
            </Link>
          </li>
          <DropdownMenu>
            <DropdownMenuTrigger>
              <li className="flex items-center  ">
                <Link className="hover:text-pink-800 font-semibold" href={""}>
                  Pages
                </Link>
                <IoIosArrowDown className="hover:text-pink-800 font-semibold" />
              </li>
            </DropdownMenuTrigger>
            <DropdownMenuContent className=" bg-[#ffffff]">
              <DropdownMenuSeparator />
              <DropdownMenuItem className="active:bg-purple-200">
                <Link href={"/Pages/About-us"}>About-us</Link>
              </DropdownMenuItem>

              
              <DropdownMenuItem className="active:bg-purple-200">
                <Link href={"/demo"}>Demo</Link>
              </DropdownMenuItem>

              <DropdownMenuItem className="active:bg-purple-200">
                <Link href={"/Pages/Ordercomplete"}>OrderComplete</Link>
              </DropdownMenuItem>
              <DropdownMenuItem className="active:bg-purple-200">
                <Link href={"/Pages/FAQ"}>FAQ</Link>
              </DropdownMenuItem>

              <DropdownMenuItem className="active:bg-purple-200">
                <Link href={"/Pages/Error"}>Error</Link>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>

          <li className="hover:text-pink-800 font-semibold">
            <Link href={"/products"}>Products</Link>
          </li>
          <li className="hover:text-pink-800 font-semibold">
            <Link href={"/Pages/Blog"}>Blog</Link>
          </li>
          <DropdownMenu>
            <DropdownMenuTrigger>
              <li className="flex items-center  ">
                <Link className="hover:text-pink-800 font-semibold" href={""}>
                  Shop
                </Link>
                <IoIosArrowDown className="hover:text-pink-600 font-semibold" />
              </li>
            </DropdownMenuTrigger>
            <DropdownMenuContent className=" bg-[#ffffff]">
              <DropdownMenuSeparator />
              <DropdownMenuItem className="active:bg-purple-200">
                <Link href={"/Pages/ShopList"}>ShopList</Link>
              </DropdownMenuItem>

              
              <DropdownMenuItem className="active:bg-purple-200">
                <Link href={"/Pages/ShoppingCart"}>ShoppingCart</Link>
              </DropdownMenuItem>

              <DropdownMenuItem className="active:bg-purple-200">
                <Link href={"/Pages/ShopGridDefault"}>ShopGridDefault</Link>
              </DropdownMenuItem>
              <DropdownMenuItem className="active:bg-purple-200">
                <Link href={"/Pages/ShopLeft"}>Shop Left Sidebar</Link>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
          <li className="hover:text-pink-800 font-semibold">
            <Link href={"/Pages/Contact-us"}>Contact</Link>
          </li>
        </ul>
      </div>

      <div className="hidden lg:flex justify-center items-center w-[317px] h-[40px]">
        {/* <input
          type="search"
          placeholder="search"
          className="border-[1px] outline-none px-2 py-1 border-gray-300"
        /> */}
          <SearchWithSanity />
        {/* <div className="bg-[#FB2E86]  flex items-center h-[35px] text-white">
          <IoSearch className="w-[56px]  size-5 cursor-pointer hover:scale-105 " />
        </div> */}

      </div>

      <div className="">
        <Sheet>
          <SheetTrigger>
            <div>
              <MdMenu
                size={40}
                className="absolute right-5 top-20 w-8 ml-1 lg:hidden block "
              />
            </div>
          </SheetTrigger>
          <SheetContent className="bg-white">
            <div className="mt-28">
              <div className="flex justify-center gap-5 mb-10">
                <Link href={"/Pages/ShoppingCart"}>
                  <BsCart2 size={20} className=" w-10 hover:text-pink-600" />
                </Link>

                <Link href={"/Pages/MyAccount"}>
                  <FiUser size={20} className=" w-10 hover:text-pink-600" />
                </Link>

                <div className="relative">
                  {/* <input
                    type="text"
                    placeholder="Search.."
                    className=" w-full outline-none rounded-3xl md:px-6 px-2 py-2 border-[1px] text-black border-black"
                  />
                  <IoSearch className="absolute top-2 right-4 text-2xl" /> */}
                  <SearchWithSanity/>
                </div>
              </div>
              <ul className="flex flex-col text-xl gap-10 bg-white">
                <li>
                  <Link className="hover:text-pink-600" href={"/"}>
                    Home
                  </Link>
                </li>
                <li>
                  <DropdownMenu>
                    <DropdownMenuTrigger>
                      <Link href={""} className="hover:text-pink-600">
                        Pages
                      </Link>
                      <IoIosArrowDown className="inline" />
                    </DropdownMenuTrigger>
                    <DropdownMenuContent className="bg-white">
                      <DropdownMenuSeparator />
                      <DropdownMenuItem>
                        <Link className="hover:text-pink-600" href={"/Pages/About-us"}>
                          About
                        </Link>
                      </DropdownMenuItem>

                      <DropdownMenuItem>
                        <Link className="hover:text-pink-600" href={"/demo"}>
                          Demo
                        </Link>
                      </DropdownMenuItem>
                      <DropdownMenuItem>
                        <Link className="hover:text-pink-600" href={"/demo"}>
                          Ordercomplete
                        </Link>
                      </DropdownMenuItem>
                      <DropdownMenuItem>
                        <Link className="hover:text-pink-600" href={"/Pages/FAQ"}>
                          FAQ
                        </Link>
                      </DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                </li>
                <li>
                  <Link className="hover:text-pink-600" href={"/products"}>
                    Products
                  </Link>
                </li>
                <li>
                  <Link className="hover:text-pink-600" href={"/Pages/Blog"}>
                    Blog
                  </Link>
                </li>
                <li>
                <DropdownMenu>
                    <DropdownMenuTrigger>
                      <Link href={""} className="hover:text-pink-600">
                        Shop
                      </Link>
                      <IoIosArrowDown className="inline" />
                    </DropdownMenuTrigger>
                    <DropdownMenuContent className="bg-white">
                      <DropdownMenuSeparator />
                      <DropdownMenuItem>
                        <Link className="hover:text-pink-600" href={"/Pages/About-us"}>
                          ShopList
                        </Link>
                      </DropdownMenuItem>

                      <DropdownMenuItem>
                        <Link className="hover:text-pink-600" href={"/demo"}>
                          ShopLeft
                        </Link>
                      </DropdownMenuItem>
                      <DropdownMenuItem>
                        <Link
                          className="hover:text-pink-600"
                          href={"/Pages/ShopLeft"}
                        >
                          ShopGridDefault
                        </Link>
                      </DropdownMenuItem>
                      <DropdownMenuItem>
                        <Link className="hover:text-pink-600" href={"/Pages/FAQ"}>
                          ShoppingCart
                        </Link>
                      </DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                </li>
                <li>
                  <Link className="hover:text-pink-600" href={"/Pages/Contact-us"}>
                    Contact
                  </Link>
                </li>
              </ul>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </div>
  );
}

export default Navbar;
