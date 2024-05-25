import { useTheme } from "styled-components"

const Logo = () => {
  const theme = useTheme();

  return (
    <svg width="32" height="32" viewBox="0 0 10 10" xmlns="http://www.w3.org/2000/svg">
      <path 
        fill={theme.color.onPrimary}
        d="M0.915453 10V0.4H2.72745C3.36745 0.4 3.82745 0.524 4.10745 0.771999C4.38745 1.02 4.53145 1.428 4.53945 1.996C4.55145 2.756 4.55945 3.48 4.56345 4.168C4.56745 4.856 4.56745 5.544 4.56345 6.232C4.55945 6.916 4.55145 7.638 4.53945 8.398C4.53145 8.97 4.39145 9.38 4.11945 9.628C3.84745 9.876 3.40545 10 2.79345 10H0.915453ZM1.86945 9.142H2.79345C3.08545 9.142 3.28945 9.092 3.40545 8.992C3.52545 8.888 3.58745 8.716 3.59145 8.476C3.60745 7.86 3.61745 7.286 3.62145 6.754C3.62945 6.222 3.63345 5.704 3.63345 5.2C3.63345 4.692 3.62945 4.172 3.62145 3.64C3.61745 3.108 3.60745 2.534 3.59145 1.918C3.58745 1.678 3.52145 1.508 3.39345 1.408C3.26545 1.308 3.04345 1.258 2.72745 1.258H1.86945V9.142ZM5.46448 10L6.49648 0.4H8.45848L9.48448 10H8.51248L8.26648 7.288H6.68248L6.44248 10H5.46448ZM6.76648 6.43H8.18848L8.00248 4.396L7.73848 1.258H7.22248L6.95248 4.402L6.76648 6.43Z"
       />
    </svg>
  )
}

export default Logo