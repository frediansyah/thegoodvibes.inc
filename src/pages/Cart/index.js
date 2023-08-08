import React from "react";

import { Text, Input, Img, Button, Line } from "components";
import { CloseSVG } from "../../assets/images/index.js";

const CartPage = () => {
  function handleNavigate1() {
    window.location.href = "https://twitter.com/login/";
  }

  const [inputvalue, setInputvalue] = React.useState("");

  return (
    <>
      <div className="bg-white_A700 flex flex-col font-playfairdisplay items-center justify-start mx-[auto] pb-[3px] w-[100%]">
        <div className="flex flex-col justify-start w-[100%]">
          <header className="flex items-center justify-center w-[100%]">
            <div className="flex flex-1 flex-col items-center justify-center w-[100%]">
              <div className="bg-white_A700 flex flex-row items-center justify-center p-[14px] shadow-bs w-[100%]">
                <ul className="flex md:flex-col sm:flex-col flex-row md:hidden sm:hidden items-center justify-center w-[99%] common-row-list">
                  <li className="mt-[15px] mb-[4px] sm:w-[100%] sm:my-[10px] w-[auto]">
                    <a
                      href={"javascript:"}
                      className="cursor-pointer hover:font-bold font-bold font-taviraj hover:h-[undefinedpx] sm:text-[28px] md:text-[30px] text-[32px] text-black_900 text-left hover:w-[undefinedpx]"
                      rel="noreferrer"
                    >
                      Thnkinsm
                    </a>
                  </li>
                  <li className="ml-[65px] sm:w-[100%] sm:my-[10px] w-[25%] my-[15px]">
                    <div className="flex sm:flex-col flex-row font-librebaskerville sm:gap-[20px] items-center justify-center">
                      <a
                        href={"javascript:"}
                        className="cursor-pointer hover:font-bold font-normal hover:h-[undefinedpx] not-italic text-[18px] hover:text-black_900 text-gray_900 text-left w-[auto] hover:w-[undefinedpx]"
                        rel="noreferrer"
                      >
                        Men
                      </a>
                      <a
                        href={"javascript:"}
                        className="cursor-pointer hover:font-bold font-normal hover:h-[undefinedpx] sm:ml-[0] ml-[39px] not-italic text-[18px] hover:text-black_900 text-gray_900 text-left w-[auto] hover:w-[undefinedpx]"
                        rel="noreferrer"
                      >
                        Women
                      </a>
                      <a
                        href={"javascript:"}
                        className="cursor-pointer hover:font-bold font-normal hover:h-[undefinedpx] sm:ml-[0] ml-[40px] not-italic text-[18px] hover:text-black_900 text-gray_900 text-left w-[auto] hover:w-[undefinedpx]"
                        rel="noreferrer"
                      >
                        Kids
                      </a>
                      <a
                        href={"javascript:"}
                        className="cursor-pointer hover:font-bold font-normal hover:h-[undefinedpx] sm:ml-[0] ml-[40px] not-italic text-[18px] hover:text-black_900 text-gray_900 text-left w-[auto] hover:w-[undefinedpx]"
                        rel="noreferrer"
                      >
                        Shop
                      </a>
                      <a
                        href={"javascript:"}
                        className="cursor-pointer hover:font-bold font-normal hover:h-[undefinedpx] sm:ml-[0] ml-[40px] not-italic text-[18px] hover:text-black_900 text-gray_900 text-left w-[auto] hover:w-[undefinedpx]"
                        rel="noreferrer"
                      >
                        Contact us
                      </a>
                    </div>
                  </li>
                  <li className="ml-[301px] sm:w-[100%] sm:my-[10px] sm:mx-[0] w-[29%]">
                    <Input
                      value={inputvalue}
                      onChange={(e) => setInputvalue(e?.target?.value)}
                      className="font-librebaskerville font-normal leading-[normal] not-italic p-[0] text-[18px] placeholder:text-gray_800 text-gray_800 text-left w-[100%]"
                      wrapClassName="flex md:w-[100%] sm:w-[100%] w-[29%]"
                      name="searchbar"
                      placeholder="Search here"
                      suffix={
                        inputvalue?.length > 0 ? (
                          <CloseSVG
                            className="cursor-pointer ml-[35px] my-[auto]"
                            onClick={() => setInputvalue("")}
                            color="#494a4a"
                          />
                        ) : (
                          <Img
                            src="images/img_search_gray_900.svg"
                            className="cursor-pointer ml-[35px] my-[auto]"
                            alt="search"
                          />
                        )
                      }
                    ></Input>
                  </li>
                  <li className="mt-[11px] mb-[12px] ml-[60px] sm:w-[100%] sm:my-[10px] w-[2%]">
                    <Img
                      src="images/img_favorite_black_900.svg"
                      className="h-[29px]"
                      alt="favorite"
                    />
                  </li>
                  <li className="mt-[11px] mb-[12px] ml-[32px] sm:w-[100%] sm:my-[10px] w-[2%]">
                    <Img
                      src="images/img_cart_gray_900.svg"
                      className="h-[29px]"
                      alt="cart"
                    />
                  </li>
                  <li className="mt-[6px] mb-[7px] ml-[32px] sm:w-[100%] sm:my-[10px] w-[3%] rounded-radius50">
                    <Img
                      src="images/img_ellipse1.png"
                      className="h-[39px] md:h-[auto] sm:h-[auto] rounded-radius50"
                      alt="EllipseOne"
                    />
                  </li>
                  <li className="ml-[13px] sm:w-[100%] sm:my-[10px] w-[auto] my-[15px]">
                    <a
                      href={"javascript:"}
                      className="cursor-pointer hover:font-bold font-librebaskerville font-normal hover:h-[undefinedpx] not-italic text-[18px] hover:text-black_900 text-gray_701 text-left hover:w-[undefinedpx]"
                      rel="noreferrer"
                    >
                      Suparmin
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </header>
          <div className="flex flex-row gap-[10px] items-start justify-start md:ml-[0] sm:ml-[0] ml-[330px] mt-[83px] md:px-[20px] sm:px-[20px] md:w-[100%] sm:w-[100%] w-[12%]">
            <Text
              className="font-bold text-gray_900 text-left w-[auto]"
              as="h5"
              variant="h5"
            >
              Orders{" "}
            </Text>
            <Text
              className="font-normal not-italic text-gray_900 text-left w-[auto]"
              variant="body1"
            >
              (2 Items)
            </Text>
          </div>
          <div className="bg-white_A700 flex flex-col items-center justify-start max-w-[1260px] mt-[32px] mx-[auto] p-[24px] md:px-[20px] sm:px-[20px] rounded-radius5 shadow-bs3 w-[100%]">
            <div className="flex md:flex-col sm:flex-col flex-row gap-[38px] items-center justify-between w-[100%]">
              <Img
                src="images/img_rectangle52.png"
                className="sm:flex-1 h-[248px] md:h-[auto] sm:h-[auto] object-cover rounded-radius20 sm:w-[100%] w-[auto]"
                alt="RectangleFiftyTwo"
              />
              <div className="flex md:flex-1 sm:flex-1 flex-col items-start justify-start md:w-[100%] sm:w-[100%] w-[auto]">
                <div className="flex sm:flex-col flex-row sm:gap-[20px] items-start justify-start w-[100%]">
                  <Text
                    className="font-bold font-playfairdisplay sm:mt-[0] mt-[7px] text-gray_900 text-left w-[auto]"
                    variant="body1"
                  >
                    Womens Bags
                  </Text>
                  <Text
                    className="font-lato font-normal sm:ml-[0] ml-[519px] not-italic text-gray_900 text-left w-[auto]"
                    variant="body4"
                  >
                    Order Number :
                  </Text>
                  <Text
                    className="font-lato font-normal sm:ml-[0] ml-[7px] not-italic text-gray_800 text-left w-[auto]"
                    variant="body4"
                  >
                    #124-5660-9008
                  </Text>
                </div>
                <div className="flex flex-row sm:gap-[40px] items-start justify-between mt-[4px] md:w-[100%] sm:w-[100%] w-[88%]">
                  <Text
                    className="font-normal font-playfairdisplay mt-[7px] not-italic text-gray_900 text-left w-[auto]"
                    variant="body4"
                  >
                    Thankinsomnia
                  </Text>
                  <Text
                    className="font-lato font-normal not-italic text-gray_900 text-left w-[auto]"
                    variant="body4"
                  >
                    View Order Details
                  </Text>
                </div>
                <Text
                  className="font-normal mt-[12px] not-italic text-gray_900 text-left w-[auto]"
                  variant="body1"
                >
                  $100
                </Text>
                <div className="flex flex-row items-start justify-start mt-[10px] md:w-[100%] sm:w-[100%] w-[29%]">
                  <Text
                    className="font-normal font-playfairdisplay not-italic text-gray_900 text-left w-[auto]"
                    variant="body4"
                  >
                    Order Placed on :
                  </Text>
                  <Text
                    className="font-lato font-normal ml-[4px] not-italic text-gray_800 text-left w-[auto]"
                    variant="body4"
                  >
                    3 October 2020
                  </Text>
                </div>
                <div className="flex flex-row items-start justify-start mt-[4px] md:w-[100%] sm:w-[100%] w-[18%]">
                  <Text
                    className="font-normal font-playfairdisplay not-italic text-gray_900 text-left w-[auto]"
                    variant="body4"
                  >
                    Ship To :
                  </Text>
                  <Text
                    className="font-lato font-normal ml-[3px] not-italic text-gray_800 text-left w-[auto]"
                    variant="body4"
                  >
                    Suparminto
                  </Text>
                </div>
                <div className="flex flex-row gap-[27px] items-end justify-start mt-[27px] md:w-[100%] sm:w-[100%] w-[22%]">
                  <Button
                    className="cursor-pointer font-lato font-normal leading-[normal] min-w-[117px] not-italic text-[18px] text-center text-gray_900 w-[auto]"
                    shape="RoundedBorder17"
                    size="sm"
                    variant="OutlineGray900_1"
                  >
                    Add to cart
                  </Button>
                  <Text
                    className="font-normal font-playfairdisplay mb-[4px] mt-[7px] not-italic text-gray_900 text-left w-[auto]"
                    variant="body4"
                  >
                    Cancel
                  </Text>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-white_A700 flex flex-col items-center justify-start max-w-[1260px] mt-[89px] mx-[auto] p-[24px] md:px-[20px] sm:px-[20px] rounded-radius5 shadow-bs3 w-[100%]">
            <div className="flex md:flex-col sm:flex-col flex-row gap-[39px] items-center justify-between w-[100%]">
              <Img
                src="images/img_rectangle52_248x223.png"
                className="sm:flex-1 h-[248px] md:h-[auto] sm:h-[auto] object-cover rounded-radius20 sm:w-[100%] w-[auto]"
                alt="RectangleFiftyTwo One"
              />
              <div className="flex md:flex-1 sm:flex-1 flex-col items-start justify-start md:w-[100%] sm:w-[100%] w-[auto]">
                <div className="flex sm:flex-col flex-row sm:gap-[20px] items-start justify-start w-[100%]">
                  <Text
                    className="font-bold font-playfairdisplay sm:mt-[0] mt-[4px] text-gray_900 text-left w-[auto]"
                    variant="body1"
                  >
                    T-Shirt Man Flower
                  </Text>
                  <Text
                    className="font-lato font-normal sm:ml-[0] ml-[453px] not-italic text-gray_900 text-left w-[auto]"
                    variant="body4"
                  >
                    Order Number :
                  </Text>
                  <Text
                    className="font-lato font-normal sm:ml-[0] ml-[7px] not-italic text-gray_800 text-left w-[auto]"
                    variant="body4"
                  >
                    #124-5660-9008
                  </Text>
                </div>
                <div className="flex flex-row sm:gap-[40px] items-start justify-between mt-[4px] md:w-[100%] sm:w-[100%] w-[88%]">
                  <Text
                    className="font-normal font-playfairdisplay mt-[7px] not-italic text-gray_900 text-left w-[auto]"
                    variant="body4"
                  >
                    Thankinsomnia
                  </Text>
                  <Text
                    className="font-lato font-normal not-italic text-gray_900 text-left w-[auto]"
                    variant="body4"
                  >
                    View Order Details
                  </Text>
                </div>
                <Text
                  className="font-normal mt-[12px] not-italic text-gray_900 text-left w-[auto]"
                  variant="body1"
                >
                  $100
                </Text>
                <div className="flex flex-row items-start justify-start mt-[10px] md:w-[100%] sm:w-[100%] w-[29%]">
                  <Text
                    className="font-normal font-playfairdisplay not-italic text-gray_900 text-left w-[auto]"
                    variant="body4"
                  >
                    Order Placed on :
                  </Text>
                  <Text
                    className="font-lato font-normal ml-[4px] not-italic text-gray_800 text-left w-[auto]"
                    variant="body4"
                  >
                    3 October 2020
                  </Text>
                </div>
                <div className="flex flex-row items-start justify-start mt-[4px] md:w-[100%] sm:w-[100%] w-[18%]">
                  <Text
                    className="font-normal font-playfairdisplay not-italic text-gray_900 text-left w-[auto]"
                    variant="body4"
                  >
                    Ship To :
                  </Text>
                  <Text
                    className="font-lato font-normal ml-[3px] not-italic text-gray_800 text-left w-[auto]"
                    variant="body4"
                  >
                    Suparminto
                  </Text>
                </div>
                <div className="flex flex-row gap-[27px] items-end justify-start mt-[27px] md:w-[100%] sm:w-[100%] w-[22%]">
                  <Button
                    className="cursor-pointer font-lato font-normal leading-[normal] min-w-[117px] not-italic text-[18px] text-center text-gray_900 w-[auto]"
                    shape="RoundedBorder17"
                    size="sm"
                    variant="OutlineGray900_1"
                  >
                    Add to cart
                  </Button>
                  <Text
                    className="font-normal font-playfairdisplay mb-[4px] mt-[7px] not-italic text-gray_900 text-left w-[auto]"
                    variant="body4"
                  >
                    Cancel
                  </Text>
                </div>
              </div>
            </div>
          </div>
          <footer className="bg-gray_900 flex font-librebaskerville items-center justify-center mt-[76px] w-[100%]">
            <div className="flex flex-1 flex-col items-center justify-center mb-[33px] mt-[198px] w-[100%]">
              <div className="flex flex-col items-center justify-center w-[100%]">
                <div className="flex md:flex-col sm:flex-col flex-row md:gap-[20px] sm:gap-[20px] items-start justify-start md:w-[100%] sm:w-[100%] w-[82%]">
                  <ul className="flex flex-col items-start justify-start md:w-[100%] sm:w-[100%] w-[9%] common-column-list">
                    <li className="ml-[1px] w-[auto]">
                      <Text
                        className="cursor-pointer font-bold text-left text-white_A700"
                        variant="body1"
                      >
                        Womem
                      </Text>
                    </li>
                    <li className="mt-[19px] ml-[1px] w-[auto]">
                      <a
                        href={"javascript:"}
                        className="cursor-pointer font-normal not-italic text-[18px] text-left text-white_A700"
                        rel="noreferrer"
                      >
                        All Women
                      </a>
                    </li>
                    <li className="mt-[17px] ml-[1px] w-[auto]">
                      <a
                        href={"javascript:"}
                        className="cursor-pointer font-normal not-italic text-[18px] text-left text-white_A700"
                        rel="noreferrer"
                      >
                        Skirts
                      </a>
                    </li>
                    <li className="mt-[17px] ml-[1px] w-[auto]">
                      <a
                        href={"javascript:"}
                        className="cursor-pointer font-normal not-italic text-[18px] text-left text-white_A700"
                        rel="noreferrer"
                      >
                        T- Shirts
                      </a>
                    </li>
                    <li className="mt-[24px] ml-[1px] w-[auto]">
                      <a
                        href={"javascript:"}
                        className="cursor-pointer font-normal not-italic text-[18px] text-left text-white_A700"
                        rel="noreferrer"
                      >
                        Tops
                      </a>
                    </li>
                    <li className="mt-[17px] w-[auto]">
                      <a
                        href={"javascript:"}
                        className="cursor-pointer font-normal not-italic text-[18px] text-left text-white_A700"
                        rel="noreferrer"
                      >
                        Jackets
                      </a>
                    </li>
                  </ul>
                  <ul className="flex flex-col items-start justify-start md:ml-[0] sm:ml-[0] ml-[108px] md:w-[100%] sm:w-[100%] w-[7%] common-column-list">
                    <li className="ml-[1px] w-[auto]">
                      <Text
                        className="cursor-pointer font-bold text-left text-white_A700"
                        variant="body1"
                      >
                        Men
                      </Text>
                    </li>
                    <li className="mt-[19px] ml-[1px] w-[auto]">
                      <a
                        href={"javascript:"}
                        className="cursor-pointer font-normal not-italic text-[18px] text-left text-white_A700"
                        rel="noreferrer"
                      >
                        All Men
                      </a>
                    </li>
                    <li className="mt-[17px] ml-[1px] w-[auto]">
                      <a
                        href={"javascript:"}
                        className="cursor-pointer font-normal not-italic text-[18px] text-left text-white_A700"
                        rel="noreferrer"
                      >
                        Shirts
                      </a>
                    </li>
                    <li className="mt-[17px] ml-[1px] w-[auto]">
                      <a
                        href={"javascript:"}
                        className="cursor-pointer font-normal not-italic text-[18px] text-left text-white_A700"
                        rel="noreferrer"
                      >
                        T- Shirts
                      </a>
                    </li>
                    <li className="mt-[24px] ml-[1px] w-[auto]">
                      <a
                        href={"javascript:"}
                        className="cursor-pointer font-normal not-italic text-[18px] text-left text-white_A700"
                        rel="noreferrer"
                      >
                        Shorts
                      </a>
                    </li>
                    <li className="mt-[17px] w-[auto]">
                      <a
                        href={"javascript:"}
                        className="cursor-pointer font-normal not-italic text-[18px] text-left text-white_A700"
                        rel="noreferrer"
                      >
                        Jackets
                      </a>
                    </li>
                  </ul>
                  <ul className="flex flex-col items-start justify-start md:ml-[0] sm:ml-[0] ml-[108px] md:w-[100%] sm:w-[100%] w-[7%] common-column-list">
                    <li className="ml-[1px] w-[auto]">
                      <Text
                        className="cursor-pointer font-bold text-left text-white_A700"
                        variant="body1"
                      >
                        Kids
                      </Text>
                    </li>
                    <li className="mt-[19px] ml-[1px] w-[auto]">
                      <a
                        href={"javascript:"}
                        className="cursor-pointer font-normal not-italic text-[18px] text-left text-white_A700"
                        rel="noreferrer"
                      >
                        All Kids
                      </a>
                    </li>
                    <li className="mt-[17px] ml-[1px] w-[auto]">
                      <a
                        href={"javascript:"}
                        className="cursor-pointer font-normal not-italic text-[18px] text-left text-white_A700"
                        rel="noreferrer"
                      >
                        Shirts
                      </a>
                    </li>
                    <li className="mt-[17px] ml-[1px] w-[auto]">
                      <a
                        href={"javascript:"}
                        className="cursor-pointer font-normal not-italic text-[18px] text-left text-white_A700"
                        rel="noreferrer"
                      >
                        T- Shirts
                      </a>
                    </li>
                    <li className="mt-[24px] ml-[1px] w-[auto]">
                      <a
                        href={"javascript:"}
                        className="cursor-pointer font-normal not-italic text-[18px] text-left text-white_A700"
                        rel="noreferrer"
                      >
                        Shorts
                      </a>
                    </li>
                    <li className="mt-[17px] w-[auto]">
                      <a
                        href={"javascript:"}
                        className="cursor-pointer font-normal not-italic text-[18px] text-left text-white_A700"
                        rel="noreferrer"
                      >
                        Jackets
                      </a>
                    </li>
                  </ul>
                  <ul className="flex flex-col items-start justify-start md:ml-[0] sm:ml-[0] ml-[109px] md:w-[100%] sm:w-[100%] w-[11%] common-column-list">
                    <li className="ml-[1px] w-[auto]">
                      <Text
                        className="cursor-pointer font-bold text-left text-white_A700"
                        variant="body1"
                      >
                        Shopping
                      </Text>
                    </li>
                    <li className="mt-[19px] ml-[1px] w-[auto]">
                      <a
                        href={"javascript:"}
                        className="cursor-pointer font-normal not-italic text-[18px] text-left text-white_A700"
                        rel="noreferrer"
                      >
                        Your cart
                      </a>
                    </li>
                    <li className="mt-[17px] ml-[1px] w-[auto]">
                      <a
                        href={"javascript:"}
                        className="cursor-pointer font-normal not-italic text-[18px] text-left text-white_A700"
                        rel="noreferrer"
                      >
                        your orders
                      </a>
                    </li>
                    <li className="mt-[17px] ml-[1px] w-[auto]">
                      <a
                        href={"javascript:"}
                        className="cursor-pointer font-normal not-italic text-[18px] text-left text-white_A700"
                        rel="noreferrer"
                      >
                        Compared items
                      </a>
                    </li>
                    <li className="mt-[24px] w-[auto]">
                      <a
                        href={"javascript:"}
                        className="cursor-pointer font-normal not-italic text-[18px] text-left text-white_A700"
                        rel="noreferrer"
                      >
                        Wishlist
                      </a>
                    </li>
                    <li className="mt-[17px] ml-[1px] w-[auto]">
                      <a
                        href={"javascript:"}
                        className="cursor-pointer font-normal not-italic text-[18px] text-left text-white_A700"
                        rel="noreferrer"
                      >
                        Shipping Details
                      </a>
                    </li>
                  </ul>
                  <ul className="flex flex-col items-start justify-start md:ml-[0] sm:ml-[0] ml-[110px] w-[10%] md:w-[100%] sm:w-[100%] common-column-list">
                    <li className="w-[auto]">
                      <Text
                        className="cursor-pointer font-bold text-left text-white_A700"
                        variant="body1"
                      >
                        More links
                      </Text>
                    </li>
                    <li className="mt-[17px] w-[auto]">
                      <a
                        href={"javascript:"}
                        className="cursor-pointer font-normal not-italic text-[18px] text-left text-white_A700"
                        rel="noreferrer"
                      >
                        Blogs
                      </a>
                    </li>
                    <li className="mt-[19px] w-[auto]">
                      <a
                        href={"javascript:"}
                        className="cursor-pointer font-normal not-italic text-[18px] text-left text-white_A700"
                        rel="noreferrer"
                      >
                        Gift center
                      </a>
                    </li>
                    <li className="mt-[19px] w-[auto]">
                      <a
                        href={"javascript:"}
                        className="cursor-pointer font-normal not-italic text-[18px] text-left text-white_A700"
                        rel="noreferrer"
                      >
                        Buying guides
                      </a>
                    </li>
                    <li className="mt-[19px] w-[auto]">
                      <a
                        href={"javascript:"}
                        className="cursor-pointer font-normal not-italic text-[18px] text-left text-white_A700"
                        rel="noreferrer"
                      >
                        New arrivals
                      </a>
                    </li>
                    <li className="mt-[19px] w-[auto]">
                      <a
                        href={"javascript:"}
                        className="cursor-pointer font-normal not-italic text-[18px] text-left text-white_A700"
                        rel="noreferrer"
                      >
                        Clearance
                      </a>
                    </li>
                  </ul>
                  <ul className="flex flex-col gap-[16px] items-start justify-start md:ml-[0] sm:ml-[0] ml-[110px] md:w-[100%] sm:w-[100%] w-[29%] common-column-list">
                    <li className="ml-[2px] w-[auto]">
                      <Text
                        className="cursor-pointer font-bold text-left text-white_A700"
                        variant="body1"
                      >
                        Stay In Touch
                      </Text>
                    </li>
                    <li className="mt-[16px] ml-[2px] w-[auto]">
                      <a
                        href={"javascript:"}
                        className="cursor-pointer font-normal not-italic text-[18px] text-left text-white_A700"
                        rel="noreferrer"
                      >
                        Stay in touch to get special offers, free giveaways
                        <br />
                        and once in a lifetime deals
                      </a>
                    </li>
                    <li className="mt-[16px] w-[100%]">
                      <Input
                        className="cursor-pointer font-normal leading-[normal] not-italic p-[0] text-[18px] placeholder:text-gray_400 text-gray_400 text-left w-[100%]"
                        wrapClassName="flex w-[100%]"
                        type="email"
                        name="Group47686"
                        placeholder="Enter your email"
                        prefix={
                          <Img
                            src="images/img_mail_white_a700.svg"
                            className="mr-[29px] my-[auto]"
                            alt="mail"
                          />
                        }
                        shape="RoundedBorder2"
                        size="sm"
                        variant="OutlineWhiteA700"
                      ></Input>
                    </li>
                  </ul>
                </div>
                <Line className="bg-white_A700 h-[1px] mt-[79px] w-[100%]" />
                <div className="flex sm:flex-col flex-row sm:gap-[40px] items-center justify-between mt-[33px] md:w-[100%] sm:w-[100%] w-[49%]">
                  <Text
                    className="font-normal not-italic text-left text-white_A700 w-[auto]"
                    variant="body4"
                  >
                    Terms & Conditions
                  </Text>
                  <Text
                    className="font-normal not-italic text-left text-white_A700 w-[auto]"
                    variant="body4"
                  >
                    Privacy Policy
                  </Text>
                  <div className="flex flex-row items-center justify-between sm:w-[100%] w-[auto]">
                    <Img
                      src="images/img_computer.svg"
                      className="h-[32px] w-[32px]"
                      alt="computer"
                    />
                    <Img
                      src="images/img_camera.svg"
                      className="h-[28px] w-[28px]"
                      alt="camera"
                    />
                    <Img
                      src="images/img_call.svg"
                      className="h-[31px] w-[31px]"
                      alt="call"
                    />
                    <Img
                      src="images/img_twitter.svg"
                      className="common-pointer h-[28px] w-[28px]"
                      onClick={handleNavigate1}
                      alt="twitter"
                    />
                  </div>
                </div>
              </div>
            </div>
          </footer>
        </div>
      </div>
    </>
  );
};

export default CartPage;
