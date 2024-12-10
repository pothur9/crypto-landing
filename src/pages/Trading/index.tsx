// @ts-ignore
import { Helmet } from "react-helmet";
import { Img, Heading, Button, Text, Input, TextArea } from "../../components";
import EthereumProfile from "../../components/EthereumProfile";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import { CloseSVG } from "../../components/Input/close";
import { ReactTable } from "../../components/ReactTable";
import HeroSection from "./HeroSection";

import React, { Suspense } from "react";
import {
  createColumnHelper,
  ColumnDef,
  Table,
} from "@tanstack/react-table";  

const ethereumOverviewList = [
  {
    ethereumTitle: "Ethereum",
    ethereumValue: "5,528.92",
    currency: "USD",
    detailsButtonText: "Details",
    valueManagedLabel: "Value Managed:",
    valueManagedAmount: "$43.74k",
    yearlyReturnLabel: "Yearly Return:",
    yearlyReturnPercentage: "67.21%",
    riskLabel: "Risk:",
    riskLevel: "3/5",
    p6789056: "$67 890.56",
  },
  {
    ethereumTitle: "Ethereum",
    ethereumValue: "5,528.92",
    currency: "USD",
    detailsButtonText: "Details",
    valueManagedLabel: "Value Managed:",
    valueManagedAmount: "$43.74k",
    yearlyReturnLabel: "Yearly Return:",
    yearlyReturnPercentage: "67.21%",
    riskLabel: "Risk:",
    riskLevel: "3/5",
    p6789056: "$67 890.56",
  },
  {
    ethereumTitle: "Ethereum",
    ethereumValue: "5,528.92",
    currency: "USD",
    detailsButtonText: "Details",
    valueManagedLabel: "Value Managed:",
    valueManagedAmount: "$43.74k",
    yearlyReturnLabel: "Yearly Return:",
    yearlyReturnPercentage: "67.21%",
    riskLabel: "Risk:",
    riskLevel: "3/5",
    p6789056: "$67 890.56",
  },
  {
    ethereumTitle: "Ethereum",
    ethereumValue: "5,528.92",
    currency: "USD",
    detailsButtonText: "Details",
    valueManagedLabel: "Value Managed:",
    valueManagedAmount: "$43.74k",
    yearlyReturnLabel: "Yearly Return:",
    yearlyReturnPercentage: "67.21%",
    riskLabel: "Risk:",
    riskLevel: "3/5",
    p6789056: "$67 890.56",
  },
];
const tableData = [
  {
    headerCellView: "images/img_signal.svg",
    headerCellText: "1",
    networkRow: "Bitcoin",
    headerPercentageText: "0.37%",
    headerPercentageText1: "3.82%",
    headerPercentageText2: "5.70%",
    managedRow: "$1,117,758,427,182",
    volumeRow: "$32,924,853,822",
    riskEditText: "19,749,431 BTC",
    durationText: "images/img_1_svg.svg",
    imageOne: "images/img_1_png.png",
    btcText: "BTC",
    iconImage: "images/img_icon.svg",
    btcCounterText: "581,742 BTC",
  },
  {
    headerCellView: "images/img_signal.svg",
    headerCellText: "2",
    imageOne: "images/img_1027_png.png",
    networkRow: "Ethereum",
    btcText: "ETH",
    iconImage: "images/img_icon.svg",
    headerPercentageText: "0.36%",
    headerPercentageText1: "4.33%",
    headerPercentageText2: "5.43%",
    managedRow: "$288,123,310,309",
    volumeRow: "$15,638,794,431",
    btcCounterText: "6,530,358 ETH",
    riskEditText: "120,312,883 ETH",
    durationText: "images/img_1_svg.svg",
  },
  {
    headerCellView: "images/img_signal.svg",
    headerCellText: "3",
    imageOne: "images/img_825_png.png",
    networkRow: "Tether",
    btcText: "USDT",
    iconImage: "images/img_icon.svg",
    headerPercentageText: "0.00%",
    headerPercentageText1: "0.01%",
    headerPercentageText2: "0.00%",
    managedRow: "$118,145,426,833",
    volumeRow: "$53,550,386,183",
    btcCounterText: "53,548,963,179 USDT",
    durationText: "images/img_1_svg.svg",
  },
  {
    headerCellView: "images/img_signal.svg",
    headerCellText: "4",
    imageOne: "images/img_1839_png.png",
    networkRow: "BNB",
    btcText: "BNB",
    iconImage: "images/img_icon.svg",
    headerPercentageText: "1.01%",
    headerPercentageText1: "5.30%",
    headerPercentageText2: "7.44%",
    managedRow: "$73,633,788,696",
    volumeRow: "$1,669,471,040",
    btcCounterText: "3,308,723 BNB",
    durationText: "images/img_1_svg.svg",
  },
  {
    headerCellView: "images/img_signal.svg",
    headerCellText: "5",
    imageOne: "images/img_5426_png.png",
    networkRow: "Solana",
    btcText: "SOL",
    iconImage: "images/img_icon.svg",
    headerPercentageText: "0.28%",
    headerPercentageText1: "3.00%",
    headerPercentageText2: "12.22%",
    managedRow: "$60,531,089,377",
    volumeRow: "$2,364,321,646",
    btcCounterText: "18,233,802 SOL",
    durationText: "images/img_1_svg.svg",
  },
  {
    headerCellView: "images/img_signal.svg",
    headerCellText: "6",
    imageOne: "images/img_3408_png.png",
    networkRow: "USDC",
    btcText: "USDC",
    iconImage: "images/img_icon_teal_a700.svg",
    headerPercentageText: "0.01%",
    headerPercentageText1: "0.03%",
    headerPercentageText2: "0.04%",
    managedRow: "$34,739,776,221",
    volumeRow: "$6,087,349,280",
    btcCounterText: "6,085,938,577 USDC",
    durationText: "images/img_1_svg.svg",
  },
  {
    headerCellView: "images/img_signal.svg",
    headerCellText: "7",
    imageOne: "images/img_52_png.png",
    networkRow: "XRP",
    btcText: "XRP",
    iconImage: "images/img_icon.svg",
    headerPercentageText: "0.45%",
    headerPercentageText1: "2.99%",
    headerPercentageText2: "4.30%",
    managedRow: "$31,122,913,385",
    volumeRow: "$1,050,746,100",
    btcCounterText: "1,899,118,755 XRP",
    riskEditText: "56,251,561,168 XRP",
    durationText: "images/img_1_svg.svg",
  },
  {
    headerCellView: "images/img_signal.svg",
    headerCellText: "8",
    imageOne: "images/img_74_png.png",
    networkRow: "Dogecoin",
    btcText: "DOGE",
    iconImage: "images/img_icon.svg",
    headerPercentageText: "0.29%",
    headerPercentageText1: "2.87%",
    headerPercentageText2: "5.03%",
    managedRow: "$14,050,371,749",
    volumeRow: "$523,078,568",
    btcCounterText: "5,428,508,205 DOGE",
    riskEditText: "145,814,726,384 DOGE",
    durationText: "images/img_1_svg.svg",
  },
  {
    headerCellView: "images/img_signal.svg",
    headerCellText: "9",
    imageOne: "images/img_1958_png.png",
    networkRow: "TRON",
    btcText: "TRX",
    iconImage: "images/img_icon.svg",
    headerPercentageText: "0.20%",
    headerPercentageText1: "1.45%",
    headerPercentageText2: "5.81%",
    managedRow: "$13,038,880,371",
    volumeRow: "$441,685,803",
    btcCounterText: "2,938,701,608 TRX",
    durationText: "images/img_1_svg.svg",
  },
  {
    headerCellView: "images/img_signal.svg",
    headerCellText: "10",
    imageOne: "images/img_11419_png.png",
    networkRow: "Toncoin",
    btcText: "TON",
    iconImage: "images/img_icon.svg",
    headerPercentageText: "0.97%",
    headerPercentageText1: "10.42%",
    headerPercentageText2: "15.88%",
    managedRow: "$11,774,761,002",
    volumeRow: "$382,757,432",
    btcCounterText: "82,406,014 TON",
    durationText: "images/img_11419_svg.svg",
  },
  {
    headerCellView: "images/img_signal.svg",
    headerCellText: "11",
    imageOne: "images/img_2010_png.png",
    networkRow: "Cardano",
    btcText: "ADA",
    iconImage: "images/img_icon.svg",
    headerPercentageText: "0.22%",
    headerPercentageText1: "2.10%",
    headerPercentageText2: "9.83%",
    managedRow: "$11,590,167,021",
    volumeRow: "$309,407,840",
    btcCounterText: "959,995,216 ADA",
    riskEditText: "35,960,643,044 ADA",
    durationText: "images/img_1_svg.svg",
  },
  {
    headerCellView: "images/img_signal.svg",
    headerCellText: "12",
    imageOne: "images/img_5805_png.png",
    networkRow: "Avalanche",
    btcText: "AVAX",
    iconImage: "images/img_icon.svg",
    headerPercentageText: "0.43%",
    headerPercentageText1: "3.06%",
    headerPercentageText2: "12.55%",
    managedRow: "$8,744,134,811",
    volumeRow: "$212,446,684",
    btcCounterText: "9,844,314 AVAX",
    riskEditText: "405,184,045 AVAX",
    durationText: "images/img_1_svg.svg",
  },
  {
    headerCellView: "images/img_signal.svg",
    headerCellText: "13",
    imageOne: "images/img_5994_png.png",
    networkRow: "Shiba Inu",
    btcText: "SHIB",
    iconImage: "images/img_icon.svg",
    headerPercentageText: "0.23%",
    headerPercentageText1: "3.05%",
    headerPercentageText2: "6.68%",
    managedRow: "$7,772,390,981",
    volumeRow: "$184,885,637",
    btcCounterText: "14,017,247,798,691 SHIB",
    riskEditText: "589,269,844,744,848 SHIB",
    durationText: "images/img_1_svg.svg",
  },
  {
    headerCellView: "images/img_signal.svg",
    headerCellText: "14",
    imageOne: "images/img_1975_png.png",
    networkRow: "Chainlink",
    btcText: "LINK",
    iconImage: "images/img_arrow_down.svg",
    headerPercentageText: "0.34%",
    headerPercentageText1: "3.33%",
    headerPercentageText2: "10.19%",
    managedRow: "$6,220,953,055",
    volumeRow: "$224,270,417",
    btcCounterText: "21,922,498 LINK",
    durationText: "images/img_1_svg.svg",
  },
  {
    headerCellView: "images/img_signal.svg",
    headerCellText: "15",
    imageOne: "images/img_1831_png.png",
    networkRow: "Bitcoin Cash",
    btcText: "BCH",
    iconImage: "images/img_icon.svg",
    headerPercentageText: "0.37%",
    headerPercentageText1: "2.35%",
    headerPercentageText2: "4.76%",
    managedRow: "$6,170,710,897",
    volumeRow: "$221,390,810",
    btcCounterText: "708,803 BCH",
    riskEditText: "19,756,097 BCH",
    durationText: "images/img_1_svg.svg",
  },
  {
    headerCellView: "images/img_signal.svg",
    headerCellText: "16",
    imageOne: "images/img_polkadot_logo_a.png",
    networkRow: "Polkadot",
    btcText: "DOT",
    iconImage: "images/img_icon.svg",
    headerPercentageText: "0.34%",
    headerPercentageText1: "4.44%",
    headerPercentageText2: "8.53%",
    managedRow: "$6,039,184,649",
    volumeRow: "$137,347,298",
    btcCounterText: "33,868,138 DOT",
    riskEditText: "1,489,187,930 DOT",
    durationText: "images/img_1_svg.svg",
  },
  {
    headerCellView: "images/img_signal.svg",
    headerCellText: "17",
    imageOne: "images/img_3957_png.png",
    networkRow: "UNUS SED LEO",
    btcText: "LEO",
    iconImage: "images/img_icon.svg",
    headerPercentageText: "0.35%",
    headerPercentageText1: "0.98%",
    headerPercentageText2: "1.91%",
    managedRow: "$5,423,350,386",
    volumeRow: "$2,445,751",
    btcCounterText: "417,401 LEO",
    durationText: "images/img_1_svg.svg",
  },
  {
    headerCellView: "images/img_signal.svg",
    headerCellText: "18",
    imageOne: "images/img_4943_png.png",
    networkRow: "Dai",
    btcText: "DAI",
    iconImage: "images/img_icon_teal_a700.svg",
    headerPercentageText: "0.01%",
    headerPercentageText1: "0.00%",
    headerPercentageText2: "0.00%",
    managedRow: "$5,364,944,122",
    volumeRow: "$85,768,523",
    btcCounterText: "85,775,534 DAI",
    durationText: "images/img_1_svg.svg",
  },
  {
    headerCellView: "images/img_signal.svg",
    headerCellText: "19",
    imageOne: "images/img_2_png.png",
    networkRow: "Litecoin",
    btcText: "LTC",
    iconImage: "images/img_icon_teal_a700.svg",
    headerPercentageText: "0.35%",
    headerPercentageText1: "0.27%",
    headerPercentageText2: "6.76%",
    managedRow: "$4,935,100,002",
    volumeRow: "$301,744,366",
    btcCounterText: "4,581,789 LTC",
    riskEditText: "74,936,237 LTC",
    durationText: "images/img_1_svg.svg",
  },
  {
    headerCellView: "images/img_signal.svg",
    headerCellText: "20",
    imageOne: "images/img_6535_png.png",
    networkRow: "NEAR Protocol",
    btcText: "NEAR",
    iconImage: "images/img_icon.svg",
    headerPercentageText: "0.05%",
    headerPercentageText1: "4.43%",
    headerPercentageText2: "17.16%",
    managedRow: "$4,222,600,738",
    volumeRow: "$212,712,610",
    btcCounterText: "56,509,310 NEAR",
    riskEditText: "1,121,777,662 NEAR",
    durationText: "images/img_1_svg.svg",
  },
];

