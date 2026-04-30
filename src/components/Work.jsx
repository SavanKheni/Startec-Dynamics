import React, { useRef, useState } from "react";
import "./Work.css";
import netearth from "../assets/net-earth.png";
import { motion, useInView, AnimatePresence } from "framer-motion";
import GradientButton from "./Gradientbutton";
import logo from "../assets/logo.png";
import GlowAnimation from "./GlowAnimation";
import GlowLTR from "./GlowLTR";
import fleet from "../assets/fleet.png";
import f1 from "../assets/f-1.png";
import f2 from "../assets/f-2.png";
import f3 from "../assets/f-3.png";
import tabShine from "../assets/tab-shine.png";

// ─── Icon Data ────────────────────────────────────────────────────────────────
const ICONS = [
  {
    id: 1,
    className: "icon-box-1",
    viewBox: "0 0 22 17",
    paths: [
      { d: "M18.0612 16.512V0H21.4692V16.512H18.0612Z", fill: "#3DA8FF" },
      {
        d: "M0 16.512L5.592 0H10.152L15.744 16.512H12.264L11.04 12.864H4.584L3.408 16.512H0ZM5.448 10.104H10.152L7.872 3.096H7.728L5.448 10.104Z",
        fill: "#3DA8FF",
      },
    ],
  },
  {
    id: 2,
    className: "icon-box-2",
    viewBox: "0 0 36 36",
    paths: [
      {
        d: "M12.0527 0C12.918 0.000210885 13.622 0.704081 13.6221 1.56934C13.6221 1.72321 13.7929 1.70403 14.2305 1.89648C14.2658 1.89639 14.2967 1.88424 14.3223 1.85938C14.9016 1.28089 15.9341 1.26655 16.5352 1.86621L17.541 2.87207H33.333C34.802 2.87207 35.9971 4.09309 35.9971 5.59375V27.8828C35.997 29.3167 34.8254 30.5996 33.334 30.5996H24.9854C25.29 30.8683 25.6562 31.0913 26.0703 31.2471C27.0722 31.6193 27.7471 32.5853 27.7471 33.6494V34.7217C27.7471 35.4244 27.1753 35.9961 26.4727 35.9961H9.52539C8.81891 35.996 8.24414 35.4243 8.24414 34.7217V33.6494C8.24414 32.5854 8.91854 31.6191 9.92285 31.2461C10.3391 31.0909 10.7063 30.8681 11.0107 30.5996H2.66211C1.19423 30.5996 0.000153246 29.3803 0 27.8818C0.000302368 23.0982 0.000969363 5.66619 0.000976562 5.59375C0.000981388 4.09324 1.19559 2.87231 2.66406 2.87207H4.79297L5.79883 1.86621C6.36693 1.29801 7.34877 1.27133 7.94629 1.79785C8.03157 1.86113 8.03864 1.89648 8.10449 1.89648C8.67474 1.68174 8.71875 1.68388 8.71875 1.57617C8.71894 0.70385 9.42372 0 10.2891 0H12.0527ZM12.8525 30.5996C12.3475 31.4862 11.4859 32.1996 10.4248 32.5957C10.0674 32.7287 9.68359 33.1152 9.68359 33.6494V34.5566H26.3066V33.6494C26.3066 33.1843 26.0093 32.7612 25.5664 32.5967C24.5096 32.1996 23.6501 31.4854 23.1416 30.5996H12.8525ZM1.44043 27.8828C1.44054 28.5853 1.98975 29.157 2.66406 29.1572H33.333C34.0157 29.1572 34.5555 28.5646 34.5557 27.8818V26.1123H1.44043V27.8828ZM18.001 26.6445C18.5415 26.6446 18.9863 27.0892 18.9863 27.6357C18.9863 28.1763 18.5416 28.621 18.001 28.6211C17.4544 28.6211 17.0098 28.1763 17.0098 27.6357C17.0098 27.0892 17.4544 26.6445 18.001 26.6445ZM2.66406 4.3125C1.98969 4.31275 1.44042 4.88734 1.44043 5.59375V24.6729H34.5576V5.59375C34.5576 4.88719 34.0079 4.3125 33.333 4.3125H18.2412C18.2015 5.05919 17.6857 5.32688 17.7588 5.4834C17.9697 5.95775 17.9299 6.02539 18.0713 6.02539C18.9363 6.02545 19.6406 6.73325 19.6406 7.60254V9.35938C19.6404 10.2285 18.9362 10.9355 18.0713 10.9355C18.005 10.9355 17.9539 10.9735 17.9307 11.0342C17.8131 11.3918 17.6758 11.5163 17.7734 11.6143C18.3934 12.2343 18.3966 13.2282 17.7939 13.8438L16.5342 15.0957C15.942 15.6876 14.9159 15.6948 14.3154 15.0947C14.2866 15.067 14.2464 15.0596 14.2197 15.0596C14.0114 15.1411 13.8546 15.2094 13.6982 15.2617C13.6922 15.2651 13.6221 15.3029 13.6221 15.3848C13.6221 16.2497 12.918 16.9539 12.0527 16.9541C10.6681 16.8674 9.91795 17.2012 9.18652 16.5029C8.88526 16.202 8.71875 15.7985 8.71875 15.3848C8.71873 15.2534 8.60069 15.2551 8.11328 15.0576C8.03914 15.0599 6.87931 16.1748 5.79883 15.0938C4.46141 13.7161 4.52924 13.8903 4.32129 13.5439C3.69336 12.4994 4.57051 11.6121 4.58691 11.54C4.54382 11.4016 4.40899 10.9361 4.27051 10.9355C3.39781 10.9355 2.69359 10.2285 2.69336 9.35938V7.60254C2.69336 6.73328 3.39733 6.0255 4.2627 6.02539C4.34284 6.02539 4.3784 5.95629 4.38965 5.92676C4.78467 4.91836 4.41986 5.85129 4.09668 4.3125H2.66406ZM23.5957 9.80566C23.6758 7.78967 26.1593 8.41905 26.6182 8.31934C27.4221 8.31934 28.0771 8.97342 28.0771 9.77734C28.219 9.84826 28.3344 9.89684 28.4492 9.94531L28.4951 9.9873C28.9982 9.44068 29.9959 9.38628 30.5771 9.96191L31.6631 11.0479C32.2144 11.5879 32.2509 12.525 31.6631 13.1123C31.7228 13.2757 31.7773 13.406 31.8262 13.542C33.8204 13.5692 33.2078 16.0966 33.3057 16.5439C33.3056 17.3495 32.6514 18.0046 31.8477 18.0049C31.7686 18.1553 31.7172 18.2808 31.6592 18.4062C33.0491 19.8681 30.832 21.1986 30.5801 21.5908C30.0173 22.1441 29.0786 22.1413 28.5225 21.5957C28.3611 21.6477 28.2313 21.7025 28.1016 21.751C28.041 23.7523 25.5392 23.1313 25.0859 23.2305C24.2906 23.2303 23.6291 22.5861 23.6289 21.7725C23.4778 21.7043 23.3467 21.6485 23.2188 21.5898C22.6726 22.1304 21.6906 22.159 21.1221 21.5908C20.123 20.4498 18.9696 20.0491 20.041 18.4414C19.9827 18.2853 19.928 18.154 19.8799 18.0264C19.0484 18.0044 18.3946 17.3495 18.3945 16.5439V15.0146C18.3945 14.209 19.0486 13.5537 19.8525 13.5537C19.9277 13.3966 19.9796 13.2698 20.0352 13.1465C19.7634 12.8375 19.6113 12.4703 19.6113 12.0801C19.6114 11.1554 20.3525 10.8437 21.1221 9.96484C21.6795 9.41443 22.6311 9.41693 23.1816 9.96191C23.343 9.90426 23.4695 9.85488 23.5957 9.80566ZM25.0859 9.75977C25.0473 11.0981 23.1118 11.9282 22.1689 10.9854L21.0576 12.0654C21.5159 12.572 21.5889 13.2175 21.3457 13.7441C21.1362 14.2091 20.8638 14.9931 19.8555 14.9932L19.834 16.5439C20.4734 16.565 21.0099 16.9405 21.2275 17.5205C21.82 19.0852 21.0976 19.2986 21.0586 19.4629L22.1406 20.5723C23.0776 19.626 25.0684 20.4501 25.0684 21.7725L26.6182 21.79C26.6904 21.79 26.5225 20.8023 27.5996 20.4014C28.1588 20.1937 28.8595 19.8971 29.5352 20.5723L30.6475 19.4873C30.2123 19.0208 30.0972 18.36 30.3496 17.8057C30.6021 17.2612 30.8813 16.5654 31.8389 16.5654L31.8652 15.0146C30.8307 14.9797 30.6005 14.2881 30.3516 13.7393C30.0992 13.1847 30.2166 12.5229 30.6445 12.0947L29.5498 10.9707C28.8449 11.6756 28.1509 11.3605 27.5977 11.1533C27.0126 10.9304 26.6368 10.3933 26.6367 9.7832L25.0859 9.75977ZM25.8496 12.7236C27.5323 12.7236 28.9012 14.0922 28.9014 15.7744C28.9014 17.4572 27.5324 18.8262 25.8496 18.8262C24.167 18.8261 22.7979 17.4571 22.7979 15.7744C22.798 14.0922 24.1671 12.7237 25.8496 12.7236ZM25.8496 14.1631C24.9612 14.1632 24.2385 14.886 24.2383 15.7744C24.2383 16.663 24.961 17.3866 25.8496 17.3867C26.7383 17.3867 27.4619 16.6631 27.4619 15.7744C27.4617 14.8859 26.7382 14.1631 25.8496 14.1631ZM12.1816 1.57617C12.1814 1.32629 11.8834 1.48946 10.2891 1.43945C10.2188 1.43945 10.1593 1.4991 10.1592 1.56934C10.1592 2.74192 9.10522 3.02958 9.0332 3.08398C7.23507 3.77607 7.07501 2.62615 6.81641 2.88477L5.59961 4.10156C5.37314 4.33032 6.39974 4.90182 5.8877 6.07617C5.60373 6.71646 5.29467 7.46582 4.2627 7.46582C4.02602 7.466 4.18118 7.79004 4.13281 9.35938C4.13303 9.43434 4.19156 9.49598 4.2627 9.49609C4.92525 9.49609 5.50283 9.89745 5.74121 10.5195C6.52149 12.5251 5.28242 12.5398 5.57129 12.8311L6.81641 14.0762C6.97231 14.2321 6.9945 13.969 7.48438 13.7549C8.23862 13.4212 8.84996 13.8121 9.09863 13.8955C10.2613 14.3392 10.1032 15.378 10.1924 15.4727C10.2761 15.5516 10.2433 15.4973 12.0527 15.5146C12.1229 15.5144 12.1816 15.4546 12.1816 15.3848C12.1817 14.7264 12.5866 14.146 13.2129 13.9062C13.3456 13.861 13.448 13.8142 13.5449 13.7686C14.1594 13.4894 14.8618 13.618 15.3262 14.0693C15.4935 14.2356 15.4931 14.0531 16.7715 12.8291C16.8195 12.7799 16.8221 12.6984 16.7705 12.6465C15.674 11.55 16.7184 9.49642 18.0635 9.49609C18.3102 9.49609 18.1512 9.20354 18.2002 7.60254C18.2002 7.18521 17.2881 8.01556 16.4922 6.18066C16.2945 5.72744 16.197 5.26136 16.4736 4.71582C16.8408 3.9915 17.2373 4.60304 15.5176 2.88477C15.4596 2.82676 15.3829 2.83415 15.333 2.88477C14.8591 3.34653 14.1438 3.46173 13.5547 3.18652C13.4484 3.1139 12.1816 2.85875 12.1816 1.57617ZM11.166 5.07227C13.0433 5.07238 14.5702 6.59925 14.5703 8.47656C14.5703 10.3536 13.0434 11.8807 11.166 11.8809C9.28887 11.8809 7.76171 10.3537 7.76172 8.47656C7.76186 6.59918 9.28896 5.07227 11.166 5.07227ZM11.166 6.51172C10.0827 6.51172 9.20131 7.39328 9.20117 8.47656C9.20117 9.55996 10.0826 10.4414 11.166 10.4414C12.2493 10.4413 13.1309 9.5599 13.1309 8.47656C13.1307 7.39334 12.2492 6.51183 11.166 6.51172Z",
        fill: "#3DA8FF",
      },
    ],
  },
  {
    id: 3,
    className: "icon-box-3",
    viewBox: "0 0 42 28",
    paths: [
      {
        d: "M21.9333 0C20.3983 0 19.1333 1.26494 19.1333 2.8C19.1333 4.33506 20.3983 5.6 21.9333 5.6H24.2667V17.2667H18.3604C17.9342 16.4877 17.4091 15.7725 16.8 15.1375V9.1875C16.8 7.7797 16.2145 6.68759 15.4438 6.0375C14.673 5.38741 13.7917 5.13333 13.0375 5.13333H6.53333C4.99828 5.13333 3.73333 6.39828 3.73333 7.93333C3.73333 9.46839 4.99828 10.7333 6.53333 10.7333H9.33333V12.1479C4.1447 12.3894 0 16.6863 0 21.9333C2.46996e-05 22.1809 0.0983657 22.4182 0.273394 22.5933C0.448423 22.7683 0.685806 22.8666 0.933333 22.8667H3.79167C4.23808 25.7744 6.77331 28 9.8 28C12.8267 28 15.3619 25.7744 15.8083 22.8667H26.1333C26.257 22.8684 26.3798 22.8456 26.4946 22.7994C26.6093 22.7533 26.7138 22.6849 26.8019 22.598C26.89 22.5112 26.9599 22.4077 27.0076 22.2936C27.0554 22.1795 27.0799 22.057 27.0799 21.9333C27.0799 21.8096 27.0554 21.6872 27.0076 21.5731C26.9599 21.459 26.89 21.3555 26.8019 21.2687C26.7138 21.1818 26.6093 21.1133 26.4946 21.0672C26.3798 21.0211 26.257 20.9983 26.1333 21H19.5125C19.451 20.356 19.3285 19.7353 19.1479 19.1333H25.2C25.4475 19.1333 25.6849 19.035 25.8599 18.8599C26.035 18.6849 26.1333 18.4475 26.1333 18.2V4.66667C26.1333 4.41914 26.035 4.18176 25.8599 4.00673C25.6849 3.8317 25.4475 3.73336 25.2 3.73333H21.9333C21.4001 3.73333 21 3.33321 21 2.8C21 2.26679 21.4001 1.86667 21.9333 1.86667H26.8917C27.3693 1.86667 27.5567 1.97872 27.7083 2.15833C27.8599 2.33794 28 2.68855 28 3.26667V8.86667C27.9998 9.01904 28.0369 9.16915 28.1081 9.30388C28.1793 9.43861 28.2824 9.55387 28.4083 9.63958C29.7984 10.5663 31.2741 11.5913 32.3458 12.7167C33.3079 13.7268 33.9204 14.7798 34.0375 15.9396C31.1522 16.4041 28.9333 18.9216 28.9333 21.9333C28.9333 25.2728 31.6605 28 35 28C38.3395 28 41.0667 25.2728 41.0667 21.9333C41.0667 18.9021 38.8167 16.3804 35.9042 15.9396C35.781 14.1676 34.8621 12.6521 33.6875 11.4187C32.7712 10.4566 31.7119 9.64756 30.6542 8.91042C31.2158 9.18051 31.8429 9.33333 32.5062 9.33333H35C35.2475 9.33331 35.4849 9.23497 35.6599 9.05994C35.835 8.88491 35.9333 8.64753 35.9333 8.4V2.8C35.9333 2.55247 35.835 2.31509 35.6599 2.14006C35.4849 1.96503 35.2475 1.86669 35 1.86667H32.5062C31.4968 1.86667 30.558 2.2283 29.8375 2.81458C29.7758 2.11524 29.5722 1.46295 29.1375 0.947917C28.6099 0.322803 27.7743 0 26.8917 0H21.9333ZM32.5062 3.73333H34.0667V7.46667H32.5062C31.2335 7.46667 30.3333 6.59463 30.3333 5.6C30.3333 4.60537 31.2335 3.73333 32.5062 3.73333ZM6.53333 7H13.0375C13.3371 7 13.8674 7.13114 14.2479 7.45208C14.6284 7.77302 14.9333 8.25099 14.9333 9.1875V13.6208C13.8223 12.9213 12.5542 12.4484 11.2 12.25V9.8C11.2 9.55247 11.1016 9.31509 10.9266 9.14006C10.7516 8.96503 10.5142 8.86669 10.2667 8.86667H6.53333C6.00012 8.86667 5.6 8.46654 5.6 7.93333C5.6 7.40012 6.00012 7 6.53333 7ZM9.8 14C13.8741 14 17.1825 17.0548 17.6458 21H1.95417C2.41829 17.0547 5.72675 14 9.8 14ZM35 17.7333C37.3307 17.7333 39.2 19.6027 39.2 21.9333C39.2 24.264 37.3307 26.1333 35 26.1333C32.6693 26.1333 30.8 24.264 30.8 21.9333C30.8 19.6027 32.6693 17.7333 35 17.7333ZM35 20.5333C34.2268 20.5333 33.6 21.1601 33.6 21.9333C33.6 22.7065 34.2268 23.3333 35 23.3333C35.7732 23.3333 36.4 22.7065 36.4 21.9333C36.4 21.1601 35.7732 20.5333 35 20.5333ZM5.70208 22.8667H13.8979C13.4741 24.7406 11.8082 26.1333 9.8 26.1333C7.79176 26.1333 6.12587 24.7406 5.70208 22.8667Z",
        fill: "#3DA8FF",
      },
    ],
  },
  {
    id: 4,
    className: "icon-box-4",
    viewBox: "0 0 26 26",
    paths: [
      {
        d: "M4.18655 16.4205C1.87408 16.1548 0 14.0941 0 11.631C0 9.20421 1.7462 7.19815 4.00802 6.88461C4.31099 4.54454 6.24999 2.73702 8.59338 2.73702C9.18058 2.73702 9.74135 2.84992 10.2569 3.05748C11.3928 1.21917 13.3825 0 15.6444 0C17.1273 0 18.4924 0.523448 19.5774 1.40268C19.865 1.63532 19.9156 2.06638 19.6909 2.3629C19.4661 2.66053 19.0497 2.71186 18.7632 2.47922C17.9028 1.78359 16.8209 1.36848 15.6453 1.36848C13.6689 1.36848 11.9557 2.54193 11.1195 4.25252C11.038 4.41902 10.8947 4.54332 10.7229 4.59806C10.5499 4.65166 10.3637 4.63113 10.2062 4.5399C9.72915 4.26393 9.17941 4.10541 8.59441 4.10541C6.76997 4.10541 5.28922 5.63809 5.28922 7.52548C5.28922 7.9041 4.99285 8.20973 4.62818 8.20973C2.80374 8.20973 1.32299 9.74241 1.32299 11.631C1.32299 13.3894 2.60868 14.8411 4.26012 15.0315C4.29537 15.0349 4.33063 15.0429 4.36478 15.052H21.743L21.7408 15.0315C23.3923 14.8422 24.678 13.3905 24.678 11.631C24.678 10.5567 24.1987 9.59881 23.4507 8.97043C23.1664 8.73209 23.1234 8.30216 23.3526 8.00794C23.5829 7.71372 23.9982 7.66923 24.2825 7.90644C25.3302 8.78454 26 10.1268 26 11.631C26 14.0942 24.1987 16.1263 21.8862 16.3911L21.8377 16.3934L21.8135 16.4196H13.6609V18.4723H20.9321C21.2968 18.4723 21.5932 18.7791 21.5932 19.1565V21.0769C22.6101 21.3746 23.3559 22.3428 23.3559 23.4911C23.3559 24.8756 22.2696 26 20.9321 26C19.5947 26 18.5084 24.8756 18.5084 23.4911C18.5084 22.3439 19.2542 21.3746 20.2711 21.0769V19.8407H13.6607V21.0769C14.6776 21.3746 15.4234 22.3428 15.4234 23.4911C15.4234 24.8756 14.3372 26 12.9997 26C11.6622 26 10.5759 24.8756 10.5759 23.4911C10.5759 22.3439 11.3218 21.3746 12.3386 21.0769V19.8407H5.72827V21.0769C6.74515 21.3746 7.491 22.3428 7.491 23.4911C7.491 24.8756 6.4047 26 5.06723 26C3.72975 26 2.64346 24.8756 2.64346 23.4911C2.64346 22.3439 3.38931 21.3746 4.40619 21.0769V19.1565C4.40619 18.7791 4.70255 18.4723 5.06723 18.4723H12.3384V16.4196H4.18586L4.18655 16.4205ZM21.6277 1.69363L22.4253 4.15687L24.805 4.9825C25.0749 5.07602 25.2567 5.33715 25.2567 5.6314C25.2567 5.92562 25.075 6.18676 24.805 6.28029L22.4253 7.10707L21.6277 9.56917C21.5374 9.84856 21.2851 10.0367 21.0008 10.0367C20.7166 10.0367 20.4643 9.84857 20.3739 9.56917L19.5752 7.10707L17.1966 6.28029C16.9267 6.18678 16.7449 5.92564 16.7449 5.6314C16.7449 5.33718 16.9267 5.07718 17.1966 4.9825L19.5752 4.15687L20.3739 1.69363C20.4643 1.41423 20.7166 1.22606 21.0008 1.22606C21.2851 1.22606 21.5362 1.41422 21.6277 1.69363Z",
        fill: "#3DA8FF",
      },
    ],
  },
  {
    id: 5,
    className: "icon-box-5",
    viewBox: "0 0 32 32",
    strokePaths: [
      "M12.8 26.6663H19.2C24.5333 26.6663 26.6666 24.533 26.6666 19.1997V12.7997C26.6666 7.46634 24.5333 5.33301 19.2 5.33301H12.8C7.46665 5.33301 5.33331 7.46634 5.33331 12.7997V19.1997C5.33331 24.533 7.46665 26.6663 12.8 26.6663Z",
      "M14 22.6663H18C21.3333 22.6663 22.6666 21.333 22.6666 17.9997V13.9997C22.6666 10.6663 21.3333 9.33301 18 9.33301H14C10.6666 9.33301 9.33331 10.6663 9.33331 13.9997V17.9997C9.33331 21.333 10.6666 22.6663 14 22.6663Z",
      "M10.68 5.33366V2.66699",
      "M16 5.33366V2.66699",
      "M21.3333 5.33366V2.66699",
      "M26.6667 10.667H29.3334",
      "M26.6667 16H29.3334",
      "M26.6667 21.333H29.3334",
      "M21.3333 26.667V29.3337",
      "M16.0133 26.667V29.3337",
      "M10.68 26.667V29.3337",
      "M2.66669 10.667H5.33335",
      "M2.66669 16H5.33335",
      "M2.66669 21.333H5.33335",
      "M16 12.9336L14.7466 15.1203C14.4666 15.6003 14.6933 16.0003 15.2533 16.0003H16.7466C17.3066 16.0003 17.5333 16.4003 17.2533 16.8803L16 19.0669",
    ],
  },
];

