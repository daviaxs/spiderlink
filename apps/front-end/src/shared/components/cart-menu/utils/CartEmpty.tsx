import { useTheme } from 'styled-components'

export function CartEmpty() {
  const theme = useTheme()

  return (
    <svg
      width="292"
      height="191"
      viewBox="0 0 292 191"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect
        x="38"
        width="215"
        height="33"
        rx="16.5"
        fill={theme.bodySecondary}
      />
      <rect
        x="77"
        y="15"
        width="215"
        height="47"
        rx="23.5"
        fill={theme.bodySecondary}
      />
      <rect
        x="7"
        y="44"
        width="246"
        height="43"
        rx="21.5"
        fill={theme.bodySecondary}
      />
      <rect
        x="55"
        y="83"
        width="215"
        height="36"
        rx="18"
        fill={theme.bodySecondary}
      />
      <rect y="95" width="215" height="36" rx="18" fill={theme.bodySecondary} />
      <rect
        x="47"
        y="128"
        width="215"
        height="36"
        rx="18"
        fill={theme.bodySecondary}
      />
      <rect
        x="16"
        y="155"
        width="215"
        height="36"
        rx="18"
        fill={theme.bodySecondary}
      />
      <circle
        cx="105"
        cy="159"
        r="15"
        stroke={theme.iconQuaternary}
        strokeWidth="10"
      />
      <circle
        cx="192"
        cy="159"
        r="15"
        stroke={theme.iconQuaternary}
        strokeWidth="10"
      />
      <path
        d="M86 46L97.5 141L120.5 150H174.5L190.5 139.5H108L107 127.5L194 121C200 121 204 116 205 113C206 110 207 104 207 101C207 98 204 96.5 202 96C198.8 95.2 197 98.3333 196.5 100C196.167 102.167 195.5 106.6 195.5 107C195.5 109 194.167 109.833 193.5 110L105.5 117L99 63H134.5C135 63 138.5 61.5 139 57.5C139.4 54.3 135.833 52.5 134 52H97.5C97.1667 49.5 96.5 44.4 96.5 44C95 34.5 87 30 86 29.5C85 29 66 24 63 23.5C60 23 57.5 24.5 56.5 26C55.3 29.2 57.6667 32.3333 59 33.5C64 34.8333 74.9 37.7 78.5 38.5C83.7 40.5 85.6667 44.3333 86 46Z"
        fill={theme.iconQuaternary}
      />
      <rect
        x="158.756"
        y="75.745"
        width="62.3301"
        height="10.9565"
        rx="5.47826"
        transform="rotate(-45 158.756 75.745)"
        fill={theme.iconQuaternary}
      />
      <rect
        width="62.3301"
        height="10.9565"
        rx="5.47826"
        transform="matrix(-0.707107 -0.707107 -0.707107 0.707107 210.577 75.745)"
        fill={theme.iconQuaternary}
      />
    </svg>
  )
}