type TableRowType = {
  headerCellView: string;
  headerCellText: string;
  networkRow: string;
  headerView?: string;
  headerPercentageText: string;
  headerPercentageText1: string;
  headerPercentageText2: string;
  managedRow: string;
  volumeRow: string;
  riskEditText?: string;
  durationText: string;
  imageOne: string;
  btcText: string;
  iconImage: string;
  btcCounterText: string;
};

export default function TradingPage() {
  const [searchBarValue9, setSearchBarValue9] = React.useState("");
  const tableColumns: ColumnDef<TableRowType, any>[] = React.useMemo(() => {
    const tableColumnHelper = createColumnHelper<TableRowType>();

    return [
      tableColumnHelper.accessor("headerCellView", {
        cell: (info) => (
          <div className="flex flex-col items-start border-b border-solid border-blue_gray-900 px-2.5">
            <Img
              src={info.getValue<string>()}
              alt="Signal Image"
              className="h-[16px]"
            />
          </div>
        ),
        header: () => (
          <div className="h-[46px] border-b border-t border-solid border-blue_gray-900" />
        ),
        meta: { width: "36px" },
      }),
      tableColumnHelper.accessor("headerCellText", {
        cell: (info) => (
          <div className="flex flex-col items-start border-b border-solid border-blue_gray-900 px-2.5">
            <Heading
              as="p"
              className="text-[14px] font-medium text-blue_gray-600"
            >
              {info.getValue<string>()}
            </Heading>
          </div>
        ),
        header: () => (
          <Heading
            size="headingxs"
            as="p"
            className="border-b border-t border-solid border-blue_gray-900 text-left font-sora text-[12px] font-bold text-color-text_color-text__4"
          >
            #
          </Heading>
        ),
        meta: { width: "44px" },
      }),
      // Add the rest of your columns similarly
    ];
  }, []);

  return (
    <>
      <Helmet>
        <title>Automated Trading Marketplace - Unlock AI Potential</title>
        <meta
          name="description"
          content="Explore the Automated Trading Marketplace. Dive into AI-driven strategies with 160K total sales and 12k active users. Manage assets in real-time with top vaults and maximize returns with ITP Staking."
        />
      </Helmet>
      <div className="flex w-full flex-col items-center gap-[26px] bg-gray-900_01">
        <div className="container-xs mt-3.5 lg:px-5 md:px-5">
          <Header />
        </div>
        <div className="flex flex-col gap-[150px] self-stretch lg:gap-28 md:gap-28 sm:gap-[75px]">
          <div className="flex flex-col items-center">
            <div className="self-stretch">
              {/* hero section */}
              <HeroSection />
              <div className="relative mt-[-576px] flex h-[4030px] flex-col items-center bg-[url(/public/images/img_group_5.png)] bg-cover bg-no-repeat py-[22px] lg:h-auto md:h-auto sm:py-4">
                <div className="container-xs mt-[672px] lg:px-5 md:px-5">
                  <div className="flex flex-col items-center">
                    <div className="self-stretch">
                      <div className="relative h-[418px] content-center rounded-[32px] border border-solid border-gray-600_3f bg-deep_purple-a200_0c px-14 py-[50px] lg:h-auto md:h-auto md:p-5 sm:p-4">
                        <div className="m-auto flex flex-1 flex-col items-end">
                          <Img
                            src="images/img_x_png.png"
                            alt="Main Image"
                            className="relative z-[1] mr-[134px] h-[22px] object-cover md:mr-0"
                          />
                          <div className="relative mt-[-22px] flex flex-col self-stretch">
                            <Img
                              src="images/img_circle_01_png.png"
                              alt="Circle Image"
                              className="ml-[38px] h-[16px] object-cover md:ml-0"
                            />
                            <div className="relative mt-[-6px] flex flex-col items-center gap-[26px]">
                              <div className="flex justify-center self-stretch px-14 md:px-5 sm:px-4">
                                <div className="flex flex-col items-center gap-4">
                                  <Img
                                    src="images/img_image.png"
                                    alt="Secondary Image"
                                    className="h-[60px] w-[14%] object-contain"
                                  />
                                  <Heading
                                    size="heading3xl"
                                    as="h6"
                                    className="font-sora text-[40px] font-bold text-color-text_color-text__4 lg:text-[34px] md:text-[34px] sm:text-[32px]"
                                  >
                                    Total Value Managed
                                  </Heading>
                                </div>
                              </div>
                              <div className="flex flex-col items-center justify-center self-stretch px-14 md:px-5 sm:px-4">
                                <Text
                                  size="text3xl"
                                  as="p"
                                  className="text-[17px] font-normal text-color-text_color-text__4 lg:text-[14px]"
                                >
                                  ITP Staking is live!
                                </Text>
                                <Heading
                                  size="text4xl"
                                  as="p"
                                  className="font-sora text-[30px] font-medium text-color-text_color-text__4 lg:text-[25px] md:text-[24px] sm:text-[22px]"
                                >
                                  $166,593
                                </Heading>
                              </div>
                              <Button
                                size="2xl"
                                color="deep_purple_A100_deep_purple_500"
                                className="min-w-[138px] rounded-[24px] px-6 font-medium sm:px-4"
                              >
                                STAKE ITP
                              </Button>
                            </div>
                          </div>
                        </div>
                        <div className="absolute bottom-[37%] left-0 right-0 mx-[38px] flex flex-1 items-start justify-between gap-5 lg:mx-0 md:mx-0">
                          <Img
                            src="images/img_dcoin_png.png"
                            alt="Dcoin Image"
                            className="ml-[94px] h-[32px] object-cover"
                          />
                          <Img
                            src="images/img_ethereum_02_png.png"
                            alt="Ethereum Image"
                            className="mt-3.5 h-[44px] self-end object-cover"
                          />
                        </div>
                      </div>
                    </div>
                    <div className="mt-32 flex flex-col items-center gap-10 self-stretch">
                      <Heading
                        size="heading2xl"
                        as="h1"
                        className="font-sora text-[36px] font-extrabold capitalize text-color-text_color-text__4 lg:text-[30px] md:text-[30px] sm:text-[28px]"
                      >
                        Top Vaults
                      </Heading>
                      <div className="flex gap-5 self-stretch md:flex-col">
                        <Suspense fallback={<div>Loading feed...</div>}>
                          {ethereumOverviewList.map((d, index) => (
                            <EthereumProfile
                              {...d}
                              key={"vaultsList" + index}
                            />
                          ))}
                        </Suspense>
                      </div>
                    </div>
                    <div className="mt-[92px] flex flex-col gap-[42px] self-stretch">
                      <div className="flex items-center justify-between gap-5 sm:flex-col">
                        <Heading
                          size="heading2xl"
                          as="h1"
                          className="font-sora text-[36px] font-extrabold capitalize text-color-text_color-text__4 lg:text-[30px] md:text-[30px] sm:text-[28px]"
                        >
                          Vaults
                        </Heading>
                        <Input
                          color="deep_purple_300_19"
                          size="xs"
                          variant="fill"
                          shape="round"
                          name="Search View"
                          placeholder={`Search`}
                          value={searchBarValue9}
                          onChange={(e) => setSearchBarValue9(e.target.value)}
                          prefix={
                            <Img
                              src="images/img_contrast.svg"
                              alt="Contrast"
                              className="h-[24px] w-[24px] object-contain"
                            />
                          }
                          suffix={
                            searchBarValue9?.length > 0 ? (
                              <CloseSVG
                                onClick={() => setSearchBarValue9("")}
                                height={24}
                                width={24}
                                fillColor="#ffffffff"
                              />
                            ) : null
                          }
                          className="w-[18%] gap-2.5 rounded-[20px] border-[0.5px] border-deep_purple-300 px-2.5 font-light sm:w-full"
                        />
                      </div>
                      <div className="flex flex-col gap-3">
                        <ReactTable
                          size="xs"
                          bodyProps={{ className: "" }}
                          cellProps={{
                            className: "border-red-600 border-b-4 border-solid",
                          }}
                          className="md:block md:overflow-x-auto md:whitespace-nowrap"
                          columns={tableColumns}
                          data={tableData}
                        />

                        <div className="flex items-center justify-center md:flex-col">
                          <Heading
                            size="textmd"
                            as="p"
                            className="mb-1.5 self-end font-sora text-[12px] font-normal text-color-text_color-text__4"
                          >
                            Showing 1 - 100 out of 9926
                          </Heading>
                          <div className="flex flex-1 items-center justify-center px-14 md:self-stretch md:px-5 sm:flex-col sm:px-4">
                            <div className="flex w-[70%] justify-end px-7 sm:w-full sm:px-4">
                              <Img
                                src="images/img_arrow_left.svg"
                                alt="Arrowleft"
                                className="h-[32px]"
                              />
                              <Button
                                size="sm"
                                shape="round"
                                color="deep_purple_A100_deep_purple_500"
                                className="min-w-[32px] rounded-lg px-3 font-sora font-semibold"
                              >
                                1
                              </Button>
                              <div className="flex flex-col items-end justify-center px-2.5 py-0.5">
                                <Heading
                                  size="headingmd"
                                  as="p"
                                  className="font-sora text-[15px] font-semibold text-color-text_color-text__4"
                                >
                                  2
                                </Heading>
                              </div>
                              <div className="flex flex-col items-end justify-center px-2 py-0.5">
                                <Heading
                                  size="headingmd"
                                  as="p"
                                  className="font-sora text-[15px] font-semibold text-color-text_color-text__4"
                                >
                                  3
                                </Heading>
                              </div>
                              <div className="flex flex-col items-start justify-center py-0.5">
                                <Heading
                                  size="headingmd"
                                  as="p"
                                  className="ml-[22px] font-sora text-[15px] font-semibold text-color-text_color-text__4 md:ml-0"
                                >
                                  4
                                </Heading>
                              </div>
                            </div>
                            <div className="flex w-[-29px] justify-center">
                              <div className="flex flex-col items-center justify-center p-0.5">
                                <Heading
                                  size="headingmd"
                                  as="p"
                                  className="font-sora text-[15px] font-semibold text-color-text_color-text__4"
                                >
                                  5
                                </Heading>
                              </div>
                              <div className="flex w-full items-center justify-center">
                                <div className="flex w-px justify-center">
                                  <div className="flex flex-col items-end justify-center pl-14 pr-[170px] lg:pr-8 md:px-5 sm:px-4">
                                    <Heading
                                      size="headingmd"
                                      as="p"
                                      className="mr-[38px] font-sora text-[15px] font-semibold text-color-text_color-text__4 md:mr-0"
                                    >
                                      100
                                    </Heading>
                                  </div>
                                  <Img
                                    src="images/img_arrow_right_32x1.png"
                                    alt="Arrowright"
                                    className="h-[32px] w-full object-cover lg:h-auto md:h-auto"
                                  />
                                </div>
                                <div className="flex flex-col items-end justify-center pl-14 pr-[58px] md:px-5 sm:px-4">
                                  <Heading
                                    size="headingmd"
                                    as="p"
                                    className="mr-20 font-sora text-[15px] font-semibold text-color-text_color-text__4 md:mr-0"
                                  >
                                    6
                                  </Heading>
                                </div>
                                <Text
                                  size="textxs"
                                  as="p"
                                  className="mb-1.5 self-end text-[10px] font-normal text-color-text_color-text__4"
                                >
                                  •••
                                </Text>
                              </div>
                            </div>
                          </div>
                          <div className="flex w-[34%] items-center justify-end px-[54px] md:w-full md:px-5 sm:px-4">
                            <Heading
                              size="textmd"
                              as="p"
                              className="text-[12px] font-normal text-color-text_color-text__4"
                            >
                              Show rows
                            </Heading>
                            <div className="flex w-[60%] items-center justify-center">
                              <Button
                                color="white_A700_19"
                                size="md"
                                variant="fill"
                                shape="round"
                                className="min-w-[50px] rounded-lg px-4 font-semibold"
                              >
                                20
                              </Button>
                              <div className="flex flex-1 justify-end">
                                <Heading
                                  size="headingxs"
                                  as="p"
                                  className="text-[12px] font-semibold text-color-text_color-text__4"
                                >
                                  100
                                </Heading>
                                <Img
                                  src="images/img_arrow_down_14x1.png"
                                  alt="Arrowdown"
                                  className="ml-1 h-[14px] object-cover"
                                />
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <Heading
                      size="text5xl"
                      as="p"
                      className="mt-[134px] font-sora text-[36px] font-medium tracking-[0.15px] text-color-text_color-text__4 lg:text-[30px] md:text-[30px] sm:text-[28px]"
                    >
                      Ecosystem
                    </Heading>
                    <div className="mt-[38px] flex gap-5 self-stretch md:flex-col">
                      <div className="flex w-full justify-center rounded-[20px] bg-teal-900 px-14 py-[78px] lg:py-8 md:p-5 sm:p-4">
                        <Img
                          src="images/img_image_38x150.png"
                          alt="Image"
                          className="h-[38px] w-[36%] object-contain"
                        />
                      </div>
                      <div className="flex w-full items-start justify-center gap-4 rounded-[20px] bg-teal-900 px-14 py-16 lg:py-8 md:p-5 sm:p-4">
                        <Img
                          src="images/img_image_56x58.png"
                          alt="Image"
                          className="mb-2 h-[56px] w-[14%] object-contain"
                        />
                        <Img
                          src="images/img_image_22x152.png"
                          alt="Image"
                          className="mt-4 h-[22px] w-[38%] object-contain"
                        />
                      </div>
                      <div className="flex w-full justify-center rounded-[20px] bg-teal-900 px-14 py-[70px] lg:py-8 md:p-5 sm:p-4">
                        <Img
                          src="images/img_image_54x194.png"
                          alt="Image Ten"
                          className="h-[54px] w-[46%] object-contain"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="container-xs relative z-[3] mt-[-2px] lg:px-5 md:px-5">
              <div className="flex gap-5 md:flex-col">
                <div className="flex w-full justify-center rounded-[20px] bg-teal-900 px-14 py-[76px] lg:py-8 md:p-5 sm:p-4">
                  <Img
                    src="images/img_velodrome_wordmark_svg.svg"
                    alt="Velodrome Logo"
                    className="h-[42px] w-[62%] object-contain"
                  />
                </div>
                <div className="flex w-full justify-center rounded-[20px] bg-teal-900 px-14 py-[58px] md:p-5 sm:p-4">
                  <Img
                    src="images/img_image_76x284.png"
                    alt="Decorative Image"
                    className="h-[76px] w-[66%] object-contain"
                  />
                </div>
                <div className="flex w-full justify-center rounded-[20px] bg-teal-900 px-14 py-[82px] lg:py-8 md:p-5 sm:p-4">
                  <Img
                    src="images/img_dhedge_words_svg.svg"
                    alt="Dhedge Logo"
                    className="h-[30px] w-[38%] object-contain"
                  />
                </div>
              </div>
            </div>
          </div>
          <Footer />
        </div>
      </div>
    </>
  );
}
