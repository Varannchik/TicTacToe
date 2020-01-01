import React, { Component } from 'react';
import styles from './styles.module.scss';

export default class extends Component{
  constructor(props){
    super(props);
    this.state = {
      squares : Array(9).fill(null),
      count : 0
    }
    this.winnerLine = [
      //горизонтали
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],

      //вертикали
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],

      //диагонали
      [0, 4, 8],
      [2, 4, 6]
    ]    
  }
  
  isWinner = () =>{
    let s = (this.state.count % 2 ===0) ? "x" : "o";
    for (let i=0; i<8; i++){
      let line = this.winnerLine[i];
      if(this.state.squares[line[0]] === s && this.state.squares[line[1]] === s && this.state.squares[line[2]] === s){
        setTimeout(()=>{
          alert (s + " win!");
        },500);
        
        setTimeout(()=>{
          this.setState({squares : Array(9).fill(null)});
          this.setState({count : 0})
        }, 1500);
      }else{
        setTimeout(()=>{
          alert ("Победила дружба!");
        },500);
      }

    }
  }

  clickHandler = event =>{
    let data = event.target.getAttribute('data'); //номер квадрата по котрому кликнули
    let curSquare = this.state.squares;

    if(curSquare[data]===null){
      curSquare[data] = (this.state.count % 2 ===0) ? "x" : "o"; //если четное пишем х ,если нет пишем о
      this.setState({count: this.state.count + 1});
      this.setState({squares: curSquare});
    }

    this.isWinner();
    
  }

  render(){
    return (
      <div>
        <div className={styles.pole}>
          <div className={styles.grid} onClick={this.clickHandler} data="0">{this.state.squares[0]}</div>
          <div className={styles.grid} onClick={this.clickHandler} data="1">{this.state.squares[1]}</div>
          <div className={styles.grid} onClick={this.clickHandler} data="2">{this.state.squares[2]}</div>

          <div className={styles.grid} onClick={this.clickHandler} data="3">{this.state.squares[3]}</div>
          <div className={styles.grid} onClick={this.clickHandler} data="4">{this.state.squares[4]}</div>
          <div className={styles.grid} onClick={this.clickHandler} data="5">{this.state.squares[5]}</div>

          <div className={styles.grid} onClick={this.clickHandler} data="6">{this.state.squares[6]}</div>
          <div className={styles.grid} onClick={this.clickHandler} data="7">{this.state.squares[7]}</div>
          <div className={styles.grid} onClick={this.clickHandler} data="8">{this.state.squares[8]}</div>
        </div>
      </div>
    )
  }
};
