import React from "react";
import noop from "lodash/noop";
import { renderWithTheme } from "../../testHelpers";
import ConnectModal from "../../widgets/WalletModal/ConnectModal";
import AccountModal from "../../widgets/WalletModal/AccountModal";

it("renders ConnectModal correctly", () => {
  const { asFragment } = renderWithTheme(<ConnectModal login={noop} />);
  expect(asFragment()).toMatchInlineSnapshot(`
    <DocumentFragment>
      <div
        class="sc-fubCfw bVmofg"
      >
        <div
          class="sc-pFZIQ QVCVy"
        >
          <div
            class="sc-eCssSg sc-jSgupP sc-jrAGrp jnvqfy cjuMmG eYDuGd"
          >
            <h2
              class="sc-bdfBwQ sc-hKgILt gWEhOj bCnOmg"
              color="text"
            >
              Connect to a wallet
            </h2>
          </div>
          <button
            aria-label="Close the dialog"
            class="sc-gKsewC ctjIRe sc-iBPRYJ ifcXSU"
            scale="md"
          >
            <svg
              class="sc-dlfnbm kPlhyw"
              color="primary"
              viewBox="0 0 24 24"
              width="20px"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M18.3 5.70997C17.91 5.31997 17.28 5.31997 16.89 5.70997L12 10.59L7.10997 5.69997C6.71997 5.30997 6.08997 5.30997 5.69997 5.69997C5.30997 6.08997 5.30997 6.71997 5.69997 7.10997L10.59 12L5.69997 16.89C5.30997 17.28 5.30997 17.91 5.69997 18.3C6.08997 18.69 6.71997 18.69 7.10997 18.3L12 13.41L16.89 18.3C17.28 18.69 17.91 18.69 18.3 18.3C18.69 17.91 18.69 17.28 18.3 16.89L13.41 12L18.3 7.10997C18.68 6.72997 18.68 6.08997 18.3 5.70997Z"
              />
            </svg>
          </button>
        </div>
        <div
          class="sc-eCssSg sc-jSgupP eYcDys jMcUDu"
        >
          <button
            class="sc-gKsewC jXrrij"
            id="wallet-connect-metamask"
            scale="md"
            style="justify-content: space-between;"
            width="100%"
          >
            <div
              class="sc-bdfBwQ fEwDKZ"
              color="primary"
            >
              Metamask
            </div>
            <svg
              class="sc-dlfnbm cqTLJf"
              color="text"
              viewBox="0 0 96 96"
              width="32px"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle
                cx="48"
                cy="48"
                fill="white"
                r="48"
              />
              <path
                d="M77.7602 16.9155L51.9419 36.0497L56.7382 24.7733L77.7602 16.9155Z"
                fill="#E17726"
              />
              <path
                d="M18.2656 16.9155L43.8288 36.2283L39.2622 24.7733L18.2656 16.9155Z"
                fill="#E27625"
              />
              <path
                d="M68.4736 61.2808L61.6108 71.7918L76.3059 75.8482L80.4899 61.5104L68.4736 61.2808Z"
                fill="#E27625"
              />
              <path
                d="M15.5356 61.5104L19.6941 75.8482L34.3892 71.7918L27.5519 61.2808L15.5356 61.5104Z"
                fill="#E27625"
              />
              <path
                d="M33.5984 43.5251L29.491 49.699L44.0584 50.3624L43.5482 34.6724L33.5984 43.5251Z"
                fill="#E27625"
              />
              <path
                d="M62.4274 43.525L52.2991 34.4937L51.9419 50.3622L66.5094 49.6989L62.4274 43.525Z"
                fill="#E27625"
              />
              <path
                d="M34.3892 71.7922L43.1654 67.5316L35.6137 61.6128L34.3892 71.7922Z"
                fill="#E27625"
              />
              <path
                d="M52.8345 67.5316L61.6107 71.7922L60.3861 61.6128L52.8345 67.5316Z"
                fill="#E27625"
              />
              <path
                d="M61.6107 71.7923L52.8345 67.5317L53.5233 73.2465L53.4468 75.6446L61.6107 71.7923Z"
                fill="#D5BFB2"
              />
              <path
                d="M34.3892 71.7923L42.5531 75.6446L42.502 73.2465L43.1654 67.5317L34.3892 71.7923Z"
                fill="#D5BFB2"
              />
              <path
                d="M42.7062 57.8369L35.4097 55.6939L40.5631 53.3213L42.7062 57.8369Z"
                fill="#233447"
              />
              <path
                d="M53.2937 57.8369L55.4367 53.3213L60.6412 55.6939L53.2937 57.8369Z"
                fill="#233447"
              />
              <path
                d="M34.3893 71.7918L35.6649 61.2808L27.552 61.5104L34.3893 71.7918Z"
                fill="#CC6228"
              />
              <path
                d="M60.3352 61.2808L61.6108 71.7918L68.4736 61.5104L60.3352 61.2808Z"
                fill="#CC6228"
              />
              <path
                d="M66.5094 49.6987L51.9419 50.362L53.294 57.8371L55.4371 53.3215L60.6416 55.6941L66.5094 49.6987Z"
                fill="#CC6228"
              />
              <path
                d="M35.4098 55.6941L40.5633 53.3215L42.7063 57.8371L44.0584 50.362L29.491 49.6987L35.4098 55.6941Z"
                fill="#CC6228"
              />
              <path
                d="M29.491 49.6987L35.6139 61.6129L35.4098 55.6941L29.491 49.6987Z"
                fill="#E27525"
              />
              <path
                d="M60.6414 55.6941L60.3862 61.6129L66.5092 49.6987L60.6414 55.6941Z"
                fill="#E27525"
              />
              <path
                d="M44.0584 50.3618L42.7063 57.8369L44.4156 66.6641L44.7728 55.0305L44.0584 50.3618Z"
                fill="#E27525"
              />
              <path
                d="M51.9415 50.3618L51.2527 55.005L51.5843 66.6641L53.2937 57.8369L51.9415 50.3618Z"
                fill="#E27525"
              />
              <path
                d="M53.2938 57.8374L51.5845 66.6646L52.8346 67.532L60.3862 61.6132L60.6413 55.6943L53.2938 57.8374Z"
                fill="#F5841F"
              />
              <path
                d="M35.4097 55.6943L35.6138 61.6132L43.1654 67.532L44.4155 66.6646L42.7062 57.8374L35.4097 55.6943Z"
                fill="#F5841F"
              />
              <path
                d="M53.4468 75.6443L53.5233 73.2462L52.8855 72.6849H43.1143L42.502 73.2462L42.5531 75.6443L34.3892 71.792L37.2465 74.1391L43.0378 78.1445H52.962L58.7533 74.1391L61.6107 71.792L53.4468 75.6443Z"
                fill="#C0AC9D"
              />
              <path
                d="M52.8346 67.5315L51.5845 66.6641H44.4156L43.1655 67.5315L42.5022 73.2462L43.1145 72.6849H52.8857L53.5235 73.2462L52.8346 67.5315Z"
                fill="#161616"
              />
              <path
                d="M78.8314 37.2998L80.9999 26.7377L77.7599 16.9155L52.8345 35.4119L62.4271 43.5247L75.9485 47.4791L78.9335 43.984L77.6323 43.04L79.7243 41.1521L78.1426 39.902L80.2091 38.3458L78.8314 37.2998Z"
                fill="#763E1A"
              />
              <path
                d="M15 26.7377L17.194 37.2998L15.7909 38.3458L17.8574 39.902L16.2756 41.1521L18.3676 43.04L17.0665 43.984L20.0514 47.4791L33.5984 43.5247L43.1655 35.4119L18.2656 16.9155L15 26.7377Z"
                fill="#763E1A"
              />
              <path
                d="M75.9487 47.4793L62.4272 43.5249L66.5092 49.6989L60.3862 61.613L68.4736 61.511H80.4898L75.9487 47.4793Z"
                fill="#F5841F"
              />
              <path
                d="M33.5983 43.5249L20.0513 47.4793L15.5356 61.511H27.5519L35.6137 61.613L29.4908 49.6989L33.5983 43.5249Z"
                fill="#F5841F"
              />
              <path
                d="M51.9415 50.3617L52.8344 35.4115L56.7378 24.7729H39.262L43.1653 35.4115L44.0583 50.3617L44.3899 55.0559L44.4154 66.664H51.5843L51.6099 55.0559L51.9415 50.3617Z"
                fill="#F5841F"
              />
            </svg>
          </button>
          <button
            class="sc-gKsewC jXrrij"
            id="wallet-connect-trustwallet"
            scale="md"
            style="justify-content: space-between;"
            width="100%"
          >
            <div
              class="sc-bdfBwQ fEwDKZ"
              color="primary"
            >
              TrustWallet
            </div>
            <svg
              class="sc-dlfnbm cqTLJf"
              color="text"
              viewBox="0 0 96 96"
              width="32px"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g
                clip-path="url(#clip0)"
              >
                <path
                  d="M48.0048 96.0097C74.5172 96.0097 96.0097 74.5172 96.0097 48.0048C96.0097 21.4925 74.5172 0 48.0048 0C21.4925 0 0 21.4925 0 48.0048C0 74.5172 21.4925 96.0097 48.0048 96.0097Z"
                  fill="#3375BB"
                />
                <path
                  d="M48.0048 22.8922L49.3179 21.1833C48.9399 20.8928 48.4766 20.7354 48 20.7354C47.5233 20.7354 47.06 20.8928 46.682 21.1833L48.0048 22.8922ZM70.5783 29.5252H72.7313C72.7352 29.2396 72.6824 28.9561 72.576 28.6909C72.4696 28.4258 72.3118 28.1844 72.1116 27.9806C71.9114 27.7769 71.6729 27.6148 71.4097 27.5037C71.1465 27.3926 70.8639 27.3348 70.5783 27.3335V29.5252ZM48.0048 75.6377L46.8076 77.4335C47.1604 77.6697 47.5754 77.7958 48 77.7958C48.4245 77.7958 48.8395 77.6697 49.1924 77.4335L48.0048 75.6377ZM25.4506 29.5252V27.3625C25.165 27.3638 24.8824 27.4216 24.6192 27.5327C24.356 27.6437 24.1175 27.8058 23.9173 28.0096C23.7171 28.2134 23.5593 28.4548 23.4529 28.7199C23.3465 28.985 23.2937 29.2686 23.2976 29.5542L25.4506 29.5252ZM46.6917 24.5915C56.4626 32.1611 67.6528 31.6783 70.5879 31.6783V27.3625C67.5466 27.3625 57.8047 27.7487 49.3468 21.1833L46.6917 24.5915ZM68.4348 29.4866C68.2707 39.4892 67.8459 46.5471 67.0349 51.7704C66.2238 56.9938 65.1039 60.0448 63.6266 62.2268C62.1494 64.4089 60.257 65.8282 57.486 67.4792C54.715 69.1302 51.1716 70.9646 46.8076 73.8515L49.2406 77.4335C53.373 74.6818 56.8102 72.9246 59.7357 71.1771C62.6835 69.5717 65.2416 67.3367 67.228 64.6309C69.159 61.7344 70.4817 57.8724 71.3314 52.427C72.181 46.9815 72.6155 39.6534 72.7796 29.5542L68.4348 29.4866ZM49.2406 73.8515C44.9055 70.955 41.3718 69.1592 38.6201 67.4888C35.8684 65.8185 33.976 64.4861 32.4892 62.2268C31.0023 59.9676 29.7954 56.9648 28.9651 51.7704C28.1347 46.576 27.7678 39.4892 27.6037 29.4866L23.2976 29.5542C23.4617 39.6534 23.9058 47.0009 24.7458 52.427C25.5858 57.8531 26.8699 61.7151 28.8395 64.6309C30.8164 67.3382 33.3686 69.5739 36.3125 71.1771C39.2091 72.9246 42.6752 74.6818 46.8076 77.4335L49.2406 73.8515ZM25.4506 31.6783C28.3471 31.6783 39.547 32.1611 49.3179 24.5915L46.682 21.1833C38.2049 27.7487 28.463 27.3625 25.441 27.3625L25.4506 31.6783Z"
                  fill="white"
                />
              </g>
              <defs>
                <clippath
                  id="clip0"
                >
                  <rect
                    fill="white"
                    height="96"
                    width="96"
                  />
                </clippath>
              </defs>
            </svg>
          </button>
          <a
            class="sc-bdfBwQ sc-gsTCUz eiaRqE djpNeP sc-crrsfI dwTIxE"
            color="primary"
            href="https://docs.pancakeswap.finance/guides/faq#how-do-i-set-up-my-wallet-on-binance-smart-chain"
            rel="noreferrer noopener"
            target="_blank"
          >
            <svg
              class="sc-dlfnbm gYbuYc"
              color="primary"
              viewBox="0 0 24 24"
              width="20px"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM12 20C7.59 20 4 16.41 4 12C4 7.59 7.59 4 12 4C16.41 4 20 7.59 20 12C20 16.41 16.41 20 12 20ZM11 16H13V18H11V16ZM12.61 6.04C10.55 5.74 8.73 7.01 8.18 8.83C8 9.41 8.44 10 9.05 10H9.25C9.66 10 9.99 9.71 10.13 9.33C10.45 8.44 11.4 7.83 12.43 8.05C13.38 8.25 14.08 9.18 14 10.15C13.9 11.49 12.38 11.78 11.55 13.03C11.55 13.04 11.54 13.04 11.54 13.05C11.53 13.07 11.52 13.08 11.51 13.1C11.42 13.25 11.33 13.42 11.26 13.6C11.25 13.63 11.23 13.65 11.22 13.68C11.21 13.7 11.21 13.72 11.2 13.75C11.08 14.09 11 14.5 11 15H13C13 14.58 13.11 14.23 13.28 13.93C13.3 13.9 13.31 13.87 13.33 13.84C13.41 13.7 13.51 13.57 13.61 13.45C13.62 13.44 13.63 13.42 13.64 13.41C13.74 13.29 13.85 13.18 13.97 13.07C14.93 12.16 16.23 11.42 15.96 9.51C15.72 7.77 14.35 6.3 12.61 6.04Z"
              />
            </svg>
            Learn how to connect
          </a>
        </div>
      </div>
    </DocumentFragment>
  `);
});

it("renders AccountModal correctly", () => {
  const { asFragment } = renderWithTheme(
    <AccountModal account="0xb218C5D6aF1F979aC42BC68d98A5A0D796C6aB01" logout={noop} />
  );
  expect(asFragment()).toMatchInlineSnapshot(`
    <DocumentFragment>
      <div
        class="sc-fubCfw bVmofg"
      >
        <div
          class="sc-pFZIQ QVCVy"
        >
          <div
            class="sc-eCssSg sc-jSgupP sc-jrAGrp jnvqfy cjuMmG eYDuGd"
          >
            <h2
              class="sc-bdfBwQ sc-hKgILt gWEhOj bCnOmg"
              color="text"
            >
              Your wallet
            </h2>
          </div>
          <button
            aria-label="Close the dialog"
            class="sc-gKsewC ctjIRe sc-iBPRYJ ifcXSU"
            scale="md"
          >
            <svg
              class="sc-dlfnbm kPlhyw"
              color="primary"
              viewBox="0 0 24 24"
              width="20px"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M18.3 5.70997C17.91 5.31997 17.28 5.31997 16.89 5.70997L12 10.59L7.10997 5.69997C6.71997 5.30997 6.08997 5.30997 5.69997 5.69997C5.30997 6.08997 5.30997 6.71997 5.69997 7.10997L10.59 12L5.69997 16.89C5.30997 17.28 5.30997 17.91 5.69997 18.3C6.08997 18.69 6.71997 18.69 7.10997 18.3L12 13.41L16.89 18.3C17.28 18.69 17.91 18.69 18.3 18.3C18.69 17.91 18.69 17.28 18.3 16.89L13.41 12L18.3 7.10997C18.68 6.72997 18.68 6.08997 18.3 5.70997Z"
              />
            </svg>
          </button>
        </div>
        <div
          class="sc-eCssSg sc-jSgupP eYcDys jMcUDu"
        >
          <div
            class="sc-bdfBwQ krzIlW"
            color="text"
            font-size="20px"
            style="white-space: nowrap; overflow: hidden; text-overflow: ellipsis; margin-bottom: 8px;"
          >
            0xb218C5D6aF1F979aC42BC68d98A5A0D796C6aB01
          </div>
          <div
            class="sc-eCssSg sc-jSgupP eHoxAW cjuMmG"
          >
            <a
              class="sc-bdfBwQ sc-gsTCUz bnSWIP djpNeP"
              color="primary"
              href="https://bscscan.com/address/0xb218C5D6aF1F979aC42BC68d98A5A0D796C6aB01"
              rel="noreferrer noopener"
              target="_blank"
            >
              View on Brisescan
              <svg
                class="sc-dlfnbm dJUqYR"
                color="primary"
                viewBox="0 0 24 24"
                width="20px"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M18 19H6C5.45 19 5 18.55 5 18V6C5 5.45 5.45 5 6 5H11C11.55 5 12 4.55 12 4C12 3.45 11.55 3 11 3H5C3.89 3 3 3.9 3 5V19C3 20.1 3.9 21 5 21H19C20.1 21 21 20.1 21 19V13C21 12.45 20.55 12 20 12C19.45 12 19 12.45 19 13V18C19 18.55 18.55 19 18 19ZM14 4C14 4.55 14.45 5 15 5H17.59L8.46 14.13C8.07 14.52 8.07 15.15 8.46 15.54C8.85 15.93 9.48 15.93 9.87 15.54L19 6.41V9C19 9.55 19.45 10 20 10C20.55 10 21 9.55 21 9V4C21 3.45 20.55 3 20 3H15C14.45 3 14 3.45 14 4Z"
                />
              </svg>
            </a>
            <div
              class="sc-bdfBwQ sc-dQppl czOnMt bIwdCo"
              color="text"
              role="button"
            >
              Copy Address
              <svg
                class="sc-dlfnbm dJUqYR"
                color="primary"
                viewBox="0 0 24 24"
                width="20px"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M15 1H4C2.9 1 2 1.9 2 3V16C2 16.55 2.45 17 3 17C3.55 17 4 16.55 4 16V4C4 3.45 4.45 3 5 3H15C15.55 3 16 2.55 16 2C16 1.45 15.55 1 15 1ZM19 5H8C6.9 5 6 5.9 6 7V21C6 22.1 6.9 23 8 23H19C20.1 23 21 22.1 21 21V7C21 5.9 20.1 5 19 5ZM18 21H9C8.45 21 8 20.55 8 20V8C8 7.45 8.45 7 9 7H18C18.55 7 19 7.45 19 8V20C19 20.55 18.55 21 18 21Z"
                />
              </svg>
              <div
                class="sc-bqyKva idsmeh"
              >
                Copied
              </div>
            </div>
          </div>
          <div
            class="sc-eCssSg sc-jSgupP jnvqfy fvYwlu"
          >
            <button
              class="sc-gKsewC esAjJs"
              scale="sm"
            >
              Logout
            </button>
          </div>
        </div>
      </div>
    </DocumentFragment>
  `);
});
