const creator = 'Emma';
const husband = 'Pablo';


function Message(){
    if (creator)
        return <h1>Hello There! {creator} and {husband}, this message is dynamically made!</h1>;
    return <h1>Creator Unavailable</h1>
}


export default Message;
