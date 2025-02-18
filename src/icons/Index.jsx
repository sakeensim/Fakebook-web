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