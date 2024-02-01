function initMap() {
    let uk = {lat: 54.3555, lng: -4.8455};
    // We need to check the screen size when loaded
    // If it is small we zoom out a little
    if (window.innerWidth < 767) {
      var map = new google.maps.Map(
        document.getElementById('map'), {zoom: 5.25, center: uk}
      );
    } else {
      var map = new google.maps.Map(
        document.getElementById('map'), {zoom: 5.75, center: uk}
      );
    }
    let icons = {
      url: './assets/images/markers.png',
      scaledSize: new google.maps.Size(27.25, 14.125),
    }
    let largerIcon = {
      url: './assets/images/markers.png',
      scaledSize: new google.maps.Size(40.875, 21.1875),
    }
    let businesses = [];
    let business_one = new google.maps.Marker( {
      position: {lat: 52.45736, lng: -1.52918},
      map: map,
      icon: icons,
      content: `

      <div class="row m-0 business-card-row">
        <p class="mb-2 w-100 text-center"><strong>Exactaform Cutting Tools Ltd</strong></p>
      </div>

      <div class="row m-0 business-card-row justify-content-center">
        <div class="col-4-5 p-0 d-flex align-items-center">
          <img src="./assets/images/business_images/business_one.jpeg" alt="Image of Exactaform Cutting Tools Ltd" class="business-image">
        </div>
        <div class="col-7-5 d-flex flex-column justify-content-center">
          <p class="pl-2 m-0">📇 Careers Fair</p>
          <p class="pl-2 m-0">🏭 Work Experience</p>
          <p class="pl-2 m-0">🛠 Work Placement/T Levels</p>
          <p class="pl-2 m-0">📣 Guest Speaker</p>
        </div>
      </div>
      <div class="row m-0 mt-2 business-card-row justify-content-center">
        <div class="col-8 text-center">
          <a href="https://www.exactaform.com/" target="_blank">Visit company website</a>
        </div>
      </div>

      `,
      title: 'Exactaform Cutting Tools Ltd',
      card: false
    });
    businesses.push(business_one);
    let business_two = new google.maps.Marker( {
      position: {lat: 53.28102, lng: -2.86991},
      map: map,
      icon: icons,
      content: `
      
      <div class="row m-0 business-card-row">
        <p class="mb-2 w-100 text-center"><strong>Greif UK Ltd</strong></p>
      </div>

      <div class="row m-0 business-card-row justify-content-center">
        <div class="col-4-5 p-0 d-flex align-items-center">
          <img src="./assets/images/business_images/business_two.jpg" alt="Image of Greif UK Ltd" class="business-image">
        </div>
        <div class="col-7-5 d-flex flex-column justify-content-center">
          <p class="pl-2 m-0">📇 Careers Fair</p>
          <p class="pl-2 m-0">🏭 Work Experience</p>
          <p class="pl-2 m-0">🛠 Work Placement/T Levels</p>
        </div>
      </div>
      <div class="row m-0 mt-2 business-card-row justify-content-center">
        <div class="col-8 text-center">
          <a href="https://www.greif.com/?utm_source=gmb&utm_medium=yext" target="_blank">Visit company website</a>
        </div>
      </div>

      `,
      title: 'Greif UK Ltd',
      card: false
    });
    businesses.push(business_two);
    let business_three = new google.maps.Marker( {
      position: {lat: 55.40189, lng: -1.69705},
      map: map,
      icon: icons,
      content: `
      
      <div class="row m-0 business-card-row">
        <p class="mb-2 w-100 text-center"><strong>MSP Ltd</strong></p>
      </div>

      <div class="row m-0 business-card-row justify-content-center">
        <div class="col-4-5 p-0 d-flex align-items-center">
          <img src="./assets/images/business_images/business_three.png" alt="Image of MSP Ltd" class="business-image">
        </div>
        <div class="col-7-5 d-flex flex-column justify-content-center">
          <p class="pl-2 m-0">📇 Careers Fair</p>
          <p class="pl-2 m-0">🎤 Mock Interviews</p>
          <p class="pl-2 m-0">🏭 Work Experience</p>
          <p class="pl-2 m-0">🛠 Work Placement/T Levels</p>
          <p class="pl-2 m-0">👥 Assemblies</p>
          <p class="pl-2 m-0">👨‍🔧 STEM Ambassador</p>
          <p class="pl-2 m-0">📣 Guest Speaker</p>
          <p class="pl-2 m-0">📋 Mentoring</p>
          <p class="pl-2 m-0">📝 Projects</p>
        </div>
      </div>
      <div class="row m-0 mt-2 business-card-row justify-content-center">
        <div class="col-8 text-center">
          <a href="https://www.mspltd.com" target="_blank">Visit company website</a>
        </div>
      </div>
      
      `,
      title: 'MSP Ltd',
      card: false
    });
    businesses.push(business_three);
    let business_four = new google.maps.Marker( {
      position: {lat: 53.48887, lng: -1.29540},
      map: map,
      icon: icons,
      content: `
      
      <div class="row m-0 business-card-row">
        <p class="mb-2 w-100 text-center"><strong>Corrosion Resistant Materials Ltd</strong></p>
      </div>

      <div class="row m-0 business-card-row justify-content-center">
        <div class="col-4-5 p-0 d-flex align-items-center">
          <img src="./assets/images/business_images/business_four.jpeg" alt="Image of Corrosion Resistant Materials Ltd" class="business-image">
        </div>
        <div class="col-7-5 d-flex flex-column justify-content-center">
          <p class="pl-2 m-0">🚪 Open Door</p>
          <p class="pl-2 m-0">📇 Careers Fair</p>
          <p class="pl-2 m-0">🎤 Mock Interviews</p>
          <p class="pl-2 m-0">🏭 Work Experience</p>
          <p class="pl-2 m-0">🛠 Work Placement/T Levels</p>
          <p class="pl-2 m-0">👥 Assemblies</p>
          <p class="pl-2 m-0">👨‍🏫 Lesson Support</p>
          <p class="pl-2 m-0">❓ Guess Who Sessions</p>
          <p class="pl-2 m-0">📈 Taster Workshops</p>
          <p class="pl-2 m-0">👨‍🔧 STEM Ambassador</p>
          <p class="pl-2 m-0">👩‍💻 Apprentice Ambassador</p>
          <p class="pl-2 m-0">📣 Guest Speaker</p>
          <p class="pl-2 m-0">📋 Mentoring</p>
          <p class="pl-2 m-0">📝 Projects</p>
        </div>
      </div>
      <div class="row m-0 mt-2 business-card-row justify-content-center">
        <div class="col-8 text-center">
          <a href="https://www.corrosion-resistant-materials.co.uk" target="_blank">Visit company website</a>
        </div>
      </div>
      
      `,
      title: 'Corrosion Resistant Materials Ltd',
      card: false
    });
    businesses.push(business_four);
    let business_five = new google.maps.Marker( {
      position: {lat: 52.44186, lng: -1.99949},
      map: map,
      icon: icons,
      content: `
      
      <div class="row m-0 business-card-row">
        <p class="mb-2 w-100 text-center"><strong>Lander Tubular Products</strong></p>
      </div>

      <div class="row m-0 business-card-row justify-content-center">
        <div class="col-4-5 p-0 d-flex align-items-center">
          <img src="./assets/images/business_images/business_five.jpeg" alt="Image of Lander Tubular Products" class="business-image">
        </div>
        <div class="col-7-5 d-flex flex-column justify-content-center">
          <p class="pl-2 m-0">🚪 Open Door</p>
          <p class="pl-2 m-0">📇 Careers Fair</p>
          <p class="pl-2 m-0">🎤 Mock Interviews</p>
          <p class="pl-2 m-0">🏭 Work Experience</p>
          <p class="pl-2 m-0">🛠 Work Placement/T Levels</p>
          <p class="pl-2 m-0">👨‍🏫 Lesson Support</p>
          <p class="pl-2 m-0">❓ Guess Who Sessions</p>
          <p class="pl-2 m-0">👨‍🔧 STEM Ambassador</p>
          <p class="pl-2 m-0">👩‍💻 Apprentice Ambassador</p>
          <p class="pl-2 m-0">📣 Guest Speaker</p>
          <p class="pl-2 m-0">📋 Mentoring</p>
          <p class="pl-2 m-0">📝 Projects</p>
        </div>
      </div>
      <div class="row m-0 mt-2 business-card-row justify-content-center">
        <div class="col-8 text-center">
          <a href="https://www.lander.co.uk" target="_blank">Visit company website</a>
        </div>
      </div>
      
      `,
      title: 'Lander Tubular Products',
      card: false
    });
    businesses.push(business_five);
    let business_six = new google.maps.Marker( {
      position: {lat: 51.52066, lng: -3.56528},
      map: map,
      icon: icons,
      content: `
      
      <div class="row m-0 business-card-row">
        <p class="mb-2 w-100 text-center"><strong>Mavrik Innovations</strong></p>
      </div>

      <div class="row m-0 business-card-row justify-content-center">
        <div class="col-4-5 p-0 d-flex align-items-center">
          <img src="./assets/images/business_images/business_six.jpeg" alt="Image of Mavrik Innovations" class="business-image">
        </div>
        <div class="col-7-5 d-flex flex-column justify-content-center">
          <p class="pl-2 m-0">🏭 Work Experience</p>
          <p class="pl-2 m-0">🛠 Work Placement/T Levels</p>
          <p class="pl-2 m-0">👩‍💻 Apprentice Ambassador</p>
          <p class="pl-2 m-0">📝 Projects</p>
        </div>
      </div>
      <div class="row m-0 mt-2 business-card-row justify-content-center">
        <div class="col-8 text-center">
          <a href="http://www.mavrikinnovations.co.uk" target="_blank">Visit company website</a>
        </div>
      </div>
      
      `,
      title: 'Mavrik Innovations',
      card: false
    });
    businesses.push(business_six);
    let business_seven = new google.maps.Marker( {
      position: {lat: 53.46808, lng: -2.86981},
      map: map,
      icon: icons,
      content: `
      
      <div class="row m-0 business-card-row">
        <p class="mb-2 w-100 text-center"><strong>JJ Smith &amp; Co (Woodworking Machinery) Ltd</strong></p>
      </div>

      <div class="row m-0 business-card-row justify-content-center">
        <div class="col-4-5 p-0 d-flex align-items-center">
          <img src="./assets/images/business_images/business_seven.jpeg" alt="Image of JJ Smith &amp; Co (Woodworking Machinery) Ltd" class="business-image">
        </div>
        <div class="col-7-5 d-flex flex-column justify-content-center">
          <p class="pl-2 m-0">🚪 Open Door</p>
          <p class="pl-2 m-0">📇 Careers Fair</p>
          <p class="pl-2 m-0">🎤 Mock Interviews</p>
          <p class="pl-2 m-0">🏭 Work Experience</p>
          <p class="pl-2 m-0">🛠 Work Placement/T Levels</p>
          <p class="pl-2 m-0">👥 Assemblies</p>
          <p class="pl-2 m-0">👨‍🔧 STEM Ambassador</p>
          <p class="pl-2 m-0">👩‍💻 Apprentice Ambassador</p>
          <p class="pl-2 m-0">📣 Guest Speaker</p>
        </div>
      </div>
      <div class="row m-0 mt-2 business-card-row justify-content-center">
        <div class="col-8 text-center">
          <a href="https://www.jjsmith.co.uk" target="_blank">Visit company website</a>
        </div>
      </div>
      
      `,
      title: 'JJ Smith & Co (Woodworking Machinery) Ltd',
      card: false
    });
    businesses.push(business_seven);
    let business_eight = new google.maps.Marker( {
      position: {lat: 52.23085, lng: -2.19623},
      map: map,
      icon: icons,
      content: `
      
      <div class="row m-0 business-card-row">
        <p class="mb-2 w-100 text-center"><strong>MAT LTD</strong></p>
      </div>

      <div class="row m-0 business-card-row justify-content-center">
        <div class="col-4-5 p-0 d-flex align-items-center">
          <img src="./assets/images/business_images/business_eight.jpeg" alt="Image of MAT LTD" class="business-image">
        </div>
        <div class="col-7-5 d-flex flex-column justify-content-center">
          <p class="pl-2 m-0">🎤 Mock Interviews</p>
          <p class="pl-2 m-0">👨‍🔧 STEM Ambassador</p>
          <p class="pl-2 m-0">📋 Mentoring</p>
        </div>
      </div>
      <div class="row m-0 mt-2 business-card-row justify-content-center">
        <div class="col-8 text-center">
          <a href="https://matl.co.uk" target="_blank">Visit company website</a>
        </div>
      </div>
      
      `,
      title: 'MAT LTD',
      card: false
    });
    businesses.push(business_eight);
    let business_nine = new google.maps.Marker( {
      position: {lat: 52.53716, lng: -1.40165},
      map: map,
      icon: icons,
      content: `
      
      <div class="row m-0 business-card-row">
        <p class="mb-2 w-100 text-center"><strong>Bosworth Plastics Limited</strong></p>
      </div>

      <div class="row m-0 business-card-row justify-content-center">
        <div class="col-4-5 p-0 d-flex align-items-center">
          <img src="./assets/images/business_images/business_nine.webp" alt="Image of Bosworth Plastics Limited" class="business-image">
        </div>
        <div class="col-7-5 d-flex flex-column justify-content-center">
          <p class="pl-2 m-0">🚪 Open Door</p>
          <p class="pl-2 m-0">🏭 Work Experience</p>
        </div>
      </div>
      <div class="row m-0 mt-2 business-card-row justify-content-center">
        <div class="col-8 text-center">
          <a href="https://www.bosworthplastics.co.uk" target="_blank">Visit company website</a>
        </div>
      </div>
      
      `,
      title: 'Bosworth Plastics Limited',
      card: false
    });
    businesses.push(business_nine);
    let business_ten = new google.maps.Marker( {
      position: {lat: 51.60128, lng: 0.54597},
      map: map,
      icon: icons,
      content: `
      
      <div class="row m-0 business-card-row">
        <p class="mb-2 w-100 text-center"><strong>TNC Precision Engineering Ltd</strong></p>
      </div>

      <div class="row m-0 business-card-row justify-content-center">
        <div class="col-4-5 p-0 d-flex align-items-center">
          <img src="./assets/images/business_images/business_ten.jpeg" alt="Image of TNC Precision Engineering Ltd" class="business-image">
        </div>
        <div class="col-7-5 d-flex flex-column justify-content-center">
          <p class="pl-2 m-0">🚪 Open Door</p>
          <p class="pl-2 m-0">📇 Careers Fair</p>
          <p class="pl-2 m-0">🏭 Work Experience</p>
          <p class="pl-2 m-0">🛠 Work Placement/T Levels</p>
          <p class="pl-2 m-0">📋 Mentoring</p>
        </div>
      </div>
      <div class="row m-0 mt-2 business-card-row justify-content-center">
        <div class="col-8 text-center">
          <a href="https://tncprecision.com" target="_blank">Visit company website</a>
        </div>
      </div>

      `,
      title: 'TNC Precision Engineering Ltd',
      card: false
    });
    businesses.push(business_ten);
    let business_eleven = new google.maps.Marker( {
      position: {lat: 50.89894, lng: -1.40023},
      map: map,
      icon: icons,
      content: `
      
      <div class="row m-0 business-card-row">
        <p class="mb-2 w-100 text-center"><strong>Martins Rubber Co Ltd</strong></p>
      </div>

      <div class="row m-0 business-card-row justify-content-center">
        <div class="col-4-5 p-0 d-flex align-items-center">
          <img src="./assets/images/business_images/business_eleven.jpeg" alt="Image of Martins Rubber Co Ltd" class="business-image">
        </div>
        <div class="col-7-5 d-flex flex-column justify-content-center">
          <p class="pl-2 m-0">🚪 Open Door</p>
          <p class="pl-2 m-0">🎤 Mock Interviews</p>
          <p class="pl-2 m-0">🏭 Work Experience</p>
          <p class="pl-2 m-0">🛠 Work Placement/T Levels</p>
          <p class="pl-2 m-0">📈 Taster Workshops</p>
          <p class="pl-2 m-0">📣 Guest Speaker</p>
          <p class="pl-2 m-0">📋 Mentoring</p>
          <p class="pl-2 m-0">📝 Projects</p>
        </div>
      </div>
      <div class="row m-0 mt-2 business-card-row justify-content-center">
        <div class="col-8 text-center">
          <a href="https://www.martins-rubber.co.uk" target="_blank">Visit company website</a>
        </div>
      </div>
      
      `,
      title: 'Martins Rubber Co Ltd',
      card: false
    });
    businesses.push(business_eleven);
    let business_twelve = new google.maps.Marker( {
      position: {lat: 55.88480, lng: -4.44157},
      map: map,
      icon: icons,
      content: `
      
      <div class="row m-0 business-card-row">
        <p class="mb-2 w-100 text-center"><strong>National Manufacturing Institute Scotland</strong></p>
      </div>

      <div class="row m-0 business-card-row justify-content-center">
        <div class="col-4-5 p-0 d-flex align-items-center">
          <img src="./assets/images/business_images/business_twelve.jpeg" alt="Image of National Manufacturing Institute Scotland" class="business-image">
        </div>
        <div class="col-7-5 d-flex flex-column justify-content-center">
          <p class="pl-2 m-0">🚪 Open Door</p>
          <p class="pl-2 m-0">📇 Careers Fair</p>
          <p class="pl-2 m-0">📈 Taster Workshops</p>
          <p class="pl-2 m-0">👨‍🔧 STEM Ambassador</p>
        </div>
      </div>
      <div class="row m-0 mt-2 business-card-row justify-content-center">
        <div class="col-8 text-center">
          <a href="https://www.nmis.scot/" target="_blank">Visit company website</a>
        </div>
      </div>
      
      `,
      title: 'National Manufacturing Institute Scotland',
      card: false
    });
    businesses.push(business_twelve);
    let business_thirteen = new google.maps.Marker( {
      position: {lat: 52.88329, lng: -2.53366},
      map: map,
      icon: icons,
      content: `
      
      <div class="row m-0 business-card-row">
        <p class="mb-2 w-100 text-center"><strong>Caswell Engineering services Ltd</strong></p>
      </div>

      <div class="row m-0 business-card-row justify-content-center">
        <div class="col-4-5 p-0 d-flex align-items-center">
          <img src="./assets/images/business_images/business_thirteen.png" alt="Image of Caswell Engineering services Ltd" class="business-image">
        </div>
        <div class="col-7-5 d-flex flex-column justify-content-center">
          <p class="pl-2 m-0">🚪 Open Door</p>
          <p class="pl-2 m-0">📝 Projects</p>
        </div>
      </div>
      <div class="row m-0 mt-2 business-card-row justify-content-center">
        <div class="col-8 text-center">
          <a href="https://www.caswellengineeringservices.com" target="_blank">Visit company website</a>
        </div>
      </div>
      
      `,
      title: 'Caswell Engineering services Ltd',
      card: false
    });
    businesses.push(business_thirteen);
    let business_fourteen = new google.maps.Marker( {
      position: {lat: 52.92702, lng: -1.28775},
      map: map,
      icon: icons,
      content: `
      
      <div class="row m-0 business-card-row">
        <p class="mb-2 w-100 text-center"><strong>Hydroscand Ltd</strong></p>
      </div>

      <div class="row m-0 business-card-row justify-content-center">
        <div class="col-4-5 p-0 d-flex align-items-center">
          <img src="./assets/images/business_images/business_fourteen.jpeg" alt="Image of Hydroscand Ltd" class="business-image">
        </div>
        <div class="col-7-5 d-flex flex-column justify-content-center">
          <p class="pl-2 m-0">🚪 Open Door</p>
          <p class="pl-2 m-0">👥 Assemblies</p>
          <p class="pl-2 m-0">👨‍🔧 STEM Ambassador</p>
          <p class="pl-2 m-0">📣 Guest Speaker</p>
        </div>
      </div>
      <div class="row m-0 mt-2 business-card-row justify-content-center">
        <div class="col-8 text-center">
          <a href="https://www.hydroscand.co.uk/uk_en/" target="_blank">Visit company website</a>
        </div>
      </div>
      
      `,
      title: 'Hydroscand Ltd',
      card: false
    });
    businesses.push(business_fourteen);
    let business_fifteen = new google.maps.Marker( {
      position: {lat: 53.11748, lng: -1.24877},
      map: map,
      icon: icons,
      content: `
      
      <div class="row m-0 business-card-row">
        <p class="mb-2 w-100 text-center"><strong>Boneham &amp; Turner Limited</strong></p>
      </div>

      <div class="row m-0 business-card-row justify-content-center">
        <div class="col-4-5 p-0 d-flex align-items-center">
          <img src="./assets/images/business_images/business_fifteen.jpeg" alt="Image of Boneham &amp; Turner Limited" class="business-image">
        </div>
        <div class="col-7-5 d-flex flex-column justify-content-center">
          <p class="pl-2 m-0">🚪 Open Door</p>
          <p class="pl-2 m-0">🎤 Mock Interviews</p>
          <p class="pl-2 m-0">🏭 Work Experience</p>
          <p class="pl-2 m-0">👥 Assemblies</p>
          <p class="pl-2 m-0">👨‍🏫 Lesson Support</p>
          <p class="pl-2 m-0">📈 Taster Workshops</p>
          <p class="pl-2 m-0">👩‍💻 Apprentice Ambassador</p>
          <p class="pl-2 m-0">📋 Mentoring</p>
          <p class="pl-2 m-0">📝 Projects</p>
        </div>
      </div>
      <div class="row m-0 mt-2 business-card-row justify-content-center">
        <div class="col-8 text-center">
          <a href="https://www.boneham.co.uk" target="_blank">Visit company website</a>
        </div>
      </div>
      
      `,
      title: 'Boneham & Turner Limited',
      card: false
    });
    businesses.push(business_fifteen);
    let business_sixteen = new google.maps.Marker( {
      position: {lat: 50.50112, lng: -4.40804},
      map: map,
      icon: icons,
      content: `
      
      <div class="row m-0 business-card-row">
        <p class="mb-2 w-100 text-center"><strong>SD Technics Design &amp; Draughting</strong></p>
      </div>

      <div class="row m-0 business-card-row justify-content-center">
        <div class="col-4-5 p-0 d-flex align-items-center">
          <img src="./assets/images/business_images/business_sixteen.jpeg" alt="Image of SD Technics Design &amp; Draughting" class="business-image">
        </div>
        <div class="col-7-5 d-flex flex-column justify-content-center">
          <p class="pl-2 m-0">👥 Assemblies</p>
          <p class="pl-2 m-0">❓ Guess Who Sessions</p>
          <p class="pl-2 m-0">📣 Guest Speaker</p>
        </div>
      </div>
      
      `,
      title: 'SD Technics Design & Draughting',
      card: false
    });
    businesses.push(business_sixteen);
    let business_seventeen = new google.maps.Marker( {
      position: {lat: 51.99934, lng: -2.12493},
      map: map,
      icon: icons,
      content: `
      
      <div class="row m-0 business-card-row">
        <p class="mb-2 w-100 text-center"><strong>Geometric Manufacturing Ltd</strong></p>
      </div>

      <div class="row m-0 business-card-row justify-content-center">
        <div class="col-4-5 p-0 d-flex align-items-center">
          <img src="./assets/images/business_images/business_seventeen.jpeg" alt="Image of Geometric Manufacturing Ltd" class="business-image">
        </div>
        <div class="col-7-5 d-flex flex-column justify-content-center">
          <p class="pl-2 m-0">🚪 Open Door</p>
          <p class="pl-2 m-0">📇 Careers Fair</p>
          <p class="pl-2 m-0">🎤 Mock Interviews</p>
          <p class="pl-2 m-0">🏭 Work Experience</p>
          <p class="pl-2 m-0">🛠 Work Placement/T Levels</p>
          <p class="pl-2 m-0">👨‍🏫 Lesson Support</p>
          <p class="pl-2 m-0">❓ Guess Who Sessions</p>
          <p class="pl-2 m-0">📈 Taster Workshops</p>
          <p class="pl-2 m-0">👨‍🔧 STEM Ambassador</p>
          <p class="pl-2 m-0">👩‍💻 Apprentice Ambassador</p>
          <p class="pl-2 m-0">📣 Guest Speaker</p>
          <p class="pl-2 m-0">📋 Mentoring</p>
          <p class="pl-2 m-0">📝 Projects</p>
        </div>
      </div>
      <div class="row m-0 mt-2 business-card-row justify-content-center">
        <div class="col-8 text-center">
          <a href="https://www.geometricmanufacturing.co.uk" target="_blank">Visit company website</a>
        </div>
      </div>
      
      `,
      title: 'Geometric Manufacturing Ltd',
      card: false
    });
    businesses.push(business_seventeen);
    let business_eighteen = new google.maps.Marker( {
      position: {lat: 51.91517, lng: -0.63531},
      map: map,
      icon: icons,
      content: `
      
      <div class="row m-0 business-card-row">
        <p class="mb-2 w-100 text-center"><strong>Hone-All Precision Ltd</strong></p>
      </div>

      <div class="row m-0 business-card-row justify-content-center">
        <div class="col-4-5 p-0 d-flex align-items-center">
          <img src="./assets/images/business_images/business_eighteen.jpeg" alt="Image of Hone-All Precision Ltd" class="business-image">
        </div>
        <div class="col-7-5 d-flex flex-column justify-content-center">
          <p class="pl-2 m-0">🚪 Open Door</p>
          <p class="pl-2 m-0">🛠 Work Placement/T Levels</p>
          <p class="pl-2 m-0">📣 Guest Speaker</p>
        </div>
      </div>
      <div class="row m-0 mt-2 business-card-row justify-content-center">
        <div class="col-8 text-center">
          <a href="https://www.hone-all.co.uk" target="_blank">Visit company website</a>
        </div>
      </div>
      
      `,
      title: 'Hone-All Precision Ltd',
      card: false
    });
    businesses.push(business_eighteen);
    let business_nineteen = new google.maps.Marker( {
      position: {lat: 52.45875, lng: -0.94552},
      map: map,
      icon: icons,
      content: `
      
      <div class="row m-0 business-card-row">
        <p class="mb-2 w-100 text-center"><strong>Figjam Solutions Ltd</strong></p>
      </div>

      <div class="row m-0 business-card-row justify-content-center">
        <div class="col-4-5 p-0 d-flex align-items-center">
          <img src="./assets/images/business_images/business_nineteen.jpeg" alt="Image of Figjam Solutions Ltd" class="business-image">
        </div>
        <div class="col-7-5 d-flex flex-column justify-content-center">
          <p class="pl-2 m-0">📋 Mentoring</p>
          <p class="pl-2 m-0">📝 Projects</p>
        </div>
      </div>
      <div class="row m-0 mt-2 business-card-row justify-content-center">
        <div class="col-8 text-center">
          <a href="https://figjamsolutionsltd.com/" target="_blank">Visit company website</a>
        </div>
      </div>
      
      `,
      title: 'Figjam Solutions Ltd',
      card: false
    });
    businesses.push(business_nineteen);
    let business_twenty = new google.maps.Marker( {
      position: {lat: 51.75300, lng: -2.29588},
      map: map,
      icon: icons,
      content: `
      
      <div class="row m-0 business-card-row">
        <p class="mb-2 w-100 text-center"><strong>Stroud Engineering Services LTD</strong></p>
      </div>

      <div class="row m-0 business-card-row justify-content-center">
        <div class="col-4-5 p-0 d-flex align-items-center">
          <img src="./assets/images/business_images/business_twenty.jpeg" alt="Image of Stroud Engineering Services LTD" class="business-image">
        </div>
        <div class="col-7-5 d-flex flex-column justify-content-center">
          <p class="pl-2 m-0">🚪 Open Door</p>
          <p class="pl-2 m-0">🎤 Mock Interviews</p>
          <p class="pl-2 m-0">👥 Assemblies</p>
          <p class="pl-2 m-0">👨‍🏫 Lesson Support</p>
          <p class="pl-2 m-0">❓ Guess Who Sessions</p>
          <p class="pl-2 m-0">👨‍🔧 STEM Ambassador</p>
          <p class="pl-2 m-0">📣 Guest Speaker</p>
          <p class="pl-2 m-0">📋 Mentoring</p>
          <p class="pl-2 m-0">📝 Projects</p>
        </div>
      </div>
      <div class="row m-0 mt-2 business-card-row justify-content-center">
        <div class="col-8 text-center">
          <a href="https://www.stroudengineeringservices.com" target="_blank">Visit company website</a>
        </div>
      </div>
      
      `,
      title: 'Stroud Engineering Services LTD',
      card: false
    });
    businesses.push(business_twenty);
    let business_twenty_one = new google.maps.Marker( {
      position: {lat: 51.16463, lng: -2.98869},
      map: map,
      icon: icons,
      content: `
      
      <div class="row m-0 business-card-row">
        <p class="mb-2 w-100 text-center"><strong>M-CNC Precision Engineering Ltd</strong></p>
      </div>

      <div class="row m-0 business-card-row justify-content-center">
        <div class="col-4-5 p-0 d-flex align-items-center">
          <img src="./assets/images/business_images/business_twenty_one.jpeg" alt="Image of M-CNC Precision Engineering Ltd" class="business-image">
        </div>
        <div class="col-7-5 d-flex flex-column justify-content-center">
          <p class="pl-2 m-0">🚪 Open Door</p>
          <p class="pl-2 m-0">📇 Careers Fair</p>
          <p class="pl-2 m-0">🎤 Mock Interviews</p>
          <p class="pl-2 m-0">🏭 Work Experience</p>
          <p class="pl-2 m-0">🛠 Work Placement/T Levels</p>
          <p class="pl-2 m-0">👥 Assemblies</p>
        </div>
      </div>
      <div class="row m-0 mt-2 business-card-row justify-content-center">
        <div class="col-8 text-center">
          <a href="https://www.m-cnc.co.uk/" target="_blank">Visit company website</a>
        </div>
      </div>
      
      `,
      title: 'M-CNC Precision Engineering Ltd',
      card: false
    });
    businesses.push(business_twenty_one);
    let business_twenty_two = new google.maps.Marker( {
      position: {lat: 56.08239, lng: -3.36645},
      map: map,
      icon: icons,
      content: `
      
      <div class="row m-0 business-card-row">
        <p class="mb-2 w-100 text-center"><strong>Steve Murphy Continuous Improvement Limited</strong></p>
      </div>

      <div class="row m-0 business-card-row justify-content-center">
        <div class="col-4-5 p-0 d-flex align-items-center">
          <img src="./assets/images/business_images/business_twenty_two.jpeg" alt="Image of Steve Murphy Continuous Improvement Limited" class="business-image">
        </div>
        <div class="col-7-5 d-flex flex-column justify-content-center">
          <p class="pl-2 m-0">👨‍🔧 STEM Ambassador</p>
          <p class="pl-2 m-0">📣 Guest Speaker</p>
          <p class="pl-2 m-0">📋 Mentoring</p>
        </div>
      </div>
      <div class="row m-0 mt-2 business-card-row justify-content-center">
        <div class="col-8 text-center">
          <a href="https://www.linkedin.com/company/steve-murphy/?originalSubdomain=uk" target="_blank">Visit company website</a>
        </div>
      </div>
      
      `,
      title: 'Steve Murphy Continuous Improvement Limited',
      card: false
    });
    businesses.push(business_twenty_two);
    let business_twenty_three = new google.maps.Marker( {
      position: {lat: 52.54499, lng: -2.03192},
      map: map,
      icon: icons,
      content: `
      
      <div class="row m-0 business-card-row">
        <p class="mb-2 w-100 text-center"><strong>MSC</strong></p>
      </div>

      <div class="row m-0 business-card-row justify-content-center">
        <div class="col-4-5 p-0 d-flex align-items-center">
          <img src="./assets/images/business_images/business_twenty_three.jpeg" alt="Image of MSC" class="business-image">
        </div>
        <div class="col-7-5 d-flex flex-column justify-content-center">
          <p class="pl-2 m-0">🚪 Open Door</p>
          <p class="pl-2 m-0">🎤 Mock Interviews</p>
          <p class="pl-2 m-0">🏭 Work Experience</p>
          <p class="pl-2 m-0">🛠 Work Placement/T Levels</p>
          <p class="pl-2 m-0">👥 Assemblies</p>
          <p class="pl-2 m-0">👨‍🏫 Lesson Support</p>
          <p class="pl-2 m-0">❓ Guess Who Sessions</p>
          <p class="pl-2 m-0">📈 Taster Workshops</p>
          <p class="pl-2 m-0">👨‍🔧 STEM Ambassador</p>
          <p class="pl-2 m-0">👩‍💻 Apprentice Ambassador</p>
          <p class="pl-2 m-0">📣 Guest Speaker</p>
          <p class="pl-2 m-0">📋 Mentoring</p>
          <p class="pl-2 m-0">📝 Projects</p>
        </div>
      </div>
      <div class="row m-0 mt-2 business-card-row justify-content-center">
        <div class="col-8 text-center">
          <a href="https://www.mscdirect.co.uk/" target="_blank">Visit company website</a>
        </div>
      </div>
      
      `,
      title: 'MSC',
      card: false
    });
    businesses.push(business_twenty_three);
    let business_twenty_four = new google.maps.Marker( {
      position: {lat: 52.72598, lng: -2.01515},
      map: map,
      icon: icons,
      content: `
      
      <div class="row m-0 business-card-row">
        <p class="mb-2 w-100 text-center"><strong>HQA</strong></p>
      </div>

      <div class="row m-0 business-card-row justify-content-center">
        <div class="col-4-5 p-0 d-flex align-items-center">
          <img src="./assets/images/business_images/business_twenty_four.jpg" alt="Image of HQA" class="business-image">
        </div>
        <div class="col-7-5 d-flex flex-column justify-content-center">
          <p class="pl-2 m-0">🚪 Open Door</p>
          <p class="pl-2 m-0">📣 Guest Speaker</p>
          <p class="pl-2 m-0">📋 Mentoring</p>
        </div>
      </div>
      <div class="row m-0 mt-2 business-card-row justify-content-center">
        <div class="col-8 text-center">
          <a href="https://www.facebook.com/hettyfred/" target="_blank">Visit company website</a>
        </div>
      </div>
      
      `,
      title: 'HQA',
      card: false
    });
    businesses.push(business_twenty_four);
    let business_twenty_five = new google.maps.Marker( {
      position: {lat: 52.62660, lng: -1.42164},
      map: map,
      icon: icons,
      content: `
      
      <div class="row m-0 business-card-row">
        <p class="mb-2 w-100 text-center"><strong>TCMUK Limited</strong></p>
      </div>

      <div class="row m-0 business-card-row justify-content-center">
        <div class="col-4-5 p-0 d-flex align-items-center">
          <img src="./assets/images/business_images/business_twenty_five.jpeg" alt="Image of TCMUK Limited" class="business-image">
        </div>
        <div class="col-7-5 d-flex flex-column justify-content-center">
          <p class="pl-2 m-0">📇 Careers Fair</p>
          <p class="pl-2 m-0">🎤 Mock Interviews</p>
          <p class="pl-2 m-0">📣 Guest Speaker</p>
          <p class="pl-2 m-0">📋 Mentoring</p>
        </div>
      </div>
      <div class="row m-0 mt-2 business-card-row justify-content-center">
        <div class="col-8 text-center">
          <a href="https://www.tcmuklimited.co.uk" target="_blank">Visit company website</a>
        </div>
      </div>
      
      `,
      title: 'TCMUK Limited',
      card: false
    });
    businesses.push(business_twenty_five);
    let business_twenty_six = new google.maps.Marker( {
      position: {lat: 52.47202, lng: -0.69620},
      map: map,
      icon: icons,
      content: `
      
      <div class="row m-0 business-card-row">
        <p class="mb-2 w-100 text-center"><strong>Simon Davey Consulting Ltd</strong></p>
      </div>

      <div class="row m-0 business-card-row justify-content-center">
        <div class="col-4-5 p-0 d-flex align-items-center">
          <img src="./assets/images/business_images/business_twenty_six.jpeg" alt="Image of Simon Davey Consulting Ltd" class="business-image">
        </div>
        <div class="col-7-5 d-flex flex-column justify-content-center">
          <p class="pl-2 m-0">👨‍🏫 Lesson Support</p>
          <p class="pl-2 m-0">📣 Guest Speaker</p>
          <p class="pl-2 m-0">📋 Mentoring</p>
        </div>
      </div>
      <div class="row m-0 mt-2 business-card-row justify-content-center">
        <div class="col-8 text-center">
          <a href="https://www.simondaveyconsulting.com/" target="_blank">Visit company website</a>
        </div>
      </div>
      
      `,
      title: 'Simon Davey Consulting Ltd',
      card: false
    });
    businesses.push(business_twenty_six);
    let business_twenty_seven = new google.maps.Marker( {
      position: {lat: 53.59401, lng: -1.64999},
      map: map,
      icon: icons,
      content: `
      
      <div class="row m-0 business-card-row">
        <p class="mb-2 w-100 text-center"><strong>Calderdale and Kirklees Manufacturing Alliance (CKMA)</strong></p>
      </div>

      <div class="row m-0 business-card-row justify-content-center">
        <div class="col-4-5 p-0 d-flex align-items-center">
          <img src="./assets/images/business_images/business_twenty_seven.png" alt="Image of Calderdale and Kirklees Manufacturing Alliance (CKMA)" class="business-image">
        </div>
        <div class="col-7-5 d-flex flex-column justify-content-center">
          <p class="pl-2 m-0">🚪 Open Door</p>
          <p class="pl-2 m-0">📇 Careers Fair</p>
          <p class="pl-2 m-0">🏭 Work Experience</p>
          <p class="pl-2 m-0">👩‍💻 Apprentice Ambassador</p>
          <p class="pl-2 m-0">📣 Guest Speaker</p>
        </div>
      </div>
      <div class="row m-0 mt-2 business-card-row justify-content-center">
        <div class="col-8 text-center">
          <a href="https://www.ckma.co.uk" target="_blank">Visit company website</a>
        </div>
      </div>
      
      `,
      title: 'Calderdale and Kirklees Manufacturing Alliance (CKMA)',
      card: false
    });
    businesses.push(business_twenty_seven);
    let business_twenty_eight = new google.maps.Marker( {
      position: {lat: 53.69309, lng: -1.63331},
      map: map,
      icon: icons,
      content: `
      
      <div class="row m-0 business-card-row">
        <p class="mb-2 w-100 text-center"><strong>Liberty360 Ltd</strong></p>
      </div>

      <div class="row m-0 business-card-row justify-content-center">
        <div class="col-4-5 p-0 d-flex align-items-center">
          <img src="./assets/images/business_images/business_twenty_eight.jpeg" alt="Image of Liberty360 Ltd" class="business-image">
        </div>
        <div class="col-7-5 d-flex flex-column justify-content-center">
          <p class="pl-2 m-0">🚪 Open Door</p>
          <p class="pl-2 m-0">🏭 Work Experience</p>
          <p class="pl-2 m-0">🛠 Work Placement/T Levels</p>
          <p class="pl-2 m-0">📈 Taster Workshops</p>
          <p class="pl-2 m-0">📣 Guest Speaker</p>
          <p class="pl-2 m-0">📋 Mentoring</p>
          <p class="pl-2 m-0">📝 Projects</p>
        </div>
      </div>
      <div class="row m-0 mt-2 business-card-row justify-content-center">
        <div class="col-8 text-center">
          <a href="https://www.liberty360ltd.com/" target="_blank">Visit company website</a>
        </div>
      </div>
      
      `,
      title: 'Liberty360 Ltd',
      card: false
    });
    businesses.push(business_twenty_eight);
    let business_twenty_nine = new google.maps.Marker( {
      position: {lat: 53.69404, lng: -1.78636},
      map: map,
      icon: icons,
      content: `
      
      <div class="row m-0 business-card-row">
        <p class="mb-2 w-100 text-center"><strong>Pennine Pneumatic Services Ltd</strong></p>
      </div>

      <div class="row m-0 business-card-row justify-content-center">
        <div class="col-4-5 p-0 d-flex align-items-center">
          <img src="./assets/images/business_images/business_twenty_nine.webp" alt="Image of Pennine Pneumatic Services Ltd" class="business-image">
        </div>
        <div class="col-7-5 d-flex flex-column justify-content-center">
          <p class="pl-2 m-0">🚪 Open Door</p>
          <p class="pl-2 m-0">📇 Careers Fair</p>
          <p class="pl-2 m-0">🎤 Mock Interviews</p>
          <p class="pl-2 m-0">🏭 Work Experience</p>
          <p class="pl-2 m-0">🛠 Work Placement/T Levels</p>
          <p class="pl-2 m-0">👥 Assemblies</p>
          <p class="pl-2 m-0">👨‍🏫 Lesson Support</p>
          <p class="pl-2 m-0">❓ Guess Who Sessions</p>
          <p class="pl-2 m-0">📈 Taster Workshops</p>
          <p class="pl-2 m-0">👩‍💻 Apprentice Ambassador</p>
          <p class="pl-2 m-0">📣 Guest Speaker</p>
          <p class="pl-2 m-0">📋 Mentoring</p>
          <p class="pl-2 m-0">📝 Projects</p>
        </div>
      </div>
      <div class="row m-0 mt-2 business-card-row justify-content-center">
        <div class="col-8 text-center">
          <a href="https://www.pps.co.com" target="_blank">Visit company website</a>
        </div>
      </div>
      
      `,
      title: 'Pennine Pneumatic Services Ltd',
      card: false
    });
    businesses.push(business_twenty_nine);
    let business_thirty = new google.maps.Marker( {
      position: {lat: 53.78753, lng: -2.27236},
      map: map,
      icon: icons,
      content: `
      
      <div class="row m-0 business-card-row">
        <p class="mb-2 w-100 text-center"><strong>EQUESTRIAN SURFACES LTD</strong></p>
      </div>

      <div class="row m-0 business-card-row justify-content-center">
        <div class="col-4-5 p-0 d-flex align-items-center">
          <img src="./assets/images/business_images/business_thirty.jpeg" alt="Image of EQUESTRIAN SURFACES LTD" class="business-image">
        </div>
        <div class="col-7-5 d-flex flex-column justify-content-center">
          <p class="pl-2 m-0">🚪 Open Door</p>
          <p class="pl-2 m-0">🏭 Work Experience</p>
          <p class="pl-2 m-0">🛠 Work Placement/T Levels</p>
          <p class="pl-2 m-0">👥 Assemblies</p>
          <p class="pl-2 m-0">📈 Taster Workshops</p>
          <p class="pl-2 m-0">👨‍🔧 STEM Ambassador</p>
          <p class="pl-2 m-0">👩‍💻 Apprentice Ambassador</p>
          <p class="pl-2 m-0">📣 Guest Speaker</p>
          <p class="pl-2 m-0">📋 Mentoring</p>
          <p class="pl-2 m-0">📝 Projects</p>
        </div>
      </div>
      <div class="row m-0 mt-2 business-card-row justify-content-center">
        <div class="col-8 text-center">
          <a href="https://www.equestriansurfaces.co.uk" target="_blank">Visit company website</a>
        </div>
      </div>
      
      `,
      title: 'EQUESTRIAN SURFACES LTD',
      card: false
    });
    businesses.push(business_thirty);
    let business_thirty_one = new google.maps.Marker( {
      position: {lat: 52.25805, lng: 0.98844},
      map: map,
      icon: icons,
      content: `
      
      <div class="row m-0 business-card-row">
        <p class="mb-2 w-100 text-center"><strong>iDeas Design Consultants Ltd</strong></p>
      </div>

      <div class="row m-0 business-card-row justify-content-center">
        <div class="col-4-5 p-0 d-flex align-items-center">
          <img src="./assets/images/business_images/business_thirty_one.jpeg" alt="Image of iDeas Design Consultants Ltd" class="business-image">
        </div>
        <div class="col-7-5 d-flex flex-column justify-content-center">
          <p class="pl-2 m-0">🎤 Mock Interviews</p>
          <p class="pl-2 m-0">👥 Assemblies</p>
          <p class="pl-2 m-0">👨‍🏫 Lesson Support</p>
          <p class="pl-2 m-0">📣 Guest Speaker</p>
          <p class="pl-2 m-0">📋 Mentoring</p>
          <p class="pl-2 m-0">📝 Projects</p>
        </div>
      </div>
      <div class="row m-0 mt-2 business-card-row justify-content-center">
        <div class="col-8 text-center">
          <a href="https://www.ideas-dc.co.uk" target="_blank">Visit company website</a>
        </div>
      </div>
      
      `,
      title: 'iDeas Design Consultants Ltd',
      card: false
    });
    businesses.push(business_thirty_one);
    let business_thirty_two = new google.maps.Marker( {
      position: {lat: 53.72874, lng: -0.38634},
      map: map,
      icon: icons,
      content: `
      
      <div class="row m-0 business-card-row">
        <p class="mb-2 w-100 text-center"><strong>Atlas Leisure Homes</strong></p>
      </div>

      <div class="row m-0 business-card-row justify-content-center">
        <div class="col-4-5 p-0 d-flex align-items-center">
          <img src="./assets/images/business_images/business_thirty_two.webp" alt="Image of Atlas Leisure Homes" class="business-image">
        </div>
        <div class="col-7-5 d-flex flex-column justify-content-center">
          <p class="pl-2 m-0">🏭 Work Experience</p>
          <p class="pl-2 m-0">📈 Taster Workshops</p>
          <p class="pl-2 m-0">📣 Guest Speaker</p>
          <p class="pl-2 m-0">📋 Mentoring</p>
          <p class="pl-2 m-0">📝 Projects</p>
        </div>
      </div>
      <div class="row m-0 mt-2 business-card-row justify-content-center">
        <div class="col-8 text-center">
          <a href="https://www.atlasleisurehomes.co.uk" target="_blank">Visit company website</a>
        </div>
      </div>
      
      `,
      title: 'Atlas Leisure Homes',
      card: false
    });
    businesses.push(business_thirty_two);
    let business_thirty_three = new google.maps.Marker( {
      position: {lat: 50.83145, lng: -1.06465},
      map: map,
      icon: icons,
      content: `
      
      <div class="row m-0 business-card-row">
        <p class="mb-2 w-100 text-center"><strong>Excell Metal Spinning Ltd</strong></p>
      </div>

      <div class="row m-0 business-card-row justify-content-center">
        <div class="col-4-5 p-0 d-flex align-items-center">
          <img src="./assets/images/business_images/business_thirty_three.png" alt="Image of Excell Metal Spinning Ltd" class="business-image">
        </div>
        <div class="col-7-5 d-flex flex-column justify-content-center">
          <p class="pl-2 m-0">🏭 Work Experience</p>
          <p class="pl-2 m-0">🛠 Work Placement/T Levels</p>
        </div>
      </div>
      <div class="row m-0 mt-2 business-card-row justify-content-center">
        <div class="col-8 text-center">
          <a href="https://www.excellmetalspinning.com" target="_blank">Visit company website</a>
        </div>
      </div>
      
      `,
      title: 'Excell Metal Spinning Ltd',
      card: false
    });
    businesses.push(business_thirty_three);
    let business_thirty_four = new google.maps.Marker( {
      position: {lat: 52.37786, lng: -1.46409},
      map: map,
      icon: icons,
      content: `
      
      <div class="row m-0 business-card-row">
        <p class="mb-2 w-100 text-center"><strong>NCMT Ltd</strong></p>
      </div>

      <div class="row m-0 business-card-row justify-content-center">
        <div class="col-4-5 p-0 d-flex align-items-center">
          <img src="./assets/images/business_images/business_thirty_four.jpeg" alt="Image of NCMT Ltd" class="business-image">
        </div>
        <div class="col-7-5 d-flex flex-column justify-content-center">
          <p class="pl-2 m-0">🚪 Open Door</p>
          <p class="pl-2 m-0">📣 Guest Speaker</p>
        </div>
      </div>
      <div class="row m-0 mt-2 business-card-row justify-content-center">
        <div class="col-8 text-center">
          <a href="https://www.ncmt.co.uk" target="_blank">Visit company website</a>
        </div>
      </div>
      
      `,
      title: 'NCMT Ltd',
      card: false
    });
    businesses.push(business_thirty_four);
    let business_thirty_five = new google.maps.Marker( {
      position: {lat: 52.22027, lng: 0.86157},
      map: map,
      icon: icons,
      content: `
      
      <div class="row m-0 business-card-row">
        <p class="mb-2 w-100 text-center"><strong>Sara Penrose</strong></p>
      </div>

      <div class="row m-0 business-card-row justify-content-center">
        <div class="col-4-5 p-0 d-flex align-items-center">
          <img src="./assets/images/sara-penrose.jpeg" alt="Image of Sara Penrose" class="business-image">
        </div>
        <div class="col-7-5 d-flex flex-column justify-content-center">
          <p class="pl-2 m-0">🎤 Mock Interviews</p>
          <p class="pl-2 m-0">👥 Assemblies</p>
          <p class="pl-2 m-0">👨‍🏫 Lesson Support</p>
          <p class="pl-2 m-0">📈 Taster Workshops</p>
          <p class="pl-2 m-0">👨‍🔧 STEM Ambassador</p>
          <p class="pl-2 m-0">📣 Guest Speaker</p>
          <p class="pl-2 m-0">📋 Mentoring</p>
        </div>
      </div>
      <div class="row m-0 mt-2 business-card-row justify-content-center">
        <div class="col-8 text-center">
          <a href="https://sarapenrose.co.uk/" target="_blank">Visit company website</a>
        </div>
      </div>
      
      `,
      title: 'Sara Penrose',
      card: false
    });
    businesses.push(business_thirty_five);
    let business_thirty_six = new google.maps.Marker( {
      position: {lat: 53.38716, lng: -1.46444},
      map: map,
      icon: icons,
      content: `
      
      <div class="row m-0 business-card-row">
        <p class="mb-2 w-100 text-center"><strong>The Curve Consulting</strong></p>
      </div>

      <div class="row m-0 business-card-row justify-content-center">
        <div class="col-4-5 p-0 d-flex align-items-center">
          <img src="./assets/images/business_images/business_thirty_six.png" alt="Image of The Curve Consulting" class="business-image">
        </div>
        <div class="col-7-5 d-flex flex-column justify-content-center">
          <p class="pl-2 m-0">🏭 Work Experience</p>
          <p class="pl-2 m-0">📣 Guest Speaker</p>
        </div>
      </div>
      <div class="row m-0 mt-2 business-card-row justify-content-center">
        <div class="col-8 text-center">
          <a href="https://www.thecurve.io" target="_blank">Visit company website</a>
        </div>
      </div>
      
      `,
      title: 'The Curve Consulting',
      card: false
    });
    businesses.push(business_thirty_six);
    let business_thirty_seven = new google.maps.Marker( {
      position: {lat: 52.09795, lng: 0.27961},
      map: map,
      icon: icons,
      content: `
      
      <div class="row m-0 business-card-row">
        <p class="mb-2 w-100 text-center"><strong>Cambridge Micro Engineering Limited</strong></p>
      </div>

      <div class="row m-0 business-card-row justify-content-center">
        <div class="col-4-5 p-0 d-flex align-items-center">
          <img src="./assets/images/business_images/business_thirty_seven.jpeg" alt="Image of Cambridge Micro Engineering Limited" class="business-image">
        </div>
        <div class="col-7-5 d-flex flex-column justify-content-center">
          <p class="pl-2 m-0">👨‍🏫 Lesson Support</p>
          <p class="pl-2 m-0">📣 Guest Speaker</p>
          <p class="pl-2 m-0">📋 Mentoring</p>
        </div>
      </div>
      <div class="row m-0 mt-2 business-card-row justify-content-center">
        <div class="col-8 text-center">
          <a href="https://www.cme.co.uk" target="_blank">Visit company website</a>
        </div>
      </div>
      
      `,
      title: 'Cambridge Micro Engineering Limited',
      card: false
    });
    businesses.push(business_thirty_seven);
    let business_thirty_eight = new google.maps.Marker( {
      position: {lat: 52.45488, lng: -2.12014},
      map: map,
      icon: icons,
      content: `
      
      <div class="row m-0 business-card-row">
        <p class="mb-2 w-100 text-center"><strong>HCM Engineering</strong></p>
      </div>

      <div class="row m-0 business-card-row justify-content-center">
        <div class="col-4-5 p-0 d-flex align-items-center">
          <img src="./assets/images/business_images/business_thirty_eight.jpeg" alt="Image of HCM Engineering" class="business-image">
        </div>
        <div class="col-7-5 d-flex flex-column justify-content-center">
          <p class="pl-2 m-0">🚪 Open Door</p>
          <p class="pl-2 m-0">🏭 Work Experience</p>
          <p class="pl-2 m-0">🛠 Work Placement/T Levels</p>
        </div>
      </div>
      <div class="row m-0 mt-2 business-card-row justify-content-center">
        <div class="col-8 text-center">
          <a href="https://www.hcmeng.co.uk" target="_blank">Visit company website</a>
        </div>
      </div>
      
      `,
      title: 'HCM Engineering',
      card: false
    });
    businesses.push(business_thirty_eight);
    let business_thirty_nine = new google.maps.Marker( {
      position: {lat: 52.48994, lng: -1.88227},
      map: map,
      icon: icons,
      content: `
      
      <div class="row m-0 business-card-row">
        <p class="mb-2 w-100 text-center"><strong>Birmingham Case Makers Ltd</strong></p>
      </div>

      <div class="row m-0 business-card-row justify-content-center">
        <div class="col-4-5 p-0 d-flex align-items-center">
          <img src="./assets/images/business_images/business_thirty_nine.jpeg" alt="Image of Birmingham Case Makers Ltd" class="business-image">
        </div>
        <div class="col-7-5 d-flex flex-column justify-content-center">
          <p class="pl-2 m-0">🚪 Open Door</p>
          <p class="pl-2 m-0">📇 Careers Fair</p>
          <p class="pl-2 m-0">🎤 Mock Interviews</p>
          <p class="pl-2 m-0">🏭 Work Experience</p>
          <p class="pl-2 m-0">🛠 Work Placement/T Levels</p>
          <p class="pl-2 m-0">👥 Assemblies</p>
          <p class="pl-2 m-0">👨‍🏫 Lesson Support</p>
          <p class="pl-2 m-0">❓ Guess Who Sessions</p>
          <p class="pl-2 m-0">📈 Taster Workshops</p>
          <p class="pl-2 m-0">👨‍🔧 STEM Ambassador</p>
          <p class="pl-2 m-0">👩‍💻 Apprentice Ambassador</p>
          <p class="pl-2 m-0">📣 Guest Speaker</p>
          <p class="pl-2 m-0">📋 Mentoring</p>
          <p class="pl-2 m-0">📝 Projects</p>
        </div>
      </div>
      <div class="row m-0 mt-2 business-card-row justify-content-center">
        <div class="col-8 text-center">
          <a href="https://www.birminghamcasemakers.co.uk" target="_blank">Visit company website</a>
        </div>
      </div>
      
      `,
      title: 'Birmingham Case Makers Ltd',
      card: false
    });
    businesses.push(business_thirty_nine);
    let business_fourty = new google.maps.Marker( {
      position: {lat: 51.22806, lng: 0.63084},
      map: map,
      icon: icons,
      content: `
      
      <div class="row m-0 business-card-row">
        <p class="mb-2 w-100 text-center"><strong>Engineering Media</strong></p>
      </div>

      <div class="row m-0 business-card-row justify-content-center">
        <div class="col-4-5 p-0 d-flex align-items-center">
          <img src="./assets/images/business_images/business_fourty.jpeg" alt="Image of Engineering Media" class="business-image">
        </div>
        <div class="col-7-5 d-flex flex-column justify-content-center">
          <p class="pl-2 m-0">🎤 Mock Interviews</p>
          <p class="pl-2 m-0">👥 Assemblies</p>
          <p class="pl-2 m-0">👨‍🔧 STEM Ambassador</p>
          <p class="pl-2 m-0">📋 Mentoring</p>
        </div>
      </div>
      <div class="row m-0 mt-2 business-card-row justify-content-center">
        <div class="col-8 text-center">
          <a href="https://www.machineryandmanufacturing.com" target="_blank">Visit company website</a>
        </div>
      </div>
      
      `,
      title: 'Engineering Media',
      card: false
    });
    businesses.push(business_fourty);
    let business_fourty_one = new google.maps.Marker( {
      position: {lat: 51.06492, lng: 0.16597},
      map: map,
      icon: icons,
      content: `
      
      <div class="row m-0 business-card-row">
        <p class="mb-2 w-100 text-center"><strong>Arracan Group</strong></p>
      </div>

      <div class="row m-0 business-card-row justify-content-center">
        <div class="col-4-5 p-0 d-flex align-items-center">
          <img src="./assets/images/business_images/business_fourty_one.jpeg" alt="Image of Arracan Group" class="business-image">
        </div>
        <div class="col-7-5 d-flex flex-column justify-content-center">
          <p class="pl-2 m-0">🎤 Mock Interviews</p>
        </div>
      </div>
      <div class="row m-0 mt-2 business-card-row justify-content-center">
        <div class="col-8 text-center">
          <a href="https://WWW.arracangroup.co.uk" target="_blank">Visit company website</a>
        </div>
      </div>

      `,
      title: 'Arracan Group',
      card: false
    });
    businesses.push(business_fourty_one);
    let business_fourty_two = new google.maps.Marker( {
      position: {lat: 51.44959, lng: -2.59710},
      map: map,
      icon: icons,
      content: `
      
      <div class="row m-0 business-card-row">
        <p class="mb-2 w-100 text-center"><strong>My Future My Choice</strong></p>
      </div>

      <div class="row m-0 business-card-row justify-content-center">
        <div class="col-4-5 p-0 d-flex align-items-center">
          <img src="./assets/images/business_images/business_fourty_two.jpeg" alt="Image of My Future My Choice" class="business-image">
        </div>
        <div class="col-7-5 d-flex flex-column justify-content-center">
          <p class="pl-2 m-0">📇 Careers Fair</p>
          <p class="pl-2 m-0">🎤 Mock Interviews</p>
          <p class="pl-2 m-0">👥 Assemblies</p>
          <p class="pl-2 m-0">👨‍🏫 Lesson Support</p>
          <p class="pl-2 m-0">📈 Taster Workshops</p>
          <p class="pl-2 m-0">👨‍🔧 STEM Ambassador</p>
          <p class="pl-2 m-0">👩‍💻 Apprentice Ambassador</p>
          <p class="pl-2 m-0">📣 Guest Speaker</p>
          <p class="pl-2 m-0">📋 Mentoring</p>
          <p class="pl-2 m-0">📝 Projects</p>
        </div>
      </div>
      <div class="row m-0 mt-2 business-card-row justify-content-center">
        <div class="col-8 text-center">
          <a href="https://myfuturemychoice.co.uk/" target="_blank">Visit company website</a>
        </div>
      </div>
      
      `,
      title: 'My Future My Choice',
      card: false
    });
    businesses.push(business_fourty_two);
    let business_fourty_three = new google.maps.Marker( {
      position: {lat: 51.50867, lng: -3.13222},
      map: map,
      icon: icons,
      content: `
      
      <div class="row m-0 business-card-row">
        <p class="mb-2 w-100 text-center"><strong>Kumon Rumney Study Centre</strong></p>
      </div>

      <div class="row m-0 business-card-row justify-content-center">
        <div class="col-4-5 p-0 d-flex align-items-center">
          <img src="./assets/images/business_images/business_fourty_three.jpeg" alt="Image of Kumon Rumney Study Centre" class="business-image">
        </div>
        <div class="col-7-5 d-flex flex-column justify-content-center">
          <p class="pl-2 m-0">🚪 Open Door</p>
          <p class="pl-2 m-0">📇 Careers Fair</p>
          <p class="pl-2 m-0">🏭 Work Experience</p>
          <p class="pl-2 m-0">🛠 Work Placement/T Levels</p>
          <p class="pl-2 m-0">👨‍🏫 Lesson Support</p>
          <p class="pl-2 m-0">📈 Taster Workshops</p>
          <p class="pl-2 m-0">📣 Guest Speaker</p>
        </div>
      </div>
      <div class="row m-0 mt-2 business-card-row justify-content-center">
        <div class="col-8 text-center">
          <a href="https://www.kumon.co.uk/cardiff-rumney" target="_blank">Visit company website</a>
        </div>
      </div>
      
      `,
      title: 'Kumon Rumney Study Centre',
      card: false
    });
    businesses.push(business_fourty_three);
    let business_fourty_four = new google.maps.Marker( {
      position: {lat: 52.17488, lng: -0.65834},
      map: map,
      icon: icons,
      content: `
      
      <div class="row m-0 business-card-row">
        <p class="mb-2 w-100 text-center"><strong>Blue Switch Marketing Ltd</strong></p>
      </div>

      <div class="row m-0 business-card-row justify-content-center">
        <div class="col-4-5 p-0 d-flex align-items-center">
          <img src="./assets/images/business_images/business_fourty_four.jpeg" alt="Image of Blue Switch Marketing Ltd" class="business-image">
        </div>
        <div class="col-7-5 d-flex flex-column justify-content-center">
          <p class="pl-2 m-0">🎤 Mock Interviews</p>
          <p class="pl-2 m-0">❓ Guess Who Sessions</p>
          <p class="pl-2 m-0">📈 Taster Workshops</p>
          <p class="pl-2 m-0">📋 Mentoring</p>
          <p class="pl-2 m-0">📝 Projects</p>
        </div>
      </div>
      <div class="row m-0 mt-2 business-card-row justify-content-center">
        <div class="col-8 text-center">
          <a href="https://www.itseeze-northampton.co.uk/" target="_blank">Visit company website</a>
        </div>
      </div>
      
      `,
      title: 'Blue Switch Marketing Ltd',
      card: false
    });
    businesses.push(business_fourty_four);
    let business_fourty_five = new google.maps.Marker( {
      position: {lat: 51.51107, lng: -0.08423},
      map: map,
      icon: icons,
      content: `
      
      <div class="row m-0 business-card-row">
        <p class="mb-2 w-100 text-center"><strong>Boyden</strong></p>
      </div>

      <div class="row m-0 business-card-row justify-content-center">
        <div class="col-4-5 p-0 d-flex align-items-center">
          <img src="./assets/images/business_images/business_fourty_five.jpeg" alt="Image of Boyden" class="business-image">
        </div>
        <div class="col-7-5 d-flex flex-column justify-content-center">
          <p class="pl-2 m-0">🎤 Mock Interviews</p>
          <p class="pl-2 m-0">📣 Guest Speaker</p>
          <p class="pl-2 m-0">📋 Mentoring</p>
        </div>
      </div>
      <div class="row m-0 mt-2 business-card-row justify-content-center">
        <div class="col-8 text-center">
          <a href="https://www.boyden.com/claire-lauder/index.html#subnav" target="_blank">Visit company website</a>
        </div>
      </div>
      
      `,
      title: 'Boyden',
      card: false
    });
    businesses.push(business_fourty_five);
    let business_fourty_six = new google.maps.Marker( {
      position: {lat: 52.62400, lng: -1.09281},
      map: map,
      icon: icons,
      content: `
      
      <div class="row m-0 business-card-row">
        <p class="mb-2 w-100 text-center"><strong>Axiom Energy</strong></p>
      </div>

      <div class="row m-0 business-card-row justify-content-center">
        <div class="col-4-5 p-0 d-flex align-items-center">
          <img src="./assets/images/business_images/business_fourty_six.jpeg" alt="Image of Axiom Energy" class="business-image">
        </div>
        <div class="col-7-5 d-flex flex-column justify-content-center">
          <p class="pl-2 m-0">📇 Careers Fair</p>
          <p class="pl-2 m-0">🎤 Mock Interviews</p>
          <p class="pl-2 m-0">🏭 Work Experience</p>
          <p class="pl-2 m-0">🛠 Work Placement/T Levels</p>
          <p class="pl-2 m-0">👥 Assemblies</p>
          <p class="pl-2 m-0">👨‍🏫 Lesson Support</p>
          <p class="pl-2 m-0">❓ Guess Who Sessions</p>
          <p class="pl-2 m-0">📈 Taster Workshops</p>
          <p class="pl-2 m-0">📣 Guest Speaker</p>
          <p class="pl-2 m-0">📋 Mentoring</p>
          <p class="pl-2 m-0">📝 Projects</p>
        </div>
      </div>
      <div class="row m-0 mt-2 business-card-row justify-content-center">
        <div class="col-8 text-center">
          <a href="https://www.axiom-energy.co.uk" target="_blank">Visit company website</a>
        </div>
      </div>
      
      `,
      title: 'Axiom Energy',
      card: false
    });
    businesses.push(business_fourty_six);
    let business_fourty_seven = new google.maps.Marker( {
      position: {lat: 55.09220, lng: -1.58365},
      map: map,
      icon: icons,
      content: `
      
      <div class="row m-0 business-card-row">
        <p class="mb-2 w-100 text-center"><strong>Mcleod Consultancy Services Limited</strong></p>
      </div>

      <div class="row m-0 business-card-row justify-content-center">
        <div class="col-4-5 p-0 d-flex align-items-center">
          <img src="#" alt="Image of Mcleod Consultancy Services Limited" class="business-image">
        </div>
        <div class="col-7-5 d-flex flex-column justify-content-center">
          <p class="pl-2 m-0">🎤 Mock Interviews</p>
          <p class="pl-2 m-0">👨‍🏫 Lesson Support</p>
          <p class="pl-2 m-0">📋 Mentoring</p>
          <p class="pl-2 m-0">📝 Projects</p>
        </div>
      </div>
      
      `,
      title: 'Mcleod Consultancy Services Limited',
      card: false
    });
    businesses.push(business_fourty_seven);
    // ABOVE HAS NO IMAGE
    let business_fourty_eight = new google.maps.Marker( {
      position: {lat: 52.95589, lng: -0.03724},
      map: map,
      icon: icons,
      content: `
      
      <div class="row m-0 business-card-row">
        <p class="mb-2 w-100 text-center"><strong>CVG Solutions Ltd</strong></p>
      </div>

      <div class="row m-0 business-card-row justify-content-center">
        <div class="col-4-5 p-0 d-flex align-items-center">
          <img src="./assets/images/business_images/business_fourty_eight.png" alt="Image of CVG Solutions Ltd" class="business-image">
        </div>
        <div class="col-7-5 d-flex flex-column justify-content-center">
          <p class="pl-2 m-0">🏭 Work Experience</p>
          <p class="pl-2 m-0">📈 Taster Workshops</p>
          <p class="pl-2 m-0">📣 Guest Speaker</p>
          <p class="pl-2 m-0">📋 Mentoring</p>
        </div>
      </div>
      <div class="row m-0 mt-2 business-card-row justify-content-center">
        <div class="col-8 text-center">
          <a href="https://cvgsolutions.co.uk/" target="_blank">Visit company website</a>
        </div>
      </div>
      
      `,
      title: 'CVG Solutions Ltd',
      card: false
    });
    businesses.push(business_fourty_eight);
    let business_fourty_nine = new google.maps.Marker( {
      position: {lat: 51.60444, lng: 0.08759},
      map: map,
      icon: icons,
      content: `
      
      <div class="row m-0 business-card-row">
        <p class="mb-2 w-100 text-center"><strong>MindShaping Coaching</strong></p>
      </div>

      <div class="row m-0 business-card-row justify-content-center">
        <div class="col-4-5 p-0 d-flex align-items-center">
          <img src="./assets/images/business_images/business_fourty_nine.jpeg" alt="Image of MindShaping Coaching" class="business-image">
        </div>
        <div class="col-7-5 d-flex flex-column justify-content-center">
          <p class="pl-2 m-0">🚪 Open Door</p>
          <p class="pl-2 m-0">📇 Careers Fair</p>
          <p class="pl-2 m-0">🎤 Mock Interviews</p>
          <p class="pl-2 m-0">👥 Assemblies</p>
          <p class="pl-2 m-0">👨‍🏫 Lesson Support</p>
          <p class="pl-2 m-0">❓ Guess Who Sessions</p>
          <p class="pl-2 m-0">📈 Taster Workshops</p>
          <p class="pl-2 m-0">📣 Guest Speaker</p>
          <p class="pl-2 m-0">📋 Mentoring</p>
        </div>
      </div>
      
      `,
      title: 'MindShaping Coaching',
      card: false
    });
    businesses.push(business_fourty_nine);
    let business_fifty = new google.maps.Marker( {
      position: {lat: 51.19891, lng: 0.06159},
      map: map,
      icon: icons,
      content: `
      
      <div class="row m-0 business-card-row">
        <p class="mb-2 w-100 text-center"><strong>Charles Whitaker Changes</strong></p>
      </div>

      <div class="row m-0 business-card-row justify-content-center">
        <div class="col-4-5 p-0 d-flex align-items-center">
          <img src="./assets/images/business_images/business_fifty.png" alt="Image of Charles Whitaker Changes" class="business-image">
        </div>
        <div class="col-7-5 d-flex flex-column justify-content-center">
          <p class="pl-2 m-0">📣 Guest Speaker</p>
          <p class="pl-2 m-0">📋 Mentoring</p>
        </div>
      </div>
      <div class="row m-0 mt-2 business-card-row justify-content-center">
        <div class="col-8 text-center">
          <a href="https://cwchanges.com/#:~:text=Charles%20Whitaker%20Changes&text=At%20Charles%20Whitaker%20Changes%2C%20our,all%20levels%20within%20your%20organisation." target="_blank">Visit company website</a>
        </div>
      </div>

      `,
      title: 'Charles Whitaker Changes',
      card: false
    });
    businesses.push(business_fifty);
    let business_fifty_one = new google.maps.Marker( {
      position: {lat: 52.39328, lng: -1.99104},
      map: map,
      icon: icons,
      content: `
      
      <div class="row m-0 business-card-row">
        <p class="mb-2 w-100 text-center"><strong>ACCOUNTICO LTD</strong></p>
      </div>

      <div class="row m-0 business-card-row justify-content-center">
        <div class="col-4-5 p-0 d-flex align-items-center">
          <img src="./assets/images/business_images/business_fifty_one.png" alt="Image of ACCOUNTICO LTD" class="business-image">
        </div>
        <div class="col-7-5 d-flex flex-column justify-content-center">
          <p class="pl-2 m-0">📇 Careers Fair</p>
          <p class="pl-2 m-0">🎤 Mock Interviews</p>
          <p class="pl-2 m-0">🏭 Work Experience</p>
          <p class="pl-2 m-0">🛠 Work Placement/T Levels</p>
          <p class="pl-2 m-0">📈 Taster Workshops</p>
          <p class="pl-2 m-0">📣 Guest Speaker</p>
          <p class="pl-2 m-0">📋 Mentoring</p>
          <p class="pl-2 m-0">📝 Projects</p>
        </div>
      </div>
      <div class="row m-0 mt-2 business-card-row justify-content-center">
        <div class="col-8 text-center">
          <a href="https://accountico.co.uk" target="_blank">Visit company website</a>
        </div>
      </div>
      
      `,
      title: 'ACCOUNTICO LTD',
      card: false
    });
    businesses.push(business_fifty_one);
    let business_fifty_two = new google.maps.Marker( {
      position: {lat: 52.54835, lng: -1.85160},
      map: map,
      icon: icons,
      content: `
      
      <div class="row m-0 business-card-row">
        <p class="mb-2 w-100 text-center"><strong>Hexagon FM</strong></p>
      </div>

      <div class="row m-0 business-card-row justify-content-center">
        <div class="col-4-5 p-0 d-flex align-items-center">
          <img src="./assets/images/business_images/business_fifty_two.png" alt="Image of Hexagon FM" class="business-image">
        </div>
        <div class="col-7-5 d-flex flex-column justify-content-center">
          <p class="pl-2 m-0">📇 Careers Fair</p>
          <p class="pl-2 m-0">👥 Assemblies</p>
          <p class="pl-2 m-0">👨‍🔧 STEM Ambassador</p>
          <p class="pl-2 m-0">📣 Guest Speaker</p>
          <p class="pl-2 m-0">📋 Mentoring</p>
        </div>
      </div>
      <div class="row m-0 mt-2 business-card-row justify-content-center">
        <div class="col-8 text-center">
          <a href="https://www.hexagon-group.co.uk" target="_blank">Visit company website</a>
        </div>
      </div>
      
      `,
      title: 'Hexagon FM',
      card: false
    });
    businesses.push(business_fifty_two);
    let business_fifty_three = new google.maps.Marker( {
      position: {lat: 50.72133, lng: -1.87797},
      map: map,
      icon: icons,
      content: `
      
      <div class="row m-0 business-card-row">
        <p class="mb-2 w-100 text-center"><strong>Smart Quality Services</strong></p>
      </div>

      <div class="row m-0 business-card-row justify-content-center">
        <div class="col-4-5 p-0 d-flex align-items-center">
          <img src="./assets/images/business_images/business_fifty_three.jpeg" alt="Image of Smart Quality Services" class="business-image">
        </div>
        <div class="col-7-5 d-flex flex-column justify-content-center">
          <p class="pl-2 m-0">🎤 Mock Interviews</p>
          <p class="pl-2 m-0">📣 Guest Speaker</p>
          <p class="pl-2 m-0">📋 Mentoring</p>
        </div>
      </div>
      <div class="row m-0 mt-2 business-card-row justify-content-center">
        <div class="col-8 text-center">
          <a href="https://www.smartquality.co.uk" target="_blank">Visit company website</a>
        </div>
      </div>
      
      `,
      title: 'Smart Quality Services',
      card: false
    });
    businesses.push(business_fifty_three);
    let business_fifty_four = new google.maps.Marker( {
      position: {lat: 54.04553, lng: -2.89335},
      map: map,
      icon: icons,
      content: `
      
      <div class="row m-0 business-card-row">
        <p class="mb-2 w-100 text-center"><strong>The Sales Lady</strong></p>
      </div>

      <div class="row m-0 business-card-row justify-content-center">
        <div class="col-4-5 p-0 d-flex align-items-center">
          <img src="./assets/images/business_images/business_fifty_four.jpeg" alt="Image of The Sales Lady" class="business-image">
        </div>
        <div class="col-7-5 d-flex flex-column justify-content-center">
          <p class="pl-2 m-0">🚪 Open Door</p>
          <p class="pl-2 m-0">📇 Careers Fair</p>
          <p class="pl-2 m-0">🎤 Mock Interviews</p>
          <p class="pl-2 m-0">👥 Assemblies</p>
          <p class="pl-2 m-0">👨‍🔧 STEM Ambassador</p>
          <p class="pl-2 m-0">📣 Guest Speaker</p>
          <p class="pl-2 m-0">📋 Mentoring</p>
        </div>
      </div>
      <div class="row m-0 mt-2 business-card-row justify-content-center">
        <div class="col-8 text-center">
          <a href="https://www.helentebay.com/" target="_blank">Visit company website</a>
        </div>
      </div>
      
      `,
      title: 'The Sales Lady',
      card: false
    });
    businesses.push(business_fifty_four);
    let business_fifty_five = new google.maps.Marker( {
      position: {lat: 53.40975, lng: -2.16424},
      map: map,
      icon: icons,
      content: `
      
      <div class="row m-0 business-card-row">
        <p class="mb-2 w-100 text-center"><strong>F1rst Commercial Recruitment</strong></p>
      </div>

      <div class="row m-0 business-card-row justify-content-center">
        <div class="col-4-5 p-0 d-flex align-items-center">
          <img src="./assets/images/business_images/business_fifty_five.jpeg" alt="Image of F1rst Commercial Recruitment" class="business-image">
        </div>
        <div class="col-7-5 d-flex flex-column justify-content-center">
          <p class="pl-2 m-0">🎤 Mock Interviews</p>
          <p class="pl-2 m-0">👨‍🏫 Lesson Support</p>
          <p class="pl-2 m-0">👥 Assemblies</p>
          <p class="pl-2 m-0">❓ Guess Who Sessions</p>
          <p class="pl-2 m-0">📣 Guest Speaker</p>
          <p class="pl-2 m-0">📋 Mentoring</p>
        </div>
      </div>
      <div class="row m-0 mt-2 business-card-row justify-content-center">
        <div class="col-8 text-center">
          <a href="https://www.F1rstCommercialRecruitment.co.uk" target="_blank">Visit company website</a>
        </div>
      </div>
      
      `,
      title: 'F1rst Commercial Recruitment',
      card: false
    });
    businesses.push(business_fifty_five);
    let business_fifty_six = new google.maps.Marker( {
      position: {lat: 52.26199, lng: -0.78761},
      map: map,
      icon: icons,
      content: `
      
      <div class="row m-0 business-card-row">
        <p class="mb-2 w-100 text-center"><strong>East Midlands HR Ltd</strong></p>
      </div>

      <div class="row m-0 business-card-row justify-content-center">
        <div class="col-4-5 p-0 d-flex align-items-center">
          <img src="./assets/images/business_images/business_fifty_six.jpeg" alt="Image of East Midlands HR Ltd" class="business-image">
        </div>
        <div class="col-7-5 d-flex flex-column justify-content-center">
          <p class="pl-2 m-0">🎤 Mock Interviews</p>
          <p class="pl-2 m-0">📝 Projects</p>
        </div>
      </div>
      <div class="row m-0 mt-2 business-card-row justify-content-center">
        <div class="col-8 text-center">
          <a href="https://www.eastmidlandshr.com" target="_blank">Visit company website</a>
        </div>
      </div>
      
      `,
      title: 'East Midlands HR Ltd',
      card: false
    });
    businesses.push(business_fifty_six);

    function setWindows(business) {
      let infoWindow = new google.maps.InfoWindow({
        content: business.content,
        ariaLabel: business.ariaLabel,
        company: business
      });
      return infoWindow
    }

    let windows = [];

    for (let business of businesses) {
      business.addListener('mouseover', function() {
        business.setIcon(largerIcon);
      });
      business.addListener('mouseout', function() {
        business.setIcon(icons);
      });
      let currentCard = setWindows(business);
      windows.push(currentCard);
      business.addListener("click", () => {
        if (business.card == false){
          // This closes all the other infoWindows
          for (let i = 0; i < windows.length; i++) {
            if (windows[i] != currentCard) {
              windows[i].close();
              // Sets these business.card(s) to false
              windows[i].company.card = false;
            }
          }
          // This opens the current business's window
          currentCard.open({
            anchor: business,
            map,
          });
          // Setting business.card to true
          business.card = true;
        } else {
          // This card was open, clicking it closes it
          currentCard.close();
          // And sets business.card to false
          business.card = false;
        }
      });
    }
  }