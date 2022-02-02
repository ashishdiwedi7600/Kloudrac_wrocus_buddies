import React from "react";

export default function Private(props) {
const page=props.page;

const token=localStorage.getItem('token');

return token ? page : <div>unauthorised</div>

}