import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  return (
    <>
      <div class="container-green">
        <header class="container-blue-top">
          <div class="container-light-blue-top">
            <div class="box box-peach"></div>
            <div class="box box-red-small-container">
              <div class="box box-red-small"></div>
              <div class="box box-red-small"></div>
            </div>
            <div class="box box-peach"></div>
          </div>
        </header>

        <main class="container-red-large-container">
          <div class="box box-red-large"></div>
          <div class="container-red-right-side">
            <div class="box box-red-medium"></div>
            <div class="box box-red-medium"></div>
          </div>
        </main>

        <footer class="container-blue-bottom">
          <div class="container-light-blue-bottom">
            <div class="box box-light-purple"></div>
            <div class="box box-peach-small"></div>
            <div class="box box-peach-small"></div>
            <div class="box box-light-purple"></div>
          </div>
        </footer>
      </div>
    </>
  )
}

export default App