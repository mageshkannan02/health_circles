import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCamera, faPhone,faXmark,faCircleInfo } from "@fortawesome/free-solid-svg-icons";
import { faEnvelope } from "@fortawesome/free-regular-svg-icons";
import profilebackground from '../../assets/Mask Group 31.svg'
import "./doctor_profile.css";
import phone from '../../assets/Group 5552.svg'
import messege from '../../assets/Group 5551.svg'
import camera from '../../assets/icons8-camera.svg'
import infoicon from '../../assets/Component 71 – 1.svg'

const Doctor_profile = () => {
  return (
    <>
      <div className="profile-wrapper">
        <img className="proficpic"
          src="https://wac-cdn.atlassian.com/dam/jcr:ba03a215-2f45-40f5-8540-b2015223c918/Max-R_Headshot%20(1).jpg?cdnVersion=2312"
          alt=""
        />
        <div className="camera-wrapper camera" >
        <img src={camera} alt=""  />
        </div>
        
        <div className="info">
          <img src={messege} alt="" className="messege" />

          <p>
            <span>  Mail ID</span>
          
            <br />
            Kevinevans@gmail.com
          </p>
        </div>

        <div className="info">
           <img src={phone} alt="" className="mobile" />

          <p>
            <span>Mobile No.</span>
            
            <br />
            +91 9840426348
          </p>
        </div>
        <div className="gmail">
          <div className="google-gmail">
            <img  src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAzFBMVEX///8eiOVMr1D7wC0VZcDlOTUAguSPuu8IhOSqz/R1rOyQv/CJxotGrUpBq0W33bj80nr7viP946wAXL0AgOTf7vulwOTO4vgZb8sTY8Ioe6dOskg/tFFxgaP/xB78xS3FYD3qZzTkJR/4z84AWbzp8/yexvH2+f1MhMxDmOgpcMR9o9fF3ve00/Vip+zX6foAe+PlLyq2zOkykeeNrdxSn+pCibuqx9mNyodDrzx7tO5sq+wyr0Wau+Z5k7nThFDq4tj/wQDAy9f85dYjjpInAAAEc0lEQVR4nO3dbXebNhyGcbFlshy36zbjOF4f1m3GlATjLIRtJd26rd//OxUsbIN46Fmnv2Sx+3rRc+xicn5BkTFgmzGEEEIIIYQQQgghhBBCCCGEEEIIIYQQQsjxwsV2SttVR/eL0JAvyFOfE7ead7S+uV2YAM4E98i7vuhsvnqgB2YGfL3CwviGeqiaAfYLCyItcGIGOCC8mJMO1J0wAxwSXqwop5vHcxDOb+mAgSHfsPDihm6yif2zEK7phunG1CAdFs7vyYQzQzPpp4RXZMLJmWxDCCGEEEIIIYQQQgghhBBCCCG0KhT6ul4NtLYljC719ev3Q/1mR8hnGn/S72+f9/f2mcaf1Myc8MnTL/r7GsLPD0J9QUgVhPqCkCoI9QUhVRDqC0KqIGwXbvMs9dJsEv+7K0RcEQYTzxflY4Tw0023McyjMuUCEkeEU6++PE+XHasMIr4/MOOkMFeuLxL+tLXGpZCrdFKYty++udsqK9wcfgkuCrdHoBDHh4ldfZHw8bSMe8LwODS9JE+EXw3GrLZIkJ62soPC6gIxnsnpJY7kbf80TmNRW5uDQjmN8vx4x+WeKJLD7eY1cg4KZ5nweWNQptIsb4RJc6J1UFi0nKVx7aacevxqrkmqTejys4VasN9qvEJXMxHPpmI0wrAhZHG5EfmELf3RCOPGKC3f2CC8gjsiYbR/sF+7Iyv3xccjlO9Fqc+uwf7fsQh3iXyor+6Zui9czIry6PCkkLYWcF4Y33HOj/tnPG4t4LxwWd934Zu+BUYiPO2UthYYidATY9+GxVTaJjovLN8MVr7KOGzF1tEo54UsLItz3vd04b6wKkxaL/JloxEejr2JSLl7RMJq11u1jEkoX+SruzVjEgbyQI3yhOG2sHkuRr5PWiiLuSoMd9tZkjY310KOUuXkhavCyC9fUTTnTfkamCvP+a4KN+2/uerzGIRyGtFVoTx0WB+SO7mUeFTW6aqQVUcteCKPrQV59dA79dMCnBUG1aLCF0mepNW5p/qJDNeFPecPo9bJfHeFp/O7p4TX/kQLh4Vs6iuL8zRor9NlIdtFvPYALiZd63RaWPwxZlxeTCJ8L+/+zJXlXfG/3HdVWMyp20mSZZeb3muigs0+Zfw6JPzMIKQKQn1BSBWE+oKQKgj1BSFVEOoLQqr+50L1hMR/6sm7F/29oxP+sboe6M9v9PX+9VB/kQmv5gOfqbJ6+fe3unr141f9/fQzGfBTwldf6uqHASEl8CyEv1ACz0FICzwDIekQPQchNdC6kHiI2hfSAy0LyYeobaGBLWhXaARoU2hiiFoVGgLaE5oZohaFxoC2hKaGqDWhQaAdobkhakloFMjuzQtNDtGixdq00OwWZCy8MSw0DWTsdmCYEggND9Gyxcqk0AKQsYf+jahdaH6I7nvTS9QttARkYS9Rs9DKEJU9rLqNeoW2tuC+xe3NuuubXrWet7AJZOX3Ad93fF/vP9/p64NdIEIIIYQQQgghhBBCCCGEEEIIIYQQQgghRNVHLIwInhj7uo4AAAAASUVORK5CYII=" alt="" />
            <p>Kevinevans@gmail.com</p>
            <i><FontAwesomeIcon icon={faXmark} style={{color: "#F45560",}} /></i>
          </div>
        <img src={infoicon} alt="" className="calander-info" />
        </div>
        <p className="sync"><span>Last synced</span> 15 May 2023,06:00pm</p>
         <img src={profilebackground} alt="" className="bottompic" />
      </div>
    </>
  );
};

export default Doctor_profile;
