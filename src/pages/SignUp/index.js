import React from "react";

import { Text, Img, RatingBar, Button } from "components";

const SignUpPage = () => {
  return (
    <>
      <div className="bg-white_A700 flex flex-col font-roboto items-end justify-end mx-[auto] pt-[60px] w-[100%]">
        <div className="flex flex-col items-start md:px-[20px] sm:px-[20px] w-[100%]">
          <div className="overflow-auto overflow-x-auto w-[100%]">
            <div className="flex flex-1 flex-col gap-[27px] items-center justify-start w-[100%]">
              <div className="flex flex-col md:gap-[40px] sm:gap-[40px] gap-[80px] items-start justify-start md:w-[100%] sm:w-[100%] w-[62%]">
                <div className="flex flex-col gap-[27px] items-start justify-start w-[100%]">
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
                <div className="flex flex-col items-center justify-start md:w-[100%] sm:w-[100%] w-[28%]">
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
              <div className="flex font-librebaskerville h-[476px] md:h-[990px] sm:h-[990px] relative md:w-[100%] sm:w-[100%] w-[83%]">
                <div className="flex md:flex-col sm:flex-col flex-row md:gap-[40px] sm:gap-[40px] gap-[62px] items-center justify-start m-[auto] sm:pr-[20px] md:pr-[40px] pr-[487px] w-[100%]">
                  <div className="bg-white_A700 flex md:flex-1 sm:flex-1 flex-col items-center justify-start p-[32px] sm:px-[20px] rounded-radius10 shadow-bs3 md:w-[100%] sm:w-[100%] w-[49%]">
                    <div className="flex flex-col gap-[12px] justify-start mb-[126px] mt-[26px] w-[100%]">
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
                        className="font-librebaskerville font-normal not-italic text-center text-gray_902 w-[auto]"
                        variant="body1"
                      >
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Dui vel morbi cursus sed sodales molestie proin dictum
                        gravida. Porttitor maecenas tincidunt ipsum semper
                        malesuada. In sapien feugiat laoreet convallis eu sed.
                        Sapien et montes, duis tempor euismod augue cras eu
                        eget. Risus suspendisse mauris ullamcorper{" "}
                      </Text>
                    </div>
                  </div>
                  <div className="bg-white_A700 flex md:flex-1 sm:flex-1 flex-col items-center justify-start p-[41px] sm:px-[20px] md:px-[40px] rounded-radius10 shadow-bs3 md:w-[100%] sm:w-[100%] w-[49%]">
                    <div className="flex flex-col gap-[24px] items-center justify-start mb-[116px] mt-[16px] w-[100%]">
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
                        className="font-librebaskerville font-normal not-italic text-center text-gray_902 w-[auto]"
                        variant="body1"
                      >
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Dui vel morbi cursus sed sodales molestie proin dictum
                        gravida. Porttitor maecenas tincidunt ipsum semper
                        malesuada. In sapien feugiat laoreet convallis eu sed.
                        Sapien et montes, duis tempor euismod augue cras eu
                        eget. Risus suspendisse mauris ullamcorper{" "}
                      </Text>
                    </div>
                  </div>
                </div>
                <div className="bg-white_A700 flex flex-col items-center justify-start ml-[-425px] my-[auto] p-[32px] sm:px-[20px] rounded-radius10 shadow-bs3 w-[39%] z-[1]">
                  <div className="flex flex-col justify-start mb-[126px] mt-[26px] w-[100%]">
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
                      className="font-normal mt-[12px] not-italic text-center text-gray_902 w-[auto]"
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
            </div>
          </div>
        </div>
        <div className="bg-white_A700 flex flex-col font-librebaskerville items-center justify-end mt-[239px] md:px-[20px] sm:px-[20px] rounded-radius20 md:w-[100%] sm:w-[100%] w-[15%]">
          <div className="flex flex-col items-end justify-start mb-[29px] w-[100%]">
            <Img
              src="images/img_rectangle375_1x280.png"
              className="h-[1px] sm:h-[auto] object-cover rounded-bl-[0] rounded-br-[0] rounded-tl-[20px] rounded-tr-[20px] w-[100%]"
              alt="Rectangle375"
            />
            <Text
              className="mt-[755px] text-black_900 text-center w-[auto]"
              as="h4"
              variant="h4"
            >
              Thankinsomnia
            </Text>
            <div className="flex flex-col gap-[23px] items-end justify-start mt-[30px] md:w-[100%] sm:w-[100%] w-[59%]">
              <Text
                className="font-bold text-gray_902 text-left w-[auto]"
                as="h5"
                variant="h5"
              >
                Best of Styles
              </Text>
              <Text
                className="font-bold text-gray_902 text-left w-[auto]"
                variant="body1"
              >
                Under $799
              </Text>
            </div>
          </div>
        </div>
        <div className="flex flex-col font-poppins gap-[30px] items-start mt-[70px] pl-[96px] md:px-[20px] sm:px-[20px] w-[100%]">
          <div className="flex flex-col items-center justify-end md:ml-[0] sm:ml-[0] ml-[512px] md:w-[100%] sm:w-[100%] w-[15%]">
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
          <div className="font-librebaskerville overflow-x-auto w-[100%]">
            <div className="md:h-[2113px] sm:h-[2113px] h-[587px] relative w-[100%]">
              <div className="absolute md:h-[2113px] sm:h-[2113px] h-[587px] inset-y-[0] my-[auto] right-[0] md:w-[100%] sm:w-[100%] w-[82%]">
                <div className="absolute flex flex-col h-[max-content] inset-y-[0] items-center justify-start my-[auto] right-[0] w-[79%]">
                  <div className="flex md:flex-col sm:flex-col flex-row md:gap-[40px] sm:gap-[40px] items-center justify-between overflow-auto w-[100%]">
                    <div className="flex md:flex-1 sm:flex-1 md:flex-col sm:flex-col flex-row md:gap-[20px] sm:gap-[20px] items-center justify-evenly md:w-[100%] sm:w-[100%] w-[auto]">
                      <div className="bg-white_A700 flex flex-col md:gap-[40px] sm:gap-[40px] gap-[60px] items-center justify-center p-[67px] sm:px-[20px] md:px-[40px] rounded-bl-[10px] rounded-br-[0] rounded-tl-[10px] rounded-tr-[0] shadow-bs2 md:w-[100%] sm:w-[100%] w-[48%]">
                        <Text
                          className="mt-[83px] text-black_900 text-center w-[auto]"
                          as="h1"
                          variant="h1"
                        >
                          Thnkinsmn
                        </Text>
                        <div className="flex flex-col gap-[39px] items-center justify-start mb-[84px] md:w-[100%] sm:w-[100%] w-[75%]">
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
          </div>
        </div>
        <div className="flex flex-col font-librebaskerville md:gap-[40px] sm:gap-[40px] gap-[80px] items-center mt-[93px] pl-[521px] md:px-[20px] sm:px-[20px] w-[100%]">
          <div className="h-[892px] md:h-[auto] sm:h-[auto] relative w-[100%]">
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
          <div className="flex flex-col font-roboto gap-[27px] items-start justify-end md:w-[100%] sm:w-[100%] w-[95%]">
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
                  alt="Rectangle383 One"
                />
                <div className="flex md:flex-1 sm:flex-1 flex-col gap-[25px] items-center justify-start md:w-[100%] sm:w-[100%] w-[auto]">
                  <div className="flex sm:flex-col flex-row gap-[25px] items-center justify-between w-[100%]">
                    <Img
                      src="images/img_rectangle384.png"
                      className="md:flex-1 sm:flex-1 h-[330px] sm:h-[auto] object-cover rounded-radius10 md:w-[100%] sm:w-[100%] w-[auto]"
                      alt="Rectangle384 One"
                    />
                    <Img
                      src="images/img_rectangle385.png"
                      className="md:flex-1 sm:flex-1 h-[330px] sm:h-[auto] object-cover rounded-radius10 md:w-[100%] sm:w-[100%] w-[auto]"
                      alt="Rectangle385 One"
                    />
                  </div>
                  <div className="flex sm:flex-col flex-row gap-[25px] items-center justify-between w-[100%]">
                    <Img
                      src="images/img_rectangle386.png"
                      className="md:flex-1 sm:flex-1 h-[330px] sm:h-[auto] object-cover rounded-radius10 md:w-[100%] sm:w-[100%] w-[auto]"
                      alt="Rectangle386 One"
                    />
                    <Img
                      src="images/img_rectangle387.png"
                      className="md:flex-1 sm:flex-1 h-[330px] sm:h-[auto] object-cover rounded-radius10 md:w-[100%] sm:w-[100%] w-[auto]"
                      alt="Rectangle387 One"
                    />
                    <Img
                      src="images/img_rectangle388.png"
                      className="md:flex-1 sm:flex-1 h-[330px] sm:h-[auto] object-cover rounded-radius10 md:w-[100%] sm:w-[100%] w-[auto]"
                      alt="Rectangle388 One"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SignUpPage;
