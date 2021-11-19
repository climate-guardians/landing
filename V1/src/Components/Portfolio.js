import React, { Component } from "react";
import Fade from "react-reveal";

class Portfolio extends Component {
  render() {
  
    return (
      <section id="portfolio">
        <Fade left duration={1000} distance="40px">
          <div className="row">
            <div className="twelve columns collapsed">
              <h1>Check out our Co2 charged NFT collection:</h1>
              <div>
              <nft-card 
              contractAddress="0xb47e3cd837ddf8e4c57f05d70ab865de6e193bbb" 
              tokenId="1190">
              </nft-card> 
              <nft-card 
              contractAddress="0xb47e3cd837ddf8e4c57f05d70ab865de6e193bbb" 
              tokenId="1191">
              </nft-card> 
              <nft-card 
              contractAddress="0xb47e3cd837ddf8e4c57f05d70ab865de6e193bbb" 
              tokenId="1192">
              </nft-card> 
              </div>
              <div
                id="portfolio-wrapper"
                className="bgrid-quarters s-bgrid-thirds cf"
              >
             </div>
            </div>
          </div>
        </Fade>
      </section>
    );
  }
}

export default Portfolio;