// ─── Tab Data ─────────────────────────────────────────────────────────────────
const TABS = [
  {
    id: 0,
    label: "SI Connect",
    colorClass: "tab--purple",
    title: "SI Connect",
    description1:
      "SI Connect is a powerful web-based dashboard application designed to monitor, manage, and optimize satellite operations in real time. It provides live tracking of connections through GPS, enabling businesses to gain complete visibility over their network's movement, routes, and performance.",
    description2:
      "With an intuitive interface and centralized control, the platform allows users to make data-driven decisions, streamline logistics, and ensure smooth day-to-day operations.",
    buttonLabel: "Explore The Project",
    image: null,
    icon: fleet,
  },
  {
    id: 1,
    label: "Fleet Management",
    colorClass: "tab--pink",
    title: "Fleet Management",
    description1:
      "Fleet Management is a powerful web-based dashboard application designed to monitor, manage, and optimize vehicle operations in real time. It provides live tracking of vehicles through GPS, enabling businesses to gain complete visibility over their fleet's movement, routes, and performance. The system integrates key features such as driver management, analytics, alerts, and reporting, helping organizations improve efficiency, reduce operational costs, and enhance safety.",
    description2:
      "With an intuitive interface and centralized control, the platform allows users to make data-driven decisions, streamline logistics, and ensure smooth day-to-day fleet operations.",
    buttonLabel: "Explore The Project",
    image: [f1, f2, f3],
    icon: fleet,
  },
  {
    id: 2,
    label: "SI Intelligent",
    colorClass: "tab--purple",
    title: "SI Intelligent",
    description1:
      "SI Intelligent is a powerful web-based dashboard application designed to monitor, manage, and optimize AI-powered operations in real time. It provides live analytics and automation that surfaces actionable intelligence, enabling businesses to gain complete visibility over their operational data.",
    description2:
      "With an intuitive interface and centralized control, the platform allows users to make data-driven decisions, streamline workflows, and ensure smooth day-to-day intelligent operations.",
    buttonLabel: "Explore The Project",
    image: null,
    icon: fleet,
  },
];

