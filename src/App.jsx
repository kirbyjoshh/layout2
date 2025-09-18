import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function SideBox() {
  return <div className="Box1"></div>
}
function Section1Box2InnerBox1(props) {
  return <div className="InnerBox1">{props.name}</div>
}

function UpperBox2() {
  return <div className="Box2">
    <Section1Box2InnerBox1 name="Kirby" />
    <Section1Box2InnerBox1 name="Bondoc" />
  </div>
}

function LowSideBox() {
  return <div className="boxA"></div>
}

function Section3CenterBox(props) {
  return <div className="boxB">{props.text}</div>
}

function TopSection() {
  return <div className="section1">
    <SideBox />
    <UpperBox2 />
    <SideBox />
  </div>

}

function LowerSection() {
  return <div className="section3">
    <LowSideBox />
    <Section3CenterBox text="C-PCIT9" />
    <Section3CenterBox text="IT3A" />
    <LowSideBox />
  </div>
}

function App() {

  return (
    
    <div className="mainContainer">

      <TopSection />

      <div className="section2">
        <div className="leftbox"></div>
        <div className="rightboxes">
          <div className="rightbox"></div>
          <div className="rightbox"></div>
        </div>

      </div>
      
      <LowerSection />

    </div>
  )
}

export default App