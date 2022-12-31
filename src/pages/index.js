import * as React from "react"
import { Link } from 'gatsby'
import Layout from "./components/Layout"
import {page, text} from "./examples/home.module.css"
import { ExampleButton } from "./examples/button"

export default function Home() {
  return ( <Layout>

<div className={page}>
<ExampleButton>click me!</ExampleButton>
    <h1>home page</h1>
    <h1>hello world</h1>
    <h1>hello people</h1>

    <p className={text}>
    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis id venenatis magna.
    Aliquam rutrum ac dolor in commodo. Cras non mi vitae lorem sagittis pellentesque. 
    Etiam fringilla sollicitudin magna, eget scelerisque quam porta id. 
    Nullam posuere, mi in dictum laoreet, nunc felis sodales lacus, eu commodo tellus tortor sit amet arcu. 
    Aenean quis porttitor ipsum. Etiam purus nulla, viverra vitae tincidunt eget, laoreet vel nunc. 
    Nam euismod sem ac blandit bibendum. Aliquam rhoncus in risus id tempor. 
    Pellentesque ut tortor non augue ultricies pellentesque.
    </p>
    </div>

    </Layout>
    )
}