// ─── Animation Variants ───────────────────────────────────────────────────────
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.9,
    },
  },
};

// ─── Globe image variant (renamed from imgVariants) ───────────────────────────
const globeImgVariants = {
  hidden: { opacity: 0, scale: 0.85, y: 40 },
  visible: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" },
  },
};

const iconVariants = {
  hidden: { opacity: 0, scale: 0, y: 20 },
  visible: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: { duration: 0.9, ease: "backOut" },
  },
};

// ─── Tab Content Animation Variants ──────────────────────────────────────────
const tabContentVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: "easeOut",
      staggerChildren: 0.1,
      delayChildren: 0.05,
    },
  },
  exit: {
    opacity: 0,
    y: -20,
    transition: { duration: 0.3, ease: "easeIn" },
  },
};

const tabLeftChildVariants = {
  hidden: { opacity: 0, x: -30 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.5, ease: "easeOut" },
  },
  exit: {
    opacity: 0,
    x: -20,
    transition: { duration: 0.25, ease: "easeIn" },
  },
};

const tabRightChildVariants = {
  hidden: { opacity: 0, x: 40, scale: 0.95 },
  visible: {
    opacity: 1,
    x: 0,
    scale: 1,
    transition: { duration: 0.55, ease: "easeOut" },
  },
  exit: {
    opacity: 0,
    x: 20,
    scale: 0.95,
    transition: { duration: 0.25, ease: "easeIn" },
  },
};

