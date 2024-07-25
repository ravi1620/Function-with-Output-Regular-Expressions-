import React, { Component } from 'react';

import './App.css';

class App extends Component {
  
render(){

  let calTenthResult=(studentDetails)=>{
    let passMarks=35;
    if(studentDetails.telMarks>=passMarks   && 
      studentDetails.hindiMarks>=passMarks   &&
        studentDetails.engMarks>=passMarks   &&
        studentDetails.mathsMarks>=passMarks   &&
        studentDetails.sciMarks>=passMarks   &&
        studentDetails.socMarks>=passMarks){
console.log(`${studentDetails.firstName} ${studentDetails.lastName} Passed in Tenth`)
    }else{
      console.log(`${studentDetails.firstName} ${studentDetails.lastName} Failed in Tenth`)

    }
  }

  let gautamDetails=["Gautam Gambhir",44,"Natasha Jain","Deepak Gambhir","Left-handed","Top order Batsman"];
console.log(gautamDetails);
console.log(gautamDetails[3]);

 let[GautamFirstName,
GautamLastName,
GautamAge,GautamSpouseName,GautamFatherName,Role]=gautamDetails;

console.log(GautamFirstName,
GautamLastName,
GautamAge,GautamSpouseName,GautamFatherName,Role);

console.log(GautamFirstName);
console.log(GautamLastName)

let RakeshDetails={
  firstName:"Rakesh",
  lastName:"Kumar",
   Age:"35",
   Profession:"Cricket",
   Awards:"Arjuna",
   Centuries:"90",
   Metriculation:"Passed",
BattingStyle:"Right Hand",
telMarks:"99",
hindiMarks:"99",
engMarks:"99",
mathsMarks:"100",
sciMarks:"100",
socMarks:"100",
MetriculationMarks:"580",
AboutRakesh:()=>{
  console.log(`Rakesh Kumar is one of the good best Cricket Players in the world.`)
},
 }
 console.log(RakeshDetails);



let {telMarks:RakeshTelMarks,
  hindiMarks:RakeshHindiMarks,
  engMarks:RakeshEngMarks,
  mathsMarks:RakeshMathsMarks,
  sciMarks:RakeshSciMarks,
  socMarks:RakeshSocMarks}=RakeshDetails;

  console.log(RakeshTelMarks,RakeshHindiMarks,RakeshEngMarks,RakeshMathsMarks,RakeshSciMarks,RakeshSocMarks);
 let RavanDetails={
  firstName:"Ravan",
  lastName:"Kumar",
  Age:"40",
  Profession:"Chattered Accounted",
  Achievements:"Best Employer",
  telMarks:"99",
hindiMarks:"90",
engMarks:"99",
mathsMarks:"90",
sciMarks:"100",
socMarks:"90",
  AboutRavan:()=>{
    console.log(`Ravan was the best employer of all time ever in the company.`)
  }
}

 console.log(RakeshDetails.MetriculationMarks);
 console.log(RakeshDetails.Metriculation);

 console.log(RavanDetails.Profession);
 console.log(RavanDetails.Achievements);

 RakeshDetails.AboutRakesh();
 RavanDetails.AboutRavan();

 calTenthResult(RakeshDetails);
calTenthResult(RavanDetails);






let passMarks=35;
  let calculateTenthResult=(telMarks,hindiMarks,engMarks,mathsMarks,sciMarks,socMarks,passFn,failFn)=>{

    if(telMarks>=passMarks    && hindiMarks>=passMarks    && engMarks>=passMarks    && mathsMarks>=passMarks    &&sciMarks>=passMarks    && socMarks>=passMarks){
 passFn();
    }else{
 failFn();
    }
  }

  calculateTenthResult(45,55,66,56,88,99,()=>{
    console.log(`Student passed in Tenth`)
  },()=>{
    console.log(`Student failed in Tenth`)
  });



// let studentSummary=(telMarks,hindiMarks,engMarks,mathsMarks,sciMarks,socMarks
//   )=>{
// let totalMarks=telMarks+hindiMarks+engMarks+mathsMarks+sciMarks+socMarks ;
// let passMarks=35;
// if(telMarks>=passMarks    &&
//   hindiMarks>=passMarks    &&
//     engMarks>=passMarks    &&
//     mathsMarks>=passMarks    &&
//     sciMarks>=passMarks    &&
//     socMarks>=passMarks ){
// result="pass"
// }else{
// result="fail"
// }
// let perc=(totalMarks/600)*100;
// let result;
// let summary={
//   total:totalMarks,
//   perc:perc,
//   result:result,
// };

//  let studentSummary=(99,88,77,66,55,44,33)

//   return summary;
// }
// console.log(summary);






let prasadInterSummary=(sansMarks,engMarks,mathsMarksA,mathsMarksB,phyMarks,chemMarks)=>{

let total=sansMarks+engMarks+mathsMarksA+mathsMarksB+phyMarks+chemMarks;
let percentage=(total/600)*100; let result;
let passMarks=35;
if(sansMarks>=passMarks    && engMarks>=passMarks    && mathsMarksA>=passMarks    && mathsMarksB>=passMarks    && phyMarks>=passMarks    && chemMarks){
 result="pass"
 }else{
result="fail"
}
 let wholeResult=[total,result,percentage.toFixed(2)]
 return wholeResult;
}
let result=prasadInterSummary(99,88,77,66,55,44);
console.log(result);
    return (
      <div className="App">
    
      </div>
    );
  }
}

export default App;
