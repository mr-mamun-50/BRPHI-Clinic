import { BrowserRouter as Router } from "react-router-dom";
import axios from "axios";
import AllRoutes from "./Routes";
import { createTheme, ThemeProvider } from '@mui/material';


axios.defaults.baseURL = 'http://localhost/brphi_clinic/backend/public';
axios.defaults.headers.post['Accept'] = 'application/json';
axios.defaults.withCredentials = true;

axios.interceptors.request.use(function (config) {
  const level_1Token = sessionStorage.getItem('level_1_token') || localStorage.getItem('level_1_token');
  const level_2Token = sessionStorage.getItem('level_2_token') || localStorage.getItem('level_2_token');
  const level_3Token = sessionStorage.getItem('level_3_token') || localStorage.getItem('level_3_token');
  const level_4Token = sessionStorage.getItem('level_4_token') || localStorage.getItem('level_4_token');

  // Check the API route and attach the appropriate token
  if (config.url.includes('/api/level_1/')) {
    if (level_1Token) {
      config.headers.Authorization = `Bearer ${level_1Token}`;
    }
  } else if (config.url.includes('/api/level_2/')) {
    if (level_2Token) {
      config.headers.Authorization = `Bearer ${level_2Token}`;
    }
  } else if (config.url.includes('/api/level_3/')) {
    if (level_3Token) {
      config.headers.Authorization = `Bearer ${level_3Token}`;
    }
  } else if (config.url.includes('/api/level_4/')) {
    if (level_4Token) {
      config.headers.Authorization = `Bearer ${level_4Token}`;
    }
  }
  return config;
});

const theme = createTheme({
  typography: {
    fontFamily: "PF Isotext Pro, Sunflower, Noto Serif Bengali",
  },
});


function App() {
  return (
    <Router>
      <ThemeProvider theme={theme}>
        <AllRoutes />
      </ThemeProvider>
    </Router>
  );
}

export default App;
