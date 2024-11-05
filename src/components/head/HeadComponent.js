import React from 'react';
import { Helmet } from 'react-helmet';

const HeadComponent = () => {
  return (
    <Helmet>
      
      
      {/* Bootstrap CSS */}
      <link href="https://omniresources.fresnostate.edu/css/bootstrap.css" rel="stylesheet" />
      <link href="https://omniresources.fresnostate.edu/css/bootstrap-grid.min.css" rel="stylesheet" />
      <link href="https://omniresources.fresnostate.edu/css/bootstrap-reboot.min.css" rel="stylesheet" />

      {/* Fresno State CSS */}
      <link href="https://omniresources.fresnostate.edu/css/styles.css" rel="stylesheet" />
      <link href="https://omniresources.fresnostate.edu/css/print.css" rel="stylesheet" />
      <link href="https://omniresources.fresnostate.edu/css/totopstyle.css" rel="stylesheet" />
      <link href="https://omniresources.fresnostate.edu/css/slick.css" rel="stylesheet" />
      <link href="https://omniresources.fresnostate.edu/css/slick-theme.css" rel="stylesheet" />
      <link href="https://omniresources.fresnostate.edu/css/slick-lightbox.css" rel="stylesheet" />

      <script src="https://cdnjs.cloudflare.com/ajax/libs/html5shiv/3.7.3/html5shiv.min.js" />
      <script src="https://kit.fontawesome.com/a93c75ed0e.js" crossOrigin="anonymous" />
      <script async src="https://www.googletagmanager.com/gtag/js?id=G-QR2QRL14Q5" />

      <script src="https://code.jquery.com/jquery-3.3.1.min.js"></script>
      <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.7/umd/popper.min.js"></script>
      <script src="https://omniresources.fresnostate.edu/js/bootstrap.js"></script>
      <script src="https://omniresources.fresnostate.edu/js/scripts.js"></script>
      <script src="https://omniresources.fresnostate.edu/js/slick.min.js"></script>
      <script src="https://omniresources.fresnostate.edu/js/zoom.js"></script>
    </Helmet>
  );
};

export default HeadComponent;
