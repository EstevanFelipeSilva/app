import { Itens } from "../Types/Itens"; 

export const getCurrentMonth = () => {
    let now = new Date();

    return `${now.getFullYear()} ${now.getMonth()+1}`;
}

export const filterListByMonth = (list: Itens[], date: string): Itens[] => {
    let newList: Itens[] = [];
    let [year, month] = date.split('-');

    for(let i in list) {
        if(
            list[i].date.getFullYear() === parseInt(year) &&
            (list[i].date.getMonth() +1) === parseInt(month)
        ) {
            newList.push(list[i]);
        }
    }

    return newList;
}