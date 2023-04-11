import React from "react";

const CartSvg = (props) => {
  const { className } = props;
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="20"
      height="20"
      viewBox="0 0 33 26"
    >
      <path
        d="M31.3993 0.666002C31.3605 0.674877 31.3232 0.689 31.2883 0.707994L27.7443 2.05895C27.6776 2.08336 27.6177 2.12335 27.5695 2.17552C27.5214 2.22769 27.4863 2.29058 27.4673 2.35899L26.6783 5.18797H1.31529C1.28769 5.18529 1.25989 5.18529 1.23229 5.18797C1.17195 5.19907 1.11457 5.22258 1.06379 5.25701C1.01301 5.29143 0.969932 5.33604 0.93729 5.38799C0.904745 5.44118 0.883431 5.50044 0.87466 5.56218C0.865889 5.62392 0.869847 5.68684 0.886289 5.747L4.43029 19.258C4.45391 19.3541 4.50895 19.4395 4.58667 19.5007C4.6644 19.562 4.76034 19.5955 4.85929 19.596H7.12929C6.83124 19.8904 6.59459 20.2411 6.43306 20.6277C6.27153 21.0142 6.18833 21.429 6.18829 21.8479C6.18829 22.255 6.26847 22.6582 6.42426 23.0343C6.58005 23.4104 6.8084 23.7522 7.09626 24.04C7.38412 24.3279 7.72586 24.5562 8.10197 24.712C8.47808 24.8678 8.88119 24.948 9.28829 24.948C9.69539 24.948 10.0985 24.8678 10.4746 24.712C10.8507 24.5562 11.1925 24.3279 11.4803 24.04C11.7682 23.7522 11.9965 23.4104 12.1523 23.0343C12.3081 22.6582 12.3883 22.255 12.3883 21.8479C12.3882 21.429 12.3051 21.0142 12.1435 20.6277C11.982 20.2411 11.7453 19.8904 11.4473 19.596H16.8753C16.5772 19.8904 16.3406 20.2411 16.1791 20.6277C16.0175 21.0142 15.9343 21.429 15.9343 21.8479C15.9343 22.255 16.0145 22.6582 16.1703 23.0343C16.3261 23.4104 16.5544 23.7522 16.8423 24.04C17.1301 24.3279 17.4719 24.5562 17.848 24.712C18.2241 24.8678 18.6272 24.948 19.0343 24.948C19.4414 24.948 19.8445 24.8678 20.2206 24.712C20.5967 24.5562 20.9385 24.3279 21.2263 24.04C21.5142 23.7522 21.7425 23.4104 21.8983 23.0343C22.0541 22.6582 22.1343 22.255 22.1343 21.8479C22.1342 21.429 22.0511 21.0142 21.8895 20.6277C21.728 20.2411 21.4913 19.8904 21.1933 19.596H23.4633C23.5622 19.5955 23.6582 19.562 23.7359 19.5007C23.8136 19.4395 23.8687 19.3541 23.8923 19.258L27.4363 5.747C27.4421 5.72865 27.4468 5.70991 27.4503 5.69097L28.2503 2.81999L31.5863 1.55296C31.6989 1.52705 31.7972 1.45879 31.8609 1.36235C31.9246 1.26592 31.9487 1.1487 31.9283 1.03496C31.9098 0.921252 31.8478 0.819206 31.7554 0.750352C31.6631 0.681499 31.5475 0.651271 31.4333 0.666002H31.3913H31.3993ZM1.89929 6.08495H26.4283L23.1203 18.7H5.20529L1.89629 6.08995L1.89929 6.08495ZM14.1103 8.32298C13.9993 8.33787 13.898 8.39372 13.8262 8.4796C13.7544 8.56548 13.7173 8.67514 13.7223 8.78697V11.94H10.6223C10.5947 11.9374 10.5669 11.9374 10.5393 11.94C10.4217 11.9532 10.314 12.012 10.2393 12.1037C10.1646 12.1955 10.1288 12.3128 10.1397 12.4306C10.1506 12.5485 10.2072 12.6573 10.2974 12.7339C10.3876 12.8104 10.5043 12.8485 10.6223 12.84H13.7223V15.992C13.7223 16.1095 13.769 16.2221 13.852 16.3052C13.9351 16.3883 14.0478 16.435 14.1653 16.435C14.2828 16.435 14.3955 16.3883 14.4785 16.3052C14.5616 16.2221 14.6083 16.1095 14.6083 15.992V12.84H17.7083C17.8225 12.8323 17.9295 12.7817 18.0076 12.6981C18.0858 12.6146 18.1293 12.5044 18.1293 12.39C18.1293 12.2756 18.0858 12.1654 18.0076 12.0818C17.9295 11.9983 17.8225 11.9476 17.7083 11.94H14.6083V8.78697C14.611 8.72178 14.5996 8.65676 14.575 8.59636C14.5503 8.53596 14.5129 8.48164 14.4653 8.437C14.4178 8.39263 14.3611 8.35936 14.2991 8.33965C14.2372 8.31993 14.1717 8.31424 14.1073 8.32298H14.1103ZM9.28929 19.6C9.7362 19.5926 10.1752 19.7185 10.5504 19.9614C10.9255 20.2044 11.2199 20.5534 11.3961 20.9642C11.5722 21.375 11.6221 21.8289 11.5394 22.2682C11.4568 22.7074 11.2453 23.1122 10.9318 23.4308C10.6184 23.7495 10.2172 23.9677 9.77942 24.0576C9.3416 24.1475 8.88691 24.1051 8.47325 23.9358C8.05959 23.7665 7.70567 23.478 7.45654 23.1069C7.20741 22.7358 7.07435 22.2989 7.07429 21.852C7.07099 21.5584 7.12576 21.2672 7.23545 20.9949C7.34514 20.7226 7.50758 20.4746 7.71343 20.2653C7.91929 20.056 8.16449 19.8895 8.43493 19.7753C8.70538 19.6611 8.99573 19.6015 9.28929 19.6ZM19.0353 19.6C19.4822 19.5926 19.9212 19.7185 20.2964 19.9614C20.6715 20.2044 20.9659 20.5534 21.1421 20.9642C21.3182 21.375 21.3681 21.8289 21.2854 22.2682C21.2028 22.7074 20.9913 23.1122 20.6778 23.4308C20.3644 23.7495 19.9632 23.9677 19.5254 24.0576C19.0876 24.1475 18.6329 24.1051 18.2192 23.9358C17.8056 23.7665 17.4517 23.478 17.2025 23.1069C16.9534 22.7358 16.8203 22.2989 16.8203 21.852C16.817 21.5583 16.8718 21.267 16.9815 20.9946C17.0913 20.7222 17.2538 20.4742 17.4598 20.2649C17.6657 20.0556 17.9111 19.8891 18.1816 19.775C18.4522 19.6609 18.7426 19.6014 19.0363 19.6H19.0353Z"
        fill="#101940"
        stroke="#101940"
        stroke-width="0.75"
        className={className && className}
      />
      <path
        d="M31.3993 0.666002C31.3605 0.674877 31.3232 0.689 31.2883 0.707994L27.7443 2.05895C27.6776 2.08336 27.6177 2.12335 27.5695 2.17552C27.5214 2.22769 27.4863 2.29058 27.4673 2.35899L26.6783 5.18797H1.31529C1.28769 5.18529 1.25989 5.18529 1.23229 5.18797C1.17195 5.19907 1.11457 5.22258 1.06379 5.25701C1.01301 5.29143 0.969932 5.33604 0.93729 5.38799C0.904745 5.44118 0.883431 5.50044 0.87466 5.56218C0.865889 5.62392 0.869847 5.68684 0.886289 5.747L4.43029 19.258C4.45391 19.3541 4.50895 19.4395 4.58667 19.5007C4.6644 19.562 4.76034 19.5955 4.85929 19.596H7.12929C6.83124 19.8904 6.59459 20.2411 6.43306 20.6277C6.27153 21.0142 6.18833 21.429 6.18829 21.8479C6.18829 22.255 6.26847 22.6582 6.42426 23.0343C6.58005 23.4104 6.8084 23.7522 7.09626 24.04C7.38412 24.3279 7.72586 24.5562 8.10197 24.712C8.47808 24.8678 8.88119 24.948 9.28829 24.948C9.69539 24.948 10.0985 24.8678 10.4746 24.712C10.8507 24.5562 11.1925 24.3279 11.4803 24.04C11.7682 23.7522 11.9965 23.4104 12.1523 23.0343C12.3081 22.6582 12.3883 22.255 12.3883 21.8479C12.3882 21.429 12.3051 21.0142 12.1435 20.6277C11.982 20.2411 11.7453 19.8904 11.4473 19.596H16.8753C16.5772 19.8904 16.3406 20.2411 16.1791 20.6277C16.0175 21.0142 15.9343 21.429 15.9343 21.8479C15.9343 22.255 16.0145 22.6582 16.1703 23.0343C16.3261 23.4104 16.5544 23.7522 16.8423 24.04C17.1301 24.3279 17.4719 24.5562 17.848 24.712C18.2241 24.8678 18.6272 24.948 19.0343 24.948C19.4414 24.948 19.8445 24.8678 20.2206 24.712C20.5967 24.5562 20.9385 24.3279 21.2263 24.04C21.5142 23.7522 21.7425 23.4104 21.8983 23.0343C22.0541 22.6582 22.1343 22.255 22.1343 21.8479C22.1342 21.429 22.0511 21.0142 21.8895 20.6277C21.728 20.2411 21.4913 19.8904 21.1933 19.596H23.4633C23.5622 19.5955 23.6582 19.562 23.7359 19.5007C23.8136 19.4395 23.8687 19.3541 23.8923 19.258L27.4363 5.747C27.4421 5.72865 27.4468 5.70991 27.4503 5.69097L28.2503 2.81999L31.5863 1.55296C31.6989 1.52705 31.7972 1.45879 31.8609 1.36235C31.9246 1.26592 31.9487 1.1487 31.9283 1.03496C31.9098 0.921252 31.8478 0.819206 31.7554 0.750352C31.6631 0.681499 31.5475 0.651271 31.4333 0.666002H31.3913H31.3993ZM1.89929 6.08495H26.4283L23.1203 18.7H5.20529L1.89629 6.08995L1.89929 6.08495ZM14.1103 8.32298C13.9993 8.33787 13.898 8.39372 13.8262 8.4796C13.7544 8.56548 13.7173 8.67514 13.7223 8.78697V11.94H10.6223C10.5947 11.9374 10.5669 11.9374 10.5393 11.94C10.4217 11.9532 10.314 12.012 10.2393 12.1037C10.1646 12.1955 10.1288 12.3128 10.1397 12.4306C10.1506 12.5485 10.2072 12.6573 10.2974 12.7339C10.3876 12.8104 10.5043 12.8485 10.6223 12.84H13.7223V15.992C13.7223 16.1095 13.769 16.2221 13.852 16.3052C13.9351 16.3883 14.0478 16.435 14.1653 16.435C14.2828 16.435 14.3955 16.3883 14.4785 16.3052C14.5616 16.2221 14.6083 16.1095 14.6083 15.992V12.84H17.7083C17.8225 12.8323 17.9295 12.7817 18.0076 12.6981C18.0858 12.6146 18.1293 12.5044 18.1293 12.39C18.1293 12.2756 18.0858 12.1654 18.0076 12.0818C17.9295 11.9983 17.8225 11.9476 17.7083 11.94H14.6083V8.78697C14.611 8.72178 14.5996 8.65676 14.575 8.59636C14.5503 8.53596 14.5129 8.48164 14.4653 8.437C14.4178 8.39263 14.3611 8.35936 14.2991 8.33965C14.2372 8.31993 14.1717 8.31424 14.1073 8.32298H14.1103ZM9.28929 19.6C9.7362 19.5926 10.1752 19.7185 10.5504 19.9614C10.9255 20.2044 11.2199 20.5534 11.3961 20.9642C11.5722 21.375 11.6221 21.8289 11.5394 22.2682C11.4568 22.7074 11.2453 23.1122 10.9318 23.4308C10.6184 23.7495 10.2172 23.9677 9.77942 24.0576C9.3416 24.1475 8.88691 24.1051 8.47325 23.9358C8.05959 23.7665 7.70567 23.478 7.45654 23.1069C7.20741 22.7358 7.07435 22.2989 7.07429 21.852C7.07099 21.5584 7.12576 21.2672 7.23545 20.9949C7.34514 20.7226 7.50758 20.4746 7.71343 20.2653C7.91929 20.056 8.16449 19.8895 8.43493 19.7753C8.70538 19.6611 8.99573 19.6015 9.28929 19.6ZM19.0353 19.6C19.4822 19.5926 19.9212 19.7185 20.2964 19.9614C20.6715 20.2044 20.9659 20.5534 21.1421 20.9642C21.3182 21.375 21.3681 21.8289 21.2854 22.2682C21.2028 22.7074 20.9913 23.1122 20.6778 23.4308C20.3644 23.7495 19.9632 23.9677 19.5254 24.0576C19.0876 24.1475 18.6329 24.1051 18.2192 23.9358C17.8056 23.7665 17.4517 23.478 17.2025 23.1069C16.9534 22.7358 16.8203 22.2989 16.8203 21.852C16.817 21.5583 16.8718 21.267 16.9815 20.9946C17.0913 20.7222 17.2538 20.4742 17.4598 20.2649C17.6657 20.0556 17.9111 19.8891 18.1816 19.775C18.4522 19.6609 18.7426 19.6014 19.0363 19.6H19.0353Z"
        fill="#101940"
        stroke="#101940"
        stroke-width="0.75"
        className={className && className}
      />
    </svg>
  );
};

export default CartSvg;