const tabTitleVariants = {
  hidden: { opacity: 0, y: -15 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.4, ease: "easeOut" },
  },
};

const tabDescVariants = {
  hidden: { opacity: 0, y: 15 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.4, ease: "easeOut" },
  },
};

const tabBtnVariants = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.4, ease: "backOut" },
  },
};

// ─── NEW: Tab preview image entrance variants (staggered) ─────────────────────
const tabImgEnterVariants = {
  hidden: { opacity: 0, y: 30, scale: 0.92 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      delay: i * 0.3 + 0.1,
      duration: 0.7,
      ease: [0.22, 1, 0.36, 1],
    },
  }),
};

// ─── NEW: Shine fade-in variant (after all images appear) ─────────────────────
const tabShineVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      delay: 1.4,
      duration: 0.9,
      ease: "easeOut",
    },
  },
};

// ─── NEW: Float configs per image index ───────────────────────────────────────
const floatConfigs = [
  { y: [-10, 0], rotate: [0.5, -0.5], duration: 5.8, delay: 1.4 }, // img-0
  { y: [-8, 0], rotate: [0.3, -0.3], duration: 5.0, delay: 0.8 }, // img-1
  { y: [-12, 0], rotate: [0.4, -0.4], duration: 6.5, delay: 1.1 }, // img-2
];

