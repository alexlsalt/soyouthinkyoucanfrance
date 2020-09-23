import React from 'react';

export default function Footer() {
  return (
    <div className="footer red">
      <h3>So You Think You Can France on YouTube</h3>
  
      <div class="video-layout">

        <iframe width="350" height="200" src="https://www.youtube.com/embed/0QCCHFkjr_w" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
    
        <iframe width="350" height="200" src="https://www.youtube.com/embed/LEkWB0X-ud8" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
    
        <iframe width="350" height="200" src="https://www.youtube.com/embed/i0X1YaKC96E" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
      </div>

      <p>© 2020 All rights reserved | Alex Morton Creative</p>
    </div>
  )
}