import React from 'react'
import ReactDOM from 'react-dom'
import reportWebVitals from './reportWebVitals'
import { ThemeProvider } from 'styled-components'
import { theme } from './styles/global/theme'
import { GlobalStyle } from './styles/global/globalStyles'
import store from './redux/store'
import { Provider } from 'react-redux'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import CollectionView from './pages/CollectionView'

ReactDOM.render(
  <BrowserRouter>
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <GlobalStyle />

        <Routes>
          <Route exact path="/collection/:id" element={<CollectionView />} />
        </Routes>
      </ThemeProvider>
    </Provider>
  </BrowserRouter>,
  document.getElementById('root')
)


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
