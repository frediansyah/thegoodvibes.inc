import React from "react";

import {
  Text,
  Input,
  Img,
  Button,
  PagerIndicator,
  List,
  RatingBar,
  Line,
} from "components";
import { CloseSVG } from "../../assets/images/index.js";

const HomePagePage = () => {
  function handleNavigate() {
    window.location.href = "https://twitter.com/login/";
  }

  const [inputvalue, setInputvalue] = React.useState("");

  return (
    <>
      <div className="bg-white_A700 flex flex-col font-librebaskerville md:gap-[40px] sm:gap-[40px] gap-[80px] items-end justify-start mx-[auto] w-[100%]">
        <div className="flex flex-col gap-[27px] items-start md:px-[20px] sm:px-[20px] w-[100%]">
          <div className="flex flex-col items-end justify-start md:ml-[0] sm:ml-[0] ml-[96px] md:w-[100%] sm:w-[100%] w-[97%]">
            <div className="flex flex-col items-end justify-start md:w-[100%] sm:w-[100%] w-[82%]">
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
                          GoodVibes
                        </a>
                      </li>
                      <li className="ml-[63px] sm:w-[100%] sm:my-[10px] w-[25%] my-[15px]">
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
                                src="images/img_search.svg"
                                className="cursor-pointer ml-[35px] my-[auto]"
                                alt="search"
                              />
                            )
                          }
                        ></Input>
                      </li>
                      <li className="mt-[11px] mb-[12px] ml-[60px] sm:w-[100%] sm:my-[10px] w-[2%]">
                        <Img
                          src="images/img_favorite.svg"
                          className="h-[29px]"
                          alt="favorite"
                        />
                      </li>
                      <li className="mt-[11px] mb-[12px] ml-[32px] sm:w-[100%] sm:my-[10px] w-[2%]">
                        <Img
                          src="images/img_cart.svg"
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
              <div className="bg-gray_50 flex md:flex-col sm:flex-col flex-row md:gap-[20px] sm:gap-[20px] items-center justify-end p-[7px] w-[100%]">
                <Text
                  className="font-normal not-italic text-gray_900 text-left w-[auto]"
                  variant="body4"
                >
                  Invite Friends and get 50% off on your next purchase
                </Text>
                <Text
                  className="font-normal md:ml-[0] sm:ml-[0] ml-[15px] not-italic text-blue_900 text-left w-[auto]"
                  variant="body4"
                >
                  Invite Now
                </Text>
                <Img
                  src="images/img_close.svg"
                  className="h-[36px] md:ml-[0] sm:ml-[0] ml-[574px] mr-[43px] w-[36px]"
                  alt="close"
                />
              </div>
              <div className="flex flex-col gap-[17px] items-center justify-start w-[100%]">
                <div className="flex md:flex-col sm:flex-col flex-row md:gap-[20px] sm:gap-[20px] items-center justify-evenly w-[100%]">
                  <Img
                    src="images/img_rectangle374.png"
                    className="md:flex-1 sm:flex-1 h-[796px] sm:h-[auto] object-cover md:w-[100%] sm:w-[100%] w-[54%]"
                    alt="Rectangle374"
                  />
                  <div className="h-[797px] md:h-[auto] sm:h-[auto] relative md:w-[100%] sm:w-[100%] w-[47%]">
                    <Img
                      src="images/img_rectangle373.png"
                      className="h-[797px] m-[auto] object-cover w-[100%]"
                      alt="Rectangle373"
                    />
                    <div className="absolute bg-black_900_b2 flex flex-col h-[max-content] inset-[0] items-center justify-center m-[auto] p-[196px] sm:px-[20px] md:px-[40px] w-[100%]">
                      <div className="flex flex-col items-center justify-start my-[89px] w-[100%]">
                        <Text
                          className="text-left text-white_A700 w-[auto]"
                          as="h3"
                          variant="h3"
                        >
                          Big Fashion Festival
                        </Text>
                        <Text
                          className="mt-[22px] text-left text-white_A700 w-[auto]"
                          as="h3"
                          variant="h3"
                        >
                          50% - 80% off
                        </Text>
                        <Button
                          className="cursor-pointer font-normal leading-[normal] min-w-[172px] mt-[34px] not-italic sm:text-[20px] md:text-[22px] text-[24px] text-center text-white_A700 w-[auto]"
                          variant="OutlineWhiteA700_1"
                        >
                          Explore
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
                <PagerIndicator
                  className="flex h-[14px] justify-center w-[94px]"
                  count={5}
                  activeCss="inline-block cursor-pointer rounded-radius50 h-[14px] bg-gray_900 w-[14px]"
                  activeIndex={1}
                  inactiveCss="inline-block cursor-pointer rounded-radius50 h-[10px] bg-gray_400 w-[10px]"
                  selectedWrapperCss="inline-block md:ml-[0] mx-[5.03px] sm:ml-[0]"
                  unselectedWrapperCss="inline-block md:ml-[0] mx-[5.03px] sm:ml-[0]"
                />
              </div>
              <div className="flex flex-col font-poppins items-center justify-start mt-[80px] md:w-[100%] sm:w-[100%] w-[16%]">
                <Text
                  className="font-semibold text-gray_902 text-left w-[auto]"
                  as="h5"
                  variant="h5"
                >
                  <span className="sm:text-[32px] md:text-[34px] text-gray_902 text-[36px] font-librebaskerville font-bold">
                    Trending{" "}
                  </span>
                  <span className="sm:text-[32px] md:text-[34px] text-gray_902 text-[36px] font-librebaskerville font-bold">
                    Now
                  </span>
                </Text>
              </div>
              <List
                className="sm:flex-col flex-row font-librebaskerville gap-[40px] grid sm:grid-cols-1 md:grid-cols-3 grid-cols-5 justify-center mt-[27px] overflow-auto md:w-[100%] sm:w-[100%] w-[98%]"
                orientation="horizontal"
              >
                <div className="bg-white_A700 flex flex-col items-center justify-start pb-[13px] rounded-radius20 shadow-bs1 w-[100%]">
                  <div className="flex flex-col gap-[10px] h-[410px] sm:h-[auto] items-center justify-start sm:w-[100%] w-[410px]">
                    <Img
                      src="images/img_rectangle375.png"
                      className="h-[301px] sm:h-[auto] object-cover rounded-bl-[0] rounded-br-[0] rounded-tl-[10px] rounded-tr-[10px] w-[100%]"
                      alt="Rectangle375"
                    />
                    <div className="flex flex-col items-start justify-start md:w-[100%] sm:w-[100%] w-[90%]">
                      <Text
                        className="font-bold text-gray_902 text-left w-[auto]"
                        variant="body1"
                      >
                        Shirt Emerald Black Than . . .
                      </Text>
                      <div className="flex flex-row gap-[94px] items-start justify-start mt-[4px] md:w-[100%] sm:w-[100%] w-[54%]">
                        <Text
                          className="font-normal not-italic text-gray_902 text-left w-[auto]"
                          variant="body4"
                        >
                          Gucci
                        </Text>
                        <div className="flex flex-row items-start justify-evenly w-[25%]">
                          <Text
                            className="font-normal not-italic text-gray_600 text-left w-[auto]"
                            variant="body4"
                          >
                            4.4
                          </Text>
                          <Img
                            src="images/img_star.svg"
                            className="h-[17px] w-[18px]"
                            alt="star"
                          />
                        </div>
                      </div>
                      <div className="flex flex-row items-start justify-start mt-[12px] md:w-[100%] sm:w-[100%] w-[76%]">
                        <Text
                          className="font-bold font-librebaskerville text-gray_902 text-left w-[auto]"
                          variant="body1"
                        >
                          $700
                        </Text>
                        <Text
                          className="font-librebaskerville font-normal line-through ml-[42px] mt-[3px] not-italic text-gray_600 text-left w-[auto]"
                          variant="body4"
                        >
                          $1000
                        </Text>
                        <Text
                          className="font-bold font-roboto ml-[36px] mt-[3px] text-green_900 text-left w-[auto]"
                          variant="body4"
                        >
                          (30% off)
                        </Text>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="bg-white_A700 flex flex-col items-center justify-start pb-[13px] rounded-radius20 shadow-bs1 w-[100%]">
                  <div className="flex flex-col gap-[10px] h-[410px] sm:h-[auto] items-center justify-start sm:w-[100%] w-[410px]">
                    <Img
                      src="images/img_rectangle375_301x410.png"
                      className="h-[301px] sm:h-[auto] object-cover rounded-bl-[0] rounded-br-[0] rounded-tl-[10px] rounded-tr-[10px] w-[100%]"
                      alt="Rectangle375 One"
                    />
                    <div className="flex flex-col items-start justify-start md:w-[100%] sm:w-[100%] w-[91%]">
                      <Text
                        className="font-bold text-gray_902 text-left w-[auto]"
                        variant="body1"
                      >
                        Tshirt Haven Black Thank . . .
                      </Text>
                      <div className="flex flex-row gap-[94px] items-start justify-start mt-[4px] md:w-[100%] sm:w-[100%] w-[54%]">
                        <Text
                          className="font-normal not-italic text-gray_902 text-left w-[auto]"
                          variant="body4"
                        >
                          Gucci
                        </Text>
                        <div className="flex flex-row items-start justify-evenly w-[25%]">
                          <Text
                            className="font-normal not-italic text-gray_600 text-left w-[auto]"
                            variant="body4"
                          >
                            4.4
                          </Text>
                          <Img
                            src="images/img_star.svg"
                            className="h-[17px] w-[18px]"
                            alt="star One"
                          />
                        </div>
                      </div>
                      <div className="flex flex-row items-start justify-start mt-[12px] md:w-[100%] sm:w-[100%] w-[77%]">
                        <Text
                          className="font-bold text-gray_902 text-left w-[auto]"
                          variant="body1"
                        >
                          $700
                        </Text>
                        <Text
                          className="font-normal line-through ml-[42px] mt-[3px] not-italic text-gray_600 text-left w-[auto]"
                          variant="body4"
                        >
                          Rs. 1000
                        </Text>
                        <Text
                          className="font-bold ml-[15px] mt-[3px] text-green_900 text-left w-[auto]"
                          variant="body4"
                        >
                          (30% off)
                        </Text>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="bg-white_A700 flex flex-col items-center justify-start pb-[13px] rounded-radius20 shadow-bs1 w-[100%]">
                  <div className="flex flex-col gap-[10px] h-[410px] sm:h-[auto] justify-start sm:w-[100%] w-[410px]">
                    <Img
                      src="images/img_rectangle375_1.png"
                      className="h-[301px] sm:h-[auto] object-cover rounded-bl-[0] rounded-br-[0] rounded-tl-[10px] rounded-tr-[10px] w-[100%]"
                      alt="Rectangle375 Two"
                    />
                    <div className="flex flex-col items-start justify-start md:ml-[0] sm:ml-[0] ml-[20px] md:w-[100%] sm:w-[100%] w-[70%]">
                      <Text
                        className="font-bold text-gray_902 text-left w-[auto]"
                        variant="body1"
                      >
                        Womens Bags
                      </Text>
                      <div className="flex flex-row gap-[94px] items-start justify-start mt-[4px] md:w-[100%] sm:w-[100%] w-[70%]">
                        <Text
                          className="font-normal not-italic text-gray_902 text-left w-[auto]"
                          variant="body4"
                        >
                          Gucci
                        </Text>
                        <div className="flex flex-row items-start justify-evenly w-[25%]">
                          <Text
                            className="font-normal not-italic text-gray_600 text-left w-[auto]"
                            variant="body4"
                          >
                            4.4
                          </Text>
                          <Img
                            src="images/img_star.svg"
                            className="h-[17px] w-[18px]"
                            alt="star Two"
                          />
                        </div>
                      </div>
                      <div className="flex flex-row items-start justify-start mt-[12px] w-[100%]">
                        <Text
                          className="font-bold text-gray_902 text-left w-[auto]"
                          variant="body1"
                        >
                          $700
                        </Text>
                        <Text
                          className="font-normal line-through ml-[42px] mt-[3px] not-italic text-gray_600 text-left w-[auto]"
                          variant="body4"
                        >
                          Rs. 1000
                        </Text>
                        <Text
                          className="font-bold ml-[15px] mt-[3px] text-green_900 text-left w-[auto]"
                          variant="body4"
                        >
                          (30% off)
                        </Text>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="bg-white_A700 flex flex-col items-center justify-start pb-[13px] rounded-radius20 shadow-bs1 w-[100%]">
                  <div className="flex flex-col gap-[10px] h-[410px] sm:h-[auto] justify-start sm:w-[100%] w-[410px]">
                    <Img
                      src="images/img_rectangle375_2.png"
                      className="h-[301px] sm:h-[auto] object-cover rounded-bl-[0] rounded-br-[0] rounded-tl-[10px] rounded-tr-[10px] w-[100%]"
                      alt="Rectangle375 Three"
                    />
                    <div className="flex flex-col items-start justify-start md:ml-[0] sm:ml-[0] ml-[21px] md:w-[100%] sm:w-[100%] w-[70%]">
                      <Text
                        className="font-bold text-gray_902 text-left w-[auto]"
                        variant="body1"
                      >
                        Man Switter
                      </Text>
                      <div className="flex flex-row gap-[94px] items-start justify-start mt-[4px] md:w-[100%] sm:w-[100%] w-[70%]">
                        <Text
                          className="font-normal not-italic text-gray_902 text-left w-[auto]"
                          variant="body4"
                        >
                          Gucci
                        </Text>
                        <div className="flex flex-row items-start justify-evenly w-[25%]">
                          <Text
                            className="font-normal not-italic text-gray_600 text-left w-[auto]"
                            variant="body4"
                          >
                            4.4
                          </Text>
                          <Img
                            src="images/img_star.svg"
                            className="h-[17px] w-[18px]"
                            alt="star Three"
                          />
                        </div>
                      </div>
                      <div className="flex flex-row items-start justify-start mt-[12px] w-[100%]">
                        <Text
                          className="font-bold text-gray_902 text-left w-[auto]"
                          variant="body1"
                        >
                          $700
                        </Text>
                        <Text
                          className="font-normal line-through ml-[42px] mt-[3px] not-italic text-gray_600 text-left w-[auto]"
                          variant="body4"
                        >
                          Rs. 1000
                        </Text>
                        <Text
                          className="font-bold ml-[15px] mt-[3px] text-green_900 text-left w-[auto]"
                          variant="body4"
                        >
                          (30% off)
                        </Text>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="bg-white_A700 flex flex-col items-center justify-start pb-[13px] rounded-radius20 shadow-bs1 w-[100%]">
                  <div className="flex flex-col gap-[10px] h-[410px] sm:h-[auto] justify-start sm:w-[100%] w-[410px]">
                    <Img
                      src="images/img_rectangle375_3.png"
                      className="h-[301px] sm:h-[auto] object-cover rounded-bl-[0] rounded-br-[0] rounded-tl-[10px] rounded-tr-[10px] w-[100%]"
                      alt="Rectangle375 Four"
                    />
                    <div className="flex flex-col items-start justify-start md:ml-[0] sm:ml-[0] ml-[21px] md:w-[100%] sm:w-[100%] w-[71%]">
                      <Text
                        className="font-bold text-gray_902 text-left w-[auto]"
                        variant="body1"
                      >
                        Womens Denim Jacket
                      </Text>
                      <div className="flex flex-row gap-[94px] items-start justify-start mt-[4px] md:w-[100%] sm:w-[100%] w-[68%]">
                        <Text
                          className="font-normal not-italic text-gray_902 text-left w-[auto]"
                          variant="body4"
                        >
                          Gucci
                        </Text>
                        <div className="flex flex-row items-start justify-evenly w-[25%]">
                          <Text
                            className="font-normal not-italic text-gray_600 text-left w-[auto]"
                            variant="body4"
                          >
                            4.4
                          </Text>
                          <Img
                            src="images/img_star.svg"
                            className="h-[17px] w-[18px]"
                            alt="star Four"
                          />
                        </div>
                      </div>
                      <div className="flex flex-row items-start justify-start mt-[12px] md:w-[100%] sm:w-[100%] w-[98%]">
                        <Text
                          className="font-bold text-gray_902 text-left w-[auto]"
                          variant="body1"
                        >
                          $700
                        </Text>
                        <Text
                          className="font-normal line-through ml-[42px] mt-[3px] not-italic text-gray_600 text-left w-[auto]"
                          variant="body4"
                        >
                          Rs. 1000
                        </Text>
                        <Text
                          className="font-bold ml-[15px] mt-[3px] text-green_900 text-left w-[auto]"
                          variant="body4"
                        >
                          (30% off)
                        </Text>
                      </div>
                    </div>
                  </div>
                </div>
              </List>
              <div className="flex flex-col font-roboto items-start justify-start mt-[80px] pb-[3px] pr-[3px] md:w-[100%] sm:w-[100%] w-[18%]">
                <Text
                  className="font-bold text-gray_900 text-left w-[auto]"
                  as="h5"
                  variant="h5"
                >
                  <span className="sm:text-[32px] md:text-[34px] text-gray_900 text-[36px] font-roboto">
                    Deals{" "}
                  </span>
                  <span className="sm:text-[32px] md:text-[34px] text-gray_900 text-[36px] font-roboto">
                    of the Day
                  </span>
                </Text>
              </div>
              <List
                className="sm:flex-col flex-row font-librebaskerville gap-[40px] grid sm:grid-cols-1 md:grid-cols-2 grid-cols-4 justify-center mt-[27px] overflow-auto md:w-[100%] sm:w-[100%] w-[98%]"
                orientation="horizontal"
              >
                <div className="bg-white_A700 flex flex-col items-center justify-start rounded-radius20 w-[100%]">
                  <div className="flex flex-col items-center justify-start mb-[29px] w-[100%]">
                    <Img
                      src="images/img_rectangle375_298x489.png"
                      className="h-[298px] sm:h-[auto] object-cover rounded-bl-[0] rounded-br-[0] rounded-tl-[20px] rounded-tr-[20px] w-[100%]"
                      alt="Rectangle375 Five"
                    />
                    <Text
                      className="mt-[60px] text-black_900 text-left w-[auto]"
                      as="h4"
                      variant="h4"
                    >
                      Thankinsomnia
                    </Text>
                    <div className="flex flex-col gap-[23px] justify-start mt-[30px] md:w-[100%] sm:w-[100%] w-[53%]">
                      <Text
                        className="font-bold text-gray_902 text-left w-[auto]"
                        as="h5"
                        variant="h5"
                      >
                        Best of Styles
                      </Text>
                      <Text
                        className="font-bold md:ml-[0] sm:ml-[0] ml-[41px] text-gray_902 text-left w-[auto]"
                        variant="body1"
                      >
                        Under $799
                      </Text>
                    </div>
                  </div>
                </div>
                <div className="bg-white_A700 flex flex-col items-center justify-start rounded-radius20 w-[100%]">
                  <div className="flex flex-col items-center justify-start mb-[29px] w-[100%]">
                    <Img
                      src="images/img_rectangle375_4.png"
                      className="h-[298px] sm:h-[auto] object-cover rounded-bl-[0] rounded-br-[0] rounded-tl-[20px] rounded-tr-[20px] w-[100%]"
                      alt="Rectangle375 Six"
                    />
                    <Text
                      className="mt-[60px] text-black_900 text-left w-[auto]"
                      as="h4"
                      variant="h4"
                    >
                      Thankinsomnia
                    </Text>
                    <div className="flex flex-col gap-[23px] justify-start mt-[30px] md:w-[100%] sm:w-[100%] w-[53%]">
                      <Text
                        className="font-bold text-gray_902 text-left w-[auto]"
                        as="h5"
                        variant="h5"
                      >
                        Best of Styles
                      </Text>
                      <Text
                        className="font-bold md:ml-[0] sm:ml-[0] ml-[41px] text-gray_902 text-left w-[auto]"
                        variant="body1"
                      >
                        Under $799
                      </Text>
                    </div>
                  </div>
                </div>
                <div className="bg-white_A700 flex flex-col items-center justify-start rounded-radius20 w-[100%]">
                  <div className="flex flex-col items-center justify-start mb-[29px] w-[100%]">
                    <Img
                      src="images/img_rectangle375_5.png"
                      className="h-[298px] sm:h-[auto] object-cover rounded-bl-[0] rounded-br-[0] rounded-tl-[20px] rounded-tr-[20px] w-[100%]"
                      alt="Rectangle375 Seven"
                    />
                    <Text
                      className="mt-[60px] text-black_900 text-left w-[auto]"
                      as="h4"
                      variant="h4"
                    >
                      Thankinsomnia
                    </Text>
                    <div className="flex flex-col gap-[23px] justify-start mt-[30px] md:w-[100%] sm:w-[100%] w-[53%]">
                      <Text
                        className="font-bold text-gray_902 text-left w-[auto]"
                        as="h5"
                        variant="h5"
                      >
                        Best of Styles
                      </Text>
                      <Text
                        className="font-bold md:ml-[0] sm:ml-[0] ml-[41px] text-gray_902 text-left w-[auto]"
                        variant="body1"
                      >
                        Under $799
                      </Text>
                    </div>
                  </div>
                </div>
                <div className="bg-white_A700 flex flex-col items-center justify-start rounded-radius20 w-[100%]">
                  <div className="flex flex-col items-center justify-start mb-[29px] w-[100%]">
                    <Img
                      src="images/img_rectangle375_6.png"
                      className="h-[298px] sm:h-[auto] object-cover rounded-bl-[0] rounded-br-[0] rounded-tl-[20px] rounded-tr-[20px] w-[100%]"
                      alt="Rectangle375 Eight"
                    />
                    <Text
                      className="mt-[60px] text-black_900 text-center w-[auto]"
                      as="h4"
                      variant="h4"
                    >
                      Thankinsomnia
                    </Text>
                    <div className="flex flex-col gap-[23px] justify-start mt-[30px] md:w-[100%] sm:w-[100%] w-[53%]">
                      <Text
                        className="font-bold text-gray_902 text-left w-[auto]"
                        as="h5"
                        variant="h5"
                      >
                        Best of Styles
                      </Text>
                      <Text
                        className="font-bold md:ml-[0] sm:ml-[0] ml-[41px] text-gray_902 text-left w-[auto]"
                        variant="body1"
                      >
                        Under $799
                      </Text>
                    </div>
                  </div>
                </div>
              </List>
              <div className="flex flex-col font-poppins items-center justify-start mt-[70px] md:w-[100%] sm:w-[100%] w-[17%]">
                <Text
                  className="font-semibold text-gray_902 text-left w-[auto]"
                  as="h5"
                  variant="h5"
                >
                  <span className="sm:text-[32px] md:text-[34px] text-gray_902 text-[36px] font-librebaskerville font-bold">
                    Trending{" "}
                  </span>
                  <span className="sm:text-[32px] md:text-[34px] text-gray_902 text-[36px] font-librebaskerville font-bold">
                    Offers
                  </span>
                </Text>
              </div>
            </div>
            <div className="flex flex-col items-end justify-start mt-[30px] w-[100%]">
              <div className="h-[587px] md:h-[899px] sm:h-[899px] relative w-[100%]">
                <div className="absolute h-[587px] md:h-[auto] sm:h-[auto] inset-y-[0] my-[auto] right-[0] md:w-[100%] sm:w-[100%] w-[82%]">
                  <div className="absolute flex flex-col h-[max-content] inset-y-[0] items-center justify-start my-[auto] right-[0] w-[79%]">
                    <div className="overflow-x-auto w-[100%]">
                      <div className="flex flex-1 md:flex-col sm:flex-col flex-row md:gap-[40px] sm:gap-[40px] items-center justify-between overflow-auto w-[100%]">
                        <div className="flex md:flex-1 sm:flex-1 md:flex-col sm:flex-col flex-row md:gap-[20px] sm:gap-[20px] items-center justify-evenly md:w-[100%] sm:w-[100%] w-[auto]">
                          <div className="bg-white_A700 flex flex-col md:gap-[40px] sm:gap-[40px] gap-[60px] items-center justify-center p-[67px] sm:px-[20px] md:px-[40px] rounded-bl-[10px] rounded-br-[0] rounded-tl-[10px] rounded-tr-[0] shadow-bs2 md:w-[100%] sm:w-[100%] w-[48%]">
                            <Text
                              className="mt-[83px] text-black_900 text-left w-[auto]"
                              as="h1"
                              variant="h1"
                            >
                              Thnkinsmn
                            </Text>
                            <div className="flex flex-col gap-[39px] items-center justify-start mb-[84px] md:w-[100%] sm:w-[100%] w-[76%]">
                              <Text
                                className="text-gray_902 text-left w-[auto]"
                                as="h3"
                                variant="h3"
                              >
                                Min 60% off
                              </Text>
                              <Button className="cursor-pointer font-normal leading-[normal] min-w-[172px] not-italic sm:text-[20px] md:text-[22px] text-[24px] text-center text-gray_902 w-[auto]">
                                Explore
                              </Button>
                            </div>
                          </div>
                          <Img
                            src="images/img_rectangle13.png"
                            className="h-[587px] sm:h-[auto] object-cover rounded-bl-[0] rounded-br-[10px] rounded-tl-[0] rounded-tr-[10px] md:w-[100%] sm:w-[100%] w-[53%]"
                            alt="RectangleThirteen"
                          />
                        </div>
                        <div className="flex md:flex-1 sm:flex-1 md:flex-col sm:flex-col flex-row md:gap-[20px] sm:gap-[20px] items-center justify-evenly md:w-[100%] sm:w-[100%] w-[auto]">
                          <div className="bg-white_A700 flex flex-col items-center justify-center p-[33px] sm:px-[20px] rounded-bl-[10px] rounded-br-[0] rounded-tl-[10px] rounded-tr-[0] shadow-bs2 md:w-[100%] sm:w-[100%] w-[48%]">
                            <div className="flex flex-col items-center justify-start my-[69px] w-[100%]">
                              <Img
                                src="images/img_forever21logo.svg"
                                className="h-[46px] w-[auto]"
                                alt="Forever21Logo"
                              />
                              <Text
                                className="mt-[49px] text-gray_902 text-left w-[auto]"
                                as="h3"
                                variant="h3"
                              >
                                Min 50% off
                              </Text>
                              <Button className="cursor-pointer font-normal leading-[normal] min-w-[172px] mt-[31px] not-italic sm:text-[20px] md:text-[22px] text-[24px] text-center text-gray_902 w-[auto]">
                                Explore
                              </Button>
                            </div>
                          </div>
                          <Img
                            src="images/img_rectangle13_441x410.png"
                            className="h-[441px] sm:h-[auto] object-cover rounded-radius10 md:w-[100%] sm:w-[100%] w-[53%]"
                            alt="RectangleThirteen One"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                  <Img
                    src="images/img_group47715.svg"
                    className="absolute h-[54px] inset-[0] justify-center m-[auto] w-[auto]"
                    alt="Group47715"
                  />
                </div>
                <div className="absolute flex md:flex-col sm:flex-col flex-row md:gap-[20px] sm:gap-[20px] h-[max-content] inset-y-[0] items-center justify-evenly left-[0] my-[auto] w-[34%]">
                  <div className="bg-white_A700 flex flex-col items-center justify-center p-[33px] sm:px-[20px] rounded-bl-[10px] rounded-br-[0] rounded-tl-[10px] rounded-tr-[0] shadow-bs2 md:w-[100%] sm:w-[100%] w-[48%]">
                    <div className="flex flex-col items-center justify-start my-[69px] w-[100%]">
                      <Img
                        src="images/img_forever21logo.svg"
                        className="h-[46px] w-[auto]"
                        alt="Forever21Logo One"
                      />
                      <Text
                        className="mt-[49px] text-gray_902 text-left w-[auto]"
                        as="h3"
                        variant="h3"
                      >
                        Min 50% off
                      </Text>
                      <Button
                        className="cursor-pointer font-normal leading-[normal] min-w-[172px] mt-[31px] not-italic sm:text-[20px] md:text-[22px] text-[24px] text-center text-gray_902 w-[auto]"
                        shape="RoundedBorder10"
                      >
                        Explore
                      </Button>
                    </div>
                  </div>
                  <Img
                    src="images/img_rectangle13_1.png"
                    className="h-[441px] sm:h-[auto] object-cover rounded-radius10 md:w-[100%] sm:w-[100%] w-[53%]"
                    alt="RectangleThirteen Two"
                  />
                </div>
              </div>
              <div className="h-[892px] md:h-[985px] sm:h-[985px] mt-[93px] relative md:w-[100%] sm:w-[100%] w-[82%]">
                <Img
                  src="images/img_rectangle376.png"
                  className="h-[892px] m-[auto] object-cover w-[100%]"
                  alt="Rectangle376"
                />
                <div className="absolute bottom-[24%] flex flex-col gap-[52px] inset-x-[0] items-center justify-start mx-[auto] w-[72%]">
                  <Text
                    className="text-left text-white_A700 w-[auto]"
                    as="h2"
                    variant="h2"
                  >
                    THANKINSOMNIA SEPERIOR PRODUCT
                  </Text>
                  <div className="flex flex-col items-center justify-start md:w-[100%] sm:w-[100%] w-[37%]">
                    <Text
                      className="text-left text-white_A700 w-[auto]"
                      as="h3"
                      variant="h3"
                    >
                      Big Fashion Festival
                    </Text>
                    <Text
                      className="mt-[36px] text-left text-white_A700 w-[auto]"
                      as="h3"
                      variant="h3"
                    >
                      70% - 80% off
                    </Text>
                    <Button
                      className="cursor-pointer font-normal leading-[normal] min-w-[172px] mt-[75px] not-italic sm:text-[20px] md:text-[22px] text-[24px] text-center text-white_A700 w-[auto]"
                      variant="OutlineWhiteA700_1"
                    >
                      Explore
                    </Button>
                  </div>
                </div>
              </div>
              <div className="flex flex-col font-roboto gap-[27px] items-start justify-start mt-[80px] md:w-[100%] sm:w-[100%] w-[78%]">
                <div className="flex flex-col items-center justify-start md:w-[100%] sm:w-[100%] w-[21%]">
                  <Text
                    className="font-black text-gray_902 text-left w-[auto]"
                    as="h5"
                    variant="h5"
                  >
                    <span className="sm:text-[32px] md:text-[34px] text-gray_902 text-[36px] font-librebaskerville font-bold">
                      Shop by{" "}
                    </span>
                    <span className="sm:text-[32px] md:text-[34px] text-gray_902 text-[36px] font-librebaskerville font-bold">
                      Categories
                    </span>
                  </Text>
                </div>
                <div className="flex flex-col items-center justify-start w-[100%]">
                  <div className="flex md:flex-col sm:flex-col flex-row gap-[25px] items-center justify-between w-[100%]">
                    <Img
                      src="images/img_rectangle383.png"
                      className="md:flex-1 sm:flex-1 h-[686px] sm:h-[auto] object-cover rounded-radius10 md:w-[100%] sm:w-[100%] w-[auto]"
                      alt="Rectangle383"
                    />
                    <div className="flex md:flex-1 sm:flex-1 flex-col gap-[25px] items-center justify-start md:w-[100%] sm:w-[100%] w-[auto]">
                      <div className="flex sm:flex-col flex-row gap-[25px] items-center justify-between w-[100%]">
                        <Img
                          src="images/img_rectangle384.png"
                          className="md:flex-1 sm:flex-1 h-[330px] sm:h-[auto] object-cover rounded-radius10 md:w-[100%] sm:w-[100%] w-[auto]"
                          alt="Rectangle384"
                        />
                        <Img
                          src="images/img_rectangle385.png"
                          className="md:flex-1 sm:flex-1 h-[330px] sm:h-[auto] object-cover rounded-radius10 md:w-[100%] sm:w-[100%] w-[auto]"
                          alt="Rectangle385"
                        />
                      </div>
                      <div className="flex sm:flex-col flex-row gap-[25px] items-center justify-between w-[100%]">
                        <Img
                          src="images/img_rectangle386.png"
                          className="md:flex-1 sm:flex-1 h-[330px] sm:h-[auto] object-cover rounded-radius10 md:w-[100%] sm:w-[100%] w-[auto]"
                          alt="Rectangle386"
                        />
                        <Img
                          src="images/img_rectangle387.png"
                          className="md:flex-1 sm:flex-1 h-[330px] sm:h-[auto] object-cover rounded-radius10 md:w-[100%] sm:w-[100%] w-[auto]"
                          alt="Rectangle387"
                        />
                        <Img
                          src="images/img_rectangle388.png"
                          className="md:flex-1 sm:flex-1 h-[330px] sm:h-[auto] object-cover rounded-radius10 md:w-[100%] sm:w-[100%] w-[auto]"
                          alt="Rectangle388"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-col font-roboto items-center justify-start mt-[80px] md:w-[100%] sm:w-[100%] w-[22%]">
              <Text
                className="font-black text-gray_902 text-left w-[auto]"
                as="h5"
                variant="h5"
              >
                <span className="sm:text-[32px] md:text-[34px] text-gray_902 text-[36px] font-librebaskerville font-bold">
                  What Our{" "}
                </span>
                <span className="sm:text-[32px] md:text-[34px] text-gray_902 text-[36px] font-librebaskerville font-bold">
                  Customer Says
                </span>
              </Text>
            </div>
          </div>
          <div className="overflow-x-auto w-[100%]">
            <div className="flex h-[476px] md:h-[990px] sm:h-[990px] overflow-auto relative w-[100%]">
              <div className="flex md:flex-col sm:flex-col flex-row md:gap-[40px] sm:gap-[40px] gap-[62px] items-center justify-start m-[auto] sm:pr-[20px] md:pr-[40px] pr-[487px] w-[100%]">
                <div className="bg-white_A700 flex md:flex-1 sm:flex-1 flex-col items-center justify-center p-[32px] sm:px-[20px] rounded-radius10 shadow-bs3 md:w-[100%] sm:w-[100%] w-[49%]">
                  <div className="flex flex-col gap-[12px] justify-start my-[25px] w-[100%]">
                    <div className="flex flex-col font-playfairdisplay gap-[9px] items-start justify-start md:ml-[0] sm:ml-[0] ml-[364px] md:w-[100%] sm:w-[100%] w-[22%]">
                      <Img
                        src="images/img_ellipse60.png"
                        className="h-[150px] md:h-[auto] sm:h-[auto] md:ml-[0] sm:ml-[0] ml-[2px] rounded-radius50 w-[150px]"
                        alt="EllipseSixty"
                      />
                      <div className="h-[54px] md:h-[auto] sm:h-[auto] relative w-[100%]">
                        <div className="absolute bottom-[22%] flex flex-row items-center justify-evenly left-[0] w-[81%]">
                          <RatingBar
                            className=""
                            value={1}
                            starCount={4}
                            size={24}
                          ></RatingBar>
                          <Img
                            src="images/img_mail.svg"
                            className="h-[24px] w-[24px]"
                            alt="mail"
                          />
                          <Text
                            className="font-normal not-italic text-black_900 text-left w-[auto]"
                            variant="body4"
                          >
                            4.4
                          </Text>
                        </div>
                        <Button
                          className="absolute flex h-[54px] inset-y-[0] items-center justify-center my-[auto] right-[0] rotate-[180deg] rounded-radius50 w-[54px]"
                          size="smIcn"
                          variant="icbFillGray900"
                        >
                          <Img
                            src="images/img_arrowleft.svg"
                            className="h-[39px]"
                            alt="arrowleft"
                          />
                        </Button>
                      </div>
                    </div>
                    <Text
                      className="font-librebaskerville font-normal not-italic text-center text-gray_902 w-[100%]"
                      variant="body1"
                    >
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Dui vel morbi cursus sed sodales molestie proin dictum
                      gravida. Porttitor maecenas tincidunt ipsum semper
                      malesuada. In sapien feugiat laoreet convallis eu sed.
                      Sapien et montes, duis tempor euismod augue cras eu eget.
                      Risus suspendisse mauris ullamcorper{" "}
                    </Text>
                  </div>
                </div>
                <div className="bg-white_A700 flex md:flex-1 sm:flex-1 flex-col items-center justify-center p-[32px] sm:px-[20px] rounded-radius10 shadow-bs3 md:w-[100%] sm:w-[100%] w-[49%]">
                  <div className="flex flex-col gap-[24px] items-center justify-start my-[25px] w-[100%]">
                    <div className="flex flex-col font-playfairdisplay gap-[27px] items-center justify-start md:w-[100%] sm:w-[100%] w-[18%]">
                      <Img
                        src="images/img_ellipse60.png"
                        className="h-[150px] md:h-[auto] sm:h-[auto] rounded-radius50 w-[150px]"
                        alt="EllipseSixty One"
                      />
                      <div className="flex flex-row items-center justify-evenly w-[100%]">
                        <RatingBar
                          className=""
                          value={1}
                          starCount={4}
                          size={24}
                        ></RatingBar>
                        <Img
                          src="images/img_mail.svg"
                          className="h-[24px] w-[24px]"
                          alt="mail One"
                        />
                        <Text
                          className="font-normal not-italic text-black_900 text-left w-[auto]"
                          variant="body4"
                        >
                          4.4
                        </Text>
                      </div>
                    </div>
                    <Text
                      className="font-librebaskerville font-normal not-italic text-center text-gray_902 w-[100%]"
                      variant="body1"
                    >
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Dui vel morbi cursus sed sodales molestie proin dictum
                      gravida. Porttitor maecenas tincidunt ipsum semper
                      malesuada. In sapien feugiat laoreet convallis eu sed.
                      Sapien et montes, duis tempor euismod augue cras eu eget.
                      Risus suspendisse mauris ullamcorper{" "}
                    </Text>
                  </div>
                </div>
              </div>
              <div className="bg-white_A700 flex flex-col items-center justify-center ml-[-425px] my-[auto] p-[32px] sm:px-[20px] rounded-radius10 shadow-bs3 w-[39%] z-[1]">
                <div className="flex flex-col justify-start my-[25px] w-[100%]">
                  <Img
                    src="images/img_ellipse60.png"
                    className="h-[150px] md:h-[auto] sm:h-[auto] md:ml-[0] sm:ml-[0] ml-[366px] rounded-radius50 w-[150px]"
                    alt="EllipseSixty Two"
                  />
                  <div className="font-playfairdisplay h-[54px] md:h-[63px] sm:h-[63px] md:ml-[0] sm:ml-[0] ml-[326px] mt-[9px] relative md:w-[100%] sm:w-[100%] w-[22%]">
                    <div className="absolute bottom-[22%] flex flex-row items-start justify-evenly right-[0] w-[81%]">
                      <RatingBar
                        className="mt-[3px]"
                        value={1}
                        starCount={4}
                        size={24}
                      ></RatingBar>
                      <Img
                        src="images/img_mail.svg"
                        className="h-[24px] mt-[3px] w-[24px]"
                        alt="mail Two"
                      />
                      <Text
                        className="font-normal mb-[3px] not-italic text-black_900 text-left w-[auto]"
                        variant="body4"
                      >
                        4.4
                      </Text>
                    </div>
                    <Button
                      className="absolute flex h-[54px] inset-y-[0] items-center justify-center left-[0] my-[auto] rounded-radius50 w-[54px]"
                      size="smIcn"
                      variant="icbFillGray900"
                    >
                      <Img
                        src="images/img_arrowright.svg"
                        className="h-[39px]"
                        alt="arrowright"
                      />
                    </Button>
                  </div>
                  <Text
                    className="font-normal mt-[12px] not-italic text-center text-gray_902 w-[100%]"
                    variant="body1"
                  >
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Dui
                    vel morbi cursus sed sodales molestie proin dictum gravida.
                    Porttitor maecenas tincidunt ipsum semper malesuada. In
                    sapien feugiat laoreet convallis eu sed. Sapien et montes,
                    duis tempor euismod augue cras eu eget. Risus suspendisse
                    mauris ullamcorper{" "}
                  </Text>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col items-center pl-[521px] md:px-[20px] sm:px-[20px] w-[100%]">
          <div className="flex flex-col md:gap-[40px] sm:gap-[40px] gap-[80px] items-center justify-start w-[100%]">
            <div className="flex flex-col items-start justify-start md:w-[100%] sm:w-[100%] w-[98%]">
              <div className="flex flex-col font-roboto items-center justify-start md:w-[100%] sm:w-[100%] w-[17%]">
                <Text
                  className="font-black text-gray_900 text-left w-[auto]"
                  as="h5"
                  variant="h5"
                >
                  <span className="sm:text-[32px] md:text-[34px] text-gray_900 text-[36px] font-librebaskerville font-bold">
                    Featured{" "}
                  </span>
                  <span className="sm:text-[32px] md:text-[34px] text-gray_900 text-[36px] font-librebaskerville font-bold">
                    Blogs
                  </span>
                </Text>
              </div>
              <div className="flex md:flex-col sm:flex-col flex-row font-librebaskerville md:gap-[40px] sm:gap-[40px] items-center justify-between mt-[27px] overflow-auto w-[100%]">
                <List
                  className="sm:flex-col flex-row md:gap-[40px] sm:gap-[40px] gap-[63px] grid md:grid-cols-1 sm:grid-cols-1 grid-cols-2 w-[auto]"
                  orientation="horizontal"
                >
                  <div className="flex md:flex-col sm:flex-col flex-row md:gap-[20px] sm:gap-[20px] items-center justify-evenly sm:ml-[0] w-[100%]">
                    <Img
                      src="images/img_rectangle395.png"
                      className="md:flex-1 sm:flex-1 h-[361px] sm:h-[auto] object-cover md:w-[100%] sm:w-[100%] w-[62%]"
                      alt="Rectangle395"
                    />
                    <div className="bg-white_A700 flex md:flex-1 sm:flex-1 flex-col items-center justify-start p-[27px] sm:px-[20px] rounded-radius5 shadow-bs4 md:w-[100%] sm:w-[100%] w-[39%]">
                      <div className="flex flex-col items-center justify-start md:w-[100%] sm:w-[100%] w-[96%]">
                        <div className="flex flex-col items-start justify-start w-[100%]">
                          <Text
                            className="font-normal not-italic text-gray_800 text-left w-[auto]"
                            variant="body4"
                          >
                            Blog
                          </Text>
                          <Text
                            className="mt-[18px] text-gray_901 text-left"
                            variant="body3"
                          >
                            Discover new
                            <br />
                            way to
                            <br />
                            decorate <br />
                            your home .
                          </Text>
                          <Text
                            className="font-normal mt-[18px] not-italic text-gray_800 text-left"
                            variant="body4"
                          >
                            Lorem ipsum dolor sit amet,aliqua
                            <br />
                            consectetur adipiscing elit ut ...
                          </Text>
                          <div className="bg-gray_901 h-[1px] mt-[10px] w-[18%]"></div>
                          <div className="flex flex-row gap-[81px] items-start justify-start mt-[10px] md:w-[100%] sm:w-[100%] w-[94%]">
                            <Text
                              className="font-normal not-italic text-gray_901 text-left w-[auto]"
                              variant="body4"
                            >
                              By Souha . H{" "}
                            </Text>
                            <Img
                              src="images/img_arrowright_gray_800.svg"
                              className="h-[7px] mt-[5px] w-[auto]"
                              alt="arrowright One"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="flex md:flex-col sm:flex-col flex-row md:gap-[20px] sm:gap-[20px] items-center justify-evenly sm:ml-[0] w-[100%]">
                    <Img
                      src="images/img_rectangle395_361x461.png"
                      className="md:flex-1 sm:flex-1 h-[361px] sm:h-[auto] object-cover md:w-[100%] sm:w-[100%] w-[62%]"
                      alt="Rectangle395 One"
                    />
                    <div className="bg-white_A700 flex md:flex-1 sm:flex-1 flex-col items-center justify-start p-[27px] sm:px-[20px] rounded-radius5 shadow-bs4 md:w-[100%] sm:w-[100%] w-[39%]">
                      <div className="flex flex-col items-center justify-start md:w-[100%] sm:w-[100%] w-[96%]">
                        <div className="flex flex-col items-start justify-start w-[100%]">
                          <Text
                            className="font-normal not-italic text-gray_800 text-left w-[auto]"
                            variant="body4"
                          >
                            Blog
                          </Text>
                          <Text
                            className="mt-[18px] text-gray_901 text-left"
                            variant="body3"
                          >
                            Discover new
                            <br />
                            way to
                            <br />
                            decorate <br />
                            your home .
                          </Text>
                          <Text
                            className="font-normal mt-[18px] not-italic text-gray_800 text-left"
                            variant="body4"
                          >
                            Lorem ipsum dolor sit amet,aliqua
                            <br />
                            consectetur adipiscing elit ut ...
                          </Text>
                          <div className="bg-gray_901 h-[1px] mt-[10px] w-[18%]"></div>
                          <div className="flex flex-row gap-[81px] items-start justify-start mt-[10px] md:w-[100%] sm:w-[100%] w-[94%]">
                            <Text
                              className="font-normal not-italic text-gray_901 text-left w-[auto]"
                              variant="body4"
                            >
                              By Souha . H{" "}
                            </Text>
                            <Img
                              src="images/img_arrowright_gray_800.svg"
                              className="h-[7px] mt-[5px] w-[auto]"
                              alt="arrowright Two"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </List>
                <div className="overflow-x-auto w-[auto]">
                  <div className="flex md:flex-col sm:flex-col flex-row md:gap-[20px] sm:gap-[20px] items-center justify-evenly w-[100%]">
                    <Img
                      src="images/img_rectangle395_1.png"
                      className="md:flex-1 sm:flex-1 h-[361px] sm:h-[auto] object-cover md:w-[100%] sm:w-[100%] w-[62%]"
                      alt="Rectangle395 Two"
                    />
                    <div className="bg-white_A700 flex md:flex-1 sm:flex-1 flex-col items-center justify-start p-[27px] sm:px-[20px] rounded-radius5 shadow-bs4 md:w-[100%] sm:w-[100%] w-[39%]">
                      <div className="flex flex-col items-center justify-start md:w-[100%] sm:w-[100%] w-[96%]">
                        <div className="flex flex-col items-start justify-start w-[100%]">
                          <Text
                            className="font-normal not-italic text-gray_800 text-left w-[auto]"
                            variant="body4"
                          >
                            Blog
                          </Text>
                          <Text
                            className="mt-[18px] text-gray_901 text-left"
                            variant="body3"
                          >
                            Discover new
                            <br />
                            way to
                            <br />
                            decorate <br />
                            your home .
                          </Text>
                          <Text
                            className="font-normal mt-[18px] not-italic text-gray_800 text-left"
                            variant="body4"
                          >
                            Lorem ipsum dolor sit amet,aliqua
                            <br />
                            consectetur adipiscing elit ut ...
                          </Text>
                          <div className="bg-gray_901 h-[1px] mt-[10px] w-[18%]"></div>
                          <div className="flex flex-row gap-[81px] items-start justify-start mt-[10px] md:w-[100%] sm:w-[100%] w-[94%]">
                            <Text
                              className="font-normal not-italic text-gray_901 text-left w-[auto]"
                              variant="body4"
                            >
                              By Souha . H{" "}
                            </Text>
                            <Img
                              src="images/img_arrowright_gray_800.svg"
                              className="h-[7px] mt-[5px] w-[auto]"
                              alt="arrowright Three"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <Button className="cursor-pointer font-librebaskerville font-normal leading-[normal] min-w-[172px] md:ml-[0] sm:ml-[0] ml-[824px] mt-[62px] not-italic sm:text-[20px] md:text-[22px] text-[24px] text-center text-gray_900 w-[auto]">
                View all
              </Button>
              <div className="flex md:flex-col sm:flex-col flex-row font-librebaskerville md:gap-[57px] sm:gap-[57px] items-center justify-between mt-[80px] md:w-[100%] sm:w-[100%] w-[98%]">
                <div className="bg-white_A700 flex flex-col items-center justify-end p-[18px] rounded-radius10 md:w-[100%] sm:w-[100%] w-[auto]">
                  <Img
                    src="images/img_biflag.svg"
                    className="h-[56px] mt-[7px] w-[56px]"
                    alt="biflag"
                  />
                  <Text
                    className="font-bold mt-[10px] text-gray_900 text-left w-[auto]"
                    variant="body1"
                  >
                    Locally Owned
                  </Text>
                  <Text
                    className="font-normal mt-[16px] not-italic text-center text-gray_900 sm:w-[100%] w-[93%]"
                    variant="body4"
                  >
                    We have local business and sell best quality clothes
                  </Text>
                </div>
                <List
                  className="sm:flex-col flex-row gap-[57px] grid md:grid-cols-1 sm:grid-cols-1 grid-cols-2 w-[auto]"
                  orientation="horizontal"
                >
                  <div className="bg-white_A700 flex flex-col items-center justify-end sm:ml-[0] p-[18px] rounded-radius10 w-[100%]">
                    <div className="flex flex-col items-center justify-start mt-[7px] md:w-[100%] sm:w-[100%] w-[93%]">
                      <Img
                        src="images/img_car.svg"
                        className="h-[56px] w-[56px]"
                        alt="car"
                      />
                      <Text
                        className="font-bold mt-[10px] text-gray_900 text-left w-[auto]"
                        variant="body1"
                      >
                        Fast Delivery
                      </Text>
                      <Text
                        className="font-normal mt-[16px] not-italic text-center text-gray_900 w-[100%]"
                        variant="body4"
                      >
                        We provide fast delivery to our customers
                      </Text>
                    </div>
                  </div>
                  <div className="bg-white_A700 flex flex-col items-center justify-end sm:ml-[0] p-[18px] rounded-radius10 w-[100%]">
                    <div className="flex flex-col items-center justify-start mt-[7px] md:w-[100%] sm:w-[100%] w-[93%]">
                      <Img
                        src="images/img_mail_gray_901.svg"
                        className="h-[56px] w-[56px]"
                        alt="mail Three"
                      />
                      <Text
                        className="font-bold mt-[10px] text-gray_900 text-left w-[auto]"
                        variant="body1"
                      >
                        Easy Return
                      </Text>
                      <Text
                        className="font-normal mt-[16px] not-italic text-center text-gray_900 w-[100%]"
                        variant="body4"
                      >
                        We provide easy return policy.{" "}
                      </Text>
                    </div>
                  </div>
                </List>
                <div className="bg-white_A700 flex flex-col items-center justify-start p-[29px] sm:px-[20px] rounded-radius10 md:w-[100%] sm:w-[100%] w-[auto]">
                  <div className="flex flex-col items-center justify-start mb-[14px] mt-[6px] w-[100%]">
                    <Img
                      src="images/img_music.svg"
                      className="h-[35px] w-[auto]"
                      alt="music"
                    />
                    <Text
                      className="font-bold mt-[20px] text-gray_900 text-left w-[auto]"
                      variant="body1"
                    >
                      Online Support
                    </Text>
                    <Text
                      className="font-normal mt-[16px] not-italic text-gray_900 text-left w-[auto]"
                      variant="body4"
                    >
                      We give 24/7 online support
                    </Text>
                  </div>
                </div>
                <div className="bg-white_A700 flex flex-col items-center justify-end p-[18px] rounded-radius10 md:w-[100%] sm:w-[100%] w-[auto]">
                  <div className="flex flex-col items-center justify-start mt-[11px] md:w-[100%] sm:w-[100%] w-[93%]">
                    <Img
                      src="images/img_settings.svg"
                      className="h-[46px] w-[46px]"
                      alt="settings"
                    />
                    <Text
                      className="font-bold mt-[14px] text-gray_900 text-left w-[auto]"
                      variant="body1"
                    >
                      Best Offers
                    </Text>
                    <Text
                      className="font-normal mt-[16px] not-italic text-center text-gray_900 w-[100%]"
                      variant="body4"
                    >
                      We give best offers to our customers
                    </Text>
                  </div>
                </div>
              </div>
              <div className="flex md:flex-col sm:flex-col flex-row gap-[28px] items-end justify-between mt-[80px] md:w-[100%] sm:w-[100%] w-[98%]">
                <div className="flex flex-col items-start justify-start md:w-[100%] sm:w-[100%] w-[auto]">
                  <Text
                    className="font-poppins font-semibold text-gray_900 text-left w-[auto]"
                    as="h5"
                    variant="h5"
                  >
                    <span className="sm:text-[32px] md:text-[34px] text-gray_900 text-[36px] font-librebaskerville font-normal not-italic">
                      About{" "}
                    </span>
                    <span className="sm:text-[32px] md:text-[34px] text-gray_900 text-[36px] font-librebaskerville font-normal not-italic">
                      Us
                    </span>
                  </Text>
                  <Text
                    className="font-bold font-librebaskerville mt-[27px] text-gray_900 text-left w-[auto]"
                    as="h5"
                    variant="h5"
                  >
                    Business Name{" "}
                  </Text>
                  <Text
                    className="font-librebaskerville font-normal mt-[26px] not-italic text-gray_900 text-left w-[100%]"
                    variant="body1"
                  >
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Dui
                    vel morbi cursus sed sodales molestie proin dictum gravida.
                    Porttitor maecenas tincidunt ipsum semper malesuada. In
                    sapien feugiat laoreet convallis eu sed. Sapien et montes,
                    duis tempor euismod augue cras eu eget. Risus suspendisse
                    mauris ullamcorper felis a, quam. Lorem ipsum dolor sit
                    amet, consectetur adipiscing elit. Dui vel morbi cursus sed
                    sodales molestie proin dictum gravida. Porttitor maecenas
                    tincidunt ipsum semper malesuada. In sapien feugiat laoreet
                    convallis eu sed. Sapien et montes, duis tempor euismod
                    augue cras eu eget. Risus suspendisse mauris ullamcorper
                    felis a, quam.Lorem ipsum dolor sit amet, consectetur
                    adipiscing elit. Dui vel morbi cursus sed sodales molestie
                    proin dictum gravida. Porttitor maecenas
                  </Text>
                  <Text
                    className="font-bold font-librebaskerville mt-[26px] text-gray_900 text-left w-[auto]"
                    variant="body1"
                  >
                    Contact Information
                  </Text>
                  <Text
                    className="font-librebaskerville font-normal mt-[15px] not-italic text-gray_900 text-left w-[auto]"
                    variant="body1"
                  >
                    +91 1256378409
                  </Text>
                  <Text
                    className="font-librebaskerville font-normal mt-[12px] not-italic text-gray_900 text-left w-[auto]"
                    variant="body1"
                  >
                    Someting@random.com
                  </Text>
                  <Button
                    className="cursor-pointer font-librebaskerville font-normal leading-[normal] min-w-[168px] mt-[26px] not-italic text-[18px] text-center text-gray_900 w-[auto]"
                    size="lg"
                    variant="OutlineGray900"
                  >
                    Directions
                  </Button>
                </div>
                <Img
                  src="images/img_rectangle19.png"
                  className="h-[655px] sm:h-[auto] md:mt-[0] sm:mt-[0] mt-[72px] object-cover rounded-radius10 md:w-[100%] sm:w-[100%] w-[auto]"
                  alt="RectangleNineteen"
                />
              </div>
            </div>
            <footer className="bg-gray_900 flex items-center justify-center w-[100%]">
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
                          className="cursor-pointer font-normal leading-[normal] not-italic p-[0] text-[18px] placeholder:text-gray_500 text-gray_500 text-left w-[100%]"
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
                          shape="CircleBorder22"
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
                        onClick={handleNavigate}
                        alt="twitter"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </footer>
          </div>
        </div>
      </div>
    </>
  );
};

export default HomePagePage;
