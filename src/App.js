import React from 'react';
import Navbar from './components/Navbar';
import './App.css';
import Home from './components/pages/Home';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import AboutUs from './components/pages/AboutUs';
import Portfolio from './components/pages/Portfolio';
import HousingAndHospitality from './components/pages/HousingAndHospitality';
import HospitalityInkBlock from './components/HospitalityInkBlock';
import HospitalityRoger from './components/HospitalityRoger';
import OneChestNut from './components/pages/ImgOneChestNut';
import ImgInkOne from './components/pages/ImgInkOne';
import ImgInkFour from './components/pages/ImgInkFour';
import ImgInkTwo from './components/pages/ImgInkTwo';
import ImgInkThree from './components/pages/ImgInkThree';
import Education from './components/pages/Education';
import ImgthsOne from './components/pages/ImgthsOne';
import ImgthsTwo from './components/pages/ImgthsTwo';
import ImgthsThree from './components/pages/ImgthsThree';
import ImgthsFour from './components/pages/ImgthsFour';

import EducationPictures from './components/EducationPictures';
import EducationUniv from './components/EducationUniv';
import EducationBU from './components/EducationBU';
import EducationUmass from './components/EducationUmass';
import EducationHS from './components/EducationHS';
import EducationCLRHS from './components/EducationCLRHS';


import BUOne from './components/pages/BUOne';
import BUTwo from './components/pages/BUTwo';
import BUThree from './components/pages/BUThree';
import BUFour from './components/pages/BUFour';
import BUFive from './components/pages/BUFive';
import BUSix from './components/pages/BUSix';

import Umass1 from './components/pages/Umass1';
import Umass2 from './components/pages/Umass2';
import Umass3 from './components/pages/Umass3';
import Umass4 from './components/pages/Umass4';
import Umass5 from './components/pages/Umass5';
import Umass6 from './components/pages/Umass6';

import CLRHS1 from './components/pages/CLRHS1';
import CLRHS2 from './components/pages/CLRHS2';
import CLRHS3 from './components/pages/CLRHS3';
import CLRHS4 from './components/pages/CLRHS4';
import CLRHS5 from './components/pages/CLRHS5';
import CLRHS6 from './components/pages/CLRHS6';
import CLRHS7 from './components/pages/CLRHS7';
import CLRHS8 from './components/pages/CLRHS8';

import Roger1 from './components/pages/Roger1';
import Roger2 from './components/pages/Roger2';
import Roger3 from './components/pages/Roger3';
import Roger4 from './components/pages/Roger4';
import Roger5 from './components/pages/Roger5';
import Roger6 from './components/pages/Roger6';
import Roger7 from './components/pages/Roger7';

function App() {
  return (
    <>
      <Router>
        <Navbar />
          <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/aboutUs' component={AboutUs} />
          <Route path='/portfolio' component={Portfolio} />
          
          </Switch>
          <Route path='/housingAndHospitality' component={HousingAndHospitality} />
          <Route path='/OneChestNut' component={OneChestNut}/>
          <Route path='/ImgInkOne' component={ImgInkOne}/>
          <Route path='/ImgInkFour' component={ImgInkFour}/>
          <Route path='/ImgInkTwo' component={ImgInkTwo}/>
          <Route path='/ImgInkThree' component={ImgInkThree}/>

          <Route path='/education' component={Education}/>
          <Route path='/ImgthsOne' component={ImgthsOne}/>
          <Route path='/ImgthsTwo' component={ImgthsTwo}/>
          <Route path='/ImgthsThree' component={ImgthsThree}/>
          <Route path='/ImgthsFour' component={ImgthsFour}/>

          <Route path='/educationPictures' component={EducationPictures} />
          <Route path='/educationUniversities' component={EducationUniv} />
          <Route path='/educationBU' component={EducationBU} />
          <Route path='/educationUmass' component={EducationUmass} />
          <Route path='/educationHS' component={EducationHS} />
          <Route path='/educationCLRHS' component={EducationCLRHS} />

          <Route path='/hospitalityInkBlock' component={HospitalityInkBlock} />
          <Route path='/hospitalityRoger' component={HospitalityRoger} />
          

          <Route path='/buImgOne' component={BUOne}/>
          <Route path='/buImgTwo' component={BUTwo}/>
          <Route path='/buImgThree' component={BUThree}/>
          <Route path='/buImgFour' component={BUFour}/>
          <Route path='/buImgFive' component={BUFive}/>
          <Route path='/buImgSix' component={BUSix}/>

          <Route path='/uml1' component={Umass1} />
          <Route path='/uml2' component={Umass2} />
          <Route path='/uml3' component={Umass3} />
          <Route path='/uml4' component={Umass4} />
          <Route path='/uml5' component={Umass5} />
          <Route path='/uml6' component={Umass6} />

          <Route path='/clrhs1' component={CLRHS1}/>
          <Route path='/clrhs2' component={CLRHS2}/>
          <Route path='/clrhs3' component={CLRHS3}/>
          <Route path='/clrhs4' component={CLRHS4}/>
          <Route path='/clrhs5' component={CLRHS5}/>
          <Route path='/clrhs6' component={CLRHS6}/>
          <Route path='/clrhs7' component={CLRHS7}/>
          <Route path='/clrhs8' component={CLRHS8}/>

          <Route path='/roger1' component={Roger1}/>
          <Route path='/roger2' component={Roger2}/>
          <Route path='/roger3' component={Roger3}/>
          <Route path='/roger4' component={Roger4}/>
          <Route path='/roger5' component={Roger5}/>
          <Route path='/roger6' component={Roger6}/>
          <Route path='/roger7' component={Roger7}/>



      </Router>
    </>
  );
}

export default App;
