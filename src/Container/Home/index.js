import React from 'react'
import Layout from '../../Component/Layout';
import { Jumbotron } from 'react-bootstrap'

function Home() {
    return (
        <div>
            <Layout>

                <div class="container">
                    <div class="jumbotron text-center" style={{margin:'5rem', backgroundColor:"fffff"}}  >
                        <h1>Welcome To Admion Dashboard</h1>
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release </p>
                       
                    </div>
                  
                </div>
            </Layout>

        </div>
    )
}

export default Home;