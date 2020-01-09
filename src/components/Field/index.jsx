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
    //     //let length = this.lengthArrCells();
    //     console.log("wwww1")
    //     let s = (this.state.count % 2 ===0) ? "x" : "o";
    //     for (let i=0; i<9; i++){
    //         if(this.state.cells[i] === s && this.state.cells[i+3] === s && this.state.cells[i+6] === s){
    //             console.log("wwww2")
    //             this.setState({user: s})
    //             this.setState({win: 1});
    //             return (this.state.win);
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
        //this.checkX();
        this.checkY();
    }

    render(){
        
        if(this.state.win === 1){
            return (
                <div className={styles.pole} >
                    <h1> {this.state.user} is winner!</h1>
                </div>
            )
        }else{
            return (
            <div className={styles.pole} >
                {this.state.cells.map((el, idx)=> <Cell id={idx} func={this.clickHandler} count={this.state.count} cells={this.state.cells[idx]}
                />)}
            </div>
        )
        }

        
    }
};