// ─── Icon Component ───────────────────────────────────────────────────────────
const IconBox = ({ icon }) => (
  <motion.div
    variants={iconVariants}
    className={`box-shadow ${icon.className}`}
    whileHover={{ scale: 1.2, rotate: 5, transition: { duration: 0.2 } }}
  >
    <div className=" box-shadow-inner">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="235"
        height="201"
        viewBox="0 0 235 201"
        fill="none"
      >
        <g opacity="0.5" filter="url(#filter0_f_5293_1668)">
          <ellipse
            cx="117.5"
            cy="100.21"
            rx="40.2098"
            ry="57.5"
            transform="rotate(-90 117.5 100.21)"
            fill="url(#paint0_radial_5293_1668)"
          />
        </g>
        <defs>
          <filter
            id="filter0_f_5293_1668"
            x="0"
            y="0"
            width="235"
            height="200.42"
            filterUnits="userSpaceOnUse"
            color-interpolation-filters="sRGB"
          >
            <feFlood flood-opacity="0" result="BackgroundImageFix" />
            <feBlend
              mode="normal"
              in="SourceGraphic"
              in2="BackgroundImageFix"
              result="shape"
            />
            <feGaussianBlur
              stdDeviation="30"
              result="effect1_foregroundBlur_5293_1668"
            />
          </filter>
          <radialGradient
            id="paint0_radial_5293_1668"
            cx="0"
            cy="0"
            r="1"
            gradientUnits="userSpaceOnUse"
            gradientTransform="translate(117.5 100.21) rotate(-180) scale(82.4641 117.924)"
          >
            <stop stop-color="#FF129D" />
            <stop offset="1" stop-color="#000B2D" stop-opacity="0" />
          </radialGradient>
        </defs>
      </svg>
    </div>
    <motion.div className={`icon-box `}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox={icon.viewBox}
        fill="none"
        width="100%"
        height="100%"
      >
        {icon.paths?.map((p, i) => (
          <path key={i} d={p.d} fill={p.fill} />
        ))}
        {icon.strokePaths?.map((d, i) => (
          <path
            key={i}
            d={d}
            stroke="#3DA8FF"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        ))}
      </svg>
    </motion.div>
  </motion.div>
);

