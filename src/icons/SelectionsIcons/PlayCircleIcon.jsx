// Add this component to other components and you can pass the params WIDTH and HEIGHT
// for example: <PauseCircleIconDark width="56" height="53" />

export const PlayCircleIconDark = ({ width = 24, height = 24 }) => {
  return (
    <>
      <svg width={width} height={height} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="12" cy="12.0009" r="12" fill="url(#paint0_linear_2940_5297)" fill-opacity="0.1" />
        <path
          d="M7.94629 6.97287V17.0288C7.94629 17.7957 8.80385 18.2616 9.46428 17.8442L17.4879 12.8162C18.0991 12.4376 18.0991 11.5641 17.4879 11.1758L9.46428 6.15752C8.80385 5.74014 7.94629 6.20606 7.94629 6.97287Z"
          fill="white"
        />
        <defs>
          <linearGradient
            id="paint0_linear_2940_5297"
            x1="11.4953"
            y1="-1.53446"
            x2="15.6491"
            y2="25.2839"
            gradientUnits="userSpaceOnUse"
          >
            <stop stop-color="white" />
            <stop offset="1" stop-color="white" stop-opacity="0" />
          </linearGradient>
        </defs>
      </svg>
    </>
  );
};