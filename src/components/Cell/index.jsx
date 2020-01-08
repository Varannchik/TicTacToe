import React from 'react';
import styles from './styles.module.scss';

function SquareFunc (props) {
    return(<div className={styles.grid} onClick={()=>{ props.func(props.id)}}  id={props.id} count={props.id}>{props.cells}</div>)
}

export default SquareFunc;
