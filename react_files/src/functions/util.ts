import type { card, question } from "../type";
import * as math from "mathjs";

export function manaUsage(cardPlayed : card) : number{
    return cardPlayed.manaUsage * Math.pow(1.1,cardPlayed.difficulty-1);
}

export function randomInt(max : number) : number{
    return parseInt((Math.random() * max).toString());
}
export function randomIntRange(min : number, max: number) : number{
    return parseInt((Math.random() * (max-min) + min).toString());
}
export function generateExpression() : string{
    let list = [];
    for(let i = 0; i < randomIntRange(2,4); i++){
        if(i==0){
            list.push(randomIntRange(1,3));
        }
        else{
            list.push(randomInt(3));
        }
        list.push(i);
    }
    let str = '';
    // console.log(list);
    for(let i = 0; i < list.length; i++){
        //get rid of 0 co-efficients
        if(i%2==0 && list[i]==0 && i > 0){
            i++;
        }
        else{
            if(i%2==1){
                //get rid of 0 exponents
                if(list[i]!=0){
                    str+='*x^';
                    str+=list[i];
                }
            }
            else{
                str+=list[i];
            }
            //get rid of 0 co-efficients
            if(i%2==1 && i!=list.length-1 && list[i+1]!=0){
                str+=Math.random() > 0.5 ? '-' : '+';
            }
        }
    }
    return str;
}
export function encloseInParentheses(str : any) : string{
    return '(' + str + ')'
}
export function multiply(x : any, y : any){
    return math.rationalize(encloseInParentheses(x) + '*' + encloseInParentheses(y));
}
export function generateQuestion(cardPlayed : card) : question{
    let question : question = {topic: cardPlayed.topic, name: '', difficulty: cardPlayed.difficulty};
    if(cardPlayed.topic=="Limits"){
        let equation = generateExpression();
        if(cardPlayed.difficulty==2){
            equation = encloseInParentheses(multiply(equation,generateExpression())) + '/' + encloseInParentheses(math.rationalize(equation));
        }
        else if(cardPlayed.difficulty==3){
            equation = encloseInParentheses(multiply(equation,generateExpression())) + '/' + encloseInParentheses(multiply(equation,generateExpression()));
        }
        equation = 'lim x-> ' + randomIntRange(-10,10) + ' of f(x) = ' + equation;
        // console.log(math.evaluate('2*+2*x^1',{x:-52}));
        console.log(equation);
        question = {...question, name: equation};
        console.log(solveQuestion(question));
    }
    return question;
}
export function solveQuestion(question : question) : string{
    let answer = question.name;
    if(question.topic=="Limits"){
        let c = parseInt(answer.substring(answer.indexOf('->') + 2,answer.indexOf('of')));
        answer = answer.substring(answer.indexOf('=') + 2);
        answer = math.evaluate(answer,{x : c});
    }
    return answer;
}
export function truncate(answer : any) : string{
    answer = answer.toString();
    if(answer.includes(".")){
        answer = answer.substring(0,answer.indexOf('.') + 4);
    }
    return answer;
}