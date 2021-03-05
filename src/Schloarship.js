import React, { Component } from 'react'
import './Schloarship.css';




class Table extends Component {
   constructor(props) {
      super(props) //since we are extending class Table so we have to use super in order to override Component class constructor
      this.state = { //state is by default an object
         schloarship: [
            { Name_of_schloarship:"Pragati Schloarship",
            Schloarship_Amount:"5000 per month",Opening_date:"27 jan 2021",
            Closing_date:"27 March 2021",Level_of_study:"Technical Degree(Graduate)"
            ,Location:"India" }
           
         ]
      }
   }
   renderTableHeader() {
      let header = Object.keys(this.state.schloarship[0])
      return header.map((key, index) => {
         return <th key={index}>{key.toUpperCase()}</th>
        
      })
   }
   renderTableData() {
      return this.state.schloarship.map((student, index) => {
         const { Name_of_schloarship,
            Schloarship_Amount,Opening_date,Closing_date,Level_of_study,Location} = student //destructuring
            
         return (
            <tr key={Name_of_schloarship}>
               
               <td >{Name_of_schloarship}<tr>
                  <td id ="green">Organization</td>
                  <tr >AICTE</tr>
               </tr>
               <tr>
               <td id="green">Eligliblity</td>
               <tr>60% in 10+2</tr>
               </tr>
               </td>
               <td>{Schloarship_Amount}</td>
               <td>{Opening_date}</td>
               <td>{Closing_date}</td>
               <td>{Level_of_study}</td>
               <td>{Location}</td>
            </tr>
         )
      })
   }

   render() {
      
      return (
         <div id="a">
         <div >
            
            <table id='schloarship'>
               <tbody>
                  <tr>{this.renderTableHeader()}</tr>
                  {this.renderTableData()}
               </tbody>
            </table>
         </div>
         </div>
      )
   }
}

export default Table //exporting a component make it reusable and this is the beauty of react

