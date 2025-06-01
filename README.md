<a name="readme-top"></a>

<!-- ABOUT THE PROJECT -->
## About The Project

<div align="center"> <img src="src/assets/screenshot.png" alt="LDR Project Screenshot" width="600" /> </div>

Nick’s Long-Distance Relationship Hub is a React single-page application built to help partners maintain closeness while apart. The app combines:

* Dual Time Zone Clocks & Slider — Live clocks for X location and X location , plus a slider to convert times every 5 minutes.

* Word of the Day — Fetches from Supabase based on user's location midnight - designed to help my gf learn Vietnamese.

* Photo Gallery — Responsive “favorite photo of the month,” with fluid resizing on all devices.

* Inline Message Inbox — Lists messages; click a title to expand it inline, with read/unread tracked via localStorage.

* Countdown Timer — Real-time countdown until the next event, recalculated every second in user's time.

* All sections share a cohesive design with responsive breakpoints at 1200 px, 1024 px, 768 px, 600 px, 480 px, and 360 px to ensure no overflow on any screen size.

<p align="right">(<a href="#readme-top">back to top</a>)</p>



### Built With

* [![React][React.js]][React-url]
* [![Supabase][Supabase.js]][Supabase-url]

<p align="right">(<a href="#readme-top">back to top</a>)</p>

### Installation
1. Clone the repo
   ```sh
   git clone https://github.com/your_username/brown.git
   ```
2. Install & run NPM packages
   ```sh
   npm install
   npm run start
   ```
3. Set up environment variables - Create a .env.local file in the project root, then add:
   ```sh
    REACT_APP_SUPABASE_URL=https://<your-project-ref>.supabase.co
    REACT_APP_SUPABASE_ANON_KEY=eyJhbGci...<your-anon-key>...
   ```
4. Run in development mode
   ```sh
   npm start
   ```
    Open http://localhost:3000 to view in your browser. 
5. Build for production and deploy to GitHub
   ```sh
   npm run build
   npm run deploy
   ```
   
<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- LICENSE -->
## License

Distributed under the MIT License. See `LICENSE.txt` for more information.

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- CONTACT -->
## Contact

Your Name - [@your_twitter](https://twitter.com/your_username) - email@example.com

Project Link: [https://github.com/your_username/repo_name](https://github.com/your_username/repo_name)

<p align="right">(<a href="#readme-top">back to top</a>)</p>


<!-- MARKDOWN LINKS & IMAGES -->
<!-- https://www.markdownguide.org/basic-syntax/#reference-style-links -->
[React.js]: https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB
[React-url]: https://reactjs.org/
[Supabase.js]: https://img.shields.io/badge/Supabase-20232A?style=for-the-badge&logo=supabase&logoColor=3ECF8E
[Supabase-url]: https://supabase.com/