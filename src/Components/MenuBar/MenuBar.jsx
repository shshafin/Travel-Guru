import React from "react";
import {
  Navbar,
  MobileNav,
  Typography,
  Button,
  Input,
  IconButton,
  MenuHandler,
  Menu,
  MenuList,
} from "@material-tailwind/react";
import { Link, NavLink } from "react-router-dom";
import UseAuth from "../../Hooks/UseAuth";

const MenuBar = () => {
  const [openNav, setOpenNav] = React.useState(false);
  const { user, Logout } = UseAuth();

  React.useEffect(() => {
    window.addEventListener(
      "resize",
      () => window.innerWidth >= 960 && setOpenNav(false)
    );
  }, []);

  const navList = (
    <ul className="mt-2 mb-4 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6">
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="p-1  new text-lg text-white font-medium"
      >
        <NavLink
          to="/"
          className={({ isActive, isPending }) =>
            isPending
              ? "pending"
              : isActive
              ? "text-[#F9A51A] font-semibold"
              : ""
          }
        >
          Home
        </NavLink>
      </Typography>
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="p-1  new text-lg text-white font-medium"
      >
        <NavLink
          to="/News"
          className={({ isActive, isPending }) =>
            isPending
              ? "pending"
              : isActive
              ? "text-[#F9A51A] font-semibold"
              : ""
          }
        >
          News
        </NavLink>
      </Typography>
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="p-1  new text-lg text-white font-medium"
      >
        <NavLink
          to="/Destination"
          className={({ isActive, isPending }) =>
            isPending
              ? "pending"
              : isActive
              ? "text-[#F9A51A] font-semibold"
              : ""
          }
        >
          Destination
        </NavLink>
      </Typography>
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="p-1  new text-lg text-white font-medium"
      >
        <NavLink
          to="/Blog"
          className={({ isActive, isPending }) =>
            isPending
              ? "pending"
              : isActive
              ? "text-[#F9A51A] font-semibold"
              : ""
          }
        >
          Blog
        </NavLink>
      </Typography>
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="p-1  new text-lg text-white font-medium"
      >
        <NavLink
          to="/Contact"
          className={({ isActive, isPending }) =>
            isPending
              ? "pending"
              : isActive
              ? "text-[#F9A51A] font-semibold"
              : ""
          }
        >
          Contact
        </NavLink>
      </Typography>
    </ul>
  );

  return (
    <div>
      <Navbar className="sticky top-0 z-10 block w-full max-w-full px-4  bg-inherit border-none  rounded-none h-max  backdrop-blur-md backdrop-saturate-200 lg:px-8 ">
        <div className="flex items-center justify-between">
          <div className="flex items-center justify-center gap-20">
            <img
              className="w-28  invert "
              src="https://i.imgur.com/TCT4tvy.png"
              alt=""
            />
            <div className="relative flex w-full gap-2 md:w-max bg-white/10">
              <Input
                type="search"
                color="white"
                label="Search your Destination..."
                className="pr-20"
                containerProps={{
                  className: "min-w-[400px]",
                }}
              />
              <Button
                size="sm"
                color="white"
                className="!absolute right-1 top-1 rounded"
              >
                Search
              </Button>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <div className="mr-4 hidden lg:block ">{navList}</div>
            <div className="flex items-center gap-x-1">
              {user ? (
                <Typography
                  as="li"
                  variant="small"
                  color="blue-gray"
                  className="p-1  new text-lg text-white font-extrabold"
                >
                  <span className="flex items-center gap-3">
                    {user.displayName}

                    <Menu>
                      <MenuHandler>
                        <Button className="bg-inherit shadow-none p-0">
                          {" "}
                          <img
                            className="w-10 rounded-full"
                            src={user.photoURL}
                            alt=""
                          />
                        </Button>
                      </MenuHandler>
                      <MenuList className="bg-inherit border-none">
                        <Button onClick={Logout} className="w-full">
                          Log Out
                        </Button>
                      </MenuList>
                    </Menu>
                  </span>
                </Typography>
              ) : (
                <Link to={"/Login"}>
                  <Button className=" new bg-[#F9A51A] text-black py-2 px-6 text-base  font-bold">
                    Login
                  </Button>
                </Link>
              )}
            </div>
            <IconButton
              variant="text"
              className="ml-auto h-6 w-6 text-inherit hover:bg-transparent focus:bg-transparent active:bg-transparent lg:hidden"
              ripple={false}
              onClick={() => setOpenNav(!openNav)}
            >
              {openNav ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  className="h-6 w-6"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              )}
            </IconButton>
          </div>
        </div>
        <MobileNav open={openNav}>
          {navList}
          <div className="flex items-center gap-x-1">
            <Button
              fullWidth
              className=" new bg-[#F9A51A] text-black py-2 px-6 text-base  font-bold"
            >
              Log In
            </Button>
          </div>
        </MobileNav>
      </Navbar>
    </div>
  );
};

export default MenuBar;
