import React from 'react';
import { Helmet } from 'react-helmet';

const HeadComponent = () => {
  return (
    <Helmet>
      <link href="https://fresnostate.edu/index.html" rel="canonical" />
      <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
      <meta charset="utf-8" />
      <meta name="robots" content="index,follow" />
      <meta name="googlebot" content="index,follow" />
      <meta property="og:url" content="//fresnostate.edu" />
      <meta property="og:type" content="website" />
      <meta property="og:title" content="Fresno State Campus Login Services" />
      <meta property="og:description" content="CAS - Central Authentication Service" />
      <meta property="og:site_name" content="Fresno State Campus Login Services" />
      <link href="https://omniresources.fresnostate.edu/images/favicon/favicon.ico" rel="icon" type="image/x-icon" />
      
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
    </Helmet>
  );
};

export default HeadComponent;
