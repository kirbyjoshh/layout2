import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';

function TopSideBox() {
  return <div className="box box-peach"></div>;
}

function TopRedBoxContent(props) {
  return <div className="box box-red-small">{props.name}</div>;
}

function TopRedBoxContainer() {
  return (
    <div className="box box-red-small-container">
      <TopRedBoxContent name="Kirby" />
      <TopRedBoxContent name="Bondoc" />
    </div>
  );
}

function TopSection() {
  return (
    <div className="container-blue-top">
      <div className="container-light-blue-top">
        <TopSideBox />
        <TopRedBoxContainer />
        <TopSideBox />
      </div>
    </div>
  );
}

function MiddleLargeRedBox() {
  return <div className="box box-red-large"></div>;
}

function MiddleRedBoxContent() {
  return <div className="box box-red-medium"></div>;
}

function MiddleRightSide() {
  return (
    <div className="container-red-right-side">
      <MiddleRedBoxContent />
      <MiddleRedBoxContent />
    </div>
  );
}

function MiddleSection() {
  return (
    <div className="container-red-large-container">
      <MiddleLargeRedBox />
      <MiddleRightSide />
    </div>
  );
}

function BottomLightPurpleBox() {
  return <div className="box box-light-purple"></div>;
}

function BottomPeachBox(props) {
  return <div className="box box-peach-small">{props.name}</div>;
}

function BottomLightBlueContainer() {
  return (
    <div className="container-light-blue-bottom">
      <BottomLightPurpleBox />
      <BottomPeachBox name="C-PCIT9" />
      <BottomPeachBox name="BSIT-3A" />
      <BottomLightPurpleBox />
    </div>
  );
}

function BottomSection() {
  return (
    <div className="container-blue-bottom">
      <BottomLightBlueContainer />
    </div>
  );
}

function App() {
  return (
    <div className="container-green">
      <TopSection />
      <MiddleSection />
      <BottomSection />
    </div>
  );
}

export default App;