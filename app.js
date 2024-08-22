<head>

  <title>Myanmar Census 2014 Dashboard</title>

  <style>
      body {
          font-family: 'Arial', sans-serif;
          background-color: #f4f4f4;
          color: #333;
          margin: 0;
          padding: 0;
          line-height: 1.6;
      }

      h1 {
          text-align: center;
          margin-top: 20px;
          color: #444;
      }

      p {
          text-align: center;
          font-size: 18px;
          margin: 20px auto;
          max-width: 800px;
      }
    
    iframe {
    display: block;
    margin: 20px auto;
    border-radius: 8px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
    width: 800px; /* Set width in pixels */
    height: 450px; /* Set height in pixels */
}


  </style>

</head>

<body>

  <h1>Myanmar Census 2014 Dashboard</h1>

  <p>This dashboard provides insights from the Myanmar Census 2014, highlighting key demographic, literacy, citizenship, sanitation and relevant population data across the country. Use the interactive tools below to explore the data and gain a deeper understanding of the population distribution and trends in each region. The source of data can be found in this link: https://www.dop.gov.mm/en/data-and-maps-category/2014-census-data.</p>

  <!-- Embed Looker Studio iframe -->
  <iframe width="800" height="450" src="https://lookerstudio.google.com/embed/reporting/9cc389f0-edff-4dcf-8ded-c9b0dcc65580/page/EaM9D" frameborder="0" style="border:0" allowfullscreen sandbox="allow-storage-access-by-user-activation allow-scripts allow-same-origin allow-popups allow-popups-to-escape-sandbox"></iframe>

  <script src="./app.js"></script>

</body>
