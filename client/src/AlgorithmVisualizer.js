import React from 'react';
import { Light as SyntaxHighlighter } from 'react-syntax-highlighter';
import js from 'react-syntax-highlighter/dist/esm/languages/hljs/javascript';
import { monokai } from 'react-syntax-highlighter/dist/esm/styles/hljs';

// Register the JavaScript language
SyntaxHighlighter.registerLanguage('javascript', js);
 
function randomNumber(min, max){
    return Math.floor(Math.random() * (max - min + 1)) + min;
 }
 
 function randomArray(size){
     const array = [];
     for(let i=0;i<size;i++){
         array.push(randomNumber(1, 10));
     }
     return array;
 }

function drawArrayWithArrow(array, currentIdx, targetIdx) {
    const canvas = document.getElementById('arrayCanvas');
    const ctx = canvas.getContext('2d');
    const cellWidth = 50;
    const cellHeight = 50;
    const arrowHeight = 20;

    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // Draw the array cells
    ctx.strokeStyle = 'black';
    array.forEach((value, index) => {
        ctx.strokeRect(index * cellWidth, arrowHeight, cellWidth, cellHeight);
        ctx.fillText(value, index * cellWidth + cellWidth / 2, arrowHeight + cellHeight / 2);
    });

    // Draw the arrow pointing to the current index
    ctx.strokeStyle = 'black';
    ctx.beginPath();
    ctx.moveTo(currentIdx * cellWidth + cellWidth / 2, 0);
    ctx.lineTo(currentIdx * cellWidth + cellWidth / 2, arrowHeight);
    ctx.lineTo(currentIdx * cellWidth + cellWidth / 2 - 5, arrowHeight - 5);
    ctx.moveTo(currentIdx * cellWidth + cellWidth / 2, arrowHeight);
    ctx.lineTo(currentIdx * cellWidth + cellWidth / 2 + 5, arrowHeight - 5);
    ctx.stroke();

    // Draw the arrow pointing to the target
    ctx.strokeStyle = 'red';
    ctx.beginPath();
    ctx.moveTo(targetIdx * cellWidth + cellWidth / 2, 0);
    ctx.lineTo(targetIdx * cellWidth + cellWidth / 2, arrowHeight);
    ctx.lineTo(targetIdx * cellWidth + cellWidth / 2 - 5, arrowHeight - 5);
    ctx.moveTo(targetIdx * cellWidth + cellWidth / 2, arrowHeight);
    ctx.lineTo(targetIdx * cellWidth + cellWidth / 2 + 5, arrowHeight - 5);
    ctx.stroke();

    ctx.strokeStyle = 'black';
}

const AlgorithmVisualizer = (props) => {
    const [inputFunction, inputArgument] = props;
    const handleOnClick = () => {
        let array = randomArray(10);
        let target = array[randomNumber(0,9)];
        const response = inputFunction.call(null, inputArgument);
        
        drawArrayWithArrow(array, 3, response.realOutput);
    }


  return (
    <div style={styles.container}>
        <header style={styles.header}>
            <h1>Brute Force Visualizer</h1>
        </header>
        <SyntaxHighlighter language="javascript" style={monokai} showLineNumbers={true}>
            {code}
        </SyntaxHighlighter>
        <div style={styles.container}>
            <button onClick={handleOnClick}>Run Code</button>
        </div>
        <div style={styles.container}>
            <canvas id="arrayCanvas" width="600" height="200">
            </canvas>
        </div>
    </div>
  );
};

const styles = {
    container: {
      fontFamily: 'Arial, sans-serif',
      margin: '0 auto',
      maxWidth: '800px',
      padding: '20px',
    },
    header: {
      backgroundColor: '#FFC0CB',
      color: 'white',
      padding: '10px 0',
      textAlign: 'center',
    },
    section: {
      marginBottom: '20px',
    },
    footer: {
      textAlign: 'center',
      borderTop: '1px solid #ddd',
      paddingTop: '10px',
    },
  };

export default BruteForceVisualizer;
