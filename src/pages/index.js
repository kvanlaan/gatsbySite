import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
// (function() {
//   var cors_api_host = 'cors-anywhere.herokuapp.com';
//   var cors_api_url = 'https://' + cors_api_host + '/';
//   var slice = [].slice;
//   var origin = window.location.protocol + '//' + window.location.host;
//   var open = XMLHttpRequest.prototype.open;
//   XMLHttpRequest.prototype.open = function() {
//       var args = slice.call(arguments);
//       var targetOrigin = /^https?:\/\/([^\/]+)/i.exec(args[1]);
//       if (targetOrigin && targetOrigin[0].toLowerCase() !== origin &&
//           targetOrigin[1] !== cors_api_host) {
//           args[1] = cors_api_url + args[1];
//       }
//       return open.apply(this, args);
//   };
// })();
export default class IndexPage extends React.Component {

  submit() {
    var xhr = new XMLHttpRequest()
    
    xhr.open('POST', 'https://www.formstack.com/api/v2/form/3772622/submission.json');
  
    xhr.setRequestHeader(	
        "Authorization", 'Bearer e62e37dd2040ce3a920a0758ddaa9a88')
  
    xhr.send(
    `field_88703176='kdvanlan@gmail.com'`
    )
    }
  

    render() {
        return (
  <Layout>
    <SEO title="Home" />
    <h1>Hi losers</h1>
    <p>Welcome to your new Gatsby site.</p>
    <p>Now go build something great.</p>
    <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
      <Image />
    </div>
    <button onClick={this.submit.bind(this)}>submit</button>
    <Link to="/page-2/">Go to page 2</Link>
  </Layout>
)
        }
      }
