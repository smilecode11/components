<template>
  <div>
    <h2>大波浪</h2>
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
      <path
        fill="#a2d9ff"
        fill-opacity="1"
        d="M0,128L30,133.3C60,139,120,149,180,144C240,139,300,117,360,133.3C420,149,480,203,540,186.7C600,171,660,85,720,64C780,43,840,85,900,117.3C960,149,1020,171,1080,170.7C1140,171,1200,149,1260,117.3C1320,85,1380,43,1410,21.3L1440,0L1440,320L1410,320C1380,320,1320,320,1260,320C1200,320,1140,320,1080,320C1020,320,960,320,900,320C840,320,780,320,720,320C660,320,600,320,540,320C480,320,420,320,360,320C300,320,240,320,180,320C120,320,60,320,30,320L0,320Z"
      ></path>
    </svg>
    <h2>border-radius 形状</h2>
    <div
      style="
        width: 200px;
        height: 200px;
        background: deeppink;
        border: 1px solid deepblue;
        border-radius: 52% 48% 28% 72% / 43% 100% 0% 57%;
      "
    ></div>

    <h2>loading</h2>
    <div class="viewer shadow" style="background-color: rgb(255, 255, 255)">
      <div class="inner" style="width: 200px; height: 200px">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          xmlns:xlink="http://www.w3.org/1999/xlink"
          style="margin: auto; background: #fff; display: block"
          width="200px"
          height="200px"
          viewBox="0 0 100 100"
          preserveAspectRatio="xMidYMid"
        >
          <circle
            cx="50"
            cy="50"
            r="0"
            fill="none"
            stroke="#e90c59"
            stroke-width="2"
          >
            <animate
              attributeName="r"
              repeatCount="indefinite"
              dur="1s"
              values="0;40"
              keyTimes="0;1"
              keySplines="0 0.2 0.8 1"
              calcMode="spline"
              begin="0s"
            ></animate>
            <animate
              attributeName="opacity"
              repeatCount="indefinite"
              dur="1s"
              values="1;0"
              keyTimes="0;1"
              keySplines="0.2 0 0.8 1"
              calcMode="spline"
              begin="0s"
            ></animate>
          </circle>
          <circle
            cx="50"
            cy="50"
            r="0"
            fill="none"
            stroke="#46dff0"
            stroke-width="2"
          >
            <animate
              attributeName="r"
              repeatCount="indefinite"
              dur="1s"
              values="0;40"
              keyTimes="0;1"
              keySplines="0 0.2 0.8 1"
              calcMode="spline"
              begin="-0.5s"
            ></animate>
            <animate
              attributeName="opacity"
              repeatCount="indefinite"
              dur="1s"
              values="1;0"
              keyTimes="0;1"
              keySplines="0.2 0 0.8 1"
              calcMode="spline"
              begin="-0.5s"
            ></animate>
          </circle>
        </svg>
      </div>
    </div>

    <div class="viewer shadow" style="background-color: rgb(255, 255, 255)">
      <div class="inner" style="width: 200px; height: 200px">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          xmlns:xlink="http://www.w3.org/1999/xlink"
          style="margin: auto; background: #fff; display: block"
          width="200px"
          height="200px"
          viewBox="0 0 100 100"
          preserveAspectRatio="xMidYMid"
        >
          <g transform="translate(50 50) scale(0.8)">
            <g>
              <animateTransform
                attributeName="transform"
                type="scale"
                repeatCount="indefinite"
                calcMode="spline"
                dur="1s"
                values="0.8;0.5;0.8"
                keyTimes="0;0.5;1"
                keySplines="0.5 0 0.5 1;0.5 0 0.5 1"
              ></animateTransform>
              <rect
                x="-45"
                y="-45"
                width="90"
                height="90"
                fill="#e90c59"
                stroke="#46dff0"
                stroke-width="8"
                stroke-linejoin="round"
                rx="1"
                ry="1"
              >
                <animate
                  attributeName="rx"
                  repeatCount="indefinite"
                  dur="1s"
                  values="0;50;0"
                  keyTimes="0;0.5;1"
                ></animate>
                <animate
                  attributeName="ry"
                  repeatCount="indefinite"
                  dur="1s"
                  values="0;50;0"
                  keyTimes="0;0.5;1"
                ></animate>
                <animate
                  attributeName="stroke-width"
                  repeatCount="indefinite"
                  dur="1s"
                  values="8;12.8;8"
                  keyTimes="0;0.5;1"
                ></animate>
                <animateTransform
                  attributeName="transform"
                  type="rotate"
                  repeatCount="indefinite"
                  dur="1s"
                  values="0 0 0;270 0 0;540 0 0"
                  keyTimes="0;0.5;1"
                  calcMode="spline"
                  keySplines="0.5 0 0.5 1;0.5 0 0.5 1"
                ></animateTransform>
              </rect>
            </g>
          </g>
        </svg>
      </div>
    </div>

    <div class="viewer shadow" style="background-color: rgb(241, 242, 243)">
      <div class="inner" style="width: 200px; height: 200px">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          xmlns:xlink="http://www.w3.org/1999/xlink"
          style="margin: auto; background: rgb(241, 242, 243); display: block"
          width="200px"
          height="200px"
          viewBox="0 0 100 100"
          preserveAspectRatio="xMidYMid"
        >
          <defs>
            <mask id="ldio-x4g5f71co6c-mask">
              <rect x="5%" y="5%" width="90%" height="90%" fill="#fff"></rect>
              <text
                dy="0.01em"
                x="50%"
                y="50%"
                text-anchor="middle"
                dominant-baseline="central"
                font-weight="900"
                font-size="19"
                font-family="arial"
              >
                Loading
              </text>
            </mask>
          </defs>
          <g>
            <path
              mask="url(#ldio-x4g5f71co6c-mask)"
              fill="none"
              stroke="#1d3f72"
              stroke-width="4"
              d="M2.7 10.8c5.2-3 6.3-5.7 11.5-8.6c-5.7 4-6.8 10.8-10.5 16.7c6.3-6 12.9-12.1 20.3-16.7 c-6.5 5.2-9.7 12.1-15 18.5c7.3-4.8 13.1-12.3 20.4-17.2c-11.2 7.6-18.9 18.2-27.1 29C13.4 21.2 23.8 11.4 37.1 2.7 C24.1 12.3 12.2 26.9 2 39.5c14.1-11 29-25.8 43.2-36.8c-13.8 11.7-30.1 30.8-42.5 44C17.2 36.6 38.5 13.9 51.5 2 C37.1 15.4 17.7 39.1 3.3 52.5C21 38.1 40.3 18.3 58 4C39.3 20.9 21.3 40.3 2.7 57.2C24.9 40 45.7 20.1 67.9 2.9 C44.8 22.7 21.8 41.9 2.7 65.7C24.7 44.6 49.3 23.2 73.6 4.6C55.8 19.8 38.4 41.9 20.7 57.1c-5 4.3-15.4 12.6-17.6 18.8 C25.6 55.6 57.6 22.6 81.2 3.5C54.8 25.7 26.4 59 3.1 84.3c28-24.7 54.5-59.6 85.2-80.8C59.8 26.4 26.3 64 3.1 92.4 C29.4 69.5 67.6 26.8 93.9 4C65.5 31.7 28.5 75.4 2.3 105.2C33.8 72 66.9 30.4 104.9 4.9c-31.3 29.8-66 68-95 100.6 C42 76.3 70.8 43 105.4 16.8c-29.8 25.7-63.3 59.3-87.9 90c25.8-22 59-56.5 84.9-78.5c-25 21.4-56 53.8-77.7 78.5 c25-20.7 53.8-49.4 78.8-70.1c-25.2 21.6-49.3 47.4-71.7 72c24.7-19.4 46.9-44.2 71.7-63.5C81.4 63.1 61.6 86.6 44 108.8 c20-15.2 38.4-36.5 58.4-51.7c-14.6 11.1-34.8 37-47.2 50.6c13.6-9.1 34.1-30.2 46.9-40.4C90 75.8 74.8 95.7 65.4 107.1 c12.8-7.4 27.7-23.9 38.9-33.4c-12 9.3-20.8 21.8-31.6 32.6c11-6.6 21.6-15.8 30.9-24.6c-8 6.3-16.2 16.6-21.8 25.2 c8.8-5.6 17.8-10.3 21.4-15.9c-1.3 4.1-4.8 9.2-10.1 15.2c3.1-0.4 7.7-0.6 10.8-1"
            >
              <animate
                attributeName="stroke-dasharray"
                repeatCount="indefinite"
                dur="1s"
                calcMode="spline"
                values="0 0 0 3390;0 0 3390 0;0 3390 3390 0"
                keyTimes="0;0.5;1"
                keySplines="0.7 0 0.3 1;0.7 0 0.3 1"
              ></animate>
            </path>
          </g>
        </svg>
      </div>
    </div>
  </div>
</template>