// ─── TabGlow Component ────────────────────────────────────────────────────────
const TabGlow = ({ color }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="100%"
    height="129"
    viewBox="0 0 262 129"
    fill="none"
  >
    <g filter="url(#glow-filter)">
      <ellipse
        cx="90.7237"
        cy="24.5054"
        rx="90.7237"
        ry="24.5054"
        transform="matrix(1 0 -0.0210409 0.999779 40.5171 40)"
        fill={`url(#glow-gradient-${color})`}
      />
    </g>
    <defs>
      <filter
        id="glow-filter"
        x="0"
        y="0"
        width="261.45"
        height="129"
        filterUnits="userSpaceOnUse"
      >
        <feFlood floodOpacity="0" result="BackgroundImageFix" />
        <feBlend
          mode="normal"
          in="SourceGraphic"
          in2="BackgroundImageFix"
          result="shape"
        />
        <feGaussianBlur stdDeviation="20" result="effect1_foregroundBlur" />
      </filter>
      <radialGradient
        id={`glow-gradient-${color}`}
        cx="0"
        cy="0"
        r="1"
        gradientTransform="matrix(0.540771 32.0071 -118.391 3.10503 90.7237 24.5054)"
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor={color} />
        <stop offset="1" stopColor="#080C18" stopOpacity="0.06" />
      </radialGradient>
    </defs>
  </svg>
);

// ─── Main Component ───────────────────────────────────────────────────────────
const Work = () => {
  const sectionRef = useRef(null);
  const inView = useInView(sectionRef, { once: true, margin: "-100px" });
  const [activeTab, setActiveTab] = useState(1);

  return (
    <div>
      {/* ─── Globe Section ──────────────────────────────────────────────── */}
      <motion.section
        className="work-section"
        ref={sectionRef}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        variants={containerVariants}
      >
        <div className="netEarthBlock">
          <div className="orditline"></div>
          <motion.img
            src={netearth}
            alt="NetEarth"
            className="work-img"
            variants={globeImgVariants}
          />
          {ICONS.map((icon, index) => (
            <IconBox key={icon.id} icon={icon} index={index} />
          ))}
        </div>
      </motion.section>

      {/* ─── Logo Button ────────────────────────────────────────────────── */}
      <div className="logo-button">
        <GradientButton onClick={() => console.log("clicked")}>
          <img alt="" src={logo} className="logo-img" />
        </GradientButton>
      </div>

      {/* ─── Tabs ───────────────────────────────────────────────────────── */}
      <div className="tabs-main">
        {TABS.map((tab) => (
          <motion.div
            key={tab.id}
            className={`tab ${tab.colorClass} ${activeTab === tab.id ? "active" : ""}`}
            onClick={() => setActiveTab(tab.id)}
          >
            <div className={`top-line top-line-${tab.id + 1}`} />
            <div className="dot-line" />
            <motion.h6
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              transition={{ duration: 0.2 }}
            >
              {tab.label}
            </motion.h6>
            <TabGlow
              color={tab.colorClass === "tab--pink" ? "#FF26D7" : "#7626FF"}
            />
            {activeTab === tab.id && (
              <motion.div
                className="active-line"
                layoutId="active-line"
                transition={{ duration: 0.35, ease: "easeInOut" }}
              />
            )}
          </motion.div>
        ))}
      </div>

      {/* ─── Tab Content ────────────────────────────────────────────────── */}
      <div className="tab-content-main">
        <div className="GlowLTRMain">
          <GlowLTR
            length={200}
            size={90}
            duration={3000}
            color="#1D52FF"
            coreColor="#CED8FF"
            className="GlowLTR"
          />
        </div>

        <AnimatePresence mode="wait">
          {TABS.map((tab) =>
            tab.id === activeTab ? (
              <motion.div
                key={tab.id}
                className="tab-content"
                variants={tabContentVariants}
                initial="hidden"
                animate="visible"
                exit="exit"
              >
                {/* Left Box */}
                <motion.div
                  className="tab-left-box"
                  variants={tabLeftChildVariants}
                >
                  <motion.div className="tab-title" variants={tabTitleVariants}>
                    <img src={tab.icon} alt="" className="tab-title-icon" />
                    <h2>{tab.title}</h2>
                  </motion.div>

                  <motion.p className="tab-desc-1" variants={tabDescVariants}>
                    {tab.description1}
                  </motion.p>

                  <motion.p className="tab-desc-2" variants={tabDescVariants}>
                    {tab.description2}
                  </motion.p>

                  <motion.div variants={tabBtnVariants}>
                    <GradientButton onClick={() => console.log("clicked")}>
                      {tab.buttonLabel}
                    </GradientButton>
                  </motion.div>

                  <div className="left-box-bg-glow">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="589"
                      height="552"
                      viewBox="0 0 589 552"
                      fill="none"
                    >
                      <g opacity="0.5" filter="url(#filter0_f_5293_1722)">
                        <ellipse
                          cx="231.5"
                          cy="276"
                          rx="146"
                          ry="227.5"
                          transform="rotate(-90 231.5 276)"
                          fill="url(#paint0_radial_5293_1722)"
                        />
                      </g>
                      <defs>
                        <filter
                          id="filter0_f_5293_1722"
                          x="-126"
                          y="0"
                          width="715"
                          height="552"
                          filterUnits="userSpaceOnUse"
                          colorInterpolationFilters="sRGB"
                        >
                          <feFlood
                            floodOpacity="0"
                            result="BackgroundImageFix"
                          />
                          <feBlend
                            mode="normal"
                            in="SourceGraphic"
                            in2="BackgroundImageFix"
                            result="shape"
                          />
                          <feGaussianBlur
                            stdDeviation="65"
                            result="effect1_foregroundBlur_5293_1722"
                          />
                        </filter>
                        <radialGradient
                          id="paint0_radial_5293_1722"
                          cx="0"
                          cy="0"
                          r="1"
                          gradientUnits="userSpaceOnUse"
                          gradientTransform="translate(231.5 276) rotate(180) scale(146 227.5)"
                        >
                          <stop stopColor="#1141FF" />
                          <stop offset="1" stopColor="#00050F" />
                        </radialGradient>
                      </defs>
                    </svg>
                  </div>
                </motion.div>

                {/* Glow Divider */}
                <GlowAnimation
                  direction="top-to-bottom"
                  className="top-to-bottom"
                  duration={2000}
                />

                {/* Right Box */}
                <motion.div
                  className="tab-right-box"
                  variants={tabRightChildVariants}
                >
                  {tab.image && Array.isArray(tab.image) && (
                    <div className="tab-image-group">
                      {/* Shine: opacity 0 → 1 only after all images have appeared */}
                      <motion.img
                        src={tabShine}
                        alt=""
                        className="tab-shine"
                        variants={tabShineVariants}
                        initial="hidden"
                        animate="visible"
                        style={{ mixBlendMode: "screen" }}
                      />

                      {/* Shadow SVG */}
                      <div className="tab-img-0-shadow">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="141"
                          height="313"
                          viewBox="0 0 141 313"
                          fill="none"
                        >
                          <g filter="url(#filter0_f_5293_1741)">
                            <ellipse
                              cx="70.2234"
                              cy="156.173"
                              rx="20.2234"
                              ry="106.173"
                              fill="#040C28"
                            />
                          </g>
                          <defs>
                            <filter
                              id="filter0_f_5293_1741"
                              x="0"
                              y="0"
                              width="140.447"
                              height="312.346"
                              filterUnits="userSpaceOnUse"
                              colorInterpolationFilters="sRGB"
                            >
                              <feFlood
                                floodOpacity="0"
                                result="BackgroundImageFix"
                              />
                              <feBlend
                                mode="normal"
                                in="SourceGraphic"
                                in2="BackgroundImageFix"
                                result="shape"
                              />
                              <feGaussianBlur
                                stdDeviation="25"
                                result="effect1_foregroundBlur_5293_1741"
                              />
                            </filter>
                          </defs>
                        </svg>
                      </div>

                      {/* Images: staggered entrance + continuous float loop */}
                      {tab.image.map((img, index) => {
                        const fc = floatConfigs[index] ?? floatConfigs[0];
                        return (
                          <motion.img
                            key={index}
                            src={img}
                            alt={`${tab.title}-${index}`}
                            className={`tab-preview-img tab-img-${index}`}
                            custom={index}
                            variants={tabImgEnterVariants}
                            initial="hidden"
                            animate="visible"
                            whileInView={{
                              y: fc.y,
                              rotate: fc.rotate,
                              transition: {
                                y: {
                                  repeat: Infinity,
                                  repeatType: "reverse",
                                  duration: fc.duration,
                                  delay: fc.delay,
                                  ease: "easeInOut",
                                },
                                rotate: {
                                  repeat: Infinity,
                                  repeatType: "reverse",
                                  duration: fc.duration * 1.2,
                                  delay: fc.delay,
                                  ease: "easeInOut",
                                },
                              },
                            }}
                          />
                        );
                      })}
                    </div>
                  )}
                </motion.div>
              </motion.div>
            ) : null,
          )}
        </AnimatePresence>

        <div className="GlowLTRMain">
          <GlowLTR
            length={200}
            size={90}
            duration={4000}
            color="#1D52FF"
            coreColor="#CED8FF"
            className="GlowLTR"
          />
        </div>
      </div>
    </div>
  );
};

export default Work;
