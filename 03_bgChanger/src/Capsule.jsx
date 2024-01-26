function Capsule(props){
    return <button className="text-center text-white py-2 px-4 rounded-full" onClick={props.colorChanger} style={{backgroundColor: `${props.passedColor}`}}>{props.passedColor}</button>
}

export default Capsule