import Aside from "./Aside";

function Cabinet(props) {
    return (
        <div className="container-fluid">
            <div className="cabinetWrap row">
                <Aside pages={props.pages} />
                {props.children}
            </div>
        </div>
    )
}

export default Cabinet;