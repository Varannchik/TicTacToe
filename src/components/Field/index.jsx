import React, { Component } from 'react';
import Cell from '../Cell';
import styles from './styles.module.scss';
// import update from 'react-addons-update';
import update from 'immutability-helper';

export default class extends Component{
    constructor(props){
        super(props);
        this.state = {
            cells : Array(9).fill(null),
            count : 0,
            win: 0,
            user: ''
        }
    }

    lengthArrCells =()=>{
        let sideOfSquare = Math.sqrt(this.state.cells.length);
        return sideOfSquare
    }

    // checkX =()=>{
    //     let length = this.lengthArrCells();
    //     let s = (this.state.count % 2 ===0) ? "x" : "o";
    //     let win=0;
    //     //let i = 0;
    //     // do {
    //     //     if(this.state.cells[i] === s && this.state.cells[i+1] === s && this.state.cells[i+2] === s){
    //     //         win=1;
    //     //         return(win);
    //     //     }
    //     //   } while (i<=length);

    //     for (let i=0; i<length; i++){
    //         if(this.state.cells[i] === s && this.state.cells[i+3] === s && this.state.cells[i+6] === s){
    //             win=1;
    //             return(win);
    //         }
    //     }
    // }

    checkY =()=>{
        let length = this.lengthArrCells();
        let s = (this.state.count % 2 ===0) ? "x" : "o";
        for (let i=0; i<length; i++){
            if(this.state.cells[i] === s && this.state.cells[i+3] === s && this.state.cells[i+6] === s){
                this.setState({user: s})
                this.setState({win: 1});
                return (this.state.win);
            }
        }
    }

    checkDiagonals =()=>{

    }
    
    clickHandler = (id) => {
        const newState = update(this.state, {count:{$set: id}});
        this.setState(newState);
        let curSquare = this.state.cells;
        if(curSquare[id] === null){
            curSquare[id] = (this.state.count % 2 === 0) ? "x" : "o"; //если четное пишем х ,если нет пишем о
            this.setState({count: this.state.count+1});
            this.setState({cells: curSquare});
        }
        // this.checkX();
        this.checkY();
    }

    render(){
        
        if(this.state.win === 1){
            this.setState({cells : Array(9).fill(null)});
            this.setState({count : 0})
            this.setState({win : 0})
            return (<h1><div> {this.state.user} is winner!</div></h1>)
        }

        return (
            <div className={styles.pole} >
                {this.state.cells.map((el, idx)=> <Cell id={idx} func={this.clickHandler} count={this.state.count} cells={this.state.cells[idx]}
                />)}
            </div>
        )
    }
};