import Aside from "./Aside";

function Cabinet(props) {
    return (
        <div className="container-fluid">
            <div className="cabinetWrap row">
                <Aside />
                {props.children}
            </div>
        </div>
    )
}

export default Cabinet;