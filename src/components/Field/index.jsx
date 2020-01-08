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
            count : 0
        }
    }
    
    clickHandler = (id) => {             
        const newState = update(this.state, {count:{$set: id}});
        console.log( "id: "+ id)  
        console.log("cells: "+ this.state.cells);
        console.log("count: "+ this.state.count);
        
        
        let curSquare = this.state.cells;

        if(curSquare[id] === null){        
            curSquare[id] = (this.state.count % 2 === 0) ? "x" : "o"; //если четное пишем х ,если нет пишем о            
            this.setState({count: this.state.count + 1});
            this.setState({cells: curSquare});            
        }
        
        //this.setState(newState);
    }

    checkX =()=>{
        //return ({1,win},{0});
    }
    checkY =()=>{

    }
    checkDiagonals =()=>{

    }

    render(){
        
        return (
            <div className={styles.pole} >
                {this.state.cells.map((el, idx)=> <Cell id={idx} func={this.clickHandler} count={this.state.count} cells={this.state.cells[idx]}
                />)}
            </div>
        )
    }
};