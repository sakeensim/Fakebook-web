export const FacebookTitle = (props) => {
    return (
      <svg
        width="200"
        height="50"
        viewBox="0 0 200 50"
        xmlns="http://www.w3.org/2000/svg"
        {...props}
      >
        <text
          x="10"
          y="40"
          fontFamily="Arial, sans-serif"
          fontSize="40"
          fontWeight="bold"
          fill="#1877F2"
        >
          Fakebook
        </text>
      </svg>
    );
  };

  export function FacebookLogo(props) {
    return (
      <svg
      viewBox="126.445 2.281 589 589"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <circle cx={420.945} cy={296.781} r={294.5} fill="#004ffa" />
      <path
        d="M516.704 92.677h-65.239c-38.715 0-81.777 16.283-81.777 72.402.189 19.554 0 38.281 0 59.357H324.9v71.271h46.174v205.177h84.847V294.353h56.002l5.067-70.117h-62.531s.14-31.191 0-40.249c0-22.177 23.076-20.907 24.464-20.907 10.981 0 32.332.032 37.813 0V92.677h-.032z"
        fill="#fff"
      />
    </svg>
    )
  }

  export function SearchIcon(props) {
    return (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        {...props}
      >
        <path
          d="M15.796 15.811L21 21m-3-10.5a7.5 7.5 0 11-15 0 7.5 7.5 0 0115 0z"
          stroke="#000"
          strokeWidth={2}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    )
  }

  export function HomeIcon (props) {
    return (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        {...props}
      >
        <g stroke="#1C274C" strokeWidth={1.5}>
          <path
            d="M22 22H2M2 11l8.126-6.5a3 3 0 013.748 0L22 11"
            strokeLinecap="round"
          />
          <path
            opacity={0.5}
            d="M15.5 5.5v-2A.5.5 0 0116 3h2.5a.5.5 0 01.5.5v5"
            strokeLinecap="round"
          />
          <path d="M4 22V9.5M20 22V9.5" strokeLinecap="round" />
          <path
            opacity={0.5}
            d="M15 22v-5c0-1.414 0-2.121-.44-2.56C14.122 14 13.415 14 12 14c-1.414 0-2.121 0-2.56.44C9 14.878 9 15.585 9 17v5M14 9.5a2 2 0 11-4 0 2 2 0 014 0z"
          />
        </g>
      </svg>
    )
  }

  export function PlayIcon(props) {
    return (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        {...props}
      >
        <path
          d="M16.658 9.286c1.44.9 2.16 1.35 2.407 1.926a2 2 0 010 1.576c-.247.576-.967 1.026-2.407 1.926L9.896 18.94c-1.598.999-2.397 1.498-3.056 1.445a2 2 0 01-1.446-.801C5 19.053 5 18.111 5 16.226V7.774c0-1.885 0-2.827.394-3.358a2 2 0 011.446-.801c.66-.053 1.458.446 3.056 1.445l6.762 4.226z"
          stroke="#000"
          strokeWidth={2}
          strokeLinejoin="round"
        />
      </svg>
    )
  }

  export function MarketIcon(props) {
    return (
      <svg
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <g stroke="#1C274C" strokeWidth={1.5}>
        <path d="M22 22H2M20 22V11M4 22V11" strokeLinecap="round" />
        <path
          d="M16.528 2H7.472c-1.203 0-1.804 0-2.287.299-.484.298-.753.836-1.29 1.912L2.49 7.76c-.324.82-.608 1.786-.062 2.479A2 2 0 006 9a2 2 0 104 0 2 2 0 104 0 2 2 0 104 0 2 2 0 003.571 1.238c.546-.693.262-1.659-.062-2.479l-1.404-3.548c-.537-1.076-.806-1.614-1.29-1.912C18.332 2 17.731 2 16.528 2z"
          strokeLinejoin="round"
        />
        <path
          d="M9.5 21.5v-3c0-.935 0-1.402.201-1.75a1.5 1.5 0 01.549-.549C10.598 16 11.065 16 12 16s1.402 0 1.75.201a1.5 1.5 0 01.549.549c.201.348.201.815.201 1.75v3"
          strokeLinecap="round"
        />
      </g>
    </svg>
    )
  }

  export function FriendsIcon(props) {
    return (
      <svg
        viewBox="0 0 64 64"
        xmlns="http://www.w3.org/2000/svg"
        strokeWidth={3}
        stroke="#000"
        fill="none"
        {...props}
      >
        <circle cx={22.83} cy={22.57} r={7.51} />
        <path d="M38 49.94a15.2 15.2 0 00-15.21-15.2h0a15.2 15.2 0 00-15.2 15.2z" />
        <circle cx={44.13} cy={27.22} r={6.05} />
        <path d="M42.4 49.94h14A12.24 12.24 0 0044.13 37.7h0a12.21 12.21 0 00-5.75 1.43" />
      </svg>
    )
  }

  export function MenuIcon(props) {
    return (
      <svg viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" {...props}>
        <path
          d="M0 0h4v4H0V0zm0 6h4v4H0V6zm0 6h4v4H0v-4zM6 0h4v4H6V0zm0 6h4v4H6V6zm0 6h4v4H6v-4zm6-12h4v4h-4V0zm0 6h4v4h-4V6zm0 6h4v4h-4v-4z"
          fillRule="evenodd"
        />
      </svg>
    )
  }

  export function MassengerIcon(props) {
    return (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        {...props}
      >
        <g fill="#0F0F0F">
          <path d="M17.3 9.6a1 1 0 10-1.6-1.2l-2.308 3.078-2.185-2.185A1 1 0 009.7 9.4l-3 4a1 1 0 001.6 1.2l2.308-3.078 2.185 2.185A1 1 0 0014.3 13.6l3-4z" />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M12 23c-1.224 0-1.9-.131-3-.5l-2.106 1.053A2 2 0 014 21.763V19.5c-2.153-2.008-3-4.323-3-7.5C1 5.925 5.925 1 12 1s11 4.925 11 11-4.925 11-11 11zm-6-4.37l-.636-.593C3.691 16.477 3 14.733 3 12a9 9 0 119 9c-.986 0-1.448-.089-2.364-.396l-.788-.264L6 21.764V18.63z"
          />
        </g>
      </svg>
    )
  }

  export function NotifIcon(props) {
    return (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        {...props}
      >
        <path
          d="M12 5c1.433 0 2.807.506 3.82 1.406 1.012.9 1.58 2.121 1.58 3.394 0 1.97.446 3.444 1.023 4.528.738 1.385 1.106 2.078 1.086 2.236-.024.185-.055.236-.206.343-.13.093-.778.093-2.072.093H6.771c-1.295 0-1.942 0-2.072-.093-.152-.107-.182-.158-.206-.343-.02-.158.348-.85 1.086-2.236C6.156 13.244 6.6 11.769 6.6 9.8c0-1.273.569-2.494 1.582-3.394C9.195 5.506 10.569 5 12 5zm0 0V3M9.356 20a3.991 3.991 0 002.65 1.002A3.992 3.992 0 0014.655 20"
          stroke="#000"
          strokeWidth={2}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    )
  }

  export function DropdownArrow(props) {
    return (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        {...props}
      >
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M12.707 14.707a1 1 0 01-1.414 0l-5-5a1 1 0 011.414-1.414L12 12.586l4.293-4.293a1 1 0 111.414 1.414l-5 5z"
          fill="#000"
        />
      </svg>
    )
  }

  export function MemoriesIcon(props) {
    return (
      <svg viewBox="0 0 56 56" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path d="M9.426 31.305c.61 0 1.078-.164 1.664-.586l6.117-4.524a1.89 1.89 0 00.797-1.547c0-1.101-.867-1.898-1.852-1.898-.445 0-.843.117-1.195.398l-3.14 2.438A19.221 19.221 0 0130.94 8.71 19.265 19.265 0 0150.254 28c.024 10.71-8.578 19.313-19.313 19.313-5.976 0-11.156-2.72-14.695-6.82-.516-.587-1.125-.845-1.71-.845-.962 0-1.852.774-1.852 1.852 0 .516.234 1.102.75 1.734 4.101 4.875 10.523 8.04 17.507 8.04 12.75 0 23.274-10.547 23.274-23.274 0-12.703-10.547-23.273-23.274-23.273-11.789 0-21.726 9.093-23.109 20.578l-2.508-3.563c-.375-.539-.937-.89-1.617-.89-1.078 0-1.922.773-1.922 1.851 0 .469.14.914.422 1.266l4.922 6.07c.75.938 1.36 1.266 2.297 1.266zm15.586 4.383c0 1.054 1.171 1.546 2.203.937l12.562-7.43c.914-.539.89-1.828 0-2.367l-12.562-7.43c-.961-.562-2.203-.14-2.203.938z" />
    </svg>
    )
  }

  export function SaveIcon(props) {
    return (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        {...props}
      >
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M6.75 6l.75-.75h9l.75.75v13.316L12 16.206l-5.25 3.11V6zm1.5.75v9.934L12 14.46l3.75 2.223V6.75h-7.5z"
          fill="#080341"
        />
      </svg>
    )
  }

  export function GroupIcon(props) {
    return (
      <svg viewBox="0 0 1920 1920" xmlns="http://www.w3.org/2000/svg" {...props}>
        <path
          d="M1807.059 1270.091c-68.668 48.452-188.725 116.556-343.906 158.57-18.861-102.55-92.725-187.37-196.066-219.106-91.708-28.235-185.11-48.339-279.53-61.666 71.944-60.762 121.638-145.807 135.982-243.162 21.91-.791 44.837-1.243 71.04-1.243 166.023.904 331.143 26.316 490.955 75.445 72.621 22.362 121.525 87.755 121.525 162.861v128.301zm-451.765 338.824c-114.183 80.753-330.24 198.099-621.176 198.099-129.43 0-379.144-26.203-621.177-198.1v-128.752c0-74.993 49.017-140.499 121.75-162.861 162.41-49.694 330.354-74.88 499.427-74.88h8.47c166.588.79 331.821 26.09 491.407 75.106 72.509 22.249 121.3 87.642 121.3 162.635v128.753zm-903.53-761.901V734.072c0-155.632 126.608-282.352 282.354-282.352 155.746 0 282.353 126.72 282.353 282.352v112.942c0 155.746-126.607 282.353-282.353 282.353S451.765 1002.76 451.765 847.014zm734.118-734.118c75.22 0 146.146 29.478 199.567 82.899 53.309 53.421 82.786 124.235 82.786 199.454V508.19c0 155.746-126.607 282.353-282.353 282.353-19.651 0-38.4-2.598-56.47-6.438v-50.033c0-156.423-92.047-290.71-224.188-354.748 8.357-148.066 130.447-266.428 280.658-266.428zm532.857 758.061c-91.37-28.01-184.546-48.226-279.755-61.666 86.174-72.508 142.192-179.802 142.192-301.1V395.248c0-105.374-41.11-204.65-115.877-279.304-74.767-74.767-173.93-115.99-279.417-115.99-200.696 0-365.138 151.002-390.211 345.148-20.217-3.275-40.433-6.325-61.553-6.325-217.977 0-395.294 177.43-395.294 395.294v112.942c0 121.298 56.018 228.593 142.305 301.214-94.305 13.214-188.16 33.092-279.529 61.1C81.092 1246.375 0 1355.249 0 1480.163v185.675l22.588 16.941c275.238 206.344 563.803 237.177 711.53 237.177 344.244 0 593.618-148.63 711.53-237.177l22.587-16.94v-120.51c205.214-50.597 355.652-146.032 429.177-201.373l22.588-16.941V1141.79c0-125.026-80.979-233.901-201.261-270.833z"
          fillRule="evenodd"
        />
      </svg>
    )
  }

  export function MoreIcon(props) {
    return (
      <svg
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M12.707 14.707a1 1 0 01-1.414 0l-5-5a1 1 0 011.414-1.414L12 12.586l4.293-4.293a1 1 0 111.414 1.414l-5 5z"
        fill="#000"
      />
    </svg>
    )
  }

  export function VideoIcon(props) {
    return (
      <svg viewBox="0 -20 104 104" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path
        d="M70.018 18.81V5c0-2.757-2.242-5-5.007-5H5.007A4.996 4.996 0 000 5v50c0 2.757 2.242 5 5.007 5h60.004a4.996 4.996 0 005.007-5V41.301l25.527 13.045c2.465 1.26 4.455.039 4.455-2.722V8.488c0-2.767-1.995-3.98-4.455-2.723L70.018 18.81h0z"
        transform="translate(-698 -320) translate(700 322)"
        stroke="#263238"
        strokeWidth={3.5}
        fill="#76B6FF"
        fillRule="evenodd"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
    )
  }

  export function PhotoIcon(props) {
    return (
      <svg
        viewBox="0 0 1024 1024"
        className="icon"
        xmlns="http://www.w3.org/2000/svg"
        {...props}
      >
        <g fill="#3CB87F">
          <path d="M924.8 331l-57.7-15.5-17.7-4.7-64.8-17.4v-67.2c0-31.7-16.5-46.8-46.8-46.8h-608c-30.2 0-46.8 15.1-46.8 46.8v483.3c0 31.7 16.5 46.8 46.8 46.8h153.5l492 131.8c29.2 7.8 49-2.5 57.3-33.1l16.1-60.2 108.9-406.6c8.4-30.6-3.7-49.4-32.8-57.2zM161.1 709.5c-25.2 0-31.2-15.2-31.2-31.2V257.4c0-25.2 15.2-31.2 31.2-31.2h545.6c16 0 31.2 6 31.2 31.2v420.9c0 16-6 31.2-31.2 31.2H161.1zm634.5 103.4c-4.1 15.4-13.9 28.5-38.2 22l25.7 6.9-319-85.5h273.8c30.2 0 46.8-15.1 46.8-46.8V341.9l97.8 26.2c15.4 4.1 28.5 13.9 22 38.2l8.1-30.1-17.7-4.8 17.7 4.8-117 436.7zM270.2 304.2c-34.4 0-62.4 27.9-62.4 62.4 0 34.4 27.9 62.4 62.4 62.4 34.4 0 62.4-27.9 62.4-62.4-.1-34.5-28-62.4-62.4-62.4z" />
          <path d="M151.2 737.5c-5.5 0-11-1.8-15.5-5.5-10.5-8.6-12-24-3.5-34.5l147.1-179.8c8.2-10 22.7-11.9 33.2-4.4l94.2 67.3 133-192.1c4.7-6.8 12.2-10.8 20.9-10.6 8.3.2 15.9 4.6 20.2 11.7l179.8 294.3c7.1 11.6 3.4 26.6-8.1 33.7-11.6 7-26.7 3.4-33.7-8.1L558.6 447.2 432.9 628.8c-3.7 5.4-9.5 9.1-16 10.2-6.4 1.1-13.1-.4-18.5-4.2l-95.7-68.4-132.5 162.1c-4.9 5.9-11.9 9-19 9z" />
        </g>
      </svg>
    )
  }

  export function ActivityIcon(props) {
    return (
      <svg
      viewBox="0 0 36 36"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      className="iconify iconify--twemoji"
      {...props}
    >
      <path
        fill="#FFCC4D"
        d="M36 18c0 9.941-8.059 18-18 18-9.94 0-18-8.059-18-18C0 8.06 8.06 0 18 0c9.941 0 18 8.06 18 18"
      />
      <path
        fill="#664500"
        d="M28.457 17.797c-.06-.135-1.499-3.297-4.457-3.297-2.957 0-4.397 3.162-4.457 3.297a.503.503 0 00.755.605c.012-.009 1.262-.902 3.702-.902 2.426 0 3.674.881 3.702.901a.498.498 0 00.755-.604zm-12 0c-.06-.135-1.499-3.297-4.457-3.297-2.957 0-4.397 3.162-4.457 3.297a.499.499 0 00.754.605C8.31 18.393 9.559 17.5 12 17.5c2.426 0 3.674.881 3.702.901a.498.498 0 00.755-.604zM18 22c-3.623 0-6.027-.422-9-1-.679-.131-2 0-2 2 0 4 4.595 9 11 9 6.404 0 11-5 11-9 0-2-1.321-2.132-2-2-2.973.578-5.377 1-9 1z"
      />
      <path fill="#FFF" d="M9 23s3 1 9 1 9-1 9-1-2 4-9 4-9-4-9-4z" />
    </svg>
    )
  }

  export function AddPicIcon(props) {
    return (
      <svg
        fill="#144bf0"
        height="200px"
        width="200px"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 26.914 26.914"
        xmlSpace="preserve"
        {...props}
      >
        <path d="M26.369 1.739H.546A.544.544 0 000 2.282V24.63c0 .298.243.546.546.546h25.823a.548.548 0 00.545-.546V2.282a.545.545 0 00-.545-.543zM10.131 6.668a2.894 2.894 0 01-2.895 2.896A2.891 2.891 0 014.34 6.668a2.895 2.895 0 115.791 0zm14.623 15.709h-1.808v1.848h-1.573v-1.848h-1.83v-1.572h1.83v-1.789h1.573v1.789h1.808v1.572zm.35-3.95H2.071v-.222l4.551-5.202 2.563 1.729 2.985-5.118 3.472 2.46 3.129-6.498 6.371 12.613v.238h-.038z" />
      </svg>
    )
  }

  export function ThreeDotIcon(props) {
    return (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        {...props}
      >
        <g stroke="#1C274C" strokeWidth={1.5}>
          <circle cx={5} cy={12} r={2} />
          <circle cx={12} cy={12} r={2} />
          <circle cx={19} cy={12} r={2} />
        </g>
      </svg>
    )
  }

  export function CloseIcon(props) {
    return (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        {...props}
      >
        <path fill="#fff" d="M0 0H24V24H0z" />
        <path
          d="M7 17l9.9-9.9M7 7l9.9 9.9"
          stroke="#000"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    )
  }

  export function LikeIcon(props) {
    return (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        {...props}
      >
        <path
          d="M20.975 12.185l-.739-.128.74.128zm-.705 4.08l-.74-.128.74.128zM6.938 20.477l-.747.065.747-.065zm-.812-9.393l.747-.064-.747.064zm7.869-5.863l.74.122-.74-.122zm-.663 4.045l.74.121-.74-.121zm-6.634.411l-.49-.568.49.568zm1.439-1.24l.49.569-.49-.568zm2.381-3.653l-.726-.189.726.189zm.476-1.834l.726.188-.726-.188zm1.674-.886l-.23.714.23-.714zm.145.047l.229-.714-.23.714zM9.862 6.463l.662.353-.662-.353zm4.043-3.215l-.726.188.726-.188zm-2.23-1.116l-.326-.675.325.675zM3.971 21.471l-.748.064.748-.064zM3 10.234l.747-.064a.75.75 0 00-1.497.064H3zm17.236 1.823l-.705 4.08 1.478.256.705-4.08-1.478-.256zm-6.991 9.193H8.596v1.5h4.649v-1.5zm-5.56-.837l-.812-9.393-1.495.129.813 9.393 1.494-.13zm11.846-4.276c-.507 2.93-3.15 5.113-6.286 5.113v1.5c3.826 0 7.126-2.669 7.764-6.357l-1.478-.256zM13.255 5.1l-.663 4.045 1.48.242.663-4.044-1.48-.243zm-6.067 5.146l1.438-1.24-.979-1.136L6.21 9.11l.979 1.136zm4.056-5.274l.476-1.834-1.452-.376-.476 1.833 1.452.377zm1.194-2.194l.145.047.459-1.428-.145-.047-.459 1.428zm-1.915 4.038a8.378 8.378 0 00.721-1.844l-1.452-.377A6.878 6.878 0 019.2 6.11l1.324.707zm2.06-3.991a.885.885 0 01.596.61l1.452-.376a2.385 2.385 0 00-1.589-1.662l-.459 1.428zm-.863.313a.515.515 0 01.28-.33l-.651-1.351c-.532.256-.932.73-1.081 1.305l1.452.376zm.28-.33a.596.596 0 01.438-.03l.459-1.428a2.096 2.096 0 00-1.548.107l.65 1.351zm2.154 8.176h5.18v-1.5h-5.18v1.5zM4.719 21.406L3.747 10.17l-1.494.129.971 11.236 1.495-.129zm-.969.107V10.234h-1.5v11.279h1.5zm-.526.022a.263.263 0 01.263-.285v1.5c.726 0 1.294-.622 1.232-1.344l-1.495.13zM14.735 5.343a5.533 5.533 0 00-.104-2.284l-1.452.377a4.03 4.03 0 01.076 1.664l1.48.243zM8.596 21.25a.916.916 0 01-.911-.837l-1.494.129a2.416 2.416 0 002.405 2.208v-1.5zm.03-12.244c.68-.586 1.413-1.283 1.898-2.19L9.2 6.109c-.346.649-.897 1.196-1.553 1.76l.98 1.137zm13.088 3.307a2.416 2.416 0 00-2.38-2.829v1.5c.567 0 1 .512.902 1.073l1.478.256zM3.487 21.25c.146 0 .263.118.263.263h-1.5c0 .682.553 1.237 1.237 1.237v-1.5zm9.105-12.105a1.583 1.583 0 001.562 1.84v-1.5a.083.083 0 01-.082-.098l-1.48-.242zm-5.72 1.875a.918.918 0 01.316-.774l-.98-1.137a2.418 2.418 0 00-.83 2.04l1.495-.13z"
          fill="#1C274C"
        />
      </svg>
    )
  }
  
  export function CommentIcon(props) {
    return (
      <svg viewBox="-7 0 32 32" xmlns="http://www.w3.org/2000/svg" {...props}>
        <path d="M7.28 24.2c-1.12 0-1.72-1.12-2.2-2-.2-.32-.48-.92-.64-1-.12-.04-.32-.08-.56-.08-.68-.04-1.68-.16-2.56-1.44-.8-1.12-1.68-4.16-1.2-6.84C.4 11.2 1.16 9.96 2.28 9.2c1.8-1.24 5.08-1.4 6.4-1.4 2.36 0 5.64.4 7 1.56 1.36 1.12 1.96 4.04 1.84 6.32-.08 2.08-.72 3.64-1.76 4.36-.64.44-1.56.68-3 .68-.6 0-1.16-.04-1.76-.08-.52-.04-1-.04-1.44-.04-.8 0-1 .12-1.04.12-.04.12.04.64.12.88.16.68.44 2.16-.96 2.52-.12.04-.24.08-.4.08zm1.4-14.72c-2.44 0-4.48.4-5.44 1.08-.76.52-1.24 1.36-1.44 2.52-.4 2.12.28 4.72.88 5.6.48.64.8.68 1.36.72.32.04.68.04 1.04.2.68.28 1.12 1.04 1.52 1.76.12.24.36.64.52.88-.04-.12-.04-.24-.08-.32-.16-.72-.4-1.84.48-2.56.52-.44 1.36-.48 2.08-.48.48 0 .96.04 1.52.04.56.04 1.12.08 1.64.08 1 0 1.68-.12 2.04-.36.6-.4 1-1.56 1.04-3.08.08-2.28-.56-4.4-1.24-4.96-.68-.52-3-1.12-5.92-1.12z" />
      </svg>
    )
  }
  
  export function ShareIcon(props) {
    return (
      <svg
        viewBox="-0.5 0 25 25"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        {...props}
      >
        <path
          d="M13.47 4.14c-.73.22-1.19 1.82-1.38 3.77C6.78 7.91 2 13.48 2 20.08c2.19-6 7-7.63 10.14-7.63.2 1.76.65 3.17 1.33 3.37 2.1.61 8.53-3.38 8.53-5.84s-6.43-6.45-8.53-5.84z"
          stroke="#000"
          strokeWidth={1.5}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    )
  }

  export function SendMessageIcon(props) {
    return (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        {...props}
      >
        <path
          d="M11.5 12H5.42m-.173.797L4.242 15.8c-.55 1.643-.826 2.465-.628 2.971.171.44.54.773.994.9.523.146 1.314-.21 2.894-.92l10.135-4.561c1.543-.695 2.314-1.042 2.553-1.524a1.5 1.5 0 000-1.33c-.239-.482-1.01-.83-2.553-1.524L7.485 5.243c-1.576-.71-2.364-1.064-2.887-.918a1.5 1.5 0 00-.994.897c-.198.505.074 1.325.618 2.966l1.026 3.091c.094.282.14.423.159.567a1.5 1.5 0 010 .385c-.02.144-.066.285-.16.566z"
          stroke="#000"
          strokeWidth={2}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    )
  }