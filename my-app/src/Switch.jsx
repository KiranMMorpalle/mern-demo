import React from 'react'

function Switch() {
    let result='p';

    switch(result){
        case 'p': return "You are pass";
                  break;
        case 'f' : return "You are fail";
                    break;
        default : return "Invalid result information";
    } 
}

export default Switch
