import React, { useState } from "react";

function Layout() {
  const [hide, setHide] = useState(false);
  const [showModal, setShowModal] = useState(false);
  console.log(showModal);
  return (
    <div>
      <aside style={{
        backgroundImage: 'url(https://i.pinimg.com/originals/f5/22/57/f522576bfc150fdb1410dee94aeee71a.png)',
        // backgroundRepeat:'no-repeat',
        backgroundSize: 'cover',
      }} className={`${hide ? "w-0" : "w-[30%]"}`}></aside>

      <main>
        <div
          className="main-top"
          style={{
            backgroundImage: 'url(https://upload.wikimedia.org/wikipedia/commons/thumb/3/3d/Aventador._%286675860749%29.jpg/1200px-Aventador._%286675860749%29.jpg)',
            // backgroundRepeat:'no-repeat',
            backgroundSize: 'cover',
            height: showModal ? "0" : "50%",
            width: hide ? "100%" : "70%",
          }}
        ></div>

        <div
          className="main-bottom"
          style={{
            backgroundImage: 'url(https://www.bmw-motorsport.com/content/dam/bmw/marketBMWSPORTS/bmw-motorsport_com/assets/bmw-m-motorsport/race-cars/bmw-m4-gt4-2023/bmw-m4-gt4-stage-teaser-01.jpg.asset.1655285283212.jpg)',
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
            width: hide ? "100%" : "70%",
            height: showModal ? "100%" : "50%",
            left: hide ? "0" : "30%",
          }}
        >
          <button onClick={() => setHide((p) => !p)}>hide</button>
          <button onClick={() => setShowModal((p) => !p)}>showModal</button>
        </div>
      </main>
    </div>
  );
}

export default Layout;
