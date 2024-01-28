# Computer Items Management Dashboard Client Side

- Summary:

  It is a computer item management application Dashboard.Authentication is used here.Computer items can be posted here.  
  Items can be searched and filtered.Items can be updated and duplicates can be copied and multiple deleted if desired.User can enter the cell data if desired and it is shown in table form and chart form.

* Client side live link: https://computer-management-dashboard.firebaseapp.com/

* Server side live link: https://assignment-five-seven.vercel.app/

- Technology:

  - React
  - React-Router-dom
  - Redux

  * redux-persist

  - Tailwind
  - DaisyUI
  - Express Js
  - Mongoose
  - JWT
  - TypeScript

  * Zod
  * React-hook-form

* run:

  If one wants to run locally then first clone client site repository and server side repository then npm i command in your terminal.
  Give it by changing the base API on the client side http://localhost:5000 and Give it by changing the Cors url on the server side http://localhost:5173 .

  - add client env:

    - VITE_Image_Upload_token=8460cd1a14bf680b3bf68fe6e9950c8d

  - add server side env:

    - NODE_ENV= development

    - PORT=5000

    - BCRYPT=12

    - JWT_SECRET= 8ef0bdc0751d20168ab6eb8a9eaf5db09ba5095feccac899b0e201f5914b80f5

    * DATABASE_URL='mongodb+srv://assignment-five:AcLIBlebmhmbTcsL@cluster0.intyjny.mongodb.net/five-assignment?retryWrites=true&w=majority'

* Client side command: npm run dev
* server side command: npm run start:dev
