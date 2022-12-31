import React from 'react'
import Layout from './components/Layout'
import {page, text} from "./examples/about.module.css"
import { ExampleButton } from './examples/button'
import styled from 'styled-components'

const about = () => {
  return (
    <Layout>
      <Wrapper>
  <div >
      <h1>
       about page
      </h1>
      <h1>
       hello world
      </h1>

      <p className='text'>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis id venenatis magna. Aliquam rutrum ac dolor in commodo. Cras non mi vitae lorem sagittis pellentesque. Etiam fringilla sollicitudin magna, eget scelerisque quam porta id. Nullam posuere, mi in dictum laoreet, nunc felis sodales lacus, eu commodo tellus tortor sit amet arcu. Aenean quis porttitor ipsum. Etiam purus nulla, viverra vitae tincidunt eget, laoreet vel nunc. Nam euismod sem ac blandit bibendum. Aliquam rhoncus in risus id tempor. Pellentesque ut tortor non augue ultricies pellentesque.


      </p>
      </div>
      </Wrapper>
    </Layout>
  )
}

const Wrapper = styled.section`

    color:red;


.text{
    text-transform:uppercase;
    font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;

}

h1{
    color: rebeccapurple;
}

`

export default about