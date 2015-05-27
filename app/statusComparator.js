export default function statusComparator(todo1, todo2) {
    let result = 0;

    if(todo1.done && !todo2.done){
        result = 1;
    } else if(!todo1.done && todo2.done){
        result = -1;
    }

    return result;
};
