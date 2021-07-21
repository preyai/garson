import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import client from "../../feathersClient";

function useQuery() {
    return new URLSearchParams(useLocation().search);
}
export default function SetToken(props) {
    let query = useQuery();

    if (query.get("access_token")) {
        client.authentication.setAccessToken(query.get("access_token"));
        window.location.href = '/account';
        return (<div></div>);
    } else if (query.get("error")) {
        window.location.href = '/';
        return (<div>{query.get("error")}</div>);
    }
    else {
        window.location.href = '/'
        return (<div>00</div>);
    }